import {
  DocSelectionRenderService
} from "./chunk-IGM2PDFK.js";
import {
  FBaseInitialable,
  FEnum,
  FUniver
} from "./chunk-VAYUBKAG.js";
import {
  CreateHeaderFooterCommand,
  DeleteDocumentSectionBreakCommand,
  InsertDocumentSectionBreakCommand,
  RichTextEditingMutation,
  SetSectionHeaderFooterLinkCommand,
  UpdateDocumentSectionCommand,
  createSectionColumnProperties,
  generateParagraphs,
  getTopLevelSectionBreaks
} from "./chunk-W2IE7XAE.js";
import {
  ColumnSeparatorType,
  ICommandService,
  IRenderManagerService,
  IResourceLoaderService,
  IUniverInstanceService,
  Inject,
  Injector,
  JSONX,
  RESTORE_INSERTED_PARAGRAPH_IDS,
  RedoCommand,
  SectionType,
  TextX,
  Tools,
  UndoCommand,
  createParagraphId,
  createSectionId,
  generateRandomId,
  getParagraphContentStartOffset,
  getRichTextEditPath,
  getSectionHeaderFooterReferenceKey,
  resolveSectionHeaderFooterReference
} from "./chunk-N4BCF5MH.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "./chunk-HECJ2TYE.js";

// ../packages/docs/src/facade/utils.ts
function cloneParagraphStyle(paragraphStyle) {
  return paragraphStyle == null ? paragraphStyle : JSON.parse(JSON.stringify(paragraphStyle));
}
function normalizePlainTextDataStream(dataStream) {
  return dataStream.replace(/\r\n/g, "\r").replace(/\n/g, "\r");
}
function getRemovedLeadingParagraphBreakLength(dataStream, removeLeadingParagraphBreak) {
  const normalized = normalizePlainTextDataStream(dataStream);
  if (removeLeadingParagraphBreak && normalized.length > 1 && normalized.startsWith("\r")) {
    return 1;
  }
  return 0;
}
function buildPlainTextInsertBody(dataStream, options = {}) {
  const normalizedDataStream = normalizePlainTextDataStream(dataStream).slice(
    getRemovedLeadingParagraphBreakLength(dataStream, options.removeLeadingParagraphBreak)
  );
  const body = {
    dataStream: normalizedDataStream,
    customDecorations: [],
    customRanges: [],
    textRuns: []
  };
  const paragraphs = [];
  const existingParagraphIds = /* @__PURE__ */ new Set();
  for (let index = 0; index < normalizedDataStream.length; index++) {
    if (normalizedDataStream[index] === "\r") {
      paragraphs.push({
        startIndex: index,
        paragraphId: createParagraphId(existingParagraphIds),
        ...options.paragraphStyle == null ? {} : { paragraphStyle: cloneParagraphStyle(options.paragraphStyle) }
      });
    }
  }
  if (paragraphs.length > 0) {
    body.paragraphs = paragraphs;
  }
  return body;
}
function replaceBodyRange(range, insertBody, docDataModel, injector) {
  const { startOffset, endOffset, segmentId } = range;
  const textX = new TextX();
  if (startOffset > 0) {
    textX.push({ t: "r" /* RETAIN */, len: startOffset });
  }
  if (endOffset > startOffset) {
    textX.push({ t: "d" /* DELETE */, len: endOffset - startOffset });
  }
  if (insertBody.dataStream.length > 0) {
    textX.push({
      t: "i" /* INSERT */,
      body: insertBody,
      len: insertBody.dataStream.length
    });
  }
  const jsonX = JSONX.getInstance();
  const actions = jsonX.editOp(textX.serialize(), getRichTextEditPath(docDataModel, segmentId));
  const commandService = injector.get(ICommandService);
  const result = commandService.syncExecuteCommand(
    RichTextEditingMutation.id,
    {
      unitId: docDataModel.getUnitId(),
      segmentId,
      actions,
      textRanges: [],
      isEditing: false
    }
  );
  return Boolean((result == null ? void 0 : result.actions) && result.actions.length > 0);
}
function retainBodyRange(range, updateBody, coverType, docDataModel, injector) {
  var _a, _b, _c;
  const { startOffset, endOffset, segmentId } = range;
  const commandService = injector.get(ICommandService);
  if (((_a = updateBody.textRuns) == null ? void 0 : _a.length) && ((_c = (_b = docDataModel.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _b.getBody()) == null ? void 0 : _c.textRuns) == null) {
    const jsonX2 = JSONX.getInstance();
    const actions2 = jsonX2.replaceOp(
      [...getRichTextEditPath(docDataModel, segmentId), "textRuns"],
      void 0,
      []
    );
    commandService.syncExecuteCommand(
      RichTextEditingMutation.id,
      {
        unitId: docDataModel.getUnitId(),
        segmentId,
        actions: actions2,
        textRanges: [],
        isEditing: false
      }
    );
  }
  const textX = new TextX();
  if (startOffset > 0) {
    textX.push({ t: "r" /* RETAIN */, len: startOffset });
  }
  textX.push({
    t: "r" /* RETAIN */,
    body: updateBody,
    coverType,
    len: endOffset - startOffset
  });
  const jsonX = JSONX.getInstance();
  const actions = jsonX.editOp(textX.serialize(), getRichTextEditPath(docDataModel, segmentId));
  const result = commandService.syncExecuteCommand(
    RichTextEditingMutation.id,
    {
      unitId: docDataModel.getUnitId(),
      segmentId,
      actions,
      textRanges: [],
      isEditing: false
    }
  );
  return Boolean((result == null ? void 0 : result.actions) && result.actions.length > 0);
}

// ../packages/docs/src/facade/f-document-text-range.ts
var FDocumentTextRange = class {
  constructor(_document, _startOffset, _endOffset, _segmentId, _injector) {
    __publicField(this, "_document", _document);
    __publicField(this, "_startOffset", _startOffset);
    __publicField(this, "_endOffset", _endOffset);
    __publicField(this, "_segmentId", _segmentId);
    __publicField(this, "_injector", _injector);
    this._validateRange();
  }
  /**
   * Returns the serializable document range.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const range = fDocument?.findParagraphByText('Launch')?.getTextRange();
   * console.log(range?.getRange());
   * ```
   */
  getRange() {
    return {
      startOffset: this._startOffset,
      endOffset: this._endOffset,
      segmentId: this._segmentId
    };
  }
  /**
   * Returns the plain data-stream text in this range.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const range = fDocument?.findParagraphByText('Launch')?.getTextRange();
   * console.log(range?.getText());
   * ```
   */
  getText() {
    return this._document.getBody(this._segmentId).dataStream.slice(this._startOffset, this._endOffset);
  }
  /**
   * Returns explicit text-style runs intersecting this range.
   * Returned offsets are clipped to the range and remain document-relative.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const range = fDocument?.findParagraphByText('Launch')?.getTextRange();
   * console.log(range?.getExplicitTextStyleRuns());
   * ```
   */
  getExplicitTextStyleRuns() {
    const { textRuns = [] } = this._document.getBody(this._segmentId);
    return textRuns.filter((run) => run.st < this._endOffset && run.ed > this._startOffset).map((run) => {
      var _a;
      return {
        startOffset: Math.max(run.st, this._startOffset),
        endOffset: Math.min(run.ed, this._endOffset),
        textStyle: Tools.deepClone((_a = run.ts) != null ? _a : {})
      };
    });
  }
  /** @deprecated Use `getExplicitTextStyleRuns()` to distinguish stored styles from effective styles. */
  getTextStyleRuns() {
    return this.getExplicitTextStyleRuns();
  }
  /**
   * Returns top-level style properties that have the same explicit value
   * across the complete range. Unstyled gaps make a property non-common.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const range = fDocument?.findParagraphByText('Launch')?.getTextRange();
   * console.log(range?.getCommonExplicitTextStyle());
   * ```
   */
  getCommonExplicitTextStyle() {
    if (this._startOffset === this._endOffset) {
      return {};
    }
    const runs = this._getStyleSegments();
    const [first, ...rest] = runs;
    const common = Tools.deepClone(first.textStyle);
    for (const key of Object.keys(common)) {
      if (rest.some((run) => !isDeepEqual(run.textStyle[key], common[key]))) {
        delete common[key];
      }
    }
    return common;
  }
  /** @deprecated Use `getCommonExplicitTextStyle()` to distinguish stored styles from effective styles. */
  getCommonTextStyle() {
    return this.getCommonExplicitTextStyle();
  }
  /**
   * Returns a serializable summary suitable for an agent/tool response.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const range = fDocument?.findParagraphByText('Launch')?.getTextRange();
   * console.log(range?.describe());
   * ```
   */
  describe() {
    const explicitTextStyleRuns = this.getExplicitTextStyleRuns();
    const commonExplicitTextStyle = this.getCommonExplicitTextStyle();
    return {
      ...this.getRange(),
      text: this.getText(),
      length: this._endOffset - this._startOffset,
      explicitTextStyleRuns,
      commonExplicitTextStyle,
      textStyleRuns: explicitTextStyleRuns,
      commonTextStyle: commonExplicitTextStyle
    };
  }
  /**
   * Merges a text-style patch into every character in the range.
   * Existing text-run splitting, merging, and normalization are handled by
   * the document mutation pipeline.
   * `style.fs` is a font size in points (pt), not CSS pixels.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const range = fDocument?.findParagraphByText('Launch')?.getTextRange();
   * range?.setTextStyle({ fs: 10.5, bl: univerAPI.Enum.BooleanNumber.TRUE });
   * ```
   */
  setTextStyle(style) {
    if (this._startOffset === this._endOffset) {
      return false;
    }
    return retainBodyRange(
      this.getRange(),
      {
        dataStream: "",
        textRuns: [{
          st: 0,
          ed: this._endOffset - this._startOffset,
          ts: Tools.deepClone(style)
        }]
      },
      0 /* COVER */,
      this._document.getDocumentDataModel(),
      this._injector
    );
  }
  /**
   * Replaces the range with plain text while preserving document mutation semantics.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const range = fDocument?.findParagraphByText('Draft')?.getTextRange();
   * range?.setText('Final');
   * ```
   */
  setText(text) {
    return replaceBodyRange(
      this.getRange(),
      buildPlainTextInsertBody(text),
      this._document.getDocumentDataModel(),
      this._injector
    );
  }
  _validateRange() {
    const bodyLength = this._document.getBody(this._segmentId).dataStream.length;
    if (!Number.isInteger(this._startOffset) || !Number.isInteger(this._endOffset) || this._startOffset < 0 || this._endOffset < this._startOffset || this._endOffset > bodyLength) {
      throw new RangeError(`Invalid document text range [${this._startOffset}, ${this._endOffset}) for body length ${bodyLength}.`);
    }
  }
  _getStyleSegments() {
    const explicitRuns = this.getExplicitTextStyleRuns();
    const segments = [];
    let offset = this._startOffset;
    for (const run of explicitRuns) {
      if (offset < run.startOffset) {
        segments.push({ startOffset: offset, endOffset: run.startOffset, textStyle: {} });
      }
      segments.push(run);
      offset = run.endOffset;
    }
    if (offset < this._endOffset) {
      segments.push({ startOffset: offset, endOffset: this._endOffset, textStyle: {} });
    }
    return segments;
  }
};
function isDeepEqual(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

// ../packages/docs/src/facade/f-document-paragraph.ts
var FDocumentParagraph = class {
  constructor(_document, _paragraphId, _segmentId = "", _injector) {
    __publicField(this, "_document", _document);
    __publicField(this, "_paragraphId", _paragraphId);
    __publicField(this, "_segmentId", _segmentId);
    __publicField(this, "_injector", _injector);
  }
  /**
   * Get the persisted paragraph id.
   * @returns {string} The paragraph id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getId());
   * ```
   */
  getId() {
    return this._paragraphId;
  }
  /**
   * Get the segment id of this paragraph.
   * The main body paragraphs have an empty string segment id.
   * The header and footer paragraphs have a non-empty string segment id.
   * @returns {string} The segment id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getSegmentId());
   * ```
   */
  getSegmentId() {
    return this._segmentId;
  }
  /**
   * Get this paragraph's metadata.
   * @returns {IFDocumentParagraphInfo} The paragraph info.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getInfo());
   * ```
   */
  getInfo() {
    const body = this._document.getBody(this._segmentId);
    const { paragraphs = [] } = body;
    const matches = paragraphs.map((paragraph2, paragraphIndex2) => ({ paragraph: paragraph2, paragraphIndex: paragraphIndex2 })).filter(({ paragraph: paragraph2 }) => paragraph2.paragraphId === this._paragraphId);
    if (matches.length === 0) {
      throw new Error(`Document paragraph with id ${this._paragraphId} not found`);
    }
    if (matches.length > 1) {
      throw new Error(`Multiple document paragraphs with id ${this._paragraphId} found`);
    }
    const { paragraph, paragraphIndex } = matches[0];
    const startOffset = getParagraphContentStartOffset(body, paragraph);
    return {
      paragraph,
      paragraphIndex,
      startOffset,
      endOffset: paragraph.startIndex
    };
  }
  /**
   * Get the current text range occupied by this paragraph.
   * @returns {IFDocumentTextRange} The paragraph text range, excluding the trailing paragraph break.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getRange());
   * ```
   */
  getRange() {
    const { startOffset, endOffset } = this.getInfo();
    return { startOffset, endOffset, segmentId: this._segmentId };
  }
  /**
   * Returns an agent-friendly facade for reading and styling this paragraph's text.
   * @returns {FDocumentTextRange} The paragraph text range, excluding the trailing paragraph break.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument?.findParagraphByText('Launch');
   * const range = paragraph?.getTextRange();
   * console.log(range?.describe());
   * ```
   */
  getTextRange() {
    const { startOffset, endOffset } = this.getInfo();
    return this._injector.createInstance(FDocumentTextRange, this._document, startOffset, endOffset, this._segmentId, this._injector);
  }
  /**
   * Get this paragraph's plain text.
   * @returns {string} The paragraph text without the trailing paragraph break.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.getText());
   * ```
   */
  getText() {
    const { dataStream } = this._document.getBody(this._segmentId);
    const { startOffset, endOffset } = this.getInfo();
    return dataStream.slice(startOffset, endOffset);
  }
  /**
   * Replace this paragraph's plain text.
   * @param {string} text The replacement text. Do not include the paragraph break.
   * @returns {boolean} `true` if the paragraph text was replaced.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * paragraph?.setText('New text');
   * console.log(paragraph?.getText());
   * ```
   */
  setText(text) {
    const { startOffset, endOffset } = this.getInfo();
    return replaceBodyRange(
      {
        startOffset,
        endOffset,
        segmentId: this._segmentId
      },
      buildPlainTextInsertBody(text),
      this._document.getDocumentDataModel(),
      this._injector
    );
  }
  /**
   * Append plain text before this paragraph's trailing paragraph break.
   * @param {string} text The plain text to append.
   * @returns {boolean} `true` if the text was appended.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * paragraph?.appendText(' Appended text');
   * console.log(paragraph?.getText());
   * ```
   */
  appendText(text) {
    const { endOffset } = this.getInfo();
    return this._document.insertText(endOffset, text, this._segmentId);
  }
  /**
   * Apply paragraph style to a paragraph handle or text range.
   * `style.textStyle.fs` is a font size in points (pt), not CSS pixels.
   * @param {IParagraphStyle} style The Univer paragraph style patch.
   * @returns {boolean} `true` if the style was applied.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * paragraph?.setText('Styled text');
   * paragraph?.setStyle({
   *   textStyle: {
   *     cl: {
   *       rgb: '#FF0000',
   *     },
   *     fs: 14,
   *   },
   *   horizontalAlign: 2,
   * });
   * console.log(paragraph?.getInfo().paragraph.paragraphStyle);
   * ```
   */
  setStyle(style) {
    const { paragraph, startOffset, endOffset } = this.getInfo();
    let result = true;
    if (style.textStyle && startOffset < endOffset) {
      result = retainBodyRange(
        {
          startOffset,
          endOffset,
          segmentId: this._segmentId
        },
        {
          dataStream: "",
          textRuns: [{
            st: 0,
            ed: endOffset - startOffset,
            ts: style.textStyle
          }]
        },
        0 /* COVER */,
        this._document.getDocumentDataModel(),
        this._injector
      );
    }
    const updateBody = {
      dataStream: "",
      paragraphs: [{
        ...paragraph,
        startIndex: 0,
        paragraphStyle: {
          ...paragraph.paragraphStyle,
          ...style
        }
      }]
    };
    this._preserveExplicitParagraphIds(updateBody);
    return retainBodyRange(
      {
        startOffset: endOffset,
        endOffset: endOffset + 1,
        segmentId: this._segmentId
      },
      updateBody,
      1 /* REPLACE */,
      this._document.getDocumentDataModel(),
      this._injector
    ) && result;
  }
  /**
   * Check whether this paragraph is a bullet, ordered, or checklist item.
   * @returns {boolean} `true` if the paragraph has list metadata.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.isListItem());
   * ```
   */
  isListItem() {
    const { paragraph } = this.getInfo();
    return Boolean(paragraph.bullet);
  }
  /**
   * Check whether this paragraph is a task/checklist item.
   * @returns {boolean} `true` if this paragraph is an unchecked or checked task item.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * console.log(paragraph?.isTask());
   * ```
   */
  isTask() {
    var _a;
    const { paragraph } = this.getInfo();
    const listType = (_a = paragraph.bullet) == null ? void 0 : _a.listType;
    return listType === "CHECK_LIST" /* CHECK_LIST */ || listType === "CHECK_LIST_CHECKED" /* CHECK_LIST_CHECKED */;
  }
  /**
   * Set the checked state of this task/checklist paragraph.
   * @param {boolean} checked Whether the task item should be checked.
   * @returns {boolean} `true` if the task state was updated, or `false` if this paragraph is not a task item.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   *
   * if (paragraph.isTask()) {
   *   const success = paragraph.setTaskChecked(true);
   *   console.log(success ? 'Task checked' : 'Failed to check task');
   * }
   * ```
   */
  setTaskChecked(checked) {
    if (!this.isTask()) {
      return false;
    }
    const { paragraph, endOffset } = this.getInfo();
    const bullet = paragraph.bullet;
    const updateBody = {
      dataStream: "",
      paragraphs: [{
        ...paragraph,
        startIndex: 0,
        bullet: {
          ...bullet,
          listType: checked ? "CHECK_LIST_CHECKED" /* CHECK_LIST_CHECKED */ : "CHECK_LIST" /* CHECK_LIST */
        }
      }]
    };
    this._preserveExplicitParagraphIds(updateBody);
    return retainBodyRange(
      {
        startOffset: endOffset,
        endOffset: endOffset + 1,
        segmentId: this._segmentId
      },
      updateBody,
      1 /* REPLACE */,
      this._document.getDocumentDataModel(),
      this._injector
    );
  }
  /**
   * Remove this paragraph.
   * @returns {boolean} `true` if the paragraph was removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraphs()[0];
   * const success = paragraph?.remove();
   * console.log(success ? 'Paragraph removed' : 'Failed to remove paragraph');
   * ```
   */
  remove() {
    const { startOffset, endOffset } = this.getInfo();
    return this._document.deleteRange({
      startOffset,
      endOffset: endOffset + 1,
      segmentId: this._segmentId
    });
  }
  _preserveExplicitParagraphIds(body) {
    body[RESTORE_INSERTED_PARAGRAPH_IDS] = true;
  }
};

// ../packages/docs/src/facade/f-document-section.ts
var DocsSectionUnsupportedDocumentFlavorError = class extends Error {
  constructor() {
    super("Section column APIs are supported only in traditional documents. Use ColumnGroup APIs for modern documents.");
    this.name = "DocsSectionUnsupportedDocumentFlavorError";
  }
};
var FDocumentSection = class {
  constructor(_document, _sectionId, _injector) {
    __publicField(this, "_document", _document);
    __publicField(this, "_sectionId", _sectionId);
    __publicField(this, "_injector", _injector);
  }
  /**
   * Returns the persisted section id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.getId());
   * ```
   */
  getId() {
    return this._sectionId;
  }
  /**
   * Returns the current zero-based section index.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.getIndex());
   * ```
   */
  getIndex() {
    return this._resolve().index;
  }
  /**
   * Returns the section break snapshot that terminates this section.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.getConfig());
   * ```
   */
  getConfig() {
    const { sectionBreak } = this._resolve();
    return Tools.deepClone(sectionBreak);
  }
  /**
   * Returns the section content range, excluding its terminating section-break token.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.getRange());
   * ```
   */
  getRange() {
    const sectionBreaks = getTopLevelSectionBreaks(this._document.getBody());
    const { index, sectionBreak } = this._resolve();
    return {
      startOffset: index === 0 ? 0 : sectionBreaks[index - 1].startIndex + 1,
      endOffset: sectionBreak.startIndex,
      segmentId: ""
    };
  }
  /**
   * Returns the explicit columns. An empty array means the normal single-column layout.
   * Column widths and trailing spaces are in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.getColumns());
   * ```
   */
  getColumns() {
    var _a;
    return Tools.deepClone((_a = this.getConfig().columnProperties) != null ? _a : []);
  }
  /**
   * Returns a compact serializable section summary.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.describe());
   * ```
   */
  describe() {
    var _a, _b, _c;
    const config = this.getConfig();
    const columns = (_a = config.columnProperties) != null ? _a : [];
    const headerFooter = {
      defaultHeader: this._describeHeaderFooterReference("header", "default"),
      defaultFooter: this._describeHeaderFooterReference("footer", "default"),
      firstHeader: this._describeHeaderFooterReference("header", "first"),
      firstFooter: this._describeHeaderFooterReference("footer", "first"),
      evenHeader: this._describeHeaderFooterReference("header", "even"),
      evenFooter: this._describeHeaderFooterReference("footer", "even")
    };
    return {
      sectionId: this._sectionId,
      index: this.getIndex(),
      range: this.getRange(),
      columnCount: columns.length || 1,
      columns: Tools.deepClone(columns),
      columnSeparatorType: (_b = config.columnSeparatorType) != null ? _b : 1 /* NONE */,
      sectionType: (_c = config.sectionType) != null ? _c : 0 /* SECTION_TYPE_UNSPECIFIED */,
      headerFooter,
      config
    };
  }
  /**
   * Sets equal or explicitly sized columns for this traditional section.
   * Use `columnCount = 1` to restore normal single-column layout.
   * `gap` and `widths` are in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   fDocument.getSection(0)?.setColumns(2, { gap: 18, separator: true });
   * }
   * ```
   */
  setColumns(columnCount, options = {}) {
    var _a, _b;
    this._assertTraditionalDocument();
    if (!Number.isInteger(columnCount) || columnCount < 1) {
      throw new RangeError("Section column count must be a positive integer.");
    }
    if (options.widths && options.widths.length !== columnCount) {
      throw new RangeError("Section column widths must match the column count.");
    }
    const gap = Math.max(0, (_a = options.gap) != null ? _a : 18);
    const config = this.getConfig();
    const columns = createSectionColumnProperties(
      this._document.getDocumentDataModel().getSnapshot().documentStyle,
      config,
      columnCount,
      gap,
      options.widths
    );
    const separator = typeof options.separator === "boolean" ? options.separator ? 2 /* BETWEEN_EACH_COLUMN */ : 1 /* NONE */ : (_b = options.separator) != null ? _b : 1 /* NONE */;
    return this._update({
      columnProperties: columns,
      columnSeparatorType: separator,
      ...options.sectionType == null ? {} : { sectionType: options.sectionType }
    });
  }
  /**
   * Sets explicit OOXML-compatible column width and trailing-space values in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   fDocument.getSection(0)?.setColumnProperties([
   *     { width: 240, paddingEnd: 18 },
   *     { width: 240, paddingEnd: 0 },
   *   ], univerAPI.Enum.ColumnSeparatorType.BETWEEN_EACH_COLUMN);
   * }
   * ```
   */
  setColumnProperties(columns, separator = 1 /* NONE */) {
    this._assertTraditionalDocument();
    if (columns.some(({ width, paddingEnd }) => width < 0 || paddingEnd < 0)) {
      throw new RangeError("Section column widths and padding must be non-negative.");
    }
    return this._update({
      columnProperties: Tools.deepClone(columns),
      columnSeparatorType: separator
    });
  }
  /**
   * Sets how the next section begins.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   fDocument.getSection(0)?.setSectionType(univerAPI.Enum.SectionType.NEXT_PAGE);
   * }
   * ```
   */
  setSectionType(sectionType) {
    this._assertTraditionalDocument();
    return this._update({ sectionType });
  }
  /**
   * Ensures a header segment linked specifically to this section.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   const segmentId = fDocument.getSection(0)?.ensureHeader();
   *   if (segmentId) {
   *     fDocument.insertText(0, 'Quarterly report', segmentId);
   *   }
   * }
   * ```
   */
  ensureHeader(variant = "default") {
    return this._ensureHeaderFooter("header", variant);
  }
  /**
   * Ensures a footer segment linked specifically to this section.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   const segmentId = fDocument.getSection(0)?.ensureFooter('first');
   *   if (segmentId) {
   *     fDocument.insertText(0, 'Confidential', segmentId);
   *   }
   * }
   * ```
   */
  ensureFooter(variant = "default") {
    return this._ensureHeaderFooter("footer", variant);
  }
  /**
   * Returns the effective header id after resolving links to previous sections.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.getHeaderId('default'));
   * ```
   */
  getHeaderId(variant = "default") {
    var _a;
    return (_a = this._getHeaderFooterReference("header", variant).segmentId) != null ? _a : null;
  }
  /**
   * Returns the effective footer id after resolving links to previous sections.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(0)?.getFooterId('first'));
   * ```
   */
  getFooterId(variant = "default") {
    var _a;
    return (_a = this._getHeaderFooterReference("footer", variant).segmentId) != null ? _a : null;
  }
  /**
   * Whether this header variant inherits the previous section's reference.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(1)?.isHeaderLinkedToPrevious());
   * ```
   */
  isHeaderLinkedToPrevious(variant = "default") {
    return this._getHeaderFooterReference("header", variant).linkedToPrevious;
  }
  /**
   * Whether this footer variant inherits the previous section's reference.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getSection(1)?.isFooterLinkedToPrevious('even'));
   * ```
   */
  isFooterLinkedToPrevious(variant = "default") {
    return this._getHeaderFooterReference("footer", variant).linkedToPrevious;
  }
  /**
   * Links or unlinks this header variant. Unlinking clones the inherited header.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   fDocument.getSection(1)?.setHeaderLinkedToPrevious(false, 'default');
   * }
   * ```
   */
  setHeaderLinkedToPrevious(linkedToPrevious, variant = "default") {
    return this._setHeaderFooterLinkedToPrevious("header", variant, linkedToPrevious);
  }
  /**
   * Links or unlinks this footer variant. Unlinking clones the inherited footer.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   fDocument.getSection(1)?.setFooterLinkedToPrevious(true, 'even');
   * }
   * ```
   */
  setFooterLinkedToPrevious(linkedToPrevious, variant = "default") {
    return this._setHeaderFooterLinkedToPrevious("footer", variant, linkedToPrevious);
  }
  /**
   * Updates header/footer switches and margins on this section break.
   * `marginHeader` and `marginFooter` are in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   fDocument.getSection(0)?.setHeaderFooterOptions({
   *     marginHeader: 36,
   *     marginFooter: 36,
   *     useFirstPageHeaderFooter: univerAPI.Enum.BooleanNumber.TRUE,
   *   });
   * }
   * ```
   */
  setHeaderFooterOptions(options) {
    this._assertTraditionalDocument();
    return this._update(options);
  }
  /**
   * Deletes this section break. The final top-level section break cannot be removed.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   const sections = fDocument.getSections();
   *   if (sections.length > 1) {
   *     sections[0].remove();
   *   }
   * }
   * ```
   */
  remove() {
    this._assertTraditionalDocument();
    return this._injector.get(ICommandService).syncExecuteCommand(DeleteDocumentSectionBreakCommand.id, {
      unitId: this._document.getId(),
      sectionId: this._sectionId
    });
  }
  _update(patch) {
    const { sectionId: _sectionId, startIndex: _startIndex, ...config } = patch;
    return this._injector.get(ICommandService).syncExecuteCommand(UpdateDocumentSectionCommand.id, {
      unitId: this._document.getId(),
      updates: [{ sectionId: this._sectionId, config }]
    });
  }
  _ensureHeaderFooter(kind, variant) {
    this._assertTraditionalDocument();
    const { index } = this._resolve();
    const config = this.getConfig();
    const key = getSectionHeaderFooterReferenceKey(kind, variant);
    const existing = config[key];
    if (typeof existing === "string" && existing) {
      return existing;
    }
    if (index > 0) {
      const segmentId2 = generateRandomId(6);
      const success2 = this._injector.get(ICommandService).syncExecuteCommand(SetSectionHeaderFooterLinkCommand.id, {
        unitId: this._document.getId(),
        sectionId: this._sectionId,
        kind,
        variant,
        linkedToPrevious: false,
        segmentId: segmentId2
      });
      if (!success2) {
        throw new Error(`Failed to create section ${kind}.`);
      }
      return segmentId2;
    }
    const types = {
      default: kind === "header" ? 2 /* DEFAULT_HEADER */ : 3 /* DEFAULT_FOOTER */,
      first: kind === "header" ? 0 /* FIRST_PAGE_HEADER */ : 1 /* FIRST_PAGE_FOOTER */,
      even: kind === "header" ? 4 /* EVEN_PAGE_HEADER */ : 5 /* EVEN_PAGE_FOOTER */
    };
    const segmentId = generateRandomId(6);
    const success = this._injector.get(ICommandService).syncExecuteCommand(CreateHeaderFooterCommand.id, {
      unitId: this._document.getId(),
      segmentId,
      createType: types[variant],
      sectionId: this._sectionId
    });
    if (!success) {
      throw new Error(`Failed to create section ${kind}.`);
    }
    return segmentId;
  }
  _getHeaderFooterReference(kind, variant) {
    const { index } = this._resolve();
    const snapshot = this._document.getDocumentDataModel().getSnapshot();
    return resolveSectionHeaderFooterReference(
      snapshot.documentStyle,
      getTopLevelSectionBreaks(this._document.getBody()),
      index,
      getSectionHeaderFooterReferenceKey(kind, variant)
    );
  }
  _describeHeaderFooterReference(kind, variant) {
    var _a;
    const reference = this._getHeaderFooterReference(kind, variant);
    return {
      segmentId: (_a = reference.segmentId) != null ? _a : null,
      linkedToPrevious: reference.linkedToPrevious
    };
  }
  _setHeaderFooterLinkedToPrevious(kind, variant, linkedToPrevious) {
    this._assertTraditionalDocument();
    return this._injector.get(ICommandService).syncExecuteCommand(SetSectionHeaderFooterLinkCommand.id, {
      unitId: this._document.getId(),
      sectionId: this._sectionId,
      kind,
      variant,
      linkedToPrevious,
      ...linkedToPrevious ? {} : { segmentId: generateRandomId(6) }
    });
  }
  _assertTraditionalDocument() {
    if (this._document.getDocumentDataModel().getSnapshot().documentStyle.documentFlavor !== 1 /* TRADITIONAL */) {
      throw new DocsSectionUnsupportedDocumentFlavorError();
    }
  }
  _resolve() {
    this._assertTraditionalDocument();
    const sectionBreaks = getTopLevelSectionBreaks(this._document.getBody());
    const index = sectionBreaks.findIndex((section) => section.sectionId === this._sectionId);
    if (index < 0) {
      throw new Error(`Document section with id ${this._sectionId} not found.`);
    }
    return { index, sectionBreak: sectionBreaks[index] };
  }
};

// ../packages/docs/src/facade/f-document.ts
var FDocument = class extends FBaseInitialable {
  constructor(_documentDataModel, _injector, _univerInstanceService, _resourceLoaderService, _commandService) {
    super(_injector);
    __publicField(this, "_documentDataModel", _documentDataModel);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_resourceLoaderService", _resourceLoaderService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "id");
    this.id = this._documentDataModel.getUnitId();
  }
  /**
   * Get the document data model of the document.
   * @param {string} segmentId The segment id used to get the header/footer data model. Defaults to an empty string for the document data model of the document.
   * @returns {DocumentDataModel} The document data model.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getDocumentDataModel());
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * console.log(fDocument.getDocumentDataModel(headerSegmentId));
   * ```
   */
  getDocumentDataModel(segmentId = "") {
    const documentDataModel = this._documentDataModel.getSelfOrHeaderFooterModel(segmentId);
    if (!documentDataModel) {
      throw new Error(segmentId === "" ? "Document data model is not found." : `Document data model is not found in the segment: ${segmentId}`);
    }
    return documentDataModel;
  }
  /**
   * Get the document body or header/footer body by the segment id.
   * The main body has an empty segment id.
   * The header and footer body have their respective segment ids.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {IDocumentBody} The document body.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getBody()); // Get the main body
   *
   * const footerSegmentId = fDocument.ensurePageFooter();
   * console.log(fDocument.getBody(footerSegmentId)); // Get the footer body
   * ```
   */
  getBody(segmentId = "") {
    var _a;
    const body = (_a = this._documentDataModel.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _a.getBody();
    if (!body) {
      throw new Error(segmentId === "" ? "Body is not found in the document." : `Body is not found in the segment: ${segmentId}`);
    }
    return body;
  }
  dispose() {
    super.dispose();
  }
  /**
   * Get the document id.
   * @returns {string} The document id.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getId());
   * ```
   */
  getId() {
    return this.id;
  }
  /**
   * Get the document name.
   * @returns {string} The document name.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.getName());
   * ```
   */
  getName() {
    return this._documentDataModel.getTitle() || "";
  }
  /**
   * Whether the document is a modern document or not.
   * @returns {boolean} `true` if the document is a modern document, or `false` if it is not.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument.isModern());
   * ```
   */
  isModern() {
    return this._documentDataModel.getSnapshot().documentStyle.documentFlavor === 2 /* MODERN */;
  }
  /**
   * Save the document snapshot data, including the document content and resource data, etc.
   * @returns {IDocumentData} The document snapshot data.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const snapshot = fDocument.save();
   * console.log(snapshot);
   * ```
   */
  save() {
    return this._resourceLoaderService.saveUnit(this._documentDataModel.getUnitId());
  }
  /**
   * Undo the last operation in the document.
   * @returns {boolean} `true` if the undo operation was successful, or `false` if it failed.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const success = fDocument.undo();
   * console.log(success);
   * ```
   */
  undo() {
    this._univerInstanceService.focusUnit(this.id);
    return this._commandService.syncExecuteCommand(UndoCommand.id);
  }
  /**
   * Redo the last undone operation in the document.
   * @returns {boolean} `true` if the redo operation was successful, or `false` if it failed.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * const success = fDocument.redo();
   * console.log(success);
   * ```
   */
  redo() {
    this._univerInstanceService.focusUnit(this.id);
    return this._commandService.syncExecuteCommand(RedoCommand.id);
  }
  /**
   * Ensure the page header segment exists and return its segment id.
   * @param {number} pageIndex The zero-based page index. Defaults to the first page.
   * @returns {string} The header segment id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const headerSegmentId = fDocument.ensurePageHeader();
   * fDocument.insertText(0, 'Header text', headerSegmentId);
   * ```
   */
  ensurePageHeader(pageIndex = 0) {
    return this._ensureHeaderFooter("header", pageIndex);
  }
  /**
   * Ensure the page footer segment exists and return its segment id.
   * @param {number} pageIndex The zero-based page index. Defaults to the first page.
   * @returns {string} The footer segment id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const footerSegmentId = fDocument.ensurePageFooter();
   * fDocument.insertText(0, 'Footer text', footerSegmentId);
   * ```
   */
  ensurePageFooter(pageIndex = 0) {
    return this._ensureHeaderFooter("footer", pageIndex);
  }
  /**
   * Insert plain text at a document body offset.
   * @param {number} index The zero-based insertion offset.
   * @param {string} text The plain text to insert.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {boolean} `true` if the edit was applied.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * fDocument.insertText(0, 'Hello ');
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * fDocument.insertText(0, 'Header text', headerSegmentId);
   * ```
   */
  insertText(index, text, segmentId = "") {
    return replaceBodyRange(
      {
        startOffset: index,
        endOffset: index,
        segmentId
      },
      buildPlainTextInsertBody(text),
      this._documentDataModel,
      this._injector
    );
  }
  /**
   * Returns document-level header/footer switches and margins. Margin values are in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * console.log(fDocument?.getHeaderFooterOptions());
   * ```
   */
  getHeaderFooterOptions() {
    const style = this._documentDataModel.getSnapshot().documentStyle;
    return {
      marginHeader: style.marginHeader,
      marginFooter: style.marginFooter,
      useFirstPageHeaderFooter: style.useFirstPageHeaderFooter,
      evenAndOddHeaders: style.evenAndOddHeaders
    };
  }
  /**
   * Updates document-level header/footer switches and margins in a traditional document.
   * `marginHeader` and `marginFooter` are in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   fDocument.setHeaderFooterOptions({ marginHeader: 36, marginFooter: 36 });
   * }
   * ```
   */
  setHeaderFooterOptions(options) {
    if (this.isModern()) {
      throw new Error("The document is a modern document, header/footer is not supported.");
    }
    return this._commandService.syncExecuteCommand(CreateHeaderFooterCommand.id, {
      unitId: this.getId(),
      headerFooterProps: options
    });
  }
  /**
   * Creates a facade for reading and styling a document text range.
   * The end offset is exclusive, and offsets are scoped to the selected body segment.
   * @param {number} startOffset The inclusive start offset.
   * @param {number} endOffset The exclusive end offset.
   * @param {string} segmentId The header/footer segment id, or an empty string for the main body.
   * @returns {FDocumentTextRange} A fixed text-range facade.
   * @example
   * ```ts
   * const range = univerAPI.getActiveDocument()?.getTextRange(0, 5);
   * console.log(range?.describe());
   * range?.setTextStyle({ bl: 1 });
   * ```
   */
  getTextRange(startOffset, endOffset, segmentId = "") {
    return this._injector.createInstance(FDocumentTextRange, this, startOffset, endOffset, segmentId, this._injector);
  }
  /**
   * Returns traditional document sections backed by persisted SectionBreak ids.
   * Modern documents use ColumnGroup instead and return an empty array from this read API.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const sections = fDocument?.getSections() ?? [];
   * console.log(sections.map((section) => section.describe()));
   * ```
   */
  getSections() {
    if (this._documentDataModel.getSnapshot().documentStyle.documentFlavor !== 1 /* TRADITIONAL */) {
      return [];
    }
    return getTopLevelSectionBreaks(this.getBody()).map((sectionBreak) => this._injector.createInstance(FDocumentSection, this, sectionBreak.sectionId, this._injector));
  }
  /**
   * Returns a traditional section by zero-based index, or `null` in modern documents.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const firstSection = fDocument?.getSection(0);
   * console.log(firstSection?.describe());
   * ```
   */
  getSection(index) {
    var _a;
    return (_a = this.getSections()[index]) != null ? _a : null;
  }
  /**
   * Returns the traditional section containing a data-stream offset, or `null` in modern documents.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument?.findParagraphByText('Launch');
   * const offset = paragraph?.getInfo().startOffset;
   * const section = offset == null ? null : fDocument?.getSectionAt(offset);
   * console.log(section?.getId());
   * ```
   */
  getSectionAt(offset) {
    var _a;
    return (_a = this.getSections().find((section) => {
      const range = section.getRange();
      return offset >= range.startOffset && offset <= range.endOffset;
    })) != null ? _a : null;
  }
  /**
   * Inserts a traditional document section break and returns its stable facade.
   * Modern documents must use ColumnGroup and throw `DocsSectionUnsupportedDocumentFlavorError`.
   * Numeric layout values in `config` are in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   const paragraph = fDocument.findParagraphByText('Appendix');
   *   const offset = paragraph?.getInfo().startOffset;
   *   const section = offset == null ? null : fDocument.insertSectionBreak(offset);
   *   console.log(section?.getId());
   * }
   * ```
   */
  insertSectionBreak(offset, config = {}) {
    var _a;
    if (this._documentDataModel.getSnapshot().documentStyle.documentFlavor !== 1 /* TRADITIONAL */) {
      throw new DocsSectionUnsupportedDocumentFlavorError();
    }
    const sectionId = createSectionId(new Set(((_a = this.getBody().sectionBreaks) != null ? _a : []).map((section) => section.sectionId)));
    const success = this._commandService.syncExecuteCommand(InsertDocumentSectionBreakCommand.id, {
      unitId: this.getId(),
      offset,
      sectionId,
      config
    });
    return success ? this._injector.createInstance(FDocumentSection, this, sectionId, this._injector) : null;
  }
  /**
   * Inserts a column-break token in a traditional document.
   * Modern documents must use ColumnGroup and throw `DocsSectionUnsupportedDocumentFlavorError`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * if (fDocument && !fDocument.isModern()) {
   *   const paragraph = fDocument.findParagraphByText('Continue in next column');
   *   const offset = paragraph?.getInfo().startOffset;
   *   if (offset != null) {
   *     fDocument.insertColumnBreak(offset);
   *   }
   * }
   * ```
   */
  insertColumnBreak(offset) {
    if (this._documentDataModel.getSnapshot().documentStyle.documentFlavor !== 1 /* TRADITIONAL */) {
      throw new DocsSectionUnsupportedDocumentFlavorError();
    }
    return this.insertText(offset, "\v" /* COLUMN_BREAK */);
  }
  /**
   * Inserts a horizontal rule using the existing paragraph `borderBottom` mechanism.
   * The returned paragraph can be inspected or removed with normal paragraph APIs.
   * Border width and padding are in points (pt).
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument?.findParagraphByText('Summary');
   * const offset = paragraph?.getInfo().startOffset;
   * const rule = offset == null ? null : fDocument?.insertHorizontalRule(offset);
   * console.log(rule?.getId());
   * ```
   */
  insertHorizontalRule(offset, border = {
    padding: 5,
    color: { rgb: "#CDD0D8" },
    width: 1,
    dashStyle: 1 /* SOLID */
  }, segmentId = "") {
    var _a;
    const body = this.getBody(segmentId);
    const paragraphs = generateParagraphs(
      "\r" /* PARAGRAPH */,
      void 0,
      border,
      (_a = body.paragraphs) == null ? void 0 : _a.map((paragraph) => paragraph.paragraphId)
    );
    const paragraphId = paragraphs[0].paragraphId;
    const success = replaceBodyRange(
      { startOffset: offset, endOffset: offset, segmentId },
      {
        dataStream: "\r" /* PARAGRAPH */,
        paragraphs
      },
      this._documentDataModel,
      this._injector
    );
    return success ? this.getParagraph(paragraphId, segmentId) : null;
  }
  /**
   * Get all paragraphs in the document body or header/footer body by the segment id.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph[]} An array of paragraph facade instances.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraphs = fDocument.getParagraphs();
   * console.log(paragraphs);
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const headerParagraphs = fDocument.getParagraphs(headerSegmentId);
   * console.log(headerParagraphs);
   * ```
   */
  getParagraphs(segmentId = "") {
    const { paragraphs = [] } = this.getBody(segmentId);
    return paragraphs.map((paragraph) => this._createFDocumentParagraph(paragraph.paragraphId, segmentId));
  }
  /**
   * Get a paragraph by its paragraph id and segment id.
   * @param {string} paragraphId The paragraph id.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph | null} The paragraph facade instance, or `null` if the paragraph is not found.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.getParagraph('paragraph-01');
   * console.log(paragraph);
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const headerParagraph = fDocument.getParagraph('header-paragraph-01', headerSegmentId);
   * console.log(headerParagraph);
   * ```
   */
  getParagraph(paragraphId, segmentId = "") {
    const { paragraphs = [] } = this.getBody(segmentId);
    const paragraph = paragraphs.find((paragraph2) => paragraph2.paragraphId === paragraphId);
    if (!paragraph) {
      return null;
    }
    return this._createFDocumentParagraph(paragraphId, segmentId);
  }
  /**
   * Find a paragraph by its text content and segment id.
   * @param {string} text The text content to search for.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph | null} The paragraph facade instance, or `null` if the paragraph is not found.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.findParagraphByText('Hello');
   * console.log(paragraph);
   *
   * const footerSegmentId = fDocument.ensurePageFooter();
   * const footerParagraph = fDocument.findParagraphByText('Page', footerSegmentId);
   * console.log(footerParagraph);
   * ```
   */
  findParagraphByText(text, segmentId = "") {
    return this.findParagraphs({ text, segmentId })[0] || null;
  }
  /**
   * Find paragraphs by a query object, which can include text content, paragraph id, and segment id.
   * @param {string | IFDocumentParagraphQuery} query The query object or text content to search for.
   * @returns {FDocumentParagraph[]} An array of paragraph facade instances that match the query.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraphsWithText = fDocument.findParagraphs('Hello');
   * console.log(paragraphsWithText);
   *
   * const paragraphsWithId = fDocument.findParagraphs({ paragraphId: 'paragraph-01' });
   * console.log(paragraphsWithId);
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const paragraphsWithSegment = fDocument.findParagraphs({ segmentId: headerSegmentId });
   * console.log(paragraphsWithSegment);
   * ```
   */
  findParagraphs(query) {
    const normalized = typeof query === "string" ? { text: query } : query;
    const { text, paragraphId, segmentId = "" } = normalized;
    return this.getParagraphs(segmentId).filter((paragraph) => {
      if (paragraphId && paragraph.getId() !== paragraphId) {
        return false;
      }
      if (text && !paragraph.getText().includes(text)) {
        return false;
      }
      return true;
    });
  }
  /**
   * Insert a plain-text paragraph before the paragraph at the given paragraph index.
   * @param {number} index The zero-based paragraph insertion index.
   * @param {string} text The paragraph text. Defaults to an empty paragraph.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph} The inserted paragraph facade instance.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.insertParagraph(0, 'Document title');
   * paragraph.appendText(' suffix');
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * const headerParagraph = fDocument.insertParagraph(0, 'Header title', headerSegmentId);
   * headerParagraph.appendText(' suffix');
   * ```
   */
  insertParagraph(index, text = "", segmentId = "") {
    const offset = this._getParagraphInsertOffset(index, segmentId);
    const result = replaceBodyRange(
      {
        startOffset: offset,
        endOffset: offset,
        segmentId
      },
      buildPlainTextInsertBody(`${text}\r`),
      this._documentDataModel,
      this._injector
    );
    if (!result) {
      throw new Error("Failed to insert paragraph.");
    }
    const { paragraphs = [] } = this.getBody(segmentId);
    const paragraph = paragraphs[index];
    if (!paragraph) {
      throw new Error("Failed to insert paragraph.");
    }
    return this._createFDocumentParagraph(paragraph.paragraphId, segmentId);
  }
  /**
   * Append a plain-text paragraph at the end of the body.
   * @param {string} text The paragraph text. Defaults to an empty paragraph.
   * @param {string} segmentId The segment id of the body. Defaults to an empty string for the main body.
   * @returns {FDocumentParagraph} The appended paragraph wrapper.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const paragraph = fDocument.appendParagraph('Summary');
   * console.log(paragraph.getText());
   *
   * const footerSegmentId = fDocument.ensurePageFooter();
   * const footerParagraph = fDocument.appendParagraph('Confidential', footerSegmentId);
   * console.log(footerParagraph.getText());
   * ```
   */
  appendParagraph(text = "", segmentId = "") {
    const { paragraphs = [] } = this.getBody(segmentId);
    return this.insertParagraph(paragraphs.length, text, segmentId);
  }
  /**
   * Delete a range from the body.
   * @param {IFDocumentTextRange} range The text range to delete.
   * @returns {boolean} `true` if the range was deleted.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * fDocument.deleteRange({ startOffset: 0, endOffset: 5 });
   *
   * const headerSegmentId = fDocument.ensurePageHeader();
   * fDocument.deleteRange({ startOffset: 0, endOffset: 5, segmentId: headerSegmentId });
   * ```
   */
  deleteRange(range) {
    const normalizedRange = this._normalizeDeleteRange(range);
    if (normalizedRange.startOffset >= normalizedRange.endOffset) {
      return false;
    }
    return replaceBodyRange(
      normalizedRange,
      {
        dataStream: ""
      },
      this._documentDataModel,
      this._injector
    );
  }
  _createFDocumentParagraph(paragraphId, segmentId = "") {
    return this._injector.createInstance(
      FDocumentParagraph,
      this,
      paragraphId,
      segmentId,
      this._injector
    );
  }
  _normalizeDeleteRange(range) {
    const body = this.getBody(range.segmentId);
    const protectedEndOffset = body.dataStream.endsWith("\r\n") ? Math.max(0, body.dataStream.length - 2) : body.dataStream.length;
    const endOffset = Math.min(Math.max(range.endOffset, 0), protectedEndOffset);
    return {
      ...range,
      startOffset: Math.min(Math.max(range.startOffset, 0), endOffset),
      endOffset
    };
  }
  _getParagraphInsertOffset(index, segmentId = "") {
    if (index <= 0) {
      return 0;
    }
    const body = this.getBody(segmentId);
    const { dataStream, paragraphs = [] } = body;
    if (paragraphs.length === 0) {
      return Math.max(0, dataStream.length - 1);
    }
    if (index >= paragraphs.length) {
      return paragraphs[paragraphs.length - 1].startIndex + 1;
    }
    return getParagraphContentStartOffset(body, paragraphs[index]);
  }
  _ensureHeaderFooter(kind, pageIndex) {
    if (this.isModern()) {
      throw new Error("The document is a modern document, header/footer is not supported.");
    }
    const { createType, segmentId: existingSegmentId } = this._getHeaderFooterCreateInfo(kind, pageIndex);
    if (existingSegmentId) {
      return existingSegmentId;
    }
    const segmentId = generateRandomId(6);
    const result = this._commandService.syncExecuteCommand(CreateHeaderFooterCommand.id, {
      unitId: this.getId(),
      segmentId,
      createType
    });
    if (!result) {
      throw new Error(`Failed to create page ${kind}.`);
    }
    return segmentId;
  }
  _getHeaderFooterCreateInfo(kind, pageIndex) {
    var _a, _b, _c, _d, _e, _f;
    const { documentStyle } = this._documentDataModel.getSnapshot();
    const isFirstPage = pageIndex === 0;
    const isEvenPage = (pageIndex + 1) % 2 === 0;
    if (isFirstPage && documentStyle.useFirstPageHeaderFooter === 1 /* TRUE */) {
      return kind === "header" ? {
        createType: 0 /* FIRST_PAGE_HEADER */,
        segmentId: (_a = documentStyle.firstPageHeaderId) != null ? _a : ""
      } : {
        createType: 1 /* FIRST_PAGE_FOOTER */,
        segmentId: (_b = documentStyle.firstPageFooterId) != null ? _b : ""
      };
    }
    if (isEvenPage && documentStyle.evenAndOddHeaders === 1 /* TRUE */) {
      return kind === "header" ? {
        createType: 4 /* EVEN_PAGE_HEADER */,
        segmentId: (_c = documentStyle.evenPageHeaderId) != null ? _c : ""
      } : {
        createType: 5 /* EVEN_PAGE_FOOTER */,
        segmentId: (_d = documentStyle.evenPageFooterId) != null ? _d : ""
      };
    }
    return kind === "header" ? {
      createType: 2 /* DEFAULT_HEADER */,
      segmentId: (_e = documentStyle.defaultHeaderId) != null ? _e : ""
    } : {
      createType: 3 /* DEFAULT_FOOTER */,
      segmentId: (_f = documentStyle.defaultFooterId) != null ? _f : ""
    };
  }
};
FDocument = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, Inject(IResourceLoaderService)),
  __decorateParam(4, ICommandService)
], FDocument);

// ../packages/docs/src/facade/f-univer.ts
var FUniverDocsMixin = class extends FUniver {
  createDocument(data) {
    const instanceService = this._injector.get(IUniverInstanceService);
    const document = instanceService.createUnit(1 /* UNIVER_DOC */, data);
    return this._injector.createInstance(FDocument, document);
  }
  getActiveDocument() {
    const document = this._univerInstanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */);
    if (!document) {
      return null;
    }
    return this._injector.createInstance(FDocument, document);
  }
  getDocument(id) {
    const document = this._univerInstanceService.getUnit(id, 1 /* UNIVER_DOC */);
    if (!document) {
      return null;
    }
    return this._injector.createInstance(FDocument, document);
  }
};
FUniver.extend(FUniverDocsMixin);

// ../packages/docs/src/facade/f-enum.ts
var FDocsEnumMixin = class extends FEnum {
  get SectionType() {
    return SectionType;
  }
  get ColumnSeparatorType() {
    return ColumnSeparatorType;
  }
};
FEnum.extend(FDocsEnumMixin);

// ../packages/docs-ui/src/facade/f-document.ts
var FDocumentUIMixin = class extends FDocument {
  /**
   * Sets the selection to a specified text range in the document.
   * @param startOffset - The starting offset of the selection in the document.
   * @param endOffset - The ending offset of the selection in the document.
   * @example
   * ```typescript
   * const fDocument = univerAPI.getActiveDocument();
   * fDocument.setSelection(10, 20);
   * ```
   */
  setSelection(startOffset, endOffset) {
    var _a;
    const renderManagerService = this._injector.get(IRenderManagerService);
    const docSelectionRenderService = (_a = renderManagerService.getRenderUnitById(this.getId())) == null ? void 0 : _a.with(DocSelectionRenderService);
    docSelectionRenderService == null ? void 0 : docSelectionRenderService.removeAllRanges();
    docSelectionRenderService == null ? void 0 : docSelectionRenderService.addDocRanges(
      [
        {
          startOffset,
          endOffset,
          rangeType: "TEXT" /* TEXT */
        }
      ],
      true
    );
  }
};
FDocument.extend(FDocumentUIMixin);

export {
  FDocument
};
