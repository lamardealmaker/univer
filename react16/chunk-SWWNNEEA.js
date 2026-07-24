import {
  ClearSelectionFormatCommand,
  DeleteRangeMoveLeftCommand,
  DeleteRangeMoveUpCommand,
  ENGINE_FORMULA_CYCLE_REFERENCE_COUNT,
  ENGINE_FORMULA_RETURN_DEPENDENCY_TREE,
  EffectRefRangId,
  FormulaCalculationSessionService,
  FormulaDataModel,
  IActiveDirtyManagerService,
  IAutoFillService,
  IDefinedNamesService,
  IDescriptionService,
  IFunctionService,
  INTERCEPTOR_POINT,
  IRPCChannelService,
  ISuperTableService,
  InsertColCommand,
  InsertColMutation,
  InsertRangeMoveDownCommand,
  InsertRangeMoveRightCommand,
  InsertRowCommand,
  InsertRowMutation,
  InsertSheetMutation,
  LexerTreeBuilder,
  MoveColsCommand,
  MoveColsMutation,
  MoveRangeCommand,
  MoveRangeMutation,
  MoveRowsCommand,
  MoveRowsMutation,
  OtherFormulaMarkDirty,
  RefRangeService,
  RegisterOtherFormulaService,
  RemoveColCommand,
  RemoveColMutation,
  RemoveDefinedNameCommand,
  RemoveDefinedNameMutation,
  RemoveRowCommand,
  RemoveRowMutation,
  RemoveSheetCommand,
  RemoveSheetMutation,
  RemoveSuperTableMutation,
  ReorderRangeMutation,
  SCOPE_WORKBOOK_VALUE_DEFINED_NAME,
  SetArrayFormulaDataMutation,
  SetBorderCommand,
  SetDefinedNameCommand,
  SetDefinedNameMutation,
  SetFormulaCalculationNotificationMutation,
  SetFormulaCalculationStartMutation,
  SetFormulaCalculationStopMutation,
  SetFormulaDataMutation,
  SetFormulaStringBatchCalculationMutation,
  SetImageFormulaDataMutation,
  SetRangeCustomMetadataCommand,
  SetRangeValuesCommand,
  SetRangeValuesMutation,
  SetRowHiddenMutation,
  SetRowVisibleMutation,
  SetSelectionsOperation,
  SetStyleCommand,
  SetSuperTableMutation,
  SetTriggerFormulaCalculationStartMutation,
  SetWorkbookNameCommand,
  SetWorksheetActiveOperation,
  SetWorksheetNameCommand,
  SheetInterceptorService,
  SheetsSelectionsService,
  UniverFormulaEnginePlugin,
  UniverSheetsPlugin,
  alignToMergedCellsBorders,
  deserializeRangeWithSheetWithCache,
  expandToContinuousRange,
  findFirstNonEmptyCell,
  fromModule,
  generateStringWithSequence,
  getSeparateEffectedRangesOnCommand,
  getSheetCommandTarget,
  handleCommonDefaultRangeChangeWithEffectRefCommands,
  handleDefaultRangeChangeWithEffectRefCommands,
  handleDeleteRangeMoveLeft,
  handleDeleteRangeMoveUp,
  handleIRemoveCol,
  handleIRemoveRow,
  handleInsertCol,
  handleInsertRangeMoveDown,
  handleInsertRangeMoveRight,
  handleInsertRow,
  handleMoveCols,
  handleMoveRange,
  handleMoveRows,
  initSheetFormulaData,
  refactorFormulaUnitQualifier,
  runRefRangeMutations,
  serializeRange,
  serializeRangeToRefString,
  serializeRangeWithSheet,
  serializeRangeWithSpreadsheet,
  splitTableStructuredRef,
  stripErrorMargin,
  toModule
} from "./chunk-KKQWNXAE.js";
import {
  BehaviorSubject,
  BuildTextUtils,
  ColumnSeparatorType,
  DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
  DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
  DependentOn,
  Disposable,
  DisposableCollection,
  DocumentSkeleton,
  DocumentViewModel,
  ICommandService,
  IConfigService,
  ILogService,
  IRenderManagerService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  JSONX,
  LocaleService,
  MemoryCursor,
  NORMAL_TEXT_SELECTION_PLUGIN_STYLE,
  ObjectMatrix,
  Optional,
  PAGE_SIZE,
  PageOrientType,
  Plugin,
  Rectangle,
  RedoCommandId,
  RxDisposable,
  SectionType,
  Subject,
  TextX,
  Tools,
  UndoCommandId,
  cellToRange,
  composeInterceptors,
  containsInteriorInsertionOffset,
  createDocumentModelWithStyle,
  createIdentifier,
  createInterceptorKey,
  createParagraphId,
  createSectionId,
  generateRandomId,
  getBlockRangeInterval,
  getColumnGroupRangeInterval,
  getIntersectRange,
  getRichTextEditPath,
  getSectionHeaderFooterReferenceKey,
  getTableRangeInterval,
  isFormulaId,
  isFormulaString,
  isInternalEditorID,
  isNodeEnv,
  isRealNum,
  map,
  merge_default,
  moveRangeByOffset,
  remove,
  resolveSectionHeaderFooterReference,
  sequenceExecute,
  sequenceExecuteAsync,
  takeUntil,
  toDisposable,
  touchDependencies,
  validateDocBodyStructure
} from "./chunk-JD3KJOQJ.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "./chunk-HECJ2TYE.js";

// ../packages/docs/package.json
var package_default = {
  name: "@univerjs/docs",
  version: "1.0.0-alpha.7",
  private: false,
  description: "Core document model and rich-text operations for Univer Docs.",
  author: "DreamNum Co., Ltd. <developer@univer.ai>",
  license: "Apache-2.0",
  funding: {
    type: "opencollective",
    url: "https://opencollective.com/univer"
  },
  homepage: "https://univer.ai",
  repository: {
    type: "git",
    url: "https://github.com/dream-num/univer"
  },
  bugs: {
    url: "https://github.com/dream-num/univer/issues"
  },
  keywords: [
    "univer",
    "docs",
    "document",
    "rich-text",
    "plugin"
  ],
  exports: {
    ".": "./src/index.ts",
    "./*": "./src/*",
    "./facade": "./src/facade/index.ts"
  },
  main: "./src/index.ts",
  types: "./lib/types/index.d.ts",
  publishConfig: {
    access: "public",
    main: "./lib/es/index.js",
    module: "./lib/es/index.js",
    exports: {
      ".": {
        import: "./lib/es/index.js",
        require: "./lib/cjs/index.js",
        types: "./lib/types/index.d.ts"
      },
      "./*": {
        import: "./lib/es/*",
        require: "./lib/cjs/*",
        types: "./lib/types/index.d.ts"
      },
      "./facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/*": "./lib/*"
    }
  },
  directories: {
    lib: "lib"
  },
  files: [
    "lib"
  ],
  scripts: {
    test: "vitest run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
    typecheck: "tsc --noEmit",
    "build:bundle": "univer-cli build",
    "build:types": "tsc -p tsconfig.node.json",
    build: "pnpm run build:bundle && pnpm run build:types"
  },
  peerDependencies: {
    rxjs: ">=7.0.0"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/engine-render": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    rxjs: "^7.8.2",
    typescript: "^6.0.3",
    vitest: "^4.1.10"
  }
};

// ../packages/docs/src/commands/operations/text-selection.operation.ts
var SetTextSelectionsOperation = {
  id: "doc.operation.set-selections",
  type: 1 /* OPERATION */,
  handler: () => {
    return true;
  }
};

// ../packages/docs/src/services/doc-selection-manager.service.ts
var DocSelectionManagerService = class extends RxDisposable {
  constructor(_commandService, _univerInstanceService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_currentSelection", null);
    __publicField(this, "_textSelectionInfo", /* @__PURE__ */ new Map());
    __publicField(this, "_textSelection$", new Subject());
    __publicField(this, "textSelection$", this._textSelection$.asObservable());
    __publicField(this, "_refreshSelection$", new BehaviorSubject(null));
    __publicField(this, "refreshSelection$", this._refreshSelection$.asObservable());
    this._listenCurrentUnit();
  }
  _listenCurrentUnit() {
    this._univerInstanceService.getCurrentTypeOfUnit$(1 /* UNIVER_DOC */).pipe(takeUntil(this.dispose$)).subscribe((documentModel) => {
      if (documentModel == null) {
        return;
      }
      const unitId = documentModel.getUnitId();
      this._setCurrentSelectionNotRefresh({
        unitId,
        subUnitId: unitId
      });
    });
  }
  __getCurrentSelection() {
    return this._currentSelection;
  }
  getSelectionInfo(params = this._currentSelection) {
    return this._getTextRanges(params);
  }
  refreshSelection(params = this._currentSelection) {
    if (params == null) {
      return;
    }
    this._refresh(params);
  }
  // **Only used in test case** because this does not go through the render layer.
  __TEST_ONLY_setCurrentSelection(param) {
    this._currentSelection = param;
    this._refresh(param);
  }
  getTextRanges(params = this._currentSelection) {
    var _a;
    return (_a = this._getTextRanges(params)) == null ? void 0 : _a.textRanges;
  }
  getRectRanges(params = this._currentSelection) {
    var _a;
    return (_a = this._getTextRanges(params)) == null ? void 0 : _a.rectRanges;
  }
  getDocRanges(params = this._currentSelection) {
    var _a, _b;
    const textRanges = (_a = this.getTextRanges(params)) != null ? _a : [];
    const rectRanges = (_b = this.getRectRanges(params)) != null ? _b : [];
    const allRanges = [...textRanges, ...rectRanges].filter((range) => range.startOffset != null && range.endOffset != null).sort((a, b) => {
      if (a.startOffset > b.startOffset) {
        return 1;
      } else if (a.startOffset < b.startOffset) {
        return -1;
      } else {
        return 0;
      }
    });
    return allRanges;
  }
  getActiveTextRange() {
    const selectionInfo = this._getTextRanges(this._currentSelection);
    if (selectionInfo == null) {
      return;
    }
    const { textRanges } = selectionInfo;
    return textRanges.find((textRange) => textRange.isActive);
  }
  /**
   *
   * @deprecated
   */
  getActiveRectRange() {
    const selectionInfo = this._getTextRanges(this._currentSelection);
    if (selectionInfo == null) {
      return;
    }
    const { rectRanges } = selectionInfo;
    return rectRanges.find((rectRange) => rectRange.isActive);
  }
  // **Only used in test case** because this does not go through the render layer.
  __TEST_ONLY_add(textRanges, isEditing = true) {
    if (this._currentSelection == null) {
      return;
    }
    this._addByParam({
      ...this._currentSelection,
      textRanges,
      rectRanges: [],
      segmentId: "",
      segmentPage: -1,
      isEditing,
      style: NORMAL_TEXT_SELECTION_PLUGIN_STYLE
      // mock style.
    });
  }
  // Use to replace the current editor selection.
  /**
   * @deprecated pls use replaceDocRanges.
   */
  replaceTextRanges(docRanges, isEditing = true, options) {
    return this.replaceDocRanges(
      docRanges,
      this._currentSelection,
      isEditing,
      options
    );
  }
  replaceDocRanges(docRanges, params = this._currentSelection, isEditing = true, options) {
    if (params == null) {
      return;
    }
    const { unitId, subUnitId } = params;
    this._refreshSelection$.next({
      unitId,
      subUnitId,
      docRanges,
      isEditing,
      options
    });
  }
  // Only use in doc-selection-render.controller.ts
  __replaceTextRangesWithNoRefresh(textSelectionInfo, search) {
    if (this._currentSelection == null) {
      return;
    }
    const params = {
      ...textSelectionInfo,
      ...search
    };
    this._replaceByParam(params);
    this._textSelection$.next(params);
    const { unitId, subUnitId, segmentId, style, textRanges, rectRanges, isEditing } = params;
    const ranges = [...textRanges, ...rectRanges].filter((range) => range.startOffset != null && range.endOffset != null).sort((a, b) => {
      if (a.startOffset > b.startOffset) {
        return 1;
      } else if (a.startOffset < b.startOffset) {
        return -1;
      } else {
        return 0;
      }
    });
    this._commandService.executeCommand(SetTextSelectionsOperation.id, {
      unitId,
      subUnitId,
      segmentId,
      style,
      isEditing,
      ranges
    });
  }
  dispose() {
    this._textSelection$.complete();
    this._refreshSelection$.complete();
  }
  _setCurrentSelectionNotRefresh(param) {
    this._currentSelection = param;
  }
  _getTextRanges(param) {
    var _a;
    if (param == null) {
      return;
    }
    const { unitId, subUnitId = "" } = param;
    return (_a = this._textSelectionInfo.get(unitId)) == null ? void 0 : _a.get(subUnitId);
  }
  _refresh(param) {
    const allTextSelectionInfo = this._getTextRanges(param);
    if (allTextSelectionInfo == null) {
      return;
    }
    const { textRanges, rectRanges } = allTextSelectionInfo;
    const docRanges = [...textRanges, ...rectRanges];
    const { unitId, subUnitId } = param;
    this._refreshSelection$.next({
      unitId,
      subUnitId,
      docRanges,
      isEditing: false
    });
  }
  _replaceByParam(insertParam) {
    const { unitId, subUnitId, ...selectionInsertParam } = insertParam;
    if (!this._textSelectionInfo.has(unitId)) {
      this._textSelectionInfo.set(unitId, /* @__PURE__ */ new Map());
    }
    const unitTextRange = this._textSelectionInfo.get(unitId);
    unitTextRange.set(subUnitId, { ...selectionInsertParam });
  }
  _addByParam(insertParam) {
    const { unitId, subUnitId, ...selectionInsertParam } = insertParam;
    if (!this._textSelectionInfo.has(unitId)) {
      this._textSelectionInfo.set(unitId, /* @__PURE__ */ new Map());
    }
    const unitTextRange = this._textSelectionInfo.get(unitId);
    if (!unitTextRange.has(subUnitId)) {
      unitTextRange.set(subUnitId, { ...selectionInsertParam });
    } else {
      const OldTextRanges = unitTextRange.get(subUnitId);
      OldTextRanges.textRanges.push(...insertParam.textRanges);
    }
  }
};
DocSelectionManagerService = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IUniverInstanceService)
], DocSelectionManagerService);

// ../packages/docs/src/services/doc-skeleton-manager.service.ts
var DocSkeletonManagerService = class extends RxDisposable {
  constructor(_context, _localeService, _univerInstanceService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_localeService", _localeService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_skeleton");
    __publicField(this, "_docViewModel");
    __publicField(this, "_currentSkeleton$", new BehaviorSubject(null));
    __publicField(this, "currentSkeleton$", this._currentSkeleton$.asObservable());
    // CurrentSkeletonBefore for pre-triggered logic during registration
    __publicField(this, "_currentSkeletonBefore$", new BehaviorSubject(null));
    __publicField(this, "currentSkeletonBefore$", this._currentSkeletonBefore$.asObservable());
    __publicField(this, "_currentViewModel$", new BehaviorSubject(null));
    __publicField(this, "currentViewModel$", this._currentViewModel$.asObservable());
    this._init();
    this._univerInstanceService.getCurrentTypeOfUnit$(1 /* UNIVER_DOC */).pipe(takeUntil(this.dispose$)).subscribe((documentModel) => {
      if (documentModel && documentModel.getUnitId() === this._context.unitId) {
        this._update(documentModel);
      }
    });
  }
  dispose() {
    super.dispose();
    this._currentSkeletonBefore$.complete();
    this._currentSkeleton$.complete();
  }
  getSkeleton() {
    return this._skeleton;
  }
  getViewModel() {
    return this._docViewModel;
  }
  _init() {
    const documentDataModel = this._context.unit;
    this._update(documentDataModel);
  }
  _update(documentDataModel) {
    const unitId = this._context.unitId;
    if (documentDataModel.getBody() == null) {
      return;
    }
    if (this._docViewModel && isInternalEditorID(unitId)) {
      this._docViewModel.reset(documentDataModel);
      this._context.unit = documentDataModel;
    } else if (!this._docViewModel) {
      this._docViewModel = this._buildDocViewModel(documentDataModel);
    }
    if (!this._skeleton) {
      this._skeleton = this._buildSkeleton(this._docViewModel);
    }
    const skeleton = this._skeleton;
    skeleton.calculate();
    this._currentSkeletonBefore$.next(skeleton);
    this._currentSkeleton$.next(skeleton);
    this._currentViewModel$.next(this._docViewModel);
  }
  _buildSkeleton(documentViewModel) {
    return DocumentSkeleton.create(documentViewModel, this._localeService);
  }
  _buildDocViewModel(documentDataModel) {
    return new DocumentViewModel(documentDataModel);
  }
};
DocSkeletonManagerService = __decorateClass([
  __decorateParam(1, Inject(LocaleService)),
  __decorateParam(2, IUniverInstanceService)
], DocSkeletonManagerService);

// ../packages/docs/src/services/doc-state-emit.service.ts
var DocStateEmitService = class extends RxDisposable {
  constructor() {
    super();
    __publicField(this, "_docStateChangeParams$", new BehaviorSubject(null));
    __publicField(this, "docStateChangeParams$", this._docStateChangeParams$.asObservable());
  }
  emitStateChangeInfo(params) {
    this._docStateChangeParams$.next(params);
  }
  dispose() {
    super.dispose();
    this._docStateChangeParams$.complete();
  }
};

// ../packages/docs/src/commands/mutations/core-editing.mutation.ts
var RichTextEditingMutationId = "doc.mutation.rich-text-editing";
function getSegmentType(documentDataModel, segmentId) {
  if (!segmentId) {
    return "body";
  }
  const { headers, footers } = documentDataModel.getSnapshot();
  if (headers == null ? void 0 : headers[segmentId]) {
    return "header";
  }
  if (footers == null ? void 0 : footers[segmentId]) {
    return "footer";
  }
  return "body";
}
function assertValidDocBodyStructure(documentDataModel, segmentId) {
  const segmentModel = documentDataModel.getSelfOrHeaderFooterModel(segmentId);
  const body = segmentModel == null ? void 0 : segmentModel.getBody();
  if (!body) {
    return;
  }
  const segmentType = getSegmentType(documentDataModel, segmentId);
  const issues = validateDocBodyStructure(body, { segmentType, segmentId: segmentId || void 0 });
  if (!issues.length) {
    return;
  }
  const detail = issues.map((issue) => `${issue.code}${issue.index == null ? "" : `@${issue.index}`}`).join(", ");
  const segmentLabel = segmentId ? `${segmentType} ${segmentId}` : segmentType;
  throw new Error(`[DocStructure] ${segmentLabel}: ${detail}`);
}
var RichTextEditingMutation = {
  id: RichTextEditingMutationId,
  type: 2 /* MUTATION */,
  // eslint-disable-next-line max-lines-per-function
  handler: (accessor, params, options) => {
    var _a, _b;
    const {
      unitId,
      segmentId = "",
      actions,
      textRanges,
      prevTextRanges,
      trigger,
      noHistory,
      isCompositionEnd,
      noNeedSetTextRange,
      debounce,
      isEditing = true,
      isSync: paramsIsSync,
      syncer
    } = params;
    const isSync = paramsIsSync || (options == null ? void 0 : options.fromCollab) || (options == null ? void 0 : options.fromChangeset);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const renderManagerService = accessor.get(IRenderManagerService);
    const docStateEmitService = accessor.get(DocStateEmitService);
    const documentDataModel = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    const documentViewModel = (_a = renderManagerService.getRenderUnitById(unitId)) == null ? void 0 : _a.with(DocSkeletonManagerService).getViewModel();
    if (documentDataModel == null) {
      throw new Error(`DocumentDataModel not found for unitId: ${unitId}`);
    }
    const docSelectionManagerService = accessor.get(DocSelectionManagerService);
    const docRanges = (_b = docSelectionManagerService.getDocRanges()) != null ? _b : [];
    const disabled = !!documentDataModel.getSnapshot().disabled;
    if (JSONX.isNoop(actions) || actions && actions.length === 0 || disabled) {
      return {
        unitId,
        actions: [],
        textRanges: docRanges
      };
    }
    const undoActions = JSONX.invertWithDoc(actions, documentDataModel.getSnapshot());
    documentDataModel.apply(actions);
    try {
      assertValidDocBodyStructure(documentDataModel, segmentId);
    } catch (error) {
      documentDataModel.apply(undoActions);
      throw error;
    }
    documentViewModel == null ? void 0 : documentViewModel.reset(documentDataModel);
    if (!noNeedSetTextRange && textRanges && trigger != null && !isSync) {
      queueMicrotask(() => {
        docSelectionManagerService.replaceDocRanges(textRanges, { unitId, subUnitId: unitId }, isEditing, params.options);
      });
    }
    const changeState = {
      commandId: RichTextEditingMutationId,
      unitId,
      segmentId,
      trigger,
      noHistory,
      debounce,
      redoState: {
        actions,
        textRanges
      },
      undoState: {
        actions: undoActions,
        textRanges: prevTextRanges != null ? prevTextRanges : docRanges
      },
      isCompositionEnd,
      isSync,
      syncer
    };
    docStateEmitService.emitStateChangeInfo(changeState);
    return {
      unitId,
      actions: undoActions,
      textRanges: docRanges
    };
  }
};

// ../packages/docs/src/commands/commands/core-editing.command.ts
var InsertTextCommand = {
  id: "doc.command.insert-text",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b, _c;
    const commandService = accessor.get(ICommandService);
    const { range, segmentId, body, unitId, cursorOffset } = params;
    const docSelectionManagerService = accessor.get(DocSelectionManagerService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const docDataModel = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    if (docDataModel == null) {
      return false;
    }
    const activeRange = docSelectionManagerService.getActiveTextRange();
    const rangeSegmentId = "segmentId" in range ? range.segmentId : void 0;
    const targetSegmentId = (_b = (_a = segmentId != null ? segmentId : rangeSegmentId) != null ? _a : activeRange == null ? void 0 : activeRange.segmentId) != null ? _b : "";
    const originBody = (_c = docDataModel.getSelfOrHeaderFooterModel(targetSegmentId)) == null ? void 0 : _c.getBody();
    if (originBody == null) {
      return false;
    }
    const { startOffset, collapsed } = range;
    const cursorMove = cursorOffset != null ? cursorOffset : body.dataStream.length;
    const textRanges = [
      {
        startOffset: startOffset + cursorMove,
        endOffset: startOffset + cursorMove,
        style: activeRange == null ? void 0 : activeRange.style,
        collapsed
      }
    ];
    const doMutation = {
      id: RichTextEditingMutation.id,
      params: {
        unitId,
        actions: [],
        textRanges,
        debounce: true
      }
    };
    const textX = new TextX();
    const jsonX = JSONX.getInstance();
    if (collapsed) {
      if (startOffset > 0) {
        textX.push({
          t: "r" /* RETAIN */,
          len: startOffset
        });
      }
      textX.push({
        t: "i" /* INSERT */,
        body,
        len: body.dataStream.length
      });
    } else {
      const dos = BuildTextUtils.selection.delete([range], originBody, 0, body);
      textX.push(...dos);
    }
    doMutation.params.textRanges = [{
      startOffset: startOffset + cursorMove,
      endOffset: startOffset + cursorMove,
      collapsed
    }];
    const path = getRichTextEditPath(docDataModel, segmentId);
    doMutation.params.actions = jsonX.editOp(textX.serialize(), path);
    const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
    return Boolean(result);
  }
};
var DeleteTextCommand = {
  id: "doc.command.delete-text",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b;
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const { range, segmentId, unitId, direction, len = 1 } = params;
    const docDataModel = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    const body = (_a = docDataModel == null ? void 0 : docDataModel.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _a.getBody();
    if (docDataModel == null || body == null) {
      return false;
    }
    const { startOffset } = range;
    let start = direction === 0 /* LEFT */ ? startOffset - len : startOffset;
    let end = direction === 0 /* LEFT */ ? startOffset - 1 : startOffset + len - 1;
    const customRange = (_b = body.customRanges) == null ? void 0 : _b.find((customRange2) => customRange2.startIndex <= start && customRange2.endIndex >= end);
    if (customRange == null ? void 0 : customRange.wholeEntity) {
      start = customRange.startIndex;
      end = Math.max(end, customRange.endIndex);
    }
    const doMutation = {
      id: RichTextEditingMutation.id,
      params: {
        unitId,
        actions: [],
        textRanges: [{
          startOffset: start,
          endOffset: start,
          collapsed: true
        }],
        debounce: true
      }
    };
    const textX = new TextX();
    const jsonX = JSONX.getInstance();
    textX.push(...BuildTextUtils.selection.delete([{
      ...range,
      startOffset: start,
      endOffset: end + 1,
      collapsed: false
    }], body));
    const path = getRichTextEditPath(docDataModel, segmentId);
    doMutation.params.actions = jsonX.editOp(textX.serialize(), path);
    const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
    return Boolean(result);
  }
};
var UpdateTextCommand = {
  id: "doc.command.update-text",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    const { range, segmentId, updateBody, coverType, unitId, textRanges } = params;
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const docDataModel = univerInstanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */);
    if (docDataModel == null) {
      return false;
    }
    const doMutation = {
      id: RichTextEditingMutation.id,
      params: {
        unitId,
        actions: [],
        textRanges
      }
    };
    const textX = new TextX();
    const jsonX = JSONX.getInstance();
    const { startOffset, endOffset } = range;
    textX.push({
      t: "r" /* RETAIN */,
      len: startOffset
    });
    textX.push({
      t: "r" /* RETAIN */,
      body: updateBody,
      len: endOffset - startOffset,
      coverType
    });
    const path = getRichTextEditPath(docDataModel, segmentId);
    doMutation.params.actions = jsonX.editOp(textX.serialize(), path);
    const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
    return Boolean(result);
  }
};

// ../packages/docs/src/commands/commands/create-header-footer.command.ts
function getEmptyHeaderFooterBody() {
  return {
    dataStream: "\r\n",
    textRuns: [{
      st: 0,
      ed: 0,
      ts: {
        fs: 9
      }
    }],
    customBlocks: [],
    paragraphs: [
      {
        startIndex: 0,
        paragraphId: createParagraphId(/* @__PURE__ */ new Set()),
        paragraphStyle: {
          spaceAbove: { v: 0 },
          lineSpacing: 1.5,
          spaceBelow: { v: 0 }
        }
      }
    ],
    sectionBreaks: [
      {
        sectionId: createSectionId(/* @__PURE__ */ new Set()),
        startIndex: 1
      }
    ]
  };
}
function createHeaderFooterAction(segmentId, createType, headerFooterConfig, actions, createMode = "single", configPath = ["documentStyle"]) {
  const jsonX = JSONX.getInstance();
  const ID_LEN = 6;
  const firstSegmentId = segmentId != null ? segmentId : generateRandomId(ID_LEN);
  const isHeader = createType === 2 /* DEFAULT_HEADER */ || createType === 0 /* FIRST_PAGE_HEADER */ || createType === 4 /* EVEN_PAGE_HEADER */;
  const insertAction = jsonX.insertOp([isHeader ? "headers" : "footers", firstSegmentId], {
    [isHeader ? "headerId" : "footerId"]: firstSegmentId,
    body: getEmptyHeaderFooterBody()
  });
  actions.push(insertAction);
  let key = "defaultHeaderId";
  let pairKey = "defaultFooterId";
  switch (createType) {
    case 2 /* DEFAULT_HEADER */:
      key = "defaultHeaderId";
      pairKey = "defaultFooterId";
      break;
    case 3 /* DEFAULT_FOOTER */:
      key = "defaultFooterId";
      pairKey = "defaultHeaderId";
      break;
    case 0 /* FIRST_PAGE_HEADER */:
      key = "firstPageHeaderId";
      pairKey = "firstPageFooterId";
      break;
    case 1 /* FIRST_PAGE_FOOTER */:
      key = "firstPageFooterId";
      pairKey = "firstPageHeaderId";
      break;
    case 4 /* EVEN_PAGE_HEADER */:
      key = "evenPageHeaderId";
      pairKey = "evenPageFooterId";
      break;
    case 5 /* EVEN_PAGE_FOOTER */:
      key = "evenPageFooterId";
      pairKey = "evenPageHeaderId";
      break;
    default:
      throw new Error(`Unknown header footer type: ${createType}`);
  }
  const linkedSegmentIds = [[key, firstSegmentId]];
  if (createMode === "pair" && pairKey != null) {
    const secondSegmentId = generateRandomId(ID_LEN);
    const insertPairAction = jsonX.insertOp([isHeader ? "footers" : "headers", secondSegmentId], {
      [isHeader ? "footerId" : "headerId"]: secondSegmentId,
      body: getEmptyHeaderFooterBody()
    });
    actions.push(insertPairAction);
    linkedSegmentIds.push([pairKey, secondSegmentId]);
  }
  for (const [k, id] of linkedSegmentIds) {
    if (headerFooterConfig[k] != null) {
      const replaceAction = jsonX.replaceOp([...configPath, k], headerFooterConfig[k], id);
      actions.push(replaceAction);
    } else {
      const insertAction2 = jsonX.insertOp([...configPath, k], id);
      actions.push(insertAction2);
    }
  }
  return actions;
}
var CreateHeaderFooterCommand = {
  id: "doc.command.create-header-footer",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b, _c;
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const { unitId, segmentId, createType, headerFooterProps, createMode = "single", sectionId } = params;
    const docDataModel = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
    if (docDataModel == null) {
      return false;
    }
    const { documentStyle, body } = docDataModel.getSnapshot();
    if (documentStyle.documentFlavor === 2 /* MODERN */) {
      return false;
    }
    const rawActions = [];
    const jsonX = JSONX.getInstance();
    const sectionIndex = sectionId == null ? -1 : (_b = (_a = body == null ? void 0 : body.sectionBreaks) == null ? void 0 : _a.findIndex((section) => section.sectionId === sectionId)) != null ? _b : -1;
    const sectionBreak = sectionIndex < 0 ? void 0 : (_c = body == null ? void 0 : body.sectionBreaks) == null ? void 0 : _c[sectionIndex];
    if (sectionId != null && !sectionBreak) {
      return false;
    }
    const headerFooterConfig = sectionBreak != null ? sectionBreak : documentStyle;
    const configPath = sectionId == null ? ["documentStyle"] : ["body", "sectionBreaks", sectionIndex];
    if (createType != null) {
      createHeaderFooterAction(segmentId, createType, headerFooterConfig, rawActions, createMode, configPath);
    }
    if (headerFooterProps != null) {
      Object.keys(headerFooterProps).forEach((key) => {
        const value = headerFooterProps[key];
        const oldValue = headerFooterConfig[key];
        if (value === oldValue) {
          return;
        }
        const action = oldValue === void 0 ? jsonX.insertOp([...configPath, key], value) : jsonX.replaceOp([...configPath, key], oldValue, value);
        rawActions.push(action);
      });
    }
    if (rawActions.length === 0) {
      return false;
    }
    const textRanges = [{
      startOffset: 0,
      endOffset: 0,
      collapsed: true
    }];
    const doMutation = {
      id: RichTextEditingMutation.id,
      params: {
        unitId,
        actions: rawActions.reduce((acc, cur) => JSONX.compose(acc, cur), null),
        textRanges,
        debounce: true
      }
    };
    if ((headerFooterProps == null ? void 0 : headerFooterProps.marginFooter) != null || (headerFooterProps == null ? void 0 : headerFooterProps.marginHeader) != null) {
      doMutation.params.noNeedSetTextRange = true;
    }
    const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
    return Boolean(result);
  }
};

// ../packages/docs/src/commands/commands/set-document-default-paragraph-style.command.ts
var SetDocumentDefaultParagraphStyleCommand = {
  id: "doc.command.set-default-paragraph-style",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    if (params == null) {
      return false;
    }
    const commandService = accessor.get(ICommandService);
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const documentDataModel = univerInstanceService.getUnit(params.unitId, 1 /* UNIVER_DOC */);
    if (documentDataModel == null) {
      return false;
    }
    const oldStyle = documentDataModel.getSnapshot().documentStyle.defaultParagraphStyle;
    const jsonX = JSONX.getInstance();
    const path = ["documentStyle", "defaultParagraphStyle"];
    const rawActions = [];
    if (params.defaultParagraphStyle == null) {
      if (oldStyle != null) {
        rawActions.push(jsonX.removeOp(path, oldStyle));
      }
    } else if (oldStyle == null) {
      const newStyle = Object.fromEntries(
        Object.entries(params.defaultParagraphStyle).filter(([, value]) => value != null).map(([key, value]) => [key, Tools.deepClone(value)])
      );
      if (Object.keys(newStyle).length > 0) {
        rawActions.push(jsonX.insertOp(path, newStyle));
      }
    } else {
      Object.entries(params.defaultParagraphStyle).forEach(([key, value]) => {
        const styleKey = key;
        const oldValue = oldStyle[styleKey];
        const propertyPath = [...path, key];
        if (value == null) {
          if (oldValue != null) {
            rawActions.push(jsonX.removeOp(propertyPath, oldValue));
          }
        } else if (oldValue == null) {
          rawActions.push(jsonX.insertOp(propertyPath, Tools.deepClone(value)));
        } else {
          rawActions.push(jsonX.replaceOp(propertyPath, oldValue, Tools.deepClone(value)));
        }
      });
    }
    const actions = rawActions.reduce(
      (acc, action) => JSONX.compose(acc, action),
      null
    );
    if (rawActions.length === 0 || JSONX.isNoop(actions)) {
      return false;
    }
    const mutation = {
      id: RichTextEditingMutation.id,
      params: {
        unitId: params.unitId,
        actions,
        textRanges: null,
        noNeedSetTextRange: true,
        debounce: true,
        isEditing: false
      }
    };
    return Boolean(commandService.syncExecuteCommand(mutation.id, mutation.params));
  }
};

// ../packages/docs/src/utils/sections.ts
function getTopLevelSectionBreaks(body) {
  var _a;
  const sectionBreakByIndex = new Map(((_a = body.sectionBreaks) != null ? _a : []).map((sectionBreak) => [sectionBreak.startIndex, sectionBreak]));
  const result = [];
  let tableCellDepth = 0;
  let columnDepth = 0;
  for (let index = 0; index < body.dataStream.length; index++) {
    const token = body.dataStream[index];
    if (token === "" /* TABLE_CELL_START */) {
      tableCellDepth++;
    } else if (token === "" /* TABLE_CELL_END */) {
      tableCellDepth = Math.max(0, tableCellDepth - 1);
    } else if (token === "" /* COLUMN_START */) {
      columnDepth++;
    } else if (token === "" /* COLUMN_END */) {
      columnDepth = Math.max(0, columnDepth - 1);
    } else if (token === "\n" /* SECTION_BREAK */ && tableCellDepth === 0 && columnDepth === 0) {
      const sectionBreak = sectionBreakByIndex.get(index);
      if (sectionBreak) {
        result.push(sectionBreak);
      }
    }
  }
  return result;
}

// ../packages/docs/src/commands/commands/set-section-header-footer-link.command.ts
var SetSectionHeaderFooterLinkCommand = {
  id: "doc.command.set-section-header-footer-link",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b;
    if (!params) {
      return false;
    }
    const instanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);
    const documentDataModel = instanceService.getUnit(params.unitId, 1 /* UNIVER_DOC */);
    const snapshot = documentDataModel == null ? void 0 : documentDataModel.getSnapshot();
    if (!documentDataModel || !(snapshot == null ? void 0 : snapshot.body) || snapshot.documentStyle.documentFlavor !== 1 /* TRADITIONAL */) {
      return false;
    }
    const sections = getTopLevelSectionBreaks(snapshot.body);
    const sectionIndex = sections.findIndex((section) => section.sectionId === params.sectionId);
    if (sectionIndex <= 0) {
      return false;
    }
    const storageIndex = (_b = (_a = snapshot.body.sectionBreaks) == null ? void 0 : _a.findIndex((item) => item.sectionId === params.sectionId)) != null ? _b : -1;
    if (storageIndex < 0) {
      return false;
    }
    const key = getSectionHeaderFooterReferenceKey(params.kind, params.variant);
    const context = { snapshot, sections, sectionIndex, storageIndex, key };
    const rawActions = params.linkedToPrevious ? buildLinkActions(context, params.kind) : buildUnlinkActions(context, params.kind, params.segmentId);
    if (!rawActions) {
      return false;
    }
    const mutation = {
      id: RichTextEditingMutation.id,
      params: {
        unitId: params.unitId,
        actions: rawActions.reduce((actions, action) => JSONX.compose(actions, action), null),
        textRanges: null,
        noNeedSetTextRange: true,
        debounce: true,
        isEditing: false,
        trigger: SetSectionHeaderFooterLinkCommand.id
      }
    };
    return Boolean(commandService.syncExecuteCommand(mutation.id, mutation.params));
  }
};
function buildLinkActions(context, kind) {
  const { snapshot, sections, sectionIndex, storageIndex, key } = context;
  const section = sections[sectionIndex];
  const explicitSegmentId = section[key];
  if (typeof explicitSegmentId !== "string" || !explicitSegmentId) {
    return null;
  }
  const jsonX = JSONX.getInstance();
  const actions = [jsonX.removeOp(["body", "sectionBreaks", storageIndex, key], explicitSegmentId)];
  const referenceKeys = kind === "header" ? ["defaultHeaderId", "firstPageHeaderId", "evenPageHeaderId"] : ["defaultFooterId", "firstPageFooterId", "evenPageFooterId"];
  const referencedByDocument = referenceKeys.some((referenceKey) => snapshot.documentStyle[referenceKey] === explicitSegmentId);
  const referencedBySection = sections.some((item) => referenceKeys.some((referenceKey) => !(item.sectionId === section.sectionId && referenceKey === key) && item[referenceKey] === explicitSegmentId));
  const resources = kind === "header" ? snapshot.headers : snapshot.footers;
  if (!referencedByDocument && !referencedBySection && (resources == null ? void 0 : resources[explicitSegmentId])) {
    actions.push(jsonX.removeOp([kind === "header" ? "headers" : "footers", explicitSegmentId], resources[explicitSegmentId]));
  }
  return actions;
}
function buildUnlinkActions(context, kind, requestedSegmentId) {
  const { snapshot, sections, sectionIndex, storageIndex, key } = context;
  const explicitSegmentId = sections[sectionIndex][key];
  if (typeof explicitSegmentId === "string" && explicitSegmentId) {
    return null;
  }
  const sourceSegmentId = resolveSectionHeaderFooterReference(snapshot.documentStyle, sections, sectionIndex - 1, key).segmentId;
  const segmentId = requestedSegmentId != null ? requestedSegmentId : generateRandomId(6);
  const resources = kind === "header" ? snapshot.headers : snapshot.footers;
  if (resources == null ? void 0 : resources[segmentId]) {
    return null;
  }
  const source = sourceSegmentId ? resources == null ? void 0 : resources[sourceSegmentId] : void 0;
  const idKey = kind === "header" ? "headerId" : "footerId";
  const resource = source ? { ...Tools.deepClone(source), [idKey]: segmentId } : { [idKey]: segmentId, body: getEmptyHeaderFooterBody() };
  const jsonX = JSONX.getInstance();
  return [
    jsonX.insertOp([kind === "header" ? "headers" : "footers", segmentId], resource),
    jsonX.insertOp(["body", "sectionBreaks", storageIndex, key], segmentId)
  ];
}

// ../packages/docs/src/utils/section-columns.ts
function getSectionContentWidth(documentStyle, section) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const pageWidth = (_d = (_c = (_a = section == null ? void 0 : section.pageSize) == null ? void 0 : _a.width) != null ? _c : (_b = documentStyle == null ? void 0 : documentStyle.pageSize) == null ? void 0 : _b.width) != null ? _d : PAGE_SIZE["A4" /* A4 */].width;
  return Math.max(
    0,
    pageWidth - ((_f = (_e = section == null ? void 0 : section.marginLeft) != null ? _e : documentStyle == null ? void 0 : documentStyle.marginLeft) != null ? _f : 72) - ((_h = (_g = section == null ? void 0 : section.marginRight) != null ? _g : documentStyle == null ? void 0 : documentStyle.marginRight) != null ? _h : 72)
  );
}
function createSectionColumnProperties(documentStyle, section, columnCount, gap, widths) {
  if (columnCount <= 1) {
    return [];
  }
  const safeGap = Math.max(0, gap);
  const contentWidth = getSectionContentWidth(documentStyle, section);
  const availableWidth = Math.max(0, contentWidth - safeGap * (columnCount - 1));
  if (widths) {
    if (widths.some((width) => !Number.isFinite(width) || width < 0)) {
      throw new RangeError("Section column widths must be finite and non-negative.");
    }
    if (widths.reduce((sum, width) => sum + width, 0) > availableWidth) {
      throw new RangeError("Section columns exceed the available page content width.");
    }
  }
  const resolvedWidths = widths != null ? widths : Array.from({ length: columnCount }, () => availableWidth / columnCount);
  return resolvedWidths.map((width, index) => ({
    width: Math.max(0, width),
    paddingEnd: index === columnCount - 1 ? 0 : safeGap
  }));
}

// ../packages/docs/src/commands/commands/update-document-section.command.ts
var UpdateDocumentSectionCommand = {
  id: "doc.command.update-section",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    if (!(params == null ? void 0 : params.updates.length) || params.updates.some(({ sectionId, config }) => !sectionId || Object.keys(config).length === 0)) {
      return false;
    }
    const instanceService = accessor.get(IUniverInstanceService);
    const commandService = accessor.get(ICommandService);
    const documentDataModel = instanceService.getUnit(params.unitId, 1 /* UNIVER_DOC */);
    if (!documentDataModel || documentDataModel.getDocumentStyle().documentFlavor !== 1 /* TRADITIONAL */) {
      return false;
    }
    const body = documentDataModel.getBody();
    if (!body) {
      return false;
    }
    const updates = new Map(params.updates.map(({ sectionId, config }) => [sectionId, config]));
    if (updates.size !== params.updates.length) {
      return false;
    }
    const selectedIds = new Set(updates.keys());
    const sections = getTopLevelSectionBreaks(body).filter((section) => selectedIds.has(section.sectionId)).sort((left, right) => left.startIndex - right.startIndex);
    if (sections.length !== selectedIds.size) {
      return false;
    }
    const documentStyle = documentDataModel.getDocumentStyle();
    if (sections.some((section) => !isValidSectionConfig(
      { ...section, ...updates.get(section.sectionId) },
      documentStyle
    ))) {
      return false;
    }
    const cursor = new MemoryCursor();
    const textX = new TextX();
    for (const section of sections) {
      textX.push({ t: "r" /* RETAIN */, len: section.startIndex - cursor.cursor });
      textX.push({
        t: "r" /* RETAIN */,
        len: 1,
        coverType: 1 /* REPLACE */,
        body: {
          dataStream: "",
          sectionBreaks: [{
            ...Tools.deepClone(section),
            ...Tools.deepClone(updates.get(section.sectionId)),
            sectionId: section.sectionId,
            startIndex: 0
          }]
        }
      });
      cursor.moveCursorTo(section.startIndex + 1);
    }
    const jsonX = JSONX.getInstance();
    const mutation = {
      id: RichTextEditingMutation.id,
      params: {
        unitId: params.unitId,
        actions: jsonX.editOp(textX.serialize(), getRichTextEditPath(documentDataModel)),
        textRanges: null,
        noNeedSetTextRange: true,
        debounce: true,
        isEditing: false,
        trigger: UpdateDocumentSectionCommand.id
      }
    };
    return Boolean(commandService.syncExecuteCommand(mutation.id, mutation.params));
  }
};
var InsertDocumentSectionBreakCommand = {
  id: "doc.command.insert-section-break",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    var _a, _b;
    if (!params) {
      return false;
    }
    const context = getTraditionalDocumentContext(accessor, params.unitId);
    if (!context || !params.sectionId || !Number.isInteger(params.offset) || params.nextSectionType != null && !isValidEnumValue(SectionType, params.nextSectionType)) {
      return false;
    }
    const { body, documentDataModel, commandService } = context;
    if (!isValidTopLevelInsertionOffset(body, params.offset) || ((_a = body.sectionBreaks) == null ? void 0 : _a.some((section) => section.sectionId === params.sectionId))) {
      return false;
    }
    const nextSection = params.nextSectionType == null ? void 0 : getTopLevelSectionBreaks(body).find((section) => section.startIndex >= params.offset);
    if (params.nextSectionType != null && !nextSection) {
      return false;
    }
    const textX = new TextX();
    textX.retain(params.offset);
    textX.insert(1, {
      dataStream: "\n" /* SECTION_BREAK */,
      sectionBreaks: [{
        ...Tools.deepClone((_b = params.config) != null ? _b : {}),
        sectionId: params.sectionId,
        startIndex: 0
      }]
    });
    if (nextSection && params.nextSectionType != null) {
      textX.retain(nextSection.startIndex - params.offset);
      textX.push({
        t: "r" /* RETAIN */,
        len: 1,
        coverType: 1 /* REPLACE */,
        body: {
          dataStream: "",
          sectionBreaks: [{
            ...Tools.deepClone(nextSection),
            sectionType: params.nextSectionType,
            startIndex: 0
          }]
        }
      });
    }
    return executeSectionTextX(commandService, documentDataModel, textX, InsertDocumentSectionBreakCommand.id);
  }
};
var InsertDocumentColumnBreakCommand = {
  id: "doc.command.insert-column-break",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    if (!params) {
      return false;
    }
    const context = getTraditionalDocumentContext(accessor, params.unitId);
    if (!context || !isValidTopLevelInsertionOffset(context.body, params.offset)) {
      return false;
    }
    const textX = new TextX();
    textX.retain(params.offset);
    textX.insert(1, {
      dataStream: "\v" /* COLUMN_BREAK */,
      customRanges: [{
        startIndex: 0,
        endIndex: 0,
        rangeId: `docx-break-${generateRandomId()}`,
        rangeType: 5 /* CUSTOM */,
        wholeEntity: true,
        properties: { docxBreakType: "column" /* COLUMN */ }
      }]
    });
    return executeSectionTextX(context.commandService, context.documentDataModel, textX, InsertDocumentColumnBreakCommand.id);
  }
};
var DeleteDocumentSectionBreakCommand = {
  id: "doc.command.delete-section-break",
  type: 0 /* COMMAND */,
  handler: (accessor, params) => {
    if (!params) {
      return false;
    }
    const context = getTraditionalDocumentContext(accessor, params.unitId);
    if (!context || !params.sectionId) {
      return false;
    }
    const sections = getTopLevelSectionBreaks(context.body);
    if (sections.length <= 1) {
      return false;
    }
    const section = sections.find((item) => item.sectionId === params.sectionId);
    if (!section || section === sections.at(-1)) {
      return false;
    }
    const textX = new TextX();
    textX.retain(section.startIndex);
    textX.delete(1);
    return executeSectionTextX(context.commandService, context.documentDataModel, textX, DeleteDocumentSectionBreakCommand.id);
  }
};
function getTraditionalDocumentContext(accessor, unitId) {
  if (!unitId) {
    return null;
  }
  const instanceService = accessor.get(IUniverInstanceService);
  const documentDataModel = instanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
  const body = documentDataModel == null ? void 0 : documentDataModel.getBody();
  if (!documentDataModel || !body || documentDataModel.getDocumentStyle().documentFlavor !== 1 /* TRADITIONAL */) {
    return null;
  }
  return {
    body,
    documentDataModel,
    commandService: accessor.get(ICommandService)
  };
}
function isValidTopLevelInsertionOffset(body, offset) {
  var _a, _b, _c;
  return Number.isInteger(offset) && offset >= 0 && offset <= body.dataStream.length && !((_a = body.tables) == null ? void 0 : _a.some((range) => containsInteriorInsertionOffset(getTableRangeInterval(range), offset))) && !((_b = body.columnGroups) == null ? void 0 : _b.some((range) => containsInteriorInsertionOffset(getColumnGroupRangeInterval(range), offset))) && !((_c = body.blockRanges) == null ? void 0 : _c.some((range) => containsInteriorInsertionOffset(getBlockRangeInterval(range), offset)));
}
function isValidSectionConfig(section, documentStyle) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  if (section.sectionType != null && !isValidEnumValue(SectionType, section.sectionType)) {
    return false;
  }
  if (section.pageOrient != null && !isValidEnumValue(PageOrientType, section.pageOrient)) {
    return false;
  }
  if (section.columnSeparatorType != null && !isValidEnumValue(ColumnSeparatorType, section.columnSeparatorType)) {
    return false;
  }
  if (section.pageNumberStart != null && (!Number.isInteger(section.pageNumberStart) || section.pageNumberStart < 1)) {
    return false;
  }
  if (section.pageSize && (!isPositiveFinite(section.pageSize.width) || !isPositiveFinite(section.pageSize.height))) {
    return false;
  }
  if ([section.marginTop, section.marginBottom, section.marginLeft, section.marginRight].some((margin) => margin != null && (!Number.isFinite(margin) || margin < 0))) {
    return false;
  }
  const pageSize = (_a = section.pageSize) != null ? _a : documentStyle.pageSize;
  const marginTop = (_c = (_b = section.marginTop) != null ? _b : documentStyle.marginTop) != null ? _c : 0;
  const marginBottom = (_e = (_d = section.marginBottom) != null ? _d : documentStyle.marginBottom) != null ? _e : 0;
  const marginLeft = (_g = (_f = section.marginLeft) != null ? _f : documentStyle.marginLeft) != null ? _g : 0;
  const marginRight = (_i = (_h = section.marginRight) != null ? _h : documentStyle.marginRight) != null ? _i : 0;
  if ((pageSize == null ? void 0 : pageSize.width) != null && marginLeft + marginRight >= pageSize.width || (pageSize == null ? void 0 : pageSize.height) != null && marginTop + marginBottom >= pageSize.height) {
    return false;
  }
  const columns = (_j = section.columnProperties) != null ? _j : [];
  if (columns.some(({ width, paddingEnd }) => !Number.isFinite(width) || !Number.isFinite(paddingEnd) || width < 0 || paddingEnd < 0)) {
    return false;
  }
  return columns.reduce((sum, { width, paddingEnd }) => sum + width + paddingEnd, 0) <= getSectionContentWidth(documentStyle, section);
}
function isPositiveFinite(value) {
  return value != null && Number.isFinite(value) && value > 0;
}
function isValidEnumValue(enumObject, value) {
  return Object.values(enumObject).includes(value);
}
function executeSectionTextX(commandService, documentDataModel, textX, trigger) {
  const actions = JSONX.getInstance().editOp(textX.serialize(), getRichTextEditPath(documentDataModel));
  return Boolean(commandService.syncExecuteCommand(RichTextEditingMutation.id, {
    unitId: documentDataModel.getUnitId(),
    actions,
    textRanges: null,
    noNeedSetTextRange: true,
    debounce: true,
    isEditing: false,
    trigger
  }));
}

// ../packages/docs/src/commands/mutations/docs-rename.mutation.ts
var DocsRenameMutation = {
  id: "doc.mutation.rename-doc",
  type: 2 /* MUTATION */,
  handler: (accessor, params) => {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const doc = univerInstanceService.getUnit(params.unitId, 1 /* UNIVER_DOC */);
    if (!doc) {
      return false;
    }
    doc.setName(params.name);
    return true;
  }
};

// ../packages/docs/src/config/config.ts
var DOCS_PLUGIN_CONFIG_KEY = "docs.config";
var configSymbol = Symbol(DOCS_PLUGIN_CONFIG_KEY);
var defaultPluginConfig = {};

// ../packages/docs/src/controllers/custom-range.controller.ts
var DocCustomRangeController = class extends Disposable {
  constructor(_commandService, _textSelectionManagerService, _univerInstanceService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_textSelectionManagerService", _textSelectionManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    this._initSelectionChange();
  }
  _transformCustomRange(doc, selection) {
    var _a;
    const { startOffset, endOffset, collapsed } = selection;
    const customRanges = (_a = doc.getCustomRanges()) == null ? void 0 : _a.filter((range) => {
      if (!range.wholeEntity) {
        return false;
      }
      if (startOffset <= range.startIndex && endOffset > range.endIndex) {
        return false;
      }
      if (collapsed) {
        return range.startIndex < startOffset && range.endIndex >= endOffset;
      }
      return BuildTextUtils.range.isIntersects(startOffset, endOffset - 1, range.startIndex, range.endIndex);
    });
    if (customRanges == null ? void 0 : customRanges.length) {
      let start = startOffset;
      let end = endOffset;
      customRanges.forEach((range) => {
        start = Math.min(range.startIndex, start);
        end = Math.max(range.endIndex + 1, end);
      });
      return {
        ...selection,
        startOffset: start,
        endOffset: end,
        collapsed: start === end
      };
    }
    return selection;
  }
  _initSelectionChange() {
    this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
      if (commandInfo.id === SetTextSelectionsOperation.id) {
        const params = commandInfo.params;
        const { unitId, ranges, isEditing } = params;
        const doc = this._univerInstanceService.getUnit(unitId);
        if (!doc) {
          return;
        }
        const transformedRanges = ranges.map((range) => this._transformCustomRange(doc, range));
        if (transformedRanges.some((range, i) => ranges[i] !== range)) {
          this._textSelectionManagerService.replaceTextRanges(transformedRanges, isEditing);
        }
      }
    }));
  }
};
DocCustomRangeController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(DocSelectionManagerService)),
  __decorateParam(2, IUniverInstanceService)
], DocCustomRangeController);

// ../packages/docs/src/services/doc-block-move-validator.service.ts
var DocBlockMoveValidatorService = class extends Disposable {
  constructor() {
    super(...arguments);
    __publicField(this, "_validators", []);
    __publicField(this, "_transformers", []);
  }
  registerValidator(validator) {
    this._validators.push(validator);
    return this.disposeWithMe(toDisposable(() => remove(this._validators, validator)));
  }
  registerTransformer(transformer) {
    this._transformers.push(transformer);
    return this.disposeWithMe(toDisposable(() => remove(this._transformers, transformer)));
  }
  canMoveBlock(context) {
    return this._validators.every((validator) => validator(context));
  }
  transformMoveResult(context) {
    return this._transformers.reduce((result, transformer) => transformer({
      ...context,
      result
    }), context.result);
  }
};

// ../packages/docs/src/services/doc-content-insert.service.ts
var DocContentInsertService = class extends Disposable {
  constructor() {
    super(...arguments);
    __publicField(this, "_range", null);
  }
  setInsertRange(range) {
    this._range = range;
  }
  consumeInsertRange(unitId) {
    if (!this._range) {
      return null;
    }
    if (unitId && this._range.unitId !== unitId) {
      return null;
    }
    const range = this._range;
    this._range = null;
    return range;
  }
  clearInsertRange() {
    this._range = null;
  }
};

// ../packages/docs/src/services/doc-state-change-manager.service.ts
var DEBOUNCE_DELAY = 300;
var IDocStateChangeInterceptorService = createIdentifier("doc.state-change-interceptor-service");
var DocStateChangeManagerService = class extends RxDisposable {
  constructor(_undoRedoService, _commandService, _univerInstanceService, _docStateEmitService, _docStateChangeInterceptorService) {
    super();
    __publicField(this, "_undoRedoService", _undoRedoService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_docStateEmitService", _docStateEmitService);
    __publicField(this, "_docStateChangeInterceptorService", _docStateChangeInterceptorService);
    __publicField(this, "_docStateChange$", new BehaviorSubject(null));
    __publicField(this, "docStateChange$", this._docStateChange$.asObservable());
    // This cache used for history compose.
    __publicField(this, "_historyStateCache", /* @__PURE__ */ new Map());
    // This cache used for collaboration state compose.
    __publicField(this, "_changeStateCache", /* @__PURE__ */ new Map());
    __publicField(this, "_historyTimer", null);
    __publicField(this, "_changeStateCacheTimer", null);
    this._initialize();
    this._listenDocStateChange();
  }
  getStateCache(unitId) {
    var _a, _b;
    return {
      history: (_a = this._historyStateCache.get(unitId)) != null ? _a : [],
      collaboration: (_b = this._changeStateCache.get(unitId)) != null ? _b : []
    };
  }
  setStateCache(unitId, cache) {
    this._historyStateCache.set(unitId, cache.history);
    this._changeStateCache.set(unitId, cache.collaboration);
  }
  _setChangeState(changeState) {
    this._cacheChangeState(changeState, "history");
    this._cacheChangeState(changeState, "collaboration");
  }
  _initialize() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((command) => {
        if (command.id === UndoCommandId || command.id === RedoCommandId) {
          const univerDoc = this._univerInstanceService.getCurrentUnitOfType(1 /* UNIVER_DOC */);
          if (univerDoc == null) {
            return;
          }
          const unitId = univerDoc.getUnitId();
          this._pushHistory(unitId);
          this._emitChangeState(unitId);
        }
      })
    );
  }
  _listenDocStateChange() {
    this._docStateEmitService.docStateChangeParams$.pipe(takeUntil(this.dispose$)).subscribe((changeStateInfo) => {
      var _a, _b;
      if (changeStateInfo == null) {
        return;
      }
      const interceptedChangeStateInfo = (_b = (_a = this._docStateChangeInterceptorService) == null ? void 0 : _a.transformChangeStateInfo(changeStateInfo)) != null ? _b : changeStateInfo;
      if (interceptedChangeStateInfo == null) {
        return;
      }
      if (interceptedChangeStateInfo.isSync) {
        return;
      }
      const { isCompositionEnd: _isCompositionEnd, isSync: _isSync, syncer: _syncer, ...changeState } = interceptedChangeStateInfo;
      this._setChangeState(changeState);
    });
  }
  _cacheChangeState(changeState, type = "history") {
    const { trigger, unitId, noHistory, debounce = false } = changeState;
    if (noHistory || type === "history" && trigger == null) {
      return;
    }
    if (type === "history" && (trigger === RedoCommandId || trigger === UndoCommandId)) {
      return;
    }
    const stateCache = type === "history" ? this._historyStateCache : this._changeStateCache;
    const cb = type === "history" ? this._pushHistory.bind(this) : this._emitChangeState.bind(this);
    if (stateCache.has(unitId)) {
      const cacheStates = stateCache.get(unitId);
      cacheStates == null ? void 0 : cacheStates.push(changeState);
    } else {
      stateCache.set(unitId, [changeState]);
    }
    if (debounce) {
      if (type === "history") {
        if (this._historyTimer) {
          clearTimeout(this._historyTimer);
        }
        this._historyTimer = setTimeout(() => {
          cb(unitId);
        }, DEBOUNCE_DELAY);
      } else {
        if (this._changeStateCacheTimer) {
          clearTimeout(this._changeStateCacheTimer);
        }
        this._changeStateCacheTimer = setTimeout(() => {
          cb(unitId);
        }, DEBOUNCE_DELAY);
      }
    } else {
      cb(unitId);
    }
  }
  _pushHistory(unitId) {
    const undoRedoService = this._undoRedoService;
    const cacheStates = this._historyStateCache.get(unitId);
    if (undoRedoService == null || !Array.isArray(cacheStates) || cacheStates.length === 0) {
      return;
    }
    const len = cacheStates.length;
    const commandId = cacheStates[0].commandId;
    const firstState = cacheStates[0];
    const lastState = cacheStates[len - 1];
    const redoParams = {
      unitId,
      actions: cacheStates.reduce((acc, cur) => JSONX.compose(acc, cur.redoState.actions), null),
      textRanges: lastState.redoState.textRanges
    };
    const undoParams = {
      unitId,
      // Always need to put undoParams after redoParams, because `reverse` will change the `cacheStates` order.
      actions: cacheStates.reverse().reduce((acc, cur) => JSONX.compose(acc, cur.undoState.actions), null),
      textRanges: firstState.undoState.textRanges
    };
    undoRedoService.pushUndoRedo({
      unitID: unitId,
      undoMutations: [{ id: commandId, params: undoParams }],
      redoMutations: [{ id: commandId, params: redoParams }]
    });
    cacheStates.length = 0;
  }
  _emitChangeState(unitId) {
    const cacheStates = this._changeStateCache.get(unitId);
    if (!Array.isArray(cacheStates) || cacheStates.length === 0) {
      return;
    }
    const len = cacheStates.length;
    const { commandId, trigger, segmentId, noHistory, debounce } = cacheStates[0];
    const firstState = cacheStates[0];
    const lastState = cacheStates[len - 1];
    const redoState = {
      unitId,
      actions: cacheStates.reduce((acc, cur) => JSONX.compose(acc, cur.redoState.actions), null),
      textRanges: lastState.redoState.textRanges
    };
    const undoState = {
      unitId,
      // Always need to put undoParams after redoParams, because `reverse` will change the `cacheStates` order.
      actions: cacheStates.reverse().reduce((acc, cur) => JSONX.compose(acc, cur.undoState.actions), null),
      textRanges: firstState.undoState.textRanges
    };
    const changeState = {
      commandId,
      unitId,
      trigger,
      redoState,
      undoState,
      segmentId,
      noHistory,
      debounce
    };
    cacheStates.length = 0;
    this._docStateChange$.next(changeState);
  }
};
DocStateChangeManagerService = __decorateClass([
  __decorateParam(0, Optional(IUndoRedoService)),
  __decorateParam(1, ICommandService),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, Inject(DocStateEmitService)),
  __decorateParam(4, Optional(IDocStateChangeInterceptorService))
], DocStateChangeManagerService);

// ../packages/docs/src/plugin.ts
var UniverDocsPlugin = class extends Plugin {
  // static override type = UniverInstanceType.UNIVER_DOC;
  constructor(_config = defaultPluginConfig, _injector, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    const { ...rest } = merge_default(
      {},
      defaultPluginConfig,
      this._config
    );
    this._configService.setConfig(DOCS_PLUGIN_CONFIG_KEY, rest);
  }
  onStarting() {
    this._initializeDependencies();
    this._initializeCommands();
  }
  _initializeCommands() {
    [
      InsertTextCommand,
      DeleteTextCommand,
      UpdateTextCommand,
      CreateHeaderFooterCommand,
      SetDocumentDefaultParagraphStyleCommand,
      SetSectionHeaderFooterLinkCommand,
      UpdateDocumentSectionCommand,
      InsertDocumentSectionBreakCommand,
      InsertDocumentColumnBreakCommand,
      DeleteDocumentSectionBreakCommand,
      RichTextEditingMutation,
      DocsRenameMutation,
      SetTextSelectionsOperation
    ].forEach((command) => {
      this._injector.get(ICommandService).registerCommand(command);
    });
  }
  _initializeDependencies() {
    [
      [DocSelectionManagerService],
      [DocStateEmitService],
      [DocStateChangeManagerService],
      [DocBlockMoveValidatorService],
      [DocContentInsertService],
      [DocCustomRangeController]
    ].forEach((d) => this._injector.add(d));
  }
  onReady() {
    this._injector.get(DocStateChangeManagerService);
    this._injector.get(DocCustomRangeController);
  }
};
__publicField(UniverDocsPlugin, "pluginName", "DOCS_PLUGIN");
__publicField(UniverDocsPlugin, "packageName", package_default.name);
__publicField(UniverDocsPlugin, "version", package_default.version);
UniverDocsPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverDocsPlugin);

// ../packages/docs/src/embed-host-anchor.ts
function isEmbedDocsCustomBlockData(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  const candidate = data;
  return candidate.version === 1 && typeof candidate.embedId === "string" && typeof candidate.hostAnchorId === "string";
}
function shouldUseInlineTextSelectionForDocsCustomBlockDrawing(drawing) {
  const data = drawing && typeof drawing === "object" ? drawing.data : void 0;
  if (!isEmbedDocsCustomBlockData(data)) {
    return true;
  }
  return data.interactionMode === "inline";
}

// ../packages/docs/src/services/doc-interceptor/interceptor-const.ts
var CUSTOM_RANGE = createInterceptorKey("CUSTOM_RANGE");
var CUSTOM_DECORATION = createInterceptorKey("CUSTOM_DECORATION");
var DOC_INTERCEPTOR_POINT = {
  CUSTOM_RANGE,
  CUSTOM_DECORATION
};

// ../packages/docs/src/services/doc-interceptor/doc-interceptor.service.ts
var DocInterceptorService = class extends Disposable {
  constructor(_context, _docSkeletonManagerService) {
    super();
    __publicField(this, "_context", _context);
    __publicField(this, "_docSkeletonManagerService", _docSkeletonManagerService);
    __publicField(this, "_interceptorsByName", /* @__PURE__ */ new Map());
    const viewModel = this._docSkeletonManagerService.getViewModel();
    const unitId = viewModel.getDataModel().getUnitId();
    if (unitId === DOCS_NORMAL_EDITOR_UNIT_ID_KEY || unitId === DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY) {
      return;
    }
    this.disposeWithMe(this.interceptDocumentViewModel(viewModel));
    this.disposeWithMe(this.intercept(DOC_INTERCEPTOR_POINT.CUSTOM_RANGE, {
      priority: -1,
      handler: (data, pos, next) => {
        return next(data);
      }
    }));
    let disposableCollection = new DisposableCollection();
    viewModel.segmentViewModels$.subscribe((segmentViewModels) => {
      disposableCollection.dispose();
      disposableCollection = new DisposableCollection();
      segmentViewModels.forEach((segmentViewModel) => {
        disposableCollection.add(this.interceptDocumentViewModel(segmentViewModel));
      });
    });
    this.disposeWithMe(disposableCollection);
  }
  intercept(name, interceptor) {
    const key = name;
    if (!this._interceptorsByName.has(key)) {
      this._interceptorsByName.set(key, []);
    }
    const interceptors = this._interceptorsByName.get(key);
    interceptors.push(interceptor);
    this._interceptorsByName.set(
      key,
      interceptors.sort((a, b) => {
        var _a, _b;
        return ((_a = b.priority) != null ? _a : 0) - ((_b = a.priority) != null ? _b : 0);
      })
    );
    return this.disposeWithMe(toDisposable(() => remove(this._interceptorsByName.get(key), interceptor)));
  }
  fetchThroughInterceptors(name) {
    const key = name;
    const interceptors = this._interceptorsByName.get(key);
    return composeInterceptors(interceptors || []);
  }
  interceptDocumentViewModel(viewModel) {
    const disposableCollection = new DisposableCollection();
    disposableCollection.add(viewModel.registerCustomRangeInterceptor({
      getCustomRange: (index) => {
        var _a;
        return this.fetchThroughInterceptors(DOC_INTERCEPTOR_POINT.CUSTOM_RANGE)(
          viewModel.getCustomRangeRaw(index),
          {
            index,
            unitId: viewModel.getDataModel().getUnitId(),
            customRanges: (_a = viewModel.getDataModel().getCustomRanges()) != null ? _a : []
          }
        );
      },
      getCustomDecoration: (index) => {
        var _a;
        return this.fetchThroughInterceptors(DOC_INTERCEPTOR_POINT.CUSTOM_DECORATION)(
          viewModel.getCustomDecorationRaw(index),
          {
            index,
            unitId: viewModel.getDataModel().getUnitId(),
            customDecorations: (_a = viewModel.getDataModel().getCustomDecorations()) != null ? _a : []
          }
        );
      }
    }));
    return disposableCollection;
  }
};
DocInterceptorService = __decorateClass([
  __decorateParam(1, Inject(DocSkeletonManagerService))
], DocInterceptorService);

// ../packages/docs/src/utils/custom-range-factory.ts
function addCustomRangeBySelectionFactory(accessor, param) {
  var _a, _b;
  const { rangeId, rangeType, wholeEntity, properties, unitId, selections: propSelection } = param;
  const docSelectionManagerService = accessor.get(DocSelectionManagerService);
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const selections = propSelection != null ? propSelection : docSelectionManagerService.getTextRanges({ unitId, subUnitId: unitId });
  const segmentId = (_a = selections == null ? void 0 : selections[0]) == null ? void 0 : _a.segmentId;
  if (!(selections == null ? void 0 : selections.length)) {
    return false;
  }
  const documentDataModel = univerInstanceService.getUnit(unitId, 1 /* UNIVER_DOC */);
  if (!documentDataModel) {
    return false;
  }
  const body = (_b = documentDataModel.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _b.getBody();
  if (!body) {
    return false;
  }
  const textX = BuildTextUtils.customRange.add({
    ranges: selections,
    rangeId,
    rangeType,
    segmentId,
    wholeEntity,
    properties,
    body
  });
  if (!textX) {
    return false;
  }
  const jsonX = JSONX.getInstance();
  const doMutation = {
    id: RichTextEditingMutation.id,
    params: {
      unitId,
      actions: [],
      textRanges: textX.selections,
      segmentId
    },
    textX
  };
  const path = getRichTextEditPath(documentDataModel, segmentId);
  doMutation.params.actions = jsonX.editOp(textX.serialize(), path);
  return doMutation;
}
function deleteCustomRangeFactory(accessor, params) {
  const { unitId, segmentId, insert } = params;
  const univerInstanceService = accessor.get(IUniverInstanceService);
  const documentDataModel = univerInstanceService.getUnit(unitId);
  if (!documentDataModel) {
    return false;
  }
  const doMutation = {
    id: RichTextEditingMutation.id,
    params: {
      unitId: params.unitId,
      actions: [],
      textRanges: void 0,
      segmentId
    }
  };
  const jsonX = JSONX.getInstance();
  const textX = BuildTextUtils.customRange.delete({
    documentDataModel,
    rangeId: params.rangeId,
    insert,
    segmentId
  });
  if (!textX) {
    return false;
  }
  const path = getRichTextEditPath(documentDataModel, segmentId);
  doMutation.params.actions = jsonX.editOp(textX.serialize(), path);
  doMutation.params.textRanges = textX.selections;
  return doMutation;
}

// ../packages/docs/src/utils/paragraphs.ts
function generateParagraphs(dataStream, prevParagraph, borderBottom, existingParagraphIds = []) {
  var _a;
  const paragraphs = [];
  const existingIds = new Set(existingParagraphIds);
  for (let i = 0, len = dataStream.length; i < len; i++) {
    if (dataStream[i] !== "\r" /* PARAGRAPH */) {
      continue;
    }
    paragraphs.push({
      startIndex: i,
      paragraphId: createParagraphId(existingIds)
    });
  }
  for (const paragraph of paragraphs) {
    if (prevParagraph == null ? void 0 : prevParagraph.bullet) {
      paragraph.bullet = Tools.deepClone(prevParagraph.bullet);
    }
    if (prevParagraph == null ? void 0 : prevParagraph.paragraphStyle) {
      paragraph.paragraphStyle = Tools.deepClone(prevParagraph.paragraphStyle);
      delete paragraph.paragraphStyle.borderBottom;
      if (prevParagraph.paragraphStyle.headingId) {
        paragraph.paragraphStyle.headingId = generateRandomId(6);
      }
    }
    if (borderBottom) {
      (_a = paragraph.paragraphStyle) != null ? _a : paragraph.paragraphStyle = {};
      paragraph.paragraphStyle.borderBottom = Tools.deepClone(borderBottom);
      paragraph.paragraphStyle.spaceBelow = { v: 10 };
    }
  }
  return paragraphs;
}

// ../packages/docs/src/utils/replace-selection-factory.ts
function replaceSelectionFactory(accessor, params) {
  var _a, _b, _c, _d;
  const { unitId, body: insertBody, doc } = params;
  let docDataModel = doc;
  if (!docDataModel) {
    const univerInstanceService = accessor.get(IUniverInstanceService);
    docDataModel = univerInstanceService.getUnit(unitId);
  }
  if (!docDataModel) {
    return false;
  }
  const segmentId = (_a = params.selection) == null ? void 0 : _a.segmentId;
  const body = (_b = docDataModel.getSelfOrHeaderFooterModel(segmentId)) == null ? void 0 : _b.getBody();
  if (!body) return false;
  const docSelectionManagerService = accessor.get(DocSelectionManagerService);
  const selection = (_c = params.selection) != null ? _c : docSelectionManagerService.getActiveTextRange();
  if (!selection || !body) {
    return false;
  }
  const textRanges = (_d = params.textRanges) != null ? _d : [{
    startOffset: selection.startOffset + insertBody.dataStream.length,
    endOffset: selection.startOffset + insertBody.dataStream.length,
    collapsed: true,
    segmentId
  }];
  const textX = BuildTextUtils.selection.replace({
    selection,
    body: insertBody,
    doc: docDataModel
  });
  if (!textX) {
    return false;
  }
  const doMutation = {
    id: RichTextEditingMutation.id,
    params: {
      unitId,
      actions: [],
      textRanges,
      debounce: true,
      segmentId
    },
    textX
  };
  const jsonX = JSONX.getInstance();
  doMutation.params.actions = jsonX.editOp(textX.serialize());
  return doMutation;
}

// ../packages/docs/src/utils/transform-position.ts
function buildDocTransform(width, height, position) {
  var _a, _b;
  return {
    size: { width, height },
    positionH: {
      relativeFrom: 0 /* PAGE */,
      posOffset: (_a = position == null ? void 0 : position.left) != null ? _a : 0
    },
    positionV: {
      relativeFrom: 1 /* PARAGRAPH */,
      posOffset: (_b = position == null ? void 0 : position.top) != null ? _b : 0
    },
    angle: 0
  };
}
function docDrawingPositionToTransform(position) {
  return {
    left: position.positionH.posOffset,
    top: position.positionV.posOffset,
    width: position.size.width,
    height: position.size.height,
    flipX: position.flipX,
    flipY: position.flipY
  };
}

// ../packages/docs/src/utils/util.ts
function consumeContentInsertRange(accessor, unitId) {
  try {
    return accessor.get(DocContentInsertService).consumeInsertRange(unitId);
  } catch {
    return null;
  }
}
function getContentInsertRange(accessor, unitId) {
  var _a;
  const _unitId = unitId != null ? unitId : (_a = accessor.get(IUniverInstanceService).getCurrentUnitOfType(1 /* UNIVER_DOC */)) == null ? void 0 : _a.getUnitId();
  if (!_unitId) {
    return null;
  }
  const insertRange = consumeContentInsertRange(accessor, _unitId);
  if (!insertRange) {
    return null;
  }
  return {
    ...insertRange,
    collapsed: (insertRange == null ? void 0 : insertRange.startOffset) === (insertRange == null ? void 0 : insertRange.endOffset)
  };
}
function normalizeTextRange(textRange) {
  var _a, _b, _c;
  const endOffset = (_a = textRange.endOffset) != null ? _a : textRange.startOffset;
  return {
    ...textRange,
    endOffset,
    collapsed: (_b = textRange.collapsed) != null ? _b : textRange.startOffset === endOffset,
    segmentId: (_c = textRange.segmentId) != null ? _c : ""
  };
}

// ../packages/sheets-formula/package.json
var package_default2 = {
  name: "@univerjs/sheets-formula",
  version: "1.0.0-alpha.7",
  private: false,
  description: "Sheet formula services and calculation integration for Univer Sheets.",
  author: "DreamNum Co., Ltd. <developer@univer.ai>",
  license: "Apache-2.0",
  funding: {
    type: "opencollective",
    url: "https://opencollective.com/univer"
  },
  homepage: "https://univer.ai",
  repository: {
    type: "git",
    url: "https://github.com/dream-num/univer"
  },
  bugs: {
    url: "https://github.com/dream-num/univer/issues"
  },
  keywords: [
    "univer",
    "sheets",
    "formula",
    "calculation",
    "plugin"
  ],
  exports: {
    ".": "./src/index.ts",
    "./*": "./src/*",
    "./locale/*": "./src/locale/*.ts",
    "./facade": "./src/facade/index.ts"
  },
  main: "./src/index.ts",
  types: "./lib/types/index.d.ts",
  publishConfig: {
    access: "public",
    main: "./lib/es/index.js",
    module: "./lib/es/index.js",
    exports: {
      ".": {
        import: "./lib/es/index.js",
        require: "./lib/cjs/index.js",
        types: "./lib/types/index.d.ts"
      },
      "./*": {
        import: "./lib/es/*",
        require: "./lib/cjs/*",
        types: "./lib/types/index.d.ts"
      },
      "./locale/*": {
        import: "./lib/es/locale/*.js",
        require: "./lib/cjs/locale/*.js",
        types: "./lib/types/locale/*.d.ts"
      },
      "./facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/facade": {
        import: "./lib/es/facade.js",
        require: "./lib/cjs/facade.js",
        types: "./lib/types/facade/index.d.ts"
      },
      "./lib/*": "./lib/*"
    }
  },
  directories: {
    lib: "lib"
  },
  files: [
    "lib"
  ],
  scripts: {
    test: "vitest run",
    "test:watch": "vitest",
    coverage: "vitest run --coverage",
    typecheck: "tsc --noEmit",
    "build:bundle": "univer-cli build",
    "build:types": "tsc -p tsconfig.node.json",
    build: "pnpm run build:bundle && pnpm run build:types"
  },
  peerDependencies: {
    rxjs: ">=7.0.0"
  },
  dependencies: {
    "@univerjs/core": "workspace:*",
    "@univerjs/docs": "workspace:*",
    "@univerjs/engine-formula": "workspace:*",
    "@univerjs/rpc": "workspace:*",
    "@univerjs/sheets": "workspace:*"
  },
  devDependencies: {
    "@univerjs-infra/shared": "workspace:*",
    "@univerjs/engine-render": "workspace:*",
    rxjs: "^7.8.2",
    typescript: "^6.0.3",
    vitest: "^4.1.10"
  }
};

// ../packages/sheets-formula/src/common/plugin-name.ts
var SHEETS_FORMULA_PLUGIN_NAME = "SHEETS_FORMULA_PLUGIN";

// ../packages/sheets-formula/src/config/config.ts
var PLUGIN_CONFIG_KEY_BASE = "sheets-formula.base.config";
var configSymbolBase = Symbol(PLUGIN_CONFIG_KEY_BASE);
var CalculationMode = /* @__PURE__ */ ((CalculationMode2) => {
  CalculationMode2[CalculationMode2["FORCED"] = 0] = "FORCED";
  CalculationMode2[CalculationMode2["WHEN_EMPTY"] = 1] = "WHEN_EMPTY";
  CalculationMode2[CalculationMode2["NO_CALCULATION"] = 2] = "NO_CALCULATION";
  return CalculationMode2;
})(CalculationMode || {});
var defaultPluginBaseConfig = {};
var PLUGIN_CONFIG_KEY_REMOTE = "sheets-formula.remote.config";
var configSymbolRemote = Symbol(PLUGIN_CONFIG_KEY_REMOTE);
var defaultPluginRemoteConfig = {};
var PLUGIN_CONFIG_KEY_MOBILE = "sheets-formula.mobile.config";
var configSymbolMobile = Symbol(PLUGIN_CONFIG_KEY_MOBILE);

// ../packages/sheets-formula/src/controllers/active-dirty.controller.ts
var ActiveDirtyController = class extends Disposable {
  constructor(_activeDirtyManagerService, _univerInstanceService, _formulaDataModel) {
    super();
    __publicField(this, "_activeDirtyManagerService", _activeDirtyManagerService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_formulaDataModel", _formulaDataModel);
    this._initialize();
  }
  _initialize() {
    this._initialConversion();
  }
  _initialConversion() {
    this._activeDirtyManagerService.register(SetRangeValuesMutation.id, {
      commandId: SetRangeValuesMutation.id,
      shouldTrigger: (command, options) => {
        const params = command.params;
        return !(options == null ? void 0 : options.onlyLocal) && params.trigger !== SetStyleCommand.id && params.trigger !== SetBorderCommand.id && params.trigger !== ClearSelectionFormatCommand.id;
      },
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getSetRangeValuesMutationDirtyRange(params)
        };
      }
    });
    this._initialMove();
    this._initialRowAndColumn();
    this._initialHideRow();
    this._initialSheet();
    this._initialDefinedName();
  }
  _initialMove() {
    this._activeDirtyManagerService.register(MoveRangeMutation.id, {
      commandId: MoveRangeMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getMoveRangeMutationDirtyRange(params),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.to.subUnitId]: "1",
              [params.from.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(MoveRowsMutation.id, {
      commandId: MoveRowsMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getMoveRowsMutationDirtyRange(params),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(MoveColsMutation.id, {
      commandId: MoveColsMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getMoveRowsMutationDirtyRange(params),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(ReorderRangeMutation.id, {
      commandId: ReorderRangeMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getReorderRangeMutationDirtyRange(params),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
  }
  _initialRowAndColumn() {
    this._activeDirtyManagerService.register(RemoveRowMutation.id, {
      commandId: RemoveRowMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getRemoveRowOrColumnMutation(params, true),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(RemoveColMutation.id, {
      commandId: RemoveColMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getRemoveRowOrColumnMutation(params, false),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(InsertColMutation.id, {
      commandId: InsertColMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(InsertRowMutation.id, {
      commandId: InsertRowMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
  }
  _initialHideRow() {
    this._activeDirtyManagerService.register(SetRowHiddenMutation.id, {
      commandId: SetRowHiddenMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getHideRowMutation(params),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(SetRowVisibleMutation.id, {
      commandId: SetRowVisibleMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyRanges: this._getHideRowMutation(params),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
  }
  _initialSheet() {
    this._activeDirtyManagerService.register(SetTriggerFormulaCalculationStartMutation.id, {
      commandId: SetTriggerFormulaCalculationStartMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          ...params
        };
      }
    });
    this._activeDirtyManagerService.register(RemoveSheetMutation.id, {
      commandId: RemoveSheetMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyNameMap: this._getRemoveSheetMutation(params),
          clearDependencyTreeCache: {
            [params.unitId]: {
              [params.subUnitId]: "1"
            }
          }
        };
      }
    });
    this._activeDirtyManagerService.register(InsertSheetMutation.id, {
      commandId: InsertSheetMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return {
          dirtyNameMap: this._getInsertSheetMutation(params)
        };
      }
    });
  }
  _initialDefinedName() {
    this._activeDirtyManagerService.register(SetDefinedNameMutation.id, {
      commandId: SetDefinedNameMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return { dirtyDefinedNameMap: this._getDefinedNameMutation(params) };
      }
    });
    this._activeDirtyManagerService.register(RemoveDefinedNameMutation.id, {
      commandId: RemoveDefinedNameMutation.id,
      getDirtyData: (command) => {
        const params = command.params;
        return { dirtyDefinedNameMap: this._getDefinedNameMutation(params) };
      }
    });
  }
  _getDefinedNameMutation(definedName) {
    if (definedName == null) {
      return {};
    }
    const { unitId, name: definedNameName, formulaOrRefString } = definedName;
    const result = {
      [unitId]: {
        [definedNameName]: formulaOrRefString
      }
    };
    return result;
  }
  _getSetRangeValuesMutationDirtyRange(params) {
    const { subUnitId: sheetId, unitId, cellValue } = params;
    const dirtyRanges = [];
    if (cellValue == null) {
      return dirtyRanges;
    }
    dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, sheetId, cellValue));
    dirtyRanges.push(...this._getDirtyRangesForArrayFormula(unitId, sheetId, cellValue));
    return dirtyRanges;
  }
  _getMoveRangeMutationDirtyRange(params) {
    const { unitId, from, to } = params;
    const dirtyRanges = [];
    dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, from.subUnitId, from.value));
    dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, to.subUnitId, to.value));
    dirtyRanges.push(...this._getDirtyRangesForArrayFormula(unitId, to.subUnitId, to.value));
    return dirtyRanges;
  }
  _getMoveRowsMutationDirtyRange(params) {
    const { subUnitId: sheetId, unitId, sourceRange, targetRange } = params;
    const dirtyRanges = [];
    const sourceMatrix = this._rangeToMatrix(sourceRange).getData();
    const targetMatrix = this._rangeToMatrix(targetRange).getData();
    dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, sheetId, sourceMatrix));
    dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, sheetId, targetMatrix));
    dirtyRanges.push(...this._getDirtyRangesForArrayFormula(unitId, sheetId, targetMatrix));
    return dirtyRanges;
  }
  _getReorderRangeMutationDirtyRange(params) {
    const { unitId, subUnitId: sheetId, range } = params;
    const matrix = this._rangeToMatrix(range).getData();
    const dirtyRanges = [];
    dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, sheetId, matrix));
    dirtyRanges.push(...this._getDirtyRangesForArrayFormula(unitId, sheetId, matrix));
    return dirtyRanges;
  }
  _getRemoveRowOrColumnMutation(params, isRow = true) {
    const { subUnitId: sheetId, unitId, range } = params;
    const dirtyRanges = [];
    const workbook = this._univerInstanceService.getUniverSheetInstance(unitId);
    const worksheet = workbook == null ? void 0 : workbook.getSheetBySheetId(sheetId);
    const rowCount = (worksheet == null ? void 0 : worksheet.getRowCount()) || 0;
    const columnCount = (worksheet == null ? void 0 : worksheet.getColumnCount()) || 0;
    let matrix = null;
    const { startRow, endRow, startColumn, endColumn } = range;
    if (isRow === true) {
      matrix = this._rangeToMatrix({
        startRow,
        startColumn: 0,
        endRow,
        endColumn: columnCount - 1
      });
    } else {
      matrix = this._rangeToMatrix({
        startRow: 0,
        startColumn,
        endRow: rowCount,
        endColumn
      });
    }
    const matrixData = matrix.getData();
    dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, sheetId, matrixData));
    dirtyRanges.push(...this._getDirtyRangesForArrayFormula(unitId, sheetId, matrixData));
    return dirtyRanges;
  }
  _getHideRowMutation(params) {
    const { subUnitId, unitId, ranges } = params;
    const dirtyRanges = [];
    ranges.forEach((range) => {
      const matrix = this._rangeToMatrix(range).getMatrix();
      dirtyRanges.push(...this._getDirtyRangesByCellValue(unitId, subUnitId, matrix));
    });
    return dirtyRanges;
  }
  _getRemoveSheetMutation(params) {
    const dirtyNameMap = {};
    const { subUnitId: sheetId, unitId, subUnitName } = params;
    if (dirtyNameMap[unitId] == null) {
      dirtyNameMap[unitId] = {};
    }
    dirtyNameMap[unitId][sheetId] = subUnitName;
    return dirtyNameMap;
  }
  _getInsertSheetMutation(params) {
    const dirtyNameMap = {};
    const { sheet, unitId } = params;
    if (dirtyNameMap[unitId] == null) {
      dirtyNameMap[unitId] = {};
    }
    dirtyNameMap[unitId][sheet.id] = sheet.name;
    return dirtyNameMap;
  }
  _rangeToMatrix(range) {
    const matrix = new ObjectMatrix();
    const { startRow, startColumn, endRow, endColumn } = range;
    for (let r = startRow; r <= endRow; r++) {
      for (let c = startColumn; c <= endColumn; c++) {
        matrix.setValue(r, c, {});
      }
    }
    return matrix;
  }
  _getDirtyRangesByCellValue(unitId, sheetId, cellValue) {
    const dirtyRanges = [];
    if (cellValue == null) {
      return dirtyRanges;
    }
    const cellMatrix = new ObjectMatrix(cellValue);
    const discreteRanges = cellMatrix.getDiscreteRanges();
    discreteRanges.forEach((range) => {
      dirtyRanges.push({ unitId, sheetId, range });
    });
    return dirtyRanges;
  }
  /**
   * The array formula is a range where only the top-left corner contains the formula value.
   * All other positions, apart from the top-left corner, need to be marked as dirty.
   */
  _getDirtyRangesForArrayFormula(unitId, sheetId, cellValue) {
    var _a, _b;
    const dirtyRanges = [];
    if (cellValue == null) {
      return dirtyRanges;
    }
    const cellMatrix = new ObjectMatrix(cellValue);
    const arrayFormulaRange = this._formulaDataModel.getArrayFormulaRange();
    if ((_a = arrayFormulaRange == null ? void 0 : arrayFormulaRange[unitId]) == null ? void 0 : _a[sheetId]) {
      const cellRangeData = new ObjectMatrix((_b = arrayFormulaRange == null ? void 0 : arrayFormulaRange[unitId]) == null ? void 0 : _b[sheetId]);
      cellMatrix.forValue((row, column) => {
        cellRangeData.forValue((arrayFormulaRow, arrayFormulaColumn, arrayFormulaRange2) => {
          if (arrayFormulaRange2 == null) {
            return true;
          }
          const { startRow, startColumn, endRow, endColumn } = arrayFormulaRange2;
          if (row >= startRow && row <= endRow && column >= startColumn && column <= endColumn) {
            dirtyRanges.push({
              unitId,
              sheetId,
              range: {
                startRow,
                startColumn,
                endRow: startRow,
                endColumn: startColumn
              }
            });
          }
        });
      });
    }
    return dirtyRanges;
  }
};
ActiveDirtyController = __decorateClass([
  __decorateParam(0, IActiveDirtyManagerService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, Inject(FormulaDataModel))
], ActiveDirtyController);

// ../packages/sheets-formula/src/controllers/array-formula-cell-interceptor.controller.ts
var ArrayFormulaCellInterceptorController = class extends Disposable {
  constructor(_commandService, _sheetInterceptorService, _formulaDataModel) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_formulaDataModel", _formulaDataModel);
    this._initialize();
  }
  _initialize() {
    this._commandExecutedListener();
    this._initInterceptorCellContent();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (command.id === SetArrayFormulaDataMutation.id) {
          const params = command.params;
          if (params == null) {
            return;
          }
          const { arrayFormulaRange, arrayFormulaCellData } = params;
          this._formulaDataModel.setArrayFormulaRange(arrayFormulaRange);
          this._formulaDataModel.setArrayFormulaCellData(arrayFormulaCellData);
        }
      })
    );
  }
  _initInterceptorCellContent() {
    this.disposeWithMe(
      this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
        priority: 100,
        effect: 2 /* Value */,
        handler: (cell_, location, next) => {
          var _a, _b, _c;
          let cell = cell_;
          const { unitId, subUnitId, row, col } = location;
          const arrayFormulaCellData = this._formulaDataModel.getArrayFormulaCellData();
          const cellData = (_c = (_b = (_a = arrayFormulaCellData == null ? void 0 : arrayFormulaCellData[unitId]) == null ? void 0 : _a[subUnitId]) == null ? void 0 : _b[row]) == null ? void 0 : _c[col];
          if (cellData == null) {
            return next(cell);
          }
          if (!cell || cell === location.rawData) {
            cell = { ...location.rawData };
          }
          if (cellData.v == null && cellData.t == null) {
            cell.v = 0;
            cell.t = 2 /* NUMBER */;
            return next(cell);
          }
          if ((cell == null ? void 0 : cell.t) === 2 /* NUMBER */ && cell.v !== void 0 && cell.v !== null && isRealNum(cell.v)) {
            cell.v = stripErrorMargin(Number(cell.v));
            return next(cell);
          }
          cell.v = cellData.v;
          cell.t = cellData.t;
          return next(cell);
        }
      })
    );
  }
};
ArrayFormulaCellInterceptorController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(SheetInterceptorService)),
  __decorateParam(2, Inject(FormulaDataModel))
], ArrayFormulaCellInterceptorController);

// ../packages/sheets-formula/src/controllers/defined-name.controller.ts
var DefinedNameController = class extends Disposable {
  constructor(_descriptionService, _definedNamesService, _univerInstanceService, _commandService) {
    super();
    __publicField(this, "_descriptionService", _descriptionService);
    __publicField(this, "_definedNamesService", _definedNamesService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_preUnitId", null);
    this._initialize();
  }
  _initialize() {
    this._descriptionListener();
    this._changeUnitListener();
    this._changeSheetListener();
  }
  _descriptionListener() {
    this.disposeWithMe(
      toDisposable(
        this._definedNamesService.update$.subscribe((event) => {
          this._updateDescriptions(event);
        })
      )
    );
  }
  _changeUnitListener() {
    this.disposeWithMe(
      toDisposable(
        this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */).subscribe((workbook) => {
          this._unRegisterDescriptions();
          if (workbook) {
            this._initRegisterDescriptions(workbook.getUnitId());
          }
        })
      )
    );
  }
  _changeSheetListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command, options) => {
        if (options == null ? void 0 : options.fromCollab) {
          return;
        }
        if (command.id === SetWorksheetActiveOperation.id) {
          const params = command.params;
          this._unregisterDescriptionsForNotInSheetId(params.unitId, params.subUnitId);
          this._initRegisterDescriptions(params.unitId, params.subUnitId);
        } else if (command.id === SetDefinedNameMutation.id) {
          const params = command.params;
          this._registerDescription(params);
        } else if (command.id === RemoveDefinedNameMutation.id) {
          const params = command.params;
          this._unregisterDescription(params);
        }
      })
    );
  }
  _updateDescriptions(event) {
    const target = getSheetCommandTarget(this._univerInstanceService);
    if (!target) return;
    const { unitId, subUnitId } = target;
    const { type, unitId: updateUnitId, definedNames } = event;
    if (updateUnitId !== unitId) {
      return;
    }
    if (type === "update") {
      const functionList = [];
      definedNames.forEach((definedName) => {
        const { name, comment, formulaOrRefString, localSheetId } = definedName;
        if (localSheetId == null || localSheetId === SCOPE_WORKBOOK_VALUE_DEFINED_NAME || localSheetId === subUnitId) {
          functionList.push({
            functionName: name,
            description: formulaOrRefString + (comment || ""),
            abstract: formulaOrRefString,
            functionType: 16 /* DefinedName */,
            functionParameter: []
          });
        }
      });
      this._descriptionService.registerDescriptions(functionList);
    } else if (type === "remove") {
      const functionList = [];
      definedNames.forEach((definedName) => {
        functionList.push(definedName.name);
      });
      this._descriptionService.unregisterDescriptions(functionList);
    }
  }
  _registerDescription(params) {
    const target = getSheetCommandTarget(this._univerInstanceService, params);
    if (!target) return;
    const { subUnitId } = target;
    const { name, comment, formulaOrRefString, localSheetId } = params;
    if (this._descriptionService.hasDescription(name)) {
      return;
    }
    if (localSheetId == null || localSheetId === SCOPE_WORKBOOK_VALUE_DEFINED_NAME || localSheetId === subUnitId) {
      this._descriptionService.registerDescriptions([{
        functionName: name,
        description: formulaOrRefString + (comment || ""),
        abstract: formulaOrRefString,
        functionType: 16 /* DefinedName */,
        functionParameter: []
      }]);
    }
  }
  _unregisterDescription(param) {
    const { name } = param;
    this._descriptionService.unregisterDescriptions([name]);
  }
  _unRegisterDescriptions() {
    if (this._preUnitId === null) {
      return;
    }
    const definedNames = this._definedNamesService.getDefinedNameMap(this._preUnitId);
    if (!definedNames) {
      return;
    }
    const functionList = [];
    Object.values(definedNames).forEach((value) => {
      const { name } = value;
      functionList.push(name);
    });
    this._descriptionService.unregisterDescriptions(functionList);
    this._preUnitId = null;
  }
  _initRegisterDescriptions(unitId, subUnitId) {
    const target = getSheetCommandTarget(this._univerInstanceService, { unitId, subUnitId });
    if (!target) return;
    const { unitId: _unitId, subUnitId: _subUnitId } = target;
    const definedNames = this._definedNamesService.getDefinedNameMap(_unitId);
    if (!definedNames) {
      return;
    }
    const functionList = [];
    this._preUnitId = _unitId;
    Object.values(definedNames).forEach((value) => {
      const { name, comment, formulaOrRefString, localSheetId } = value;
      if (this._descriptionService.hasDescription(name)) {
        return;
      }
      if (localSheetId == null || localSheetId === SCOPE_WORKBOOK_VALUE_DEFINED_NAME || localSheetId === _subUnitId) {
        functionList.push({
          functionName: name,
          description: formulaOrRefString + (comment || ""),
          abstract: formulaOrRefString,
          functionType: 16 /* DefinedName */,
          functionParameter: []
        });
      }
    });
    this._descriptionService.registerDescriptions(functionList);
  }
  _unregisterDescriptionsForNotInSheetId(unitId, subUnitId) {
    const definedNames = this._definedNamesService.getDefinedNameMap(unitId);
    if (!definedNames) {
      return;
    }
    const functionList = [];
    Object.values(definedNames).forEach((value) => {
      const { name, localSheetId } = value;
      if (localSheetId !== SCOPE_WORKBOOK_VALUE_DEFINED_NAME && localSheetId !== subUnitId) {
        functionList.push(name);
      }
    });
    this._descriptionService.unregisterDescriptions(functionList);
  }
};
DefinedNameController = __decorateClass([
  __decorateParam(0, IDescriptionService),
  __decorateParam(1, IDefinedNamesService),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, ICommandService)
], DefinedNameController);

// ../packages/sheets-formula/src/controllers/formula-auto-fill.controller.ts
var FormulaAutoFillController = class extends Disposable {
  constructor(_autoFillService, _lexerTreeBuilder) {
    super();
    __publicField(this, "_autoFillService", _autoFillService);
    __publicField(this, "_lexerTreeBuilder", _lexerTreeBuilder);
    this._registerAutoFill();
  }
  _registerAutoFill() {
    const formulaRule = {
      type: "formula" /* FORMULA */,
      priority: 1001,
      match: (cellData) => isFormulaString(cellData == null ? void 0 : cellData.f) || isFormulaId(cellData == null ? void 0 : cellData.si),
      isContinue: (prev, cur) => {
        if (prev.type === "formula" /* FORMULA */) {
          return true;
        }
        return false;
      },
      applyFunctions: {
        ["COPY" /* COPY */]: (dataWithIndex, len, direction, copyDataPiece, location) => {
          const { data, index } = dataWithIndex;
          return this._fillCopyFormula(data, len, direction, index, copyDataPiece, location);
        }
      }
    };
    this._autoFillService.registerRule(formulaRule);
  }
  _fillCopyFormula(data, len, direction, index, copyDataPiece, location) {
    var _a, _b;
    const step = getDataLength(copyDataPiece);
    const applyData = [];
    const formulaIdMap = /* @__PURE__ */ new Map();
    for (let i = 1; i <= len; i++) {
      const dataIndex = (i - 1) % data.length;
      const sourceIndex = index[dataIndex];
      const d = Tools.deepClone(data[dataIndex]);
      if (d) {
        const originalFormula = ((_a = data[dataIndex]) == null ? void 0 : _a.f) || "";
        const originalFormulaId = ((_b = data[dataIndex]) == null ? void 0 : _b.si) || "";
        const checkFormula = isFormulaString(originalFormula);
        const checkFormulaId = isFormulaId(originalFormulaId);
        if (checkFormulaId) {
          d.si = originalFormulaId;
          d.f = null;
          d.v = null;
          d.p = null;
          d.t = null;
          applyData.push(d);
        } else if (checkFormula) {
          let formulaId = formulaIdMap.get(dataIndex);
          if (!formulaId) {
            formulaId = generateRandomId(6);
            formulaIdMap.set(dataIndex, formulaId);
            const { offsetX, offsetY } = directionToOffset(step, len, direction, location, sourceIndex);
            const shiftedFormula = this._lexerTreeBuilder.moveFormulaRefOffset(
              originalFormula,
              offsetX,
              offsetY
            );
            d.si = formulaId;
            d.f = shiftedFormula;
            d.v = null;
            d.p = null;
            d.t = null;
          } else {
            d.si = formulaId;
            d.f = null;
            d.v = null;
            d.p = null;
            d.t = null;
          }
          applyData.push(d);
        }
      }
    }
    return applyData;
  }
};
FormulaAutoFillController = __decorateClass([
  __decorateParam(0, IAutoFillService),
  __decorateParam(1, Inject(LexerTreeBuilder))
], FormulaAutoFillController);
function directionToOffset(step, len, direction, location, sourceIndex) {
  const { source, target } = location;
  const { rows: targetRows } = target;
  const { rows: sourceRows } = source;
  let offsetX = 0;
  let offsetY = 0;
  switch (direction) {
    case 0 /* UP */:
      offsetY = targetRows[sourceIndex] - sourceRows[sourceIndex];
      break;
    case 1 /* RIGHT */:
      offsetX = step;
      break;
    case 2 /* DOWN */:
      offsetY = targetRows[sourceIndex] - sourceRows[sourceIndex];
      break;
    case 3 /* LEFT */:
      offsetX = -step * len;
      break;
  }
  return { offsetX, offsetY };
}
function getDataLength(copyDataPiece) {
  let length = 0;
  for (const t in copyDataPiece) {
    copyDataPiece[t].forEach((item) => {
      length += item.data.length;
    });
  }
  return length;
}

// ../packages/sheets-formula/src/commands/commands/insert-function.command.ts
var InsertFunctionCommand = {
  id: "formula.command.insert-function",
  type: 0 /* COMMAND */,
  handler: async (accessor, params) => {
    const { list, listOfRangeHasNumber } = params;
    const commandService = accessor.get(ICommandService);
    const cellMatrix = new ObjectMatrix();
    list.forEach((item) => {
      const { range, primary, formula } = item;
      const { row, column } = primary;
      const formulaId = generateRandomId(6);
      cellMatrix.setValue(row, column, {
        f: formula,
        si: formulaId
      });
      const { startRow, startColumn, endRow, endColumn } = range;
      for (let i = startRow; i <= endRow; i++) {
        for (let j = startColumn; j <= endColumn; j++) {
          if (i !== row || j !== column) {
            cellMatrix.setValue(i, j, {
              si: formulaId
            });
          }
        }
      }
    });
    if (listOfRangeHasNumber && listOfRangeHasNumber.length > 0) {
      listOfRangeHasNumber.forEach((item) => {
        const { primary, formula } = item;
        cellMatrix.setValue(primary.row, primary.column, {
          f: formula
        });
      });
    }
    const setRangeValuesParams = {
      value: cellMatrix.getData()
    };
    return commandService.executeCommand(SetRangeValuesCommand.id, setRangeValuesParams);
  }
};

// ../packages/sheets-formula/src/commands/commands/quick-sum.command.ts
var QuickSumCommand = {
  id: "sheets-formula.command.quick-sum",
  type: 0 /* COMMAND */,
  handler: async (accessor) => {
    const selectionsService = accessor.get(SheetsSelectionsService);
    const currentSelection = selectionsService.getCurrentLastSelection();
    if (!currentSelection) return false;
    const univerInstanceService = accessor.get(IUniverInstanceService);
    const target = getSheetCommandTarget(univerInstanceService);
    if (!target) return false;
    const range = currentSelection.range;
    const { worksheet } = target;
    let firstCell = findFirstNonEmptyCell(range, worksheet);
    if (!firstCell) return false;
    firstCell = alignToMergedCellsBorders(firstCell, worksheet);
    const targetRange = expandToContinuousRange({
      startRow: firstCell.startRow,
      startColumn: firstCell.startColumn,
      endRow: range.endRow,
      endColumn: range.endColumn
    }, { left: true, right: true, up: true, down: true }, worksheet);
    const setValueMatrix = new ObjectMatrix();
    const lastRow = alignToMergedCellsBorders({
      startRow: targetRange.endRow,
      endRow: targetRange.endRow,
      startColumn: targetRange.startColumn,
      endColumn: targetRange.endColumn
    }, worksheet);
    if (!Rectangle.equals(lastRow, targetRange)) {
      for (const cell of worksheet.iterateByColumn(lastRow)) {
        if (!cell.value || !worksheet.cellHasValue(cell.value)) {
          setValueMatrix.setValue(cell.row, cell.col, {
            f: `=SUM(${serializeRange({
              startColumn: cell.col,
              endColumn: cell.col,
              startRow: targetRange.startRow,
              endRow: cell.row - 1
            })})`
          });
        }
      }
    }
    const lastColumn = alignToMergedCellsBorders({
      startRow: targetRange.startRow,
      startColumn: targetRange.endColumn,
      endRow: targetRange.endRow,
      endColumn: targetRange.endColumn
    }, worksheet);
    if (!Rectangle.equals(lastColumn, targetRange)) {
      for (const cell of worksheet.iterateByRow(lastColumn)) {
        if (!cell.value || !worksheet.cellHasValue(cell.value)) {
          setValueMatrix.setValue(cell.row, cell.col, {
            f: `=SUM(${serializeRange({
              startColumn: targetRange.startColumn,
              endColumn: cell.col - 1,
              startRow: cell.row,
              endRow: cell.row
            })})`
          });
        }
      }
    }
    const commandService = accessor.get(ICommandService);
    return (await sequenceExecuteAsync([
      {
        id: SetRangeValuesCommand.id,
        params: {
          range: targetRange,
          value: setValueMatrix.getMatrix()
        }
      },
      {
        id: SetSelectionsOperation.id,
        params: {
          unitId: target.unitId,
          subUnitId: target.subUnitId,
          selections: [{
            range: targetRange,
            primary: Rectangle.contains(targetRange, currentSelection.primary) ? currentSelection.primary : { ...firstCell, actualRow: firstCell.startRow, actualColumn: firstCell.startColumn },
            style: null
          }]
        }
      }
    ], commandService)).result;
  }
};

// ../packages/sheets-formula/src/controllers/formula.controller.ts
var FormulaController = class extends Disposable {
  constructor(_commandService) {
    super();
    __publicField(this, "_commandService", _commandService);
    [
      InsertFunctionCommand,
      QuickSumCommand,
      OtherFormulaMarkDirty
    ].forEach((c) => this._commandService.registerCommand(c));
  }
};
FormulaController = __decorateClass([
  __decorateParam(0, ICommandService)
], FormulaController);

// ../packages/sheets-formula/src/controllers/image-formula-cell-interceptor.controller.ts
var ImageFormulaCellInterceptorController = class extends Disposable {
  constructor(_commandService, _sheetInterceptorService, _formulaDataModel) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_formulaDataModel", _formulaDataModel);
    __publicField(this, "_errorValueCell", {
      v: "#VALUE!" /* VALUE */,
      t: 1 /* STRING */
    });
    __publicField(this, "_refreshRender");
    this._initialize();
  }
  _initialize() {
    this._commandExecutedListener();
    this._initInterceptorCellContent();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted(async (command) => {
        if (command.id === SetImageFormulaDataMutation.id) {
          const params = command.params;
          if (!params) return;
          const { imageFormulaData } = params;
          if (!imageFormulaData || imageFormulaData.length === 0) return;
          const updateRuntimeImageFormulaData = await Promise.all(
            imageFormulaData.map((imageFormulaInfo) => {
              return this._getImageNatureSize(imageFormulaInfo);
            })
          );
          const unitImageFormulaData = {};
          updateRuntimeImageFormulaData.forEach((imageFormulaInfo) => {
            const { unitId, sheetId, row, column, ...imageInfo } = imageFormulaInfo;
            if (!unitImageFormulaData[unitId]) {
              unitImageFormulaData[unitId] = {};
            }
            if (!unitImageFormulaData[unitId][sheetId]) {
              unitImageFormulaData[unitId][sheetId] = new ObjectMatrix();
            }
            unitImageFormulaData[unitId][sheetId].setValue(row, column, imageInfo);
          });
          this._formulaDataModel.mergeUnitImageFormulaData(unitImageFormulaData);
          this._refreshRender();
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initInterceptorCellContent() {
    this.disposeWithMe(
      this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT, {
        priority: 11 /* CELL_IMAGE */,
        effect: 2 /* Value */ | 1 /* Style */,
        handler: (cell, location, next) => {
          var _a, _b;
          const { unitId, subUnitId, row, col } = location;
          const unitImageFormulaData = this._formulaDataModel.getUnitImageFormulaData();
          const imageInfo = (_b = (_a = unitImageFormulaData == null ? void 0 : unitImageFormulaData[unitId]) == null ? void 0 : _a[subUnitId]) == null ? void 0 : _b.getValue(row, col);
          if (!imageInfo) {
            return next(cell);
          }
          const {
            source,
            // altText,
            // sizing,
            height,
            width,
            isErrorImage,
            imageNaturalWidth,
            imageNaturalHeight
          } = imageInfo;
          if (isErrorImage) {
            return next(this._errorValueCell);
          }
          const finalWidth = width || imageNaturalWidth;
          const finalHeight = height || imageNaturalHeight;
          if (!finalWidth || !finalHeight) {
            return next(this._errorValueCell);
          }
          const docDataModel = createDocumentModelWithStyle("", {});
          const docDrawingParam = {
            unitId,
            subUnitId,
            drawingId: generateRandomId(),
            drawingType: 0 /* DRAWING_IMAGE */,
            imageSourceType: "URL" /* URL */,
            source,
            transform: {
              left: 0,
              top: 0,
              width: finalWidth,
              height: finalHeight
            },
            docTransform: buildDocTransform(finalWidth, finalHeight),
            behindDoc: 0 /* FALSE */,
            title: "",
            description: "",
            layoutType: 0 /* INLINE */,
            // Insert inline drawing by default.
            wrapText: 0 /* BOTH_SIDES */,
            distB: 0,
            distL: 0,
            distR: 0,
            distT: 0
          };
          const jsonXActions = BuildTextUtils.drawing.add({
            documentDataModel: docDataModel,
            drawings: [docDrawingParam],
            selection: {
              collapsed: true,
              startOffset: 0,
              endOffset: 0
            }
          });
          if (jsonXActions) {
            docDataModel.apply(jsonXActions);
            return next({
              ...cell,
              p: docDataModel.getSnapshot()
            });
          }
          return next(this._errorValueCell);
        }
      })
    );
  }
  async _getImageNatureSize(imageFormulaInfo) {
    const imageInfo = await this._getImageSize(imageFormulaInfo.source);
    if (!imageInfo.image) {
      return { ...imageFormulaInfo, isErrorImage: true };
    }
    return {
      ...imageFormulaInfo,
      isErrorImage: false,
      imageNaturalHeight: imageInfo.height,
      imageNaturalWidth: imageInfo.width
    };
  }
  async _getImageSize(src) {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        resolve({
          width: image.width,
          height: image.height,
          image
        });
      };
      image.onerror = () => {
        resolve({
          width: 0,
          height: 0,
          image: null
        });
      };
    });
  }
  registerRefreshRenderFunction(refreshRender) {
    this._refreshRender = refreshRender;
  }
};
ImageFormulaCellInterceptorController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(SheetInterceptorService)),
  __decorateParam(2, Inject(FormulaDataModel))
], ImageFormulaCellInterceptorController);

// ../packages/sheets-formula/src/controllers/sheet-formula-calculation-result-apply.controller.ts
var SheetFormulaCalculationResultApplyController = class extends Disposable {
  constructor(_commandService, _sessionService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_sessionService", _sessionService);
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command, options) => {
        if (command.id === SetRangeValuesMutation.id && (options == null ? void 0 : options.applyFormulaCalculationResult)) {
          this._sessionService.markResultApplied("sheet" /* SHEET */);
        }
      })
    );
  }
};
SheetFormulaCalculationResultApplyController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, Inject(FormulaCalculationSessionService))
], SheetFormulaCalculationResultApplyController);

// ../packages/sheets-formula/src/controllers/super-table.controller.ts
var SuperTableController = class extends Disposable {
  constructor(_descriptionService, _univerInstanceService, _commandService, _superTableService) {
    super();
    __publicField(this, "_descriptionService", _descriptionService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_superTableService", _superTableService);
    __publicField(this, "_preUnitId", null);
    this._initialize();
  }
  _initialize() {
    this._descriptionListener();
    this._changeUnitListener();
    this._changeSheetListener();
  }
  _descriptionListener() {
    toDisposable(
      this._superTableService.update$.subscribe(() => {
        this._registerDescriptions();
      })
    );
  }
  _changeUnitListener() {
    toDisposable(
      this._univerInstanceService.getCurrentTypeOfUnit$(2 /* UNIVER_SHEET */).subscribe((workbook) => {
        this._unRegisterDescriptions();
        if (workbook) {
          this._registerDescriptions();
        }
      })
    );
  }
  _changeSheetListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command, options) => {
        if (options == null ? void 0 : options.fromCollab) {
          return;
        }
        if (command.id === SetWorksheetActiveOperation.id) {
          this._unregisterDescriptionsForNotInSheetId();
          this._registerDescriptions();
        } else if (command.id === SetSuperTableMutation.id) {
          const param = command.params;
          this._registerDescription(param);
        } else if (command.id === RemoveSuperTableMutation.id) {
          const param = command.params;
          this._unregisterDescription(param);
        }
      })
    );
  }
  _registerDescription(param) {
    var _a, _b;
    const target = this._getUnitIdAndSheetId(param);
    if (!target) return;
    const { unitId } = target;
    const { tableName, reference } = param;
    if (!this._descriptionService.hasDescription(tableName)) {
      const sheetName = ((_b = (_a = this._univerInstanceService.getUnit(unitId)) == null ? void 0 : _a.getSheetBySheetId(reference.sheetId)) == null ? void 0 : _b.getName()) || "";
      const refString = serializeRangeWithSheet(sheetName, reference.range);
      this._descriptionService.registerDescriptions([{
        functionName: tableName,
        description: refString,
        abstract: refString,
        functionType: 17 /* Table */,
        functionParameter: []
      }]);
    }
  }
  _unregisterDescription(param) {
    const { tableName } = param;
    this._descriptionService.unregisterDescriptions([tableName]);
  }
  _unRegisterDescriptions() {
    if (this._preUnitId == null) {
      return;
    }
    const superTables = this._superTableService.getTableMap(this._preUnitId);
    if (superTables == null) {
      return;
    }
    const functionList = [];
    superTables.forEach((_, tableName) => {
      functionList.push(tableName);
    });
    this._descriptionService.unregisterDescriptions(functionList);
    this._preUnitId = null;
  }
  _getUnitIdAndSheetId(params = {}) {
    const { unitId, subUnitId } = params;
    const workbook = unitId ? this._univerInstanceService.getUnit(unitId, 2 /* UNIVER_SHEET */) : this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
    if (!workbook) return null;
    const worksheet = subUnitId ? workbook.getSheetBySheetId(subUnitId) : workbook.getActiveSheet(true);
    if (!worksheet) return null;
    return {
      unitId: workbook.getUnitId(),
      sheetId: worksheet.getSheetId()
    };
  }
  _registerDescriptions() {
    const target = this._getUnitIdAndSheetId();
    if (!target) return;
    const { unitId } = target;
    const superTables = this._superTableService.getTableMap(unitId);
    if (!superTables) {
      return;
    }
    const functionList = [];
    this._preUnitId = unitId;
    superTables.forEach((table, tableName) => {
      var _a, _b;
      const sheetName = ((_b = (_a = this._univerInstanceService.getUnit(unitId)) == null ? void 0 : _a.getSheetBySheetId(table.sheetId)) == null ? void 0 : _b.getName()) || "";
      const refString = serializeRangeWithSheet(sheetName, table.range);
      if (!this._descriptionService.hasDescription(tableName)) {
        functionList.push({
          functionName: tableName,
          description: refString,
          abstract: refString,
          functionType: 17 /* Table */,
          functionParameter: []
        });
      }
    });
    this._descriptionService.registerDescriptions(functionList);
  }
  _unregisterDescriptionsForNotInSheetId() {
    const target = this._getUnitIdAndSheetId();
    if (!target) return;
    const { unitId } = target;
    const superTables = this._superTableService.getTableMap(unitId);
    if (!superTables) {
      return;
    }
    const functionList = [];
    superTables.forEach((_, tableName) => {
      functionList.push(tableName);
    });
    this._descriptionService.unregisterDescriptions(functionList);
  }
};
SuperTableController = __decorateClass([
  __decorateParam(0, IDescriptionService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, ICommandService),
  __decorateParam(3, ISuperTableService)
], SuperTableController);

// ../packages/sheets-formula/src/controllers/trigger-calculation.controller.ts
var NilProgress = { done: 0, count: 0 };
var lo = { onlyLocal: true };
var TriggerCalculationController = class extends Disposable {
  constructor(_commandService, _univerInstanceService, _logService, _configService, _formulaDataModel, _localeService, _registerOtherFormulaService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_logService", _logService);
    __publicField(this, "_configService", _configService);
    __publicField(this, "_formulaDataModel", _formulaDataModel);
    __publicField(this, "_localeService", _localeService);
    __publicField(this, "_registerOtherFormulaService", _registerOtherFormulaService);
    __publicField(this, "_startExecutionTime", 0);
    __publicField(this, "_totalCalculationTaskCount", 0);
    __publicField(this, "_doneCalculationTaskCount", 0);
    __publicField(this, "_executionInProgressParams", null);
    __publicField(this, "_progress$", new BehaviorSubject(NilProgress));
    __publicField(this, "progress$", this._progress$.asObservable());
    this._commandExecutedListener();
    this._initialExecuteFormulaProcessListener();
    this._initialExecuteFormula();
    this.disposeWithMe(
      this._univerInstanceService.getTypeOfUnitAdded$(2 /* UNIVER_SHEET */).subscribe(() => {
        this._initialExecuteFormula();
      })
    );
  }
  _emitProgress(label) {
    this._progress$.next({ done: this._doneCalculationTaskCount, count: this._totalCalculationTaskCount, label });
  }
  _startProgress() {
    this._doneCalculationTaskCount = 0;
    this._totalCalculationTaskCount = 1;
    const analyzing = this._localeService.t("sheets-formula.progress.analyzing");
    this._emitProgress(analyzing);
  }
  _calculateProgress(label) {
    if (this._executionInProgressParams) {
      const {
        totalFormulasToCalculate,
        completedFormulasCount,
        totalArrayFormulasToCalculate,
        completedArrayFormulasCount
      } = this._executionInProgressParams;
      this._doneCalculationTaskCount = completedFormulasCount + completedArrayFormulasCount;
      this._totalCalculationTaskCount = totalFormulasToCalculate + totalArrayFormulasToCalculate;
      if (this._totalCalculationTaskCount === 0) {
        return;
      }
      this._emitProgress(label);
    }
  }
  _completeProgress() {
    this._doneCalculationTaskCount = this._totalCalculationTaskCount = 1;
    const done = this._localeService.t("sheets-formula.progress.done");
    this._emitProgress(done);
  }
  clearProgress() {
    this._doneCalculationTaskCount = 0;
    this._totalCalculationTaskCount = 0;
    this._emitProgress();
  }
  dispose() {
    super.dispose();
    this._progress$.next(NilProgress);
    this._progress$.complete();
  }
  _getCalculationMode() {
    var _a;
    const config = this._configService.getConfig(PLUGIN_CONFIG_KEY_BASE);
    return (_a = config == null ? void 0 : config.initialFormulaComputing) != null ? _a : 1 /* WHEN_EMPTY */;
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((command) => {
        if (command.id === SetFormulaCalculationStartMutation.id || command.id === SetFormulaStringBatchCalculationMutation.id) {
          const params = command.params;
          if (command.id === SetFormulaCalculationStartMutation.id) {
            const isCalculateTreeModel = this._configService.getConfig(ENGINE_FORMULA_RETURN_DEPENDENCY_TREE) || false;
            params.isCalculateTreeModel = isCalculateTreeModel;
          }
          params.maxIteration = this._configService.getConfig(ENGINE_FORMULA_CYCLE_REFERENCE_COUNT);
          params.rowData = this._formulaDataModel.getHiddenRowsFiltered();
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _initialExecuteFormulaProcessListener() {
    let startDependencyTimer = null;
    let calculationProcessCount = 0;
    this.disposeWithMe(
      // eslint-disable-next-line max-lines-per-function, complexity
      this._commandService.onCommandExecuted((command) => {
        if (command.id === SetFormulaCalculationStopMutation.id) {
          this.clearProgress();
        }
        if (command.id !== SetFormulaCalculationNotificationMutation.id) {
          return;
        }
        const params = command.params;
        if (params.stageInfo != null) {
          const {
            stage
          } = params.stageInfo;
          if (stage === 1 /* START */) {
            if (calculationProcessCount === 0) {
              this._startExecutionTime = performance.now();
            }
            calculationProcessCount++;
            if (startDependencyTimer !== null) {
              clearTimeout(startDependencyTimer);
              startDependencyTimer = null;
            }
            startDependencyTimer = setTimeout(() => {
              startDependencyTimer = null;
              this._startProgress();
            }, 1e3);
          } else if (stage === 4 /* CURRENTLY_CALCULATING */) {
            this._executionInProgressParams = params.stageInfo;
            if (startDependencyTimer === null) {
              const calculating = this._localeService.t("sheets-formula.progress.calculating");
              this._calculateProgress(calculating);
            }
          } else if (stage === 5 /* START_DEPENDENCY_ARRAY_FORMULA */) {
            this._executionInProgressParams = params.stageInfo;
            if (startDependencyTimer === null) {
              const arrayAnalysis = this._localeService.t("sheets-formula.progress.array-analysis");
              this._calculateProgress(arrayAnalysis);
            }
          } else if (stage === 7 /* CURRENTLY_CALCULATING_ARRAY_FORMULA */) {
            this._executionInProgressParams = params.stageInfo;
            if (startDependencyTimer === null) {
              const arrayCalculation = this._localeService.t("sheets-formula.progress.array-calculation");
              this._calculateProgress(arrayCalculation);
            }
          }
        } else {
          const state = params.functionsExecutedState;
          let result = "";
          calculationProcessCount--;
          switch (state) {
            case 2 /* NOT_EXECUTED */:
              result = "No tasks are being executed anymore";
              break;
            case 1 /* STOP_EXECUTION */:
              result = "The execution of the formula has been stopped";
              calculationProcessCount = 0;
              break;
            case 3 /* SUCCESS */:
              result = "Formula calculation succeeded";
              if (calculationProcessCount === 0 || calculationProcessCount === -1) {
                result += `. Total time consumed: ${performance.now() - this._startExecutionTime} ms`;
              }
              break;
            case 0 /* INITIAL */:
              result = "Waiting for calculation";
              break;
          }
          if (calculationProcessCount === 0 || calculationProcessCount === -1) {
            if (startDependencyTimer) {
              clearTimeout(startDependencyTimer);
              startDependencyTimer = null;
              this.clearProgress();
            } else {
              this._completeProgress();
            }
            calculationProcessCount = 0;
            this._doneCalculationTaskCount = 0;
            this._totalCalculationTaskCount = 0;
          }
          this._executionInProgressParams = null;
          this._logService.debug("[TriggerCalculationController]", result);
        }
      })
    );
  }
  _initialExecuteFormula() {
    const calculationMode = this._getCalculationMode();
    const params = this._getDirtyDataByCalculationMode(calculationMode);
    this._commandService.executeCommand(SetTriggerFormulaCalculationStartMutation.id, params, lo);
    this._registerOtherFormulaService.calculateStarted$.next(true);
  }
  _getDirtyDataByCalculationMode(calculationMode) {
    const forceCalculation = calculationMode === 0 /* FORCED */;
    const dirtyRanges = calculationMode === 1 /* WHEN_EMPTY */ ? this._formulaDataModel.getFormulaDirtyRanges() : [];
    const dirtyNameMap = {};
    const dirtyDefinedNameMap = {};
    const dirtySuperTableMap = {};
    const dirtyUnitFeatureMap = {};
    const dirtyUnitOtherFormulaMap = {};
    const clearDependencyTreeCache = {};
    return {
      forceCalculation,
      dirtyRanges,
      dirtyNameMap,
      dirtyDefinedNameMap,
      dirtySuperTableMap,
      dirtyUnitFeatureMap,
      dirtyUnitOtherFormulaMap,
      clearDependencyTreeCache
    };
  }
};
TriggerCalculationController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, ILogService),
  __decorateParam(3, IConfigService),
  __decorateParam(4, Inject(FormulaDataModel)),
  __decorateParam(5, Inject(LocaleService)),
  __decorateParam(6, Inject(RegisterOtherFormulaService))
], TriggerCalculationController);

// ../packages/sheets-formula/src/controllers/unit-qualifier-rename.controller.ts
function collectUnitQualifierFormulaPatches(workbook, oldName, newName) {
  const unitId = workbook.getUnitId();
  return workbook.getSheets().flatMap((sheet) => {
    const updates = new ObjectMatrix();
    sheet.getCellMatrix().forValue((row, column, cell) => {
      if (!(cell == null ? void 0 : cell.f)) return;
      const formula = refactorFormulaUnitQualifier(cell.f, oldName, newName);
      if (formula !== cell.f) updates.setValue(row, column, { f: formula });
    });
    const cellValue = updates.getData();
    return Object.keys(cellValue).length > 0 ? [{ unitId, subUnitId: sheet.getSheetId(), cellValue }] : [];
  });
}
var UnitQualifierRenameController = class extends Disposable {
  constructor(_commandService, _undoRedoService, _univerInstanceService, _definedNamesService) {
    super();
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_undoRedoService", _undoRedoService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_definedNamesService", _definedNamesService);
    __publicField(this, "_names", /* @__PURE__ */ new Map());
    this._univerInstanceService.getAllUnitsForType(5 /* UNIVER_BASE */).forEach((unit) => this._watch(unit));
    this.disposeWithMe(this._univerInstanceService.getTypeOfUnitAdded$(5 /* UNIVER_BASE */).subscribe(({ unit }) => this._watch(unit)));
    this.disposeWithMe(this._univerInstanceService.getTypeOfUnitDisposed$(5 /* UNIVER_BASE */).subscribe((unit) => this._names.delete(unit.getUnitId())));
  }
  _watch(unit) {
    const unitId = unit.getUnitId();
    this.disposeWithMe(unit.name$.subscribe((name) => {
      const oldName = this._names.get(unitId);
      this._names.set(unitId, name);
      if (!oldName || oldName === name) return;
      this._refactor(unitId, oldName, name);
    }));
  }
  _refactor(renamedUnitId, oldName, newName) {
    const redos = [];
    const undos = [];
    for (const workbook of this._univerInstanceService.getAllUnitsForType(2 /* UNIVER_SHEET */)) {
      for (const patch of collectUnitQualifierFormulaPatches(workbook, oldName, newName)) {
        const sheet = workbook.getSheetBySheetId(patch.subUnitId);
        if (!sheet) continue;
        const undoCellValue = new ObjectMatrix();
        new ObjectMatrix(patch.cellValue).forValue((row, column) => {
          var _a;
          undoCellValue.setValue(row, column, (_a = sheet.getCellRaw(row, column)) != null ? _a : null);
        });
        redos.push({ id: SetRangeValuesMutation.id, params: patch });
        undos.unshift({
          id: SetRangeValuesMutation.id,
          params: { ...patch, cellValue: undoCellValue.getData() }
        });
      }
      const definedNames = this._definedNamesService.getDefinedNameMap(workbook.getUnitId());
      for (const item of Object.values(definedNames != null ? definedNames : {})) {
        const formulaOrRefString = refactorFormulaUnitQualifier(item.formulaOrRefString, oldName, newName);
        if (formulaOrRefString !== item.formulaOrRefString) {
          redos.push({ id: SetDefinedNameMutation.id, params: {
            unitId: workbook.getUnitId(),
            ...item,
            formulaOrRefString
          } });
          undos.unshift({ id: SetDefinedNameMutation.id, params: {
            unitId: workbook.getUnitId(),
            ...item
          } });
        }
      }
    }
    if (!redos.length || !sequenceExecute(redos, this._commandService).result) {
      return;
    }
    this._undoRedoService.pushUndoRedo({
      unitID: renamedUnitId,
      undoMutations: undos,
      redoMutations: redos
    });
  }
};
UnitQualifierRenameController = __decorateClass([
  __decorateParam(0, ICommandService),
  __decorateParam(1, IUndoRedoService),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, IDefinedNamesService)
], UnitQualifierRenameController);

// ../packages/sheets-formula/src/controllers/utils/offset-formula-data.ts
function checkFormulaDataNull(formulaData, unitId, sheetId) {
  var _a;
  if (formulaData == null || formulaData[unitId] == null || ((_a = formulaData[unitId]) == null ? void 0 : _a[sheetId]) == null) {
    return true;
  }
  return false;
}
function removeFormulaData(formulaData, unitId, sheetId) {
  var _a;
  if (sheetId) {
    if (formulaData && formulaData[unitId] && ((_a = formulaData[unitId]) == null ? void 0 : _a[sheetId])) {
      delete formulaData[unitId][sheetId];
      return {
        [unitId]: {
          [sheetId]: null
        }
      };
    }
  } else {
    if (formulaData && formulaData[unitId]) {
      delete formulaData[unitId];
      return {
        [unitId]: null
      };
    }
  }
}

// ../packages/sheets-formula/src/controllers/utils/ref-range-formula.ts
var formulaReferenceSheetList = [
  11 /* SetName */,
  12 /* SetUnitName */,
  13 /* RemoveSheet */,
  14 /* SetDefinedName */,
  15 /* RemoveDefinedName */,
  16 /* SetSuperTableName */,
  17 /* RemoveSuperTableName */
];
function getFormulaReferenceMoveUndoRedo(oldFormulaData, newFormulaData, formulaReferenceMoveParam) {
  const { type } = formulaReferenceMoveParam;
  if (formulaReferenceSheetList.includes(type) || type === 18 /* RemoveSuperTableColumn */ && formulaReferenceMoveParam.range == null) {
    return getFormulaReferenceSheet(oldFormulaData, newFormulaData);
  } else {
    return getFormulaReferenceRange(oldFormulaData, newFormulaData, formulaReferenceMoveParam);
  }
}
function getFormulaReferenceSheet(oldFormulaData, newFormulaData) {
  const undos = [];
  const redos = [];
  Object.keys(newFormulaData).forEach((unitId) => {
    const newSheetData = newFormulaData[unitId];
    const oldSheetData = oldFormulaData[unitId];
    if (newSheetData == null) {
      return true;
    }
    if (oldSheetData == null) {
      return true;
    }
    Object.keys(newSheetData).forEach((subUnitId) => {
      const newSheetFormula = new ObjectMatrix(newSheetData[subUnitId] || {});
      const oldSheetFormula = new ObjectMatrix(oldSheetData[subUnitId] || {});
      const redoFormulaMatrix = new ObjectMatrix();
      const undoFormulaMatrix = new ObjectMatrix();
      newSheetFormula.forValue((r, c, cell) => {
        if (cell == null) {
          return true;
        }
        const newValue = formulaDataItemToCellData(cell);
        if (newValue === null) {
          return;
        }
        redoFormulaMatrix.setValue(r, c, newValue);
        undoFormulaMatrix.setValue(r, c, oldSheetFormula.getValue(r, c));
      });
      if (redoFormulaMatrix.getSizeOf() === 0) {
        return;
      }
      const redoSetRangeValuesMutationParams = {
        subUnitId,
        unitId,
        cellValue: redoFormulaMatrix.getMatrix()
      };
      const redoMutation = {
        id: SetRangeValuesMutation.id,
        params: redoSetRangeValuesMutationParams
      };
      redos.push(redoMutation);
      const undoSetRangeValuesMutationParams = {
        subUnitId,
        unitId,
        cellValue: undoFormulaMatrix.getMatrix()
      };
      const undoMutation = {
        id: SetRangeValuesMutation.id,
        params: undoSetRangeValuesMutationParams
      };
      undos.push(undoMutation);
    });
  });
  return {
    undos,
    redos
  };
}
function getFormulaReferenceRange(oldFormulaData, newFormulaData, formulaReferenceMoveParam) {
  const { redoFormulaData, undoFormulaData } = refRangeFormula(oldFormulaData, newFormulaData, formulaReferenceMoveParam);
  const redos = [];
  const undos = [];
  Object.keys(redoFormulaData).forEach((unitId) => {
    Object.keys(redoFormulaData[unitId]).forEach((subUnitId) => {
      if (Object.keys(redoFormulaData[unitId][subUnitId]).length !== 0) {
        const redoSetRangeValuesMutationParams = {
          subUnitId,
          unitId,
          cellValue: redoFormulaData[unitId][subUnitId]
        };
        const redoMutation = {
          id: SetRangeValuesMutation.id,
          params: redoSetRangeValuesMutationParams
        };
        redos.push(redoMutation);
      }
    });
  });
  Object.keys(undoFormulaData).forEach((unitId) => {
    Object.keys(undoFormulaData[unitId]).forEach((subUnitId) => {
      if (Object.keys(undoFormulaData[unitId][subUnitId]).length !== 0) {
        const undoSetRangeValuesMutationParams = {
          subUnitId,
          unitId,
          cellValue: undoFormulaData[unitId][subUnitId]
        };
        const undoMutation = {
          id: SetRangeValuesMutation.id,
          params: undoSetRangeValuesMutationParams
        };
        undos.push(undoMutation);
      }
    });
  });
  return {
    undos,
    redos
  };
}
function refRangeFormula(oldFormulaData, newFormulaData, formulaReferenceMoveParam) {
  var _a, _b;
  const redoFormulaData = {};
  const undoFormulaData = {};
  const { unitId: fromUnitId, sheetId: fromSheetId } = formulaReferenceMoveParam;
  const targetUnitId = (_a = formulaReferenceMoveParam.targetUnitId) != null ? _a : fromUnitId;
  const targetSheetId = (_b = formulaReferenceMoveParam.targetSheetId) != null ? _b : fromSheetId;
  const isCrossSheet = fromUnitId !== targetUnitId || fromSheetId !== targetSheetId;
  const allUnitIds = /* @__PURE__ */ new Set([...Object.keys(oldFormulaData), ...Object.keys(newFormulaData)]);
  allUnitIds.forEach((unitId) => {
    if (checkFormulaDataNull(oldFormulaData, unitId, fromSheetId)) {
      return;
    }
    const allSheetIds = /* @__PURE__ */ new Set([
      ...Object.keys(oldFormulaData[unitId] || {}),
      ...Object.keys(newFormulaData[unitId] || {})
    ]);
    allSheetIds.forEach((currentSheetId) => {
      var _a2, _b2;
      const currentOldFormulaData = (_a2 = oldFormulaData[unitId]) == null ? void 0 : _a2[currentSheetId];
      const currentNewFormulaData = (_b2 = newFormulaData[unitId]) == null ? void 0 : _b2[currentSheetId];
      const oldFormulaMatrix = new ObjectMatrix(currentOldFormulaData || {});
      const newFormulaMatrix = new ObjectMatrix(currentNewFormulaData || {});
      let rangeList = [];
      if (isCrossSheet || unitId !== fromUnitId || currentSheetId !== fromSheetId) {
        rangeList = processFormulaRange(newFormulaMatrix);
      } else {
        rangeList = processFormulaChanges(oldFormulaMatrix, newFormulaMatrix, formulaReferenceMoveParam);
      }
      const sheetRedoFormulaData = getRedoFormulaData(rangeList, oldFormulaMatrix, newFormulaMatrix);
      const sheetUndoFormulaData = getUndoFormulaData(rangeList, oldFormulaMatrix);
      if (!redoFormulaData[unitId]) {
        redoFormulaData[unitId] = {};
      }
      if (!undoFormulaData[unitId]) {
        undoFormulaData[unitId] = {};
      }
      redoFormulaData[unitId][currentSheetId] = {
        ...redoFormulaData[unitId][currentSheetId],
        ...sheetRedoFormulaData
      };
      undoFormulaData[unitId][currentSheetId] = {
        ...undoFormulaData[unitId][currentSheetId],
        ...sheetUndoFormulaData
      };
    });
  });
  return {
    redoFormulaData,
    undoFormulaData
  };
}
function processFormulaChanges(oldFormulaMatrix, newFormulaMatrix, formulaReferenceMoveParam) {
  const { type, from, to, range } = formulaReferenceMoveParam;
  const rangeList = [];
  oldFormulaMatrix.forValue((row, column, cell) => {
    if (cell == null || !isFormulaDataItem(cell)) return true;
    const oldCell = cellToRange(row, column);
    let newCell = null;
    let isReverse = false;
    if ([0 /* MoveRange */, 1 /* MoveRows */, 2 /* MoveCols */].includes(type)) {
      newCell = handleMove(type, from, to, oldCell);
    } else if (range !== void 0 && range !== null) {
      const result = handleInsertDelete(oldCell, formulaReferenceMoveParam);
      newCell = result.newCell;
      isReverse = result.isReverse;
    }
    if (Tools.diffValue(oldCell, newCell) && !newFormulaMatrix.getValue(row, column)) {
      return true;
    }
    isReverse ? rangeList.unshift({ oldCell, newCell }) : rangeList.push({ oldCell, newCell });
  });
  return rangeList;
}
function processFormulaRange(newFormulaMatrix) {
  const rangeList = [];
  newFormulaMatrix.forValue((row, column, cell) => {
    if (cell == null || !isFormulaDataItem(cell)) return true;
    const newCell = cellToRange(row, column);
    rangeList.push({ oldCell: newCell, newCell });
  });
  return rangeList;
}
function handleMove(type, from, to, oldCell) {
  if (from == null || to == null) {
    return null;
  }
  switch (type) {
    case 0 /* MoveRange */:
      return handleRefMoveRange(from, to, oldCell);
    case 1 /* MoveRows */:
      return handleRefMoveRows(from, to, oldCell);
    case 2 /* MoveCols */:
      return handleRefMoveCols(from, to, oldCell);
    default:
      return null;
  }
}
function handleInsertDelete(oldCell, formulaReferenceMoveParam) {
  const { type, rangeFilteredRows } = formulaReferenceMoveParam;
  const range = formulaReferenceMoveParam.range;
  let newCell = null;
  let isReverse = false;
  switch (type) {
    case 3 /* InsertRow */:
      newCell = handleRefInsertRow(range, oldCell);
      isReverse = true;
      break;
    case 4 /* InsertColumn */:
      newCell = handleRefInsertCol(range, oldCell);
      isReverse = true;
      break;
    case 5 /* RemoveRow */:
      newCell = handleRefRemoveRow(range, oldCell, rangeFilteredRows);
      break;
    case 6 /* RemoveColumn */:
    case 18 /* RemoveSuperTableColumn */:
      newCell = handleRefRemoveCol(range, oldCell);
      break;
    case 7 /* DeleteMoveLeft */:
      newCell = handleRefDeleteMoveLeft(range, oldCell);
      break;
    case 8 /* DeleteMoveUp */:
      newCell = handleRefDeleteMoveUp(range, oldCell);
      break;
    case 9 /* InsertMoveDown */:
      newCell = handleRefInsertMoveDown(range, oldCell);
      isReverse = true;
      break;
    case 10 /* InsertMoveRight */:
      newCell = handleRefInsertMoveRight(range, oldCell);
      isReverse = true;
      break;
    default:
      break;
  }
  return { newCell, isReverse };
}
function handleRefMoveRange(from, to, oldCell) {
  const operators = handleMoveRange(
    {
      id: EffectRefRangId.MoveRangeCommandId,
      params: { toRange: to, fromRange: from }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefMoveRows(from, to, oldCell) {
  const operators = handleMoveRows(
    {
      id: EffectRefRangId.MoveRowsCommandId,
      params: { toRange: to, fromRange: from }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefMoveCols(from, to, oldCell) {
  const operators = handleMoveCols(
    {
      id: EffectRefRangId.MoveColsCommandId,
      params: { toRange: to, fromRange: from }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefInsertRow(range, oldCell) {
  const operators = handleInsertRow(
    {
      id: EffectRefRangId.InsertRowCommandId,
      params: { range, unitId: "", subUnitId: "", direction: 2 /* DOWN */ }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefInsertCol(range, oldCell) {
  const operators = handleInsertCol(
    {
      id: EffectRefRangId.InsertColCommandId,
      params: { range, unitId: "", subUnitId: "", direction: 1 /* RIGHT */ }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefRemoveRow(range, oldCell, rangeFilteredRows) {
  const operators = handleIRemoveRow(
    {
      id: EffectRefRangId.RemoveRowCommandId,
      params: { range }
    },
    oldCell,
    rangeFilteredRows
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefRemoveCol(range, oldCell) {
  const operators = handleIRemoveCol(
    {
      id: EffectRefRangId.RemoveColCommandId,
      params: { range }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefDeleteMoveLeft(range, oldCell) {
  const operators = handleDeleteRangeMoveLeft(
    {
      id: EffectRefRangId.DeleteRangeMoveLeftCommandId,
      params: { range }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefDeleteMoveUp(range, oldCell) {
  const operators = handleDeleteRangeMoveUp(
    {
      id: EffectRefRangId.DeleteRangeMoveUpCommandId,
      params: { range }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefInsertMoveDown(range, oldCell) {
  const operators = handleInsertRangeMoveDown(
    {
      id: EffectRefRangId.InsertRangeMoveDownCommandId,
      params: { range }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function handleRefInsertMoveRight(range, oldCell) {
  const operators = handleInsertRangeMoveRight(
    {
      id: EffectRefRangId.InsertRangeMoveRightCommandId,
      params: { range }
    },
    oldCell
  );
  return runRefRangeMutations(operators, oldCell);
}
function getRedoFormulaData(rangeList, oldFormulaMatrix, newFormulaMatrix) {
  var _a, _b, _c;
  const redoFormulaData = new ObjectMatrix({});
  for (let i = 0; i < rangeList.length; i++) {
    const { oldCell, newCell } = rangeList[i];
    if (!(((_a = redoFormulaData.getValue(oldCell.startRow, oldCell.startColumn)) == null ? void 0 : _a.f) || ((_b = redoFormulaData.getValue(oldCell.startRow, oldCell.startColumn)) == null ? void 0 : _b.si))) {
      redoFormulaData.setValue(oldCell.startRow, oldCell.startColumn, { f: null, si: null });
    }
    if (newCell) {
      const newFormula = (_c = newFormulaMatrix.getValue(oldCell.startRow, oldCell.startColumn)) != null ? _c : oldFormulaMatrix.getValue(oldCell.startRow, oldCell.startColumn);
      const newValue = formulaDataItemToCellData(newFormula);
      redoFormulaData.setValue(newCell.startRow, newCell.startColumn, newValue);
    }
  }
  return redoFormulaData.getMatrix();
}
function getUndoFormulaData(rangeList, oldFormulaMatrix) {
  const undoFormulaData = new ObjectMatrix({});
  for (let i = rangeList.length - 1; i >= 0; i--) {
    const { oldCell, newCell } = rangeList[i];
    const oldCellOldFormula = oldFormulaMatrix.getValue(oldCell.startRow, oldCell.startColumn);
    const oldCellOldValue = formulaDataItemToCellData(oldCellOldFormula);
    undoFormulaData.setValue(oldCell.startRow, oldCell.startColumn, oldCellOldValue);
    if (newCell) {
      const newCellOldFormula = oldFormulaMatrix.getValue(newCell.startRow, newCell.startColumn);
      const newCellOldValue = formulaDataItemToCellData(newCellOldFormula);
      undoFormulaData.setValue(newCell.startRow, newCell.startColumn, newCellOldValue != null ? newCellOldValue : { f: null, si: null });
    }
  }
  return undoFormulaData.getMatrix();
}
function formulaDataItemToCellData(formulaDataItem) {
  if (formulaDataItem === void 0) {
    return;
  }
  if (formulaDataItem === null) {
    return {
      f: null,
      si: null
    };
  }
  const { f, si, x = 0, y = 0 } = formulaDataItem;
  const checkFormulaString = isFormulaString(f);
  const checkFormulaId = isFormulaId(si);
  if (!checkFormulaString && !checkFormulaId) {
    return {
      f: null,
      si: null
    };
  }
  const cellData = {};
  if (checkFormulaId) {
    cellData.si = si;
  }
  if (checkFormulaString && x === 0 && y === 0) {
    cellData.f = f;
  }
  if (cellData.f === void 0) {
    cellData.f = null;
  }
  if (cellData.si === void 0) {
    cellData.si = null;
  }
  return cellData;
}
function formulaDataToCellData(formulaData, changedCellValue) {
  const cellData = new ObjectMatrix({});
  const formulaDataMatrix = new ObjectMatrix(formulaData);
  formulaDataMatrix.forValue((r, c, formulaDataItem) => {
    var _a;
    const cellDataItem = formulaDataItemToCellData(formulaDataItem);
    if (cellDataItem === void 0) {
      return;
    }
    if (changedCellValue && ((_a = changedCellValue[r]) == null ? void 0 : _a[c]) && ((cellDataItem == null ? void 0 : cellDataItem.f) || (cellDataItem == null ? void 0 : cellDataItem.si))) {
      cellDataItem.v = null;
      cellDataItem.t = null;
    }
    cellData.setValue(r, c, cellDataItem);
  });
  return cellData.getMatrix();
}
function isFormulaDataItem(cell) {
  const formulaString = (cell == null ? void 0 : cell.f) || "";
  const formulaId = (cell == null ? void 0 : cell.si) || "";
  const checkFormulaString = isFormulaString(formulaString);
  const checkFormulaId = isFormulaId(formulaId);
  if (checkFormulaString || checkFormulaId) {
    return true;
  }
  return false;
}
function checkIsSameUnitAndSheet(userUnitId, userSheetId, currentFormulaUnitId, currentFormulaSheetId, sequenceRangeUnitId, sequenceRangeSheetId) {
  if ((sequenceRangeUnitId == null || sequenceRangeUnitId.length === 0) && (sequenceRangeSheetId == null || sequenceRangeSheetId.length === 0)) {
    if (userUnitId === currentFormulaUnitId && userSheetId === currentFormulaSheetId) {
      return true;
    }
  } else if ((userUnitId === sequenceRangeUnitId || sequenceRangeUnitId == null || sequenceRangeUnitId.length === 0) && userSheetId === sequenceRangeSheetId) {
    return true;
  }
  return false;
}
function updateRefOffset(sequenceNodes, refChangeIds, refOffsetX = 0, refOffsetY = 0) {
  const newSequenceNodes = [];
  for (let i = 0, len = sequenceNodes.length; i < len; i++) {
    const node = sequenceNodes[i];
    if (typeof node === "string" || node.nodeType !== 4 /* REFERENCE */ || refChangeIds.includes(i)) {
      newSequenceNodes.push(node);
      continue;
    }
    const { token } = node;
    const sequenceGrid = deserializeRangeWithSheetWithCache(token);
    const { range, sheetName, unitId: sequenceUnitId } = sequenceGrid;
    const newRange = Rectangle.moveOffset(range, refOffsetX, refOffsetY);
    newSequenceNodes.push({
      ...node,
      token: serializeRangeToRefString({
        range: newRange,
        unitId: sequenceUnitId,
        sheetName
      })
    });
  }
  return newSequenceNodes;
}

// ../packages/sheets-formula/src/controllers/utils/ref-range-move.ts
function getNewRangeByMoveParam(unitRangeWidthOffset, formulaReferenceMoveParam, currentFormulaUnitId, currentFormulaSheetId, options = {}) {
  const {
    type,
    unitId: userUnitId,
    sheetId: userSheetId,
    targetUnitId,
    targetSheetId,
    targetSheetName,
    range,
    from,
    to,
    rangeFilteredRows
  } = formulaReferenceMoveParam;
  const {
    range: unitRange,
    sheetId: sequenceRangeSheetId,
    unitId: sequenceRangeUnitId,
    sheetName: sequenceRangeSheetName,
    refOffsetX,
    refOffsetY
  } = unitRangeWidthOffset;
  const { preserveSheetQualifier = false, inCrossSheetCutRange = false } = options;
  if (!checkIsSameUnitAndSheet(
    userUnitId,
    userSheetId,
    currentFormulaUnitId,
    currentFormulaSheetId,
    sequenceRangeUnitId,
    sequenceRangeSheetId
  )) {
    return;
  }
  const sequenceRange = Rectangle.moveOffset(unitRange, refOffsetX, refOffsetY);
  let newRange = null;
  if (type === 0 /* MoveRange */) {
    if (from == null || to == null) {
      return;
    }
    const moveEdge = checkMoveEdge(sequenceRange, from);
    const remainRange = getIntersectRange(sequenceRange, from);
    if (remainRange == null || moveEdge !== 4 /* ALL */) {
      return;
    }
    const operators = handleMoveRange(
      { id: EffectRefRangId.MoveRangeCommandId, params: { toRange: to, fromRange: from } },
      remainRange
    );
    const result = runRefRangeMutations(operators, remainRange);
    if (result == null) {
      return "#REF!" /* REF */;
    }
    newRange = getMoveNewRange(moveEdge, result, from, to, sequenceRange, remainRange);
  } else if (type === 1 /* MoveRows */) {
    if (from == null || to == null) {
      return;
    }
    const moveEdge = checkMoveEdge(sequenceRange, from);
    let remainRange = getIntersectRange(sequenceRange, from);
    if (remainRange == null && (from.endRow < sequenceRange.startRow && to.endRow <= sequenceRange.startRow || from.startRow > sequenceRange.endRow && to.startRow > sequenceRange.endRow)) {
      return;
    }
    if (remainRange == null) {
      remainRange = {
        startRow: sequenceRange.startRow,
        endRow: sequenceRange.endRow,
        startColumn: sequenceRange.startColumn,
        endColumn: sequenceRange.endColumn,
        rangeType: 0 /* NORMAL */
      };
    }
    const operators = handleMoveRows(
      { id: EffectRefRangId.MoveRowsCommandId, params: { toRange: to, fromRange: from } },
      remainRange
    );
    const result = runRefRangeMutations(operators, remainRange);
    if (result == null) {
      return "#REF!" /* REF */;
    }
    newRange = getMoveNewRange(moveEdge, result, from, to, sequenceRange, remainRange);
  } else if (type === 2 /* MoveCols */) {
    if (from == null || to == null) {
      return;
    }
    const moveEdge = checkMoveEdge(sequenceRange, from);
    let remainRange = getIntersectRange(sequenceRange, from);
    if (remainRange == null && (from.endColumn < sequenceRange.startColumn && to.endColumn <= sequenceRange.startColumn || from.startColumn > sequenceRange.endColumn && to.startColumn > sequenceRange.endColumn)) {
      return;
    }
    if (remainRange == null) {
      remainRange = {
        startRow: sequenceRange.startRow,
        endRow: sequenceRange.endRow,
        startColumn: sequenceRange.startColumn,
        endColumn: sequenceRange.endColumn,
        rangeType: 0 /* NORMAL */
      };
    }
    const operators = handleMoveCols(
      { id: EffectRefRangId.MoveColsCommandId, params: { toRange: to, fromRange: from } },
      remainRange
    );
    const result = runRefRangeMutations(operators, remainRange);
    if (result == null) {
      return "#REF!" /* REF */;
    }
    newRange = getMoveNewRange(moveEdge, result, from, to, sequenceRange, remainRange);
  }
  if (range != null) {
    if (type === 3 /* InsertRow */) {
      const operators = handleInsertRow(
        {
          id: EffectRefRangId.InsertRowCommandId,
          params: { range, unitId: "", subUnitId: "", direction: 2 /* DOWN */ }
        },
        sequenceRange
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    } else if (type === 4 /* InsertColumn */) {
      const operators = handleInsertCol(
        {
          id: EffectRefRangId.InsertColCommandId,
          params: { range, unitId: "", subUnitId: "", direction: 1 /* RIGHT */ }
        },
        sequenceRange
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    } else if (type === 5 /* RemoveRow */) {
      const operators = handleIRemoveRow(
        {
          id: EffectRefRangId.RemoveRowCommandId,
          params: { range }
        },
        sequenceRange,
        rangeFilteredRows
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return "#REF!" /* REF */;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    } else if (type === 6 /* RemoveColumn */) {
      const operators = handleIRemoveCol(
        {
          id: EffectRefRangId.RemoveColCommandId,
          params: { range }
        },
        sequenceRange
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return "#REF!" /* REF */;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    } else if (type === 7 /* DeleteMoveLeft */) {
      const operators = handleDeleteRangeMoveLeft(
        {
          id: EffectRefRangId.DeleteRangeMoveLeftCommandId,
          params: { range }
        },
        sequenceRange
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return "#REF!" /* REF */;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    } else if (type === 8 /* DeleteMoveUp */) {
      const operators = handleDeleteRangeMoveUp(
        {
          id: EffectRefRangId.DeleteRangeMoveUpCommandId,
          params: { range }
        },
        sequenceRange
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return "#REF!" /* REF */;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    } else if (type === 9 /* InsertMoveDown */) {
      const operators = handleInsertRangeMoveDown(
        {
          id: EffectRefRangId.InsertRangeMoveDownCommandId,
          params: { range }
        },
        sequenceRange
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    } else if (type === 10 /* InsertMoveRight */) {
      const operators = handleInsertRangeMoveRight(
        {
          id: EffectRefRangId.InsertRangeMoveRightCommandId,
          params: { range }
        },
        sequenceRange
      );
      const result = runRefRangeMutations(operators, sequenceRange);
      if (result == null) {
        return;
      }
      newRange = {
        ...sequenceRange,
        ...result
      };
    }
  }
  if (newRange == null) {
    return;
  }
  const shouldRewriteSheet = type === 0 /* MoveRange */ && !!targetSheetId && targetSheetId !== userSheetId && !inCrossSheetCutRange;
  const rewrittenSheetId = shouldRewriteSheet ? targetSheetId : sequenceRangeSheetId;
  const rewrittenSheetName = shouldRewriteSheet ? targetSheetName || sequenceRangeSheetName : sequenceRangeSheetName;
  const rewrittenUnitId = shouldRewriteSheet ? targetUnitId || sequenceRangeUnitId : sequenceRangeUnitId;
  const isCurrentFormulaWorkbook = rewrittenUnitId == null || rewrittenUnitId.length === 0 || rewrittenUnitId === currentFormulaUnitId;
  const isCurrentFormulaSheet = rewrittenSheetId === currentFormulaSheetId;
  return serializeRangeToRefString({
    range: newRange,
    sheetName: preserveSheetQualifier || !(isCurrentFormulaWorkbook && isCurrentFormulaSheet) ? rewrittenSheetName : "",
    unitId: isCurrentFormulaWorkbook ? "" : rewrittenUnitId
  });
}
function getMoveNewRange(moveEdge, result, from, to, origin, remain) {
  const { startRow, endRow, startColumn, endColumn, rangeType } = getStartEndValue(result);
  const {
    startRow: fromStartRow,
    startColumn: fromStartColumn,
    endRow: fromEndRow,
    endColumn: fromEndColumn,
    rangeType: fromRangeType = 0 /* NORMAL */
  } = getStartEndValue(from);
  const { startRow: toStartRow, startColumn: toStartColumn, endRow: toEndRow, endColumn: toEndColumn } = getStartEndValue(to);
  const {
    startRow: remainStartRow,
    endRow: remainEndRow,
    startColumn: remainStartColumn,
    endColumn: remainEndColumn
  } = getStartEndValue(remain);
  const {
    startRow: originStartRow,
    endRow: originEndRow,
    startColumn: originStartColumn,
    endColumn: originEndColumn,
    rangeType: originRangeType = 0 /* NORMAL */
  } = getStartEndValue(origin);
  const newRange = { ...origin };
  function rowsCover() {
    if (rangeType === 2 /* COLUMN */ && originRangeType === 2 /* COLUMN */) {
      return true;
    }
    return startColumn >= originStartColumn && endColumn <= originEndColumn;
  }
  function columnsCover() {
    if (rangeType === 1 /* ROW */ && originRangeType === 1 /* ROW */) {
      return true;
    }
    return startRow >= originStartRow && endRow <= originEndRow;
  }
  if (moveEdge === 0 /* UP */) {
    if (rowsCover()) {
      if (startRow < originStartRow) {
        newRange.startRow = startRow;
      } else if (startRow >= originEndRow) {
        newRange.endRow -= fromEndRow + 1 - originStartRow;
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (moveEdge === 1 /* DOWN */) {
    if (rowsCover()) {
      if (endRow > originEndRow) {
        newRange.endRow = endRow;
      } else if (endRow <= originStartRow) {
        newRange.startRow += originEndRow - fromStartRow + 1;
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (moveEdge === 2 /* LEFT */) {
    if (columnsCover()) {
      if (startColumn < originStartColumn) {
        newRange.startColumn = startColumn;
      } else if (startColumn >= originEndColumn) {
        newRange.endColumn -= fromEndColumn + 1 - originStartColumn;
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (moveEdge === 3 /* RIGHT */) {
    if (columnsCover()) {
      if (endColumn > originEndColumn) {
        newRange.endColumn = endColumn;
      } else if (endColumn <= originStartColumn) {
        newRange.startColumn += originEndColumn - fromStartColumn + 1;
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (moveEdge === 4 /* ALL */) {
    newRange.startRow = startRow;
    newRange.startColumn = startColumn;
    newRange.endRow = endRow;
    newRange.endColumn = endColumn;
  } else if (fromStartColumn <= originStartColumn && fromEndColumn >= originEndColumn || fromRangeType === 1 /* ROW */ && originRangeType === 1 /* ROW */) {
    if (from.endRow < originStartRow) {
      if (toStartRow >= originStartRow) {
        newRange.startRow -= fromEndRow - fromStartRow + 1;
      }
      if (toStartRow >= originEndRow) {
        newRange.endRow -= fromEndRow - fromStartRow + 1;
      }
    } else if (from.startRow > originEndRow) {
      if (toEndRow <= originEndRow) {
        newRange.endRow += fromEndRow - fromStartRow + 1;
      }
      if (toEndRow <= originStartRow) {
        newRange.startRow += fromEndRow - fromStartRow + 1;
      }
    } else if (from.startRow >= originStartRow && from.endRow <= originEndRow) {
      if (toStartRow <= originStartRow) {
        newRange.startRow += fromEndRow - fromStartRow + 1;
      } else if (toStartRow >= originEndRow) {
        newRange.endRow -= fromEndRow - fromStartRow + 1;
      }
    }
  } else if (fromStartRow <= originStartRow && fromEndRow >= originEndRow || fromRangeType === 2 /* COLUMN */ && originRangeType === 2 /* COLUMN */) {
    if (from.endColumn < originStartColumn) {
      if (toStartColumn >= originStartColumn) {
        newRange.startColumn -= fromEndColumn - fromStartColumn + 1;
      }
      if (toStartColumn >= originEndColumn) {
        newRange.endColumn -= fromEndColumn - fromStartColumn + 1;
      }
    } else if (from.startColumn > originEndColumn) {
      if (toEndColumn <= originEndColumn) {
        newRange.endColumn += fromEndColumn - fromStartColumn + 1;
      }
      if (toEndColumn <= originStartColumn) {
        newRange.startColumn += fromEndColumn - fromStartColumn + 1;
      }
    } else if (from.startColumn >= originStartColumn && from.endColumn <= originEndColumn) {
      if (toStartColumn <= originStartColumn) {
        newRange.startColumn += fromEndColumn - fromStartColumn + 1;
      } else if (toStartColumn >= originEndColumn) {
        newRange.endColumn -= fromEndColumn - fromStartColumn + 1;
      }
    }
  } else if ((toStartColumn <= remainEndColumn + 1 && toEndColumn >= originEndColumn || toStartColumn <= originStartColumn && toEndColumn >= remainStartColumn - 1) && toStartRow <= originStartRow && toEndRow >= originEndRow) {
    newRange.startRow = startRow;
    newRange.startColumn = startColumn;
    newRange.endRow = endRow;
    newRange.endColumn = endColumn;
  } else if ((toStartRow <= remainEndRow + 1 && toEndRow >= originEndRow || toStartRow <= originStartRow && toEndRow >= remainStartRow - 1) && toStartColumn <= originStartColumn && toEndColumn >= originEndColumn) {
    newRange.startRow = startRow;
    newRange.startColumn = startColumn;
    newRange.endRow = endRow;
    newRange.endColumn = endColumn;
  } else {
    newRange.startRow = startRow;
    newRange.startColumn = startColumn;
    newRange.endRow = endRow;
    newRange.endColumn = endColumn;
  }
  return newRange;
}
function checkMoveEdge(originRange, fromRange) {
  const startRow = getStartValue(originRange.startRow);
  const endRow = getEndValue(originRange.endRow);
  const startColumn = getStartValue(originRange.startColumn);
  const endColumn = getEndValue(originRange.endColumn);
  const fromStartRow = getStartValue(fromRange.startRow);
  const fromEndRow = getEndValue(fromRange.endRow);
  const fromStartColumn = getStartValue(fromRange.startColumn);
  const fromEndColumn = getEndValue(fromRange.endColumn);
  function rowsCover() {
    if (originRange.rangeType === 2 /* COLUMN */ && fromRange.rangeType === 2 /* COLUMN */) {
      return true;
    }
    return startRow >= fromStartRow && endRow <= fromEndRow;
  }
  function columnsCover() {
    if (originRange.rangeType === 1 /* ROW */ && fromRange.rangeType === 1 /* ROW */) {
      return true;
    }
    return startColumn >= fromStartColumn && endColumn <= fromEndColumn;
  }
  function allCover() {
    return originRange.rangeType === 3 /* ALL */ && fromRange.rangeType === 3 /* ALL */;
  }
  if (rowsCover() && columnsCover() || allCover()) {
    return 4 /* ALL */;
  }
  if (columnsCover() && startRow >= fromStartRow && startRow <= fromEndRow && endRow > fromEndRow) {
    return 0 /* UP */;
  }
  if (columnsCover() && endRow >= fromStartRow && endRow <= fromEndRow && startRow < fromStartRow) {
    return 1 /* DOWN */;
  }
  if (rowsCover() && startColumn >= fromStartColumn && startColumn <= fromEndColumn && endColumn > fromEndColumn) {
    return 2 /* LEFT */;
  }
  if (rowsCover() && endColumn >= fromStartColumn && endColumn <= fromEndColumn && startColumn < fromStartColumn) {
    return 3 /* RIGHT */;
  }
  return null;
}
function getStartValue(value) {
  return isNaN(value) ? -Infinity : value;
}
function getEndValue(value) {
  return isNaN(value) ? Infinity : value;
}
function getStartEndValue(range) {
  const { startRow, endRow, startColumn, endColumn } = range;
  return {
    ...range,
    startRow: getStartValue(startRow),
    endRow: getEndValue(endRow),
    startColumn: getStartValue(startColumn),
    endColumn: getEndValue(endColumn)
  };
}

// ../packages/sheets-formula/src/controllers/utils/ref-range-param.ts
var SET_SHEET_TABLE_COMMAND_ID = "sheet.command.set-table-config";
var DELETE_SHEET_TABLE_COMMAND_ID = "sheet.command.delete-table";
var REMOVE_SHEET_TABLE_COLUMN_AT_COMMAND_ID = "sheet.command.table-remove-column-at";
var REMOVE_SHEET_TABLE_COLUMN_COMMAND_ID = "sheet.command.table-remove-col";
function getReferenceMoveParams(workbook, command) {
  const { id } = command;
  let result = null;
  switch (id) {
    case MoveRangeCommand.id:
      result = handleRefMoveRange2(command, workbook);
      break;
    case MoveRowsCommand.id:
      result = handleRefMoveRows2(command, workbook);
      break;
    case MoveColsCommand.id:
      result = handleRefMoveCols2(command, workbook);
      break;
    case InsertRowCommand.id:
      result = handleRefInsertRow2(command);
      break;
    case InsertColCommand.id:
      result = handleRefInsertCol2(command);
      break;
    case InsertRangeMoveRightCommand.id:
      result = handleRefInsertRangeMoveRight(command, workbook);
      break;
    case InsertRangeMoveDownCommand.id:
      result = handleRefInsertRangeMoveDown(command, workbook);
      break;
    case RemoveRowCommand.id:
      result = handleRefRemoveRow2(command, workbook);
      break;
    case RemoveColCommand.id:
      result = handleRefRemoveCol2(command, workbook);
      break;
    case DeleteRangeMoveUpCommand.id:
      result = handleRefDeleteRangeMoveUp(command, workbook);
      break;
    case DeleteRangeMoveLeftCommand.id:
      result = handleRefDeleteRangeMoveLeft(command, workbook);
      break;
    case SetWorksheetNameCommand.id:
      result = handleRefSetWorksheetName(command, workbook);
      break;
    case SetWorkbookNameCommand.id:
      result = handleRefSetWorkbookName(command);
      break;
    case RemoveSheetCommand.id:
      result = handleRefRemoveWorksheet(command, workbook);
      break;
    case SetDefinedNameCommand.id:
      result = handleRefSetDefinedName(command, workbook);
      break;
    case RemoveDefinedNameCommand.id:
      result = handleRefRemoveDefinedName(command, workbook);
      break;
    case SET_SHEET_TABLE_COMMAND_ID:
      result = handleRefSetSheetTableName(command, workbook);
      break;
    case DELETE_SHEET_TABLE_COMMAND_ID:
      result = handleRefRemoveSheetTableName(command, workbook);
      break;
    case REMOVE_SHEET_TABLE_COLUMN_AT_COMMAND_ID:
    case REMOVE_SHEET_TABLE_COLUMN_COMMAND_ID:
      result = handleRefRemoveSheetTableColumn(command, workbook);
      break;
  }
  return result;
}
function getCurrentSheetInfo(workbook) {
  var _a;
  const unitId = workbook.getUnitId();
  const sheetId = ((_a = workbook.getActiveSheet()) == null ? void 0 : _a.getSheetId()) || "";
  return {
    unitId,
    sheetId
  };
}
function handleRefMoveRange2(command, workbook) {
  var _a, _b;
  const { params } = command;
  if (!params) return null;
  const {
    fromRange,
    toRange,
    fromUnitId,
    fromSubUnitId,
    toUnitId,
    toSubUnitId
  } = params;
  if (!fromRange || !toRange) return null;
  const { unitId: currentUnitId, sheetId: currentSheetId } = getCurrentSheetInfo(workbook);
  const unitId = fromUnitId || toUnitId || currentUnitId;
  const sheetId = fromSubUnitId || currentSheetId;
  const sheetName = (_a = workbook.getSheetBySheetId(sheetId)) == null ? void 0 : _a.getName();
  const targetSheetId = toSubUnitId || fromSubUnitId || currentSheetId;
  const targetUnitId = toUnitId || fromUnitId || currentUnitId;
  const targetSheetName = (_b = workbook.getSheetBySheetId(targetSheetId)) == null ? void 0 : _b.getName();
  return {
    type: 0 /* MoveRange */,
    from: fromRange,
    to: toRange,
    unitId,
    sheetId,
    sheetName,
    targetUnitId,
    targetSheetId,
    targetSheetName
  };
}
function handleRefMoveRows2(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const {
    fromRange: { startRow: fromStartRow, endRow: fromEndRow },
    toRange: { startRow: toStartRow, endRow: toEndRow }
  } = params;
  const unitId = workbook.getUnitId();
  const worksheet = workbook.getActiveSheet();
  if (!worksheet) return null;
  const sheetId = worksheet.getSheetId();
  const from = {
    startRow: fromStartRow,
    startColumn: 0,
    endRow: fromEndRow,
    endColumn: worksheet.getColumnCount() - 1,
    rangeType: 1 /* ROW */
  };
  const to = {
    startRow: toStartRow,
    startColumn: 0,
    endRow: toEndRow,
    endColumn: worksheet.getColumnCount() - 1,
    rangeType: 1 /* ROW */
  };
  return {
    type: 1 /* MoveRows */,
    from,
    to,
    unitId,
    sheetId
  };
}
function handleRefMoveCols2(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const {
    fromRange: { startColumn: fromStartCol, endColumn: fromEndCol },
    toRange: { startColumn: toStartCol, endColumn: toEndCol }
  } = params;
  const unitId = workbook.getUnitId();
  const worksheet = workbook.getActiveSheet();
  if (!worksheet) return null;
  const sheetId = worksheet.getSheetId();
  const from = {
    startRow: 0,
    startColumn: fromStartCol,
    endRow: worksheet.getRowCount() - 1,
    endColumn: fromEndCol,
    rangeType: 2 /* COLUMN */
  };
  const to = {
    startRow: 0,
    startColumn: toStartCol,
    endRow: worksheet.getRowCount() - 1,
    endColumn: toEndCol,
    rangeType: 2 /* COLUMN */
  };
  return {
    type: 2 /* MoveCols */,
    from,
    to,
    unitId,
    sheetId
  };
}
function handleRefInsertRow2(command) {
  const { params } = command;
  if (!params) return null;
  const { range, unitId, subUnitId } = params;
  return {
    type: 3 /* InsertRow */,
    range,
    unitId,
    sheetId: subUnitId
  };
}
function handleRefInsertCol2(command) {
  const { params } = command;
  if (!params) return null;
  const { range, unitId, subUnitId } = params;
  return {
    type: 4 /* InsertColumn */,
    range,
    unitId,
    sheetId: subUnitId
  };
}
function handleRefInsertRangeMoveRight(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { range } = params;
  const { unitId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 10 /* InsertMoveRight */,
    range,
    unitId,
    sheetId
  };
}
function handleRefInsertRangeMoveDown(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { range } = params;
  const { unitId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 9 /* InsertMoveDown */,
    range,
    unitId,
    sheetId
  };
}
function handleRefRemoveRow2(command, workbook) {
  var _a, _b;
  const { params } = command;
  if (!params) return null;
  const { range } = params;
  const { unitId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 5 /* RemoveRow */,
    range,
    unitId,
    sheetId,
    rangeFilteredRows: (_b = (_a = workbook.getSheetBySheetId(sheetId)) == null ? void 0 : _a.getRangeFilterRows(range)) != null ? _b : []
  };
}
function handleRefRemoveCol2(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { range } = params;
  const { unitId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 6 /* RemoveColumn */,
    range,
    unitId,
    sheetId
  };
}
function handleRefDeleteRangeMoveUp(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { range } = params;
  const { unitId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 8 /* DeleteMoveUp */,
    range,
    unitId,
    sheetId
  };
}
function handleRefDeleteRangeMoveLeft(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { range } = params;
  const { unitId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 7 /* DeleteMoveLeft */,
    range,
    unitId,
    sheetId
  };
}
function handleRefSetWorksheetName(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { unitId, subUnitId, name } = params;
  const { unitId: workbookId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 11 /* SetName */,
    unitId: unitId || workbookId,
    sheetId: subUnitId || sheetId,
    sheetName: name
  };
}
function handleRefSetWorkbookName(command) {
  const { params } = command;
  if (!params) return null;
  return {
    type: 12 /* SetUnitName */,
    unitId: params.unitId,
    sheetId: "",
    unitName: params.name
  };
}
function handleRefRemoveWorksheet(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { unitId, subUnitId } = params;
  const { unitId: workbookId, sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 13 /* RemoveSheet */,
    unitId: unitId || workbookId,
    sheetId: subUnitId || sheetId
  };
}
function handleRefSetDefinedName(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { unitId, name, id } = params;
  const { sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 14 /* SetDefinedName */,
    unitId,
    sheetId,
    definedName: name,
    definedNameId: id
  };
}
function handleRefRemoveDefinedName(command, workbook) {
  const { params } = command;
  if (!params) return null;
  const { unitId, name, id } = params;
  const { sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 15 /* RemoveDefinedName */,
    unitId,
    sheetId,
    definedName: name,
    definedNameId: id
  };
}
function handleRefSetSheetTableName(command, workbook) {
  const { params } = command;
  if (!params || !params.name || !params.oldTableName || params.oldTableName === params.name) return null;
  const { unitId, name: tableName, oldTableName } = params;
  const { sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 16 /* SetSuperTableName */,
    unitId,
    sheetId,
    tableName,
    oldTableName
  };
}
function handleRefRemoveSheetTableName(command, workbook) {
  const { params } = command;
  if (!params || !params.tableName) return null;
  const { unitId, tableName } = params;
  const { sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 17 /* RemoveSuperTableName */,
    unitId,
    sheetId,
    oldTableName: tableName
  };
}
function handleRefRemoveSheetTableColumn(command, workbook) {
  var _a;
  const { params } = command;
  if (!params || !params.tableName || !((_a = params.removedColumnNames) == null ? void 0 : _a.length)) return null;
  const { unitId, subUnitId, range, tableName, removedColumnNames } = params;
  const { sheetId } = getCurrentSheetInfo(workbook);
  return {
    type: 18 /* RemoveSuperTableColumn */,
    unitId,
    sheetId: subUnitId || sheetId,
    range,
    oldTableName: tableName,
    tableColumnNames: removedColumnNames
  };
}

// ../packages/sheets-formula/src/controllers/update-defined-name.controller.ts
var UpdateDefinedNameController = class extends Disposable {
  constructor(_definedNamesService, _univerInstanceService, _sheetInterceptorService, _lexerTreeBuilder) {
    super();
    __publicField(this, "_definedNamesService", _definedNamesService);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_lexerTreeBuilder", _lexerTreeBuilder);
    this._initialize();
  }
  _initialize() {
    this._commandExecutedListener();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._sheetInterceptorService.interceptCommand({
        getMutations: (command) => {
          var _a;
          if (command.id === SetDefinedNameCommand.id || command.id === RemoveDefinedNameCommand.id) {
            return {
              redos: [],
              undos: []
            };
          }
          const workbook = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
          if (workbook == null) {
            return {
              redos: [],
              undos: []
            };
          }
          const result = getReferenceMoveParams(workbook, command);
          if (!result) {
            return {
              redos: [],
              undos: []
            };
          }
          if (result.type === 12 /* SetUnitName */) {
            result.oldUnitName = (_a = this._univerInstanceService.getUnit(result.unitId, 2 /* UNIVER_SHEET */)) == null ? void 0 : _a.getName();
          }
          return this._getUpdateDefinedNameMutations(workbook, result);
        }
      })
    );
  }
  // eslint-disable-next-line max-lines-per-function
  _getUpdateDefinedNameMutations(workbook, moveParams) {
    const { type, unitId, sheetId } = moveParams;
    const definedNames = this._definedNamesService.getDefinedNameMap(unitId);
    if (!definedNames) {
      return {
        redos: [],
        undos: []
      };
    }
    const redoMutations = [];
    const undoMutations = [];
    Object.values(definedNames).forEach((item) => {
      var _a;
      const { formulaOrRefString } = item;
      if (type === 12 /* SetUnitName */) {
        const { oldUnitName, unitName } = moveParams;
        if (!oldUnitName || !unitName) return true;
        const nextFormula = refactorFormulaUnitQualifier(formulaOrRefString, oldUnitName, unitName);
        if (nextFormula === formulaOrRefString) return true;
        redoMutations.push({ id: SetDefinedNameMutation.id, params: { unitId, ...item, formulaOrRefString: nextFormula } });
        undoMutations.push({ id: SetDefinedNameMutation.id, params: { unitId, ...item } });
        return true;
      }
      const sequenceNodes = this._lexerTreeBuilder.sequenceNodesBuilder(formulaOrRefString);
      if (sequenceNodes == null) {
        return true;
      }
      let shouldModify = false;
      const refChangeIds = [];
      for (let i = 0, len = sequenceNodes.length; i < len; i++) {
        const node = sequenceNodes[i];
        if (typeof node === "string" || node.nodeType !== 4 /* REFERENCE */) {
          continue;
        }
        const { token } = node;
        const sequenceGrid = deserializeRangeWithSheetWithCache(token);
        const { range, sheetName, unitId: sequenceUnitId } = sequenceGrid;
        const sequenceSheetId = ((_a = workbook.getSheetBySheetName(sheetName)) == null ? void 0 : _a.getSheetId()) || "";
        const sequenceUnitRangeWidthOffset = {
          range,
          sheetId: sequenceSheetId,
          unitId: sequenceUnitId,
          sheetName,
          refOffsetX: 0,
          refOffsetY: 0
        };
        let newRefString = null;
        if (type === 13 /* RemoveSheet */) {
          newRefString = this._removeSheet(item, unitId, sheetId);
        } else if (type === 11 /* SetName */) {
          const {
            sheetId: userSheetId,
            sheetName: newSheetName
          } = moveParams;
          if (newSheetName == null) {
            continue;
          }
          if (sequenceSheetId == null || sequenceSheetId.length === 0) {
            continue;
          }
          if (userSheetId !== sequenceSheetId) {
            continue;
          }
          newRefString = serializeRangeToRefString({
            range,
            sheetName: newSheetName,
            unitId: sequenceUnitId
          });
        } else {
          newRefString = getNewRangeByMoveParam(
            sequenceUnitRangeWidthOffset,
            moveParams,
            unitId,
            sheetId,
            { preserveSheetQualifier: true }
          );
        }
        if (newRefString != null) {
          sequenceNodes[i] = {
            ...node,
            token: newRefString
          };
          shouldModify = true;
          refChangeIds.push(i);
        }
      }
      if (!shouldModify) {
        return true;
      }
      const newSequenceString = generateStringWithSequence(updateRefOffset(sequenceNodes, refChangeIds));
      const redoMutation = {
        id: SetDefinedNameMutation.id,
        params: {
          unitId,
          ...item,
          formulaOrRefString: newSequenceString
        }
      };
      redoMutations.push(redoMutation);
      const undoMutation = {
        id: SetDefinedNameMutation.id,
        params: {
          unitId,
          ...item
        }
      };
      undoMutations.push(undoMutation);
    });
    return {
      redos: redoMutations,
      undos: undoMutations
    };
  }
  _removeSheet(item, unitId, subUnitId) {
    var _a;
    const { formulaOrRefString } = item;
    const sheetId = (_a = this._definedNamesService.getWorksheetByRef(unitId, formulaOrRefString)) == null ? void 0 : _a.getSheetId();
    if (sheetId === subUnitId) {
      return "#REF!" /* REF */;
    }
    return null;
  }
};
UpdateDefinedNameController = __decorateClass([
  __decorateParam(0, IDefinedNamesService),
  __decorateParam(1, IUniverInstanceService),
  __decorateParam(2, Inject(SheetInterceptorService)),
  __decorateParam(3, Inject(LexerTreeBuilder))
], UpdateDefinedNameController);

// ../packages/sheets-formula/src/controllers/update-formula.controller.ts
var UpdateFormulaController = class extends Disposable {
  constructor(_univerInstanceService, _commandService, _lexerTreeBuilder, _formulaDataModel, _sheetInterceptorService, _definedNamesService, _configService, _injector) {
    super();
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_lexerTreeBuilder", _lexerTreeBuilder);
    __publicField(this, "_formulaDataModel", _formulaDataModel);
    __publicField(this, "_sheetInterceptorService", _sheetInterceptorService);
    __publicField(this, "_definedNamesService", _definedNamesService);
    __publicField(this, "_configService", _configService);
    __publicField(this, "_injector", _injector);
    this._commandExecutedListener();
  }
  _commandExecutedListener() {
    this.disposeWithMe(this._sheetInterceptorService.interceptCommand({
      getMutations: (command) => this._getUpdateFormula(command)
    }));
    this.disposeWithMe(
      this._commandService.onCommandExecuted((command) => {
        if (!command.params) return;
        if (command.id === RemoveSheetMutation.id) {
          const { subUnitId: sheetId, unitId } = command.params;
          this._handleWorkbookDisposed(unitId, sheetId);
        } else if (command.id === InsertSheetMutation.id) {
          this._handleInsertSheetMutation(command.params);
        }
      })
    );
    this.disposeWithMe(
      this._commandService.beforeCommandExecuted((command, options) => {
        if (command.id === SetRangeValuesMutation.id) {
          const params = command.params;
          if (shouldSkipFormulaUpdateForSetRangeValues(params, options)) {
            return;
          }
          this._handleSetRangeValuesMutation(params);
        }
      })
    );
    this.disposeWithMe(this._univerInstanceService.getTypeOfUnitAdded$(2 /* UNIVER_SHEET */).subscribe((event) => this._handleWorkbookAdded(event.unit)));
    this.disposeWithMe(this._univerInstanceService.getTypeOfUnitDisposed$(2 /* UNIVER_SHEET */).pipe(map((unit) => unit.getUnitId())).subscribe((unitId) => this._handleWorkbookDisposed(unitId)));
  }
  _handleSetRangeValuesMutation(params) {
    const { subUnitId: sheetId, unitId, cellValue } = params;
    if (cellValue == null) {
      return;
    }
    const newSheetFormulaData = this._formulaDataModel.updateFormulaData(unitId, sheetId, cellValue);
    const arrayFormulaCellDataChanged = this._formulaDataModel.updateArrayFormulaCellData(unitId, sheetId, cellValue);
    const arrayFormulaRangeChanged = this._formulaDataModel.updateArrayFormulaRange(unitId, sheetId, cellValue);
    if (Object.keys(newSheetFormulaData).length === 0) {
      if (arrayFormulaCellDataChanged || arrayFormulaRangeChanged) {
        this._commandService.executeCommand(
          SetArrayFormulaDataMutation.id,
          {
            arrayFormulaRange: this._formulaDataModel.getArrayFormulaRange(),
            arrayFormulaCellData: this._formulaDataModel.getArrayFormulaCellData()
          },
          {
            onlyLocal: true,
            remove: true
            // remove array formula range shape
          }
        );
      }
      return;
    }
    const newFormulaData = {
      [unitId]: {
        [sheetId]: newSheetFormulaData
      }
    };
    this._commandService.executeCommand(
      SetRangeValuesMutation.id,
      {
        unitId,
        subUnitId: sheetId,
        cellValue: formulaDataToCellData(newSheetFormulaData, cellValue)
      },
      {
        onlyLocal: true,
        fromFormula: true
      }
    );
    this._formulaDataModel.updateImageFormulaData(unitId, sheetId, cellValue);
    this._commandService.executeCommand(
      SetFormulaDataMutation.id,
      {
        formulaData: newFormulaData
      },
      {
        onlyLocal: true
      }
    );
    this._commandService.executeCommand(
      SetArrayFormulaDataMutation.id,
      {
        arrayFormulaRange: this._formulaDataModel.getArrayFormulaRange(),
        arrayFormulaCellData: this._formulaDataModel.getArrayFormulaCellData()
      },
      {
        onlyLocal: true,
        remove: true
        // remove array formula range shape
      }
    );
  }
  _handleWorkbookDisposed(unitId, sheetId) {
    const formulaData = this._formulaDataModel.getFormulaData();
    const newFormulaData = removeFormulaData(formulaData, unitId, sheetId);
    const arrayFormulaRange = this._formulaDataModel.getArrayFormulaRange();
    const newArrayFormulaRange = removeFormulaData(arrayFormulaRange, unitId, sheetId);
    const arrayFormulaCellData = this._formulaDataModel.getArrayFormulaCellData();
    const newArrayFormulaCellData = removeFormulaData(arrayFormulaCellData, unitId, sheetId);
    if (newFormulaData) {
      this._commandService.executeCommand(
        SetFormulaDataMutation.id,
        {
          formulaData: newFormulaData
        },
        {
          onlyLocal: true
        }
      );
    }
    if (newArrayFormulaRange && newArrayFormulaCellData) {
      this._commandService.executeCommand(
        SetArrayFormulaDataMutation.id,
        {
          arrayFormulaRange,
          arrayFormulaCellData
        },
        {
          onlyLocal: true
        }
      );
    }
  }
  _handleInsertSheetMutation(params) {
    const { sheet, unitId } = params;
    const formulaData = this._formulaDataModel.getFormulaData();
    const { id: sheetId, cellData } = sheet;
    const cellMatrix = new ObjectMatrix(cellData);
    const newFormulaData = initSheetFormulaData(formulaData, unitId, sheetId, cellMatrix);
    this._commandService.executeCommand(
      SetFormulaDataMutation.id,
      {
        formulaData: newFormulaData
      },
      {
        onlyLocal: true
      }
    );
  }
  _handleWorkbookAdded(unit) {
    var _a;
    const formulaData = {};
    const unitId = unit.getUnitId();
    const newFormulaData = { [unitId]: {} };
    const worksheets = unit.getSheets();
    worksheets.forEach((worksheet) => {
      var _a2;
      const cellMatrix = worksheet.getCellMatrix();
      const sheetId = worksheet.getSheetId();
      const currentSheetData = initSheetFormulaData(formulaData, unitId, sheetId, cellMatrix);
      newFormulaData[unitId][sheetId] = (_a2 = currentSheetData[unitId]) == null ? void 0 : _a2[sheetId];
    });
    this._commandService.executeCommand(SetFormulaDataMutation.id, { formulaData: newFormulaData }, { onlyLocal: true });
    const config = this._configService.getConfig(PLUGIN_CONFIG_KEY_BASE);
    const calculationMode = (_a = config == null ? void 0 : config.initialFormulaComputing) != null ? _a : 1 /* WHEN_EMPTY */;
    const params = this._getDirtyDataByCalculationMode(calculationMode);
    this._commandService.executeCommand(SetTriggerFormulaCalculationStartMutation.id, params, { onlyLocal: true });
  }
  _getDirtyDataByCalculationMode(calculationMode) {
    const forceCalculation = calculationMode === 0 /* FORCED */;
    const dirtyRanges = calculationMode === 1 /* WHEN_EMPTY */ ? this._formulaDataModel.getFormulaDirtyRanges() : [];
    const dirtyNameMap = {};
    const dirtyDefinedNameMap = {};
    const dirtyUnitFeatureMap = {};
    const dirtyUnitOtherFormulaMap = {};
    const clearDependencyTreeCache = {};
    return {
      forceCalculation,
      dirtyRanges,
      dirtyNameMap,
      dirtyDefinedNameMap,
      dirtyUnitFeatureMap,
      dirtyUnitOtherFormulaMap,
      clearDependencyTreeCache
    };
  }
  _getUpdateFormula(command) {
    var _a;
    const workbook = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
    if (!workbook) {
      return {
        undos: [],
        redos: []
      };
    }
    const result = getReferenceMoveParams(workbook, command);
    if (result) {
      const { unitNameMap, unitSheetNameMap } = this._formulaDataModel.getCalculateData();
      if (result.type === 12 /* SetUnitName */) {
        result.oldUnitName = (_a = unitNameMap == null ? void 0 : unitNameMap[result.unitId]) == null ? void 0 : _a.name;
      }
      const oldFormulaData = this._formulaDataModel.getFormulaData();
      const { newFormulaData } = this._getFormulaReferenceMoveInfo(
        oldFormulaData,
        unitSheetNameMap,
        result
      );
      const { undos, redos } = getFormulaReferenceMoveUndoRedo(oldFormulaData, newFormulaData, result);
      return {
        undos,
        redos
      };
    }
    return {
      undos: [],
      redos: []
    };
  }
  // eslint-disable-next-line max-lines-per-function
  _getFormulaReferenceMoveInfo(formulaData, unitSheetNameMap, formulaReferenceMoveParam) {
    var _a, _b, _c, _d;
    if (!Tools.isDefine(formulaData)) return { newFormulaData: {} };
    const formulaDataKeys = Object.keys(formulaData);
    if (formulaDataKeys.length === 0) return { newFormulaData: {} };
    const newFormulaData = {};
    const { unitId: fromUnitId, sheetId: fromSheetId, sheetName: fromSheetName, targetUnitId, targetSheetId, type, from, to } = formulaReferenceMoveParam;
    const inCrossSheetCutRangeNewFormulas = [];
    for (const unitId of formulaDataKeys) {
      const sheetData = formulaData[unitId];
      if (sheetData == null) {
        continue;
      }
      const sheetDataKeys = Object.keys(sheetData);
      if (!Tools.isDefine(newFormulaData[unitId])) {
        newFormulaData[unitId] = {};
      }
      for (const sheetId of sheetDataKeys) {
        const matrixData = new ObjectMatrix(sheetData[sheetId] || {});
        const newFormulaDataItem = new ObjectMatrix();
        const shouldModifySi = [];
        matrixData.forValue((row, column, formulaDataItem) => {
          var _a2;
          if (!formulaDataItem) return true;
          const { f: formulaString, x, y, si } = formulaDataItem;
          if (type === 12 /* SetUnitName */) {
            const { oldUnitName, unitName } = formulaReferenceMoveParam;
            if (!oldUnitName || !unitName) return true;
            const nextFormula = refactorFormulaUnitQualifier(formulaString, oldUnitName, unitName);
            if (nextFormula !== formulaString) newFormulaDataItem.setValue(row, column, { f: nextFormula });
            return true;
          }
          const sequenceNodes = this._lexerTreeBuilder.sequenceNodesBuilder(formulaString);
          if (sequenceNodes == null) {
            return true;
          }
          let shouldModify = false;
          const refChangeIds = [];
          const inCrossSheetCutRange = type === 0 /* MoveRange */ && (targetUnitId !== fromUnitId || targetSheetId !== fromSheetId) && unitId === fromUnitId && sheetId === fromSheetId && from && from.startRow <= row && row <= from.endRow && from.startColumn <= column && column <= from.endColumn;
          const inCrossSheetCutRangeSequenceNodes = [...sequenceNodes];
          for (let i = 0, len = sequenceNodes.length; i < len; i++) {
            const node = sequenceNodes[i];
            if (typeof node === "string") {
              continue;
            }
            const { token, nodeType } = node;
            if ((type === 14 /* SetDefinedName */ || type === 15 /* RemoveDefinedName */) && (nodeType === 6 /* DEFINED_NAME */ || nodeType === 3 /* FUNCTION */)) {
              const { definedNameId, definedName } = formulaReferenceMoveParam;
              if (definedNameId === void 0 || definedName === void 0) {
                continue;
              }
              const oldDefinedName = this._definedNamesService.getValueById(unitId, definedNameId);
              if (oldDefinedName === void 0 || oldDefinedName === null) {
                continue;
              }
              if (oldDefinedName.name !== token) {
                continue;
              }
              sequenceNodes[i] = {
                ...node,
                token: type === 14 /* SetDefinedName */ ? definedName : "#REF!" /* REF */
              };
              shouldModify = true;
              refChangeIds.push(i);
              continue;
            } else if ((type === 16 /* SetSuperTableName */ || type === 17 /* RemoveSuperTableName */ || type === 18 /* RemoveSuperTableColumn */) && (nodeType === 7 /* TABLE */ || nodeType === 3 /* FUNCTION */)) {
              const { oldTableName, tableName, tableColumnNames } = formulaReferenceMoveParam;
              if (oldTableName === void 0 || type === 16 /* SetSuperTableName */ && tableName === void 0) {
                continue;
              }
              const { tableName: tokenTableName, columnStruct = "" } = splitTableStructuredRef(token);
              if (tokenTableName !== oldTableName) {
                continue;
              }
              if (type === 18 /* RemoveSuperTableColumn */ && !tableReferenceContainsColumn(columnStruct, tableColumnNames)) {
                continue;
              }
              sequenceNodes[i] = {
                ...node,
                token: type === 16 /* SetSuperTableName */ ? `${tableName}${columnStruct}` : "#REF!" /* REF */
              };
              const nextNode = sequenceNodes[i + 1];
              if ((type === 17 /* RemoveSuperTableName */ || type === 18 /* RemoveSuperTableColumn */) && typeof nextNode === "string" && nextNode.startsWith("]")) {
                sequenceNodes[i + 1] = nextNode.slice(1);
              }
              shouldModify = true;
              refChangeIds.push(i);
              continue;
            } else if (nodeType !== 4 /* REFERENCE */) {
              continue;
            }
            const sequenceGrid = deserializeRangeWithSheetWithCache(token);
            const { range, sheetName, unitId: sequenceUnitId } = sequenceGrid;
            const mapUnitId = sequenceUnitId == null || sequenceUnitId.length === 0 ? unitId : sequenceUnitId;
            const sequenceSheetId = ((_a2 = unitSheetNameMap == null ? void 0 : unitSheetNameMap[mapUnitId]) == null ? void 0 : _a2[sheetName]) || "";
            if (!checkIsSameUnitAndSheet(
              formulaReferenceMoveParam.unitId,
              formulaReferenceMoveParam.sheetId,
              unitId,
              sheetId,
              sequenceUnitId,
              sequenceSheetId
            )) {
              continue;
            }
            const sequenceUnitRangeWidthOffset = {
              range,
              sheetId: sequenceSheetId,
              unitId: sequenceUnitId,
              sheetName,
              refOffsetX: x || 0,
              refOffsetY: y || 0
            };
            let newRefString = null;
            if (type === 11 /* SetName */) {
              const {
                unitId: userUnitId,
                sheetId: userSheetId,
                sheetName: newSheetName
              } = formulaReferenceMoveParam;
              if (newSheetName == null) {
                continue;
              }
              if (sequenceSheetId == null || sequenceSheetId.length === 0) {
                continue;
              }
              if (userSheetId !== sequenceSheetId) {
                continue;
              }
              newRefString = serializeRangeToRefString({
                range,
                sheetName: newSheetName,
                unitId: sequenceUnitId
              });
            } else if (type === 13 /* RemoveSheet */) {
              const {
                unitId: userUnitId,
                sheetId: userSheetId,
                sheetName: newSheetName
              } = formulaReferenceMoveParam;
              if (sequenceSheetId == null || sequenceSheetId.length === 0) {
                continue;
              }
              if (userSheetId !== sequenceSheetId) {
                continue;
              }
              newRefString = "#REF!" /* REF */;
            } else if (type !== 14 /* SetDefinedName */) {
              newRefString = getNewRangeByMoveParam(
                sequenceUnitRangeWidthOffset,
                formulaReferenceMoveParam,
                unitId,
                sheetId,
                {
                  inCrossSheetCutRange
                }
              );
            }
            if (newRefString != null) {
              sequenceNodes[i] = {
                ...node,
                token: newRefString
              };
              shouldModify = true;
              refChangeIds.push(i);
              if (si && (x != null ? x : 0) === 0 && (y != null ? y : 0) === 0) shouldModifySi.push(si);
            }
            if (inCrossSheetCutRange) {
              if (newRefString != null) {
                inCrossSheetCutRangeSequenceNodes[i] = {
                  ...node,
                  token: newRefString
                };
              } else if ((!sequenceUnitId || sequenceUnitId === fromUnitId) && (!sequenceSheetId || sequenceSheetId === fromSheetId)) {
                const sequenceRange = Rectangle.moveOffset(range, x || 0, y || 0);
                inCrossSheetCutRangeSequenceNodes[i] = {
                  ...node,
                  token: serializeRangeToRefString({
                    range: sequenceRange,
                    sheetName: fromSheetName || sheetName,
                    unitId: targetUnitId !== fromUnitId ? fromUnitId : ""
                  })
                };
                shouldModify = true;
              }
            }
          }
          if (!shouldModify) {
            if (si && [1 /* MoveRows */, 2 /* MoveCols */, 0 /* MoveRange */].includes(type)) {
              if (from && from.startRow <= row && row <= from.endRow && from.startColumn <= column && column <= from.endColumn) {
                if ((x != null ? x : 0) === 0 && (y != null ? y : 0) === 0) shouldModifySi.push(si);
              } else if (!shouldModifySi.includes(si)) {
                return true;
              }
            } else {
              return true;
            }
          }
          if (inCrossSheetCutRange) {
            const newSequenceNodes2 = updateRefOffset(inCrossSheetCutRangeSequenceNodes, refChangeIds, x, y);
            inCrossSheetCutRangeNewFormulas.push({
              fromRow: row,
              fromColumn: column,
              formulaString: `=${generateStringWithSequence(newSequenceNodes2)}`
            });
            return true;
          }
          const newSequenceNodes = updateRefOffset(sequenceNodes, refChangeIds, x, y);
          newFormulaDataItem.setValue(row, column, {
            f: `=${generateStringWithSequence(newSequenceNodes)}`
          });
        });
        if (newFormulaData[unitId]) {
          newFormulaData[unitId][sheetId] = newFormulaDataItem.getData();
        }
      }
    }
    if (inCrossSheetCutRangeNewFormulas.length > 0 && targetUnitId && targetSheetId) {
      if (!newFormulaData[targetUnitId]) {
        newFormulaData[targetUnitId] = {};
      }
      if (!newFormulaData[targetUnitId][targetSheetId]) {
        newFormulaData[targetUnitId][targetSheetId] = {};
      }
      for (const newFormula of inCrossSheetCutRangeNewFormulas) {
        const { fromRow, fromColumn, formulaString } = newFormula;
        const targetRow = fromRow + (((_a = to == null ? void 0 : to.startRow) != null ? _a : 0) - ((_b = from == null ? void 0 : from.startRow) != null ? _b : 0));
        const targetColumn = fromColumn + (((_c = to == null ? void 0 : to.startColumn) != null ? _c : 0) - ((_d = from == null ? void 0 : from.startColumn) != null ? _d : 0));
        if (!newFormulaData[targetUnitId][targetSheetId][targetRow]) {
          newFormulaData[targetUnitId][targetSheetId][targetRow] = {};
        }
        newFormulaData[targetUnitId][targetSheetId][targetRow][targetColumn] = {
          f: formulaString
        };
      }
    }
    return { newFormulaData };
  }
};
UpdateFormulaController = __decorateClass([
  __decorateParam(0, IUniverInstanceService),
  __decorateParam(1, ICommandService),
  __decorateParam(2, Inject(LexerTreeBuilder)),
  __decorateParam(3, Inject(FormulaDataModel)),
  __decorateParam(4, Inject(SheetInterceptorService)),
  __decorateParam(5, IDefinedNamesService),
  __decorateParam(6, IConfigService),
  __decorateParam(7, Inject(Injector))
], UpdateFormulaController);
function shouldSkipFormulaUpdateForSetRangeValues(params, options) {
  if (options && (options.onlyLocal === true || options.syncOnly === true || options.fromChangeset === true)) {
    return true;
  }
  const { cellValue, trigger } = params;
  if (trigger && [
    SetStyleCommand.id,
    SetBorderCommand.id,
    ClearSelectionFormatCommand.id,
    SetRangeCustomMetadataCommand.id
  ].includes(trigger)) {
    return true;
  }
  if (!cellValue) {
    return true;
  }
  return isStyleOnlyCellValue(cellValue);
}
function isStyleOnlyCellValue(cellValue) {
  const matrix = new ObjectMatrix(cellValue);
  let hasCell = false;
  let styleOnly = true;
  matrix.forValue((_row, _col, cell) => {
    hasCell = true;
    if (!cell) {
      styleOnly = false;
      return false;
    }
    const keys = Object.keys(cell);
    if (keys.length !== 1 || keys[0] !== "s") {
      styleOnly = false;
      return false;
    }
  });
  return hasCell && styleOnly;
}
function tableReferenceContainsColumn(columnStruct, columnNames) {
  if (!(columnNames == null ? void 0 : columnNames.length) || columnStruct.length === 0) {
    return false;
  }
  const columnNameSet = new Set(columnNames);
  const completedColumnStruct = columnStruct.endsWith("]") ? columnStruct : `${columnStruct}]`;
  const columnMatches = completedColumnStruct.matchAll(/\[([^\]]+)\]/g);
  for (const match of columnMatches) {
    const columnName = match[1].replace(/^\[/, "").trim();
    if (!columnName.startsWith("#") && columnNameSet.has(columnName)) {
      return true;
    }
  }
  return false;
}

// ../packages/sheets-formula/src/services/formula-ref-range.service.ts
function getFormulaKeyOffset(lexerTreeBuilder, formulaString, refOffsetX, refOffsetY) {
  const sequenceNodes = lexerTreeBuilder.sequenceNodesBuilder(formulaString);
  if (sequenceNodes == null) {
    return formulaString;
  }
  const newSequenceNodes = [];
  for (let i = 0, len = sequenceNodes.length; i < len; i++) {
    const node = sequenceNodes[i];
    if (typeof node === "string" || node.nodeType !== 4 /* REFERENCE */) {
      continue;
    }
    const { token } = node;
    const sequenceGrid = deserializeRangeWithSheetWithCache(token);
    const { sheetName, unitId: sequenceUnitId } = sequenceGrid;
    let newRange = sequenceGrid.range;
    if (newRange.startAbsoluteRefType === 3 /* ALL */ && newRange.endAbsoluteRefType === 3 /* ALL */) {
      continue;
    } else {
      newRange = moveRangeByOffset(newRange, refOffsetX, refOffsetY);
    }
    newSequenceNodes.push({
      unitId: sequenceUnitId,
      sheetName,
      range: newRange
    });
  }
  return newSequenceNodes.map((item) => `${item.unitId}!${item.sheetName}!${item.range.startRow}!${item.range.endRow}!${item.range.startColumn}!${item.range.endColumn}`).join("|");
}
var FormulaRefRangeService = class extends Disposable {
  constructor(_refRangeService, _lexerTreeBuilder, _univerInstanceService, _injector) {
    super();
    __publicField(this, "_refRangeService", _refRangeService);
    __publicField(this, "_lexerTreeBuilder", _lexerTreeBuilder);
    __publicField(this, "_univerInstanceService", _univerInstanceService);
    __publicField(this, "_injector", _injector);
  }
  transformFormulaByEffectCommand(unitId, subUnitId, formula, params) {
    const sequenceNodes = this._lexerTreeBuilder.sequenceNodesBuilder(formula);
    const currentUnit = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
    const currentSheet = currentUnit.getActiveSheet();
    const currentUnitId = currentUnit.getUnitId();
    const currentSheetId = currentSheet.getSheetId();
    const transformSequenceNodes = sequenceNodes == null ? void 0 : sequenceNodes.map((node) => {
      if (typeof node === "object" && node.nodeType === 4 /* REFERENCE */) {
        const gridRangeName = deserializeRangeWithSheetWithCache(node.token);
        const { range, unitId: rangeUnitId, sheetName: rangeSheetName } = gridRangeName;
        const workbook = this._univerInstanceService.getUnit(rangeUnitId || unitId);
        const worksheet = rangeSheetName ? workbook == null ? void 0 : workbook.getSheetBySheetName(rangeSheetName) : workbook == null ? void 0 : workbook.getSheetBySheetId(subUnitId);
        if (!worksheet) {
          throw new Error("Sheet not found");
        }
        const realUnitId = workbook.getUnitId();
        const realSheetId = worksheet.getSheetId();
        if (realUnitId !== currentUnitId || realSheetId !== currentSheetId) {
          return node;
        }
        const newRange = handleDefaultRangeChangeWithEffectRefCommands(range, params);
        let newToken = "";
        if (newRange) {
          const offsetX = newRange.startColumn - range.startColumn;
          const offsetY = newRange.startRow - range.startRow;
          const finalRange = moveRangeByOffset(range, offsetX, offsetY);
          if (rangeUnitId && rangeSheetName) {
            newToken = serializeRangeWithSpreadsheet(rangeUnitId, rangeSheetName, finalRange);
          } else if (rangeSheetName) {
            newToken = serializeRangeWithSheet(rangeSheetName, finalRange);
          } else {
            newToken = serializeRange(finalRange);
          }
        } else {
          newToken = "#REF!" /* REF */;
        }
        return {
          ...node,
          token: newToken
        };
      } else {
        return node;
      }
      ;
    });
    return transformSequenceNodes ? `=${generateStringWithSequence(transformSequenceNodes)}` : "";
  }
  registerFormula(unitId, subUnitId, formula, callback) {
    const rangeMap = /* @__PURE__ */ new Map();
    const sequenceNodes = this._lexerTreeBuilder.sequenceNodesBuilder(formula);
    const disposableCollection = new DisposableCollection();
    const handleChange = (params) => {
      const currentUnit = this._univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */);
      const currentSheet = currentUnit.getActiveSheet();
      const currentUnitId = currentUnit.getUnitId();
      const currentSheetId = currentSheet.getSheetId();
      const transformSequenceNodes = sequenceNodes == null ? void 0 : sequenceNodes.map((node) => {
        if (typeof node === "object" && node.nodeType === 4 /* REFERENCE */) {
          const rangeInfo = rangeMap.get(node.token);
          if (rangeInfo.unitId !== currentUnitId || rangeInfo.subUnitId !== currentSheetId) {
            return node;
          }
          const newRange = handleDefaultRangeChangeWithEffectRefCommands(rangeInfo.range, params);
          let newToken = "";
          if (newRange) {
            const offsetX = newRange.startColumn - rangeInfo.range.startColumn;
            const offsetY = newRange.startRow - rangeInfo.range.startRow;
            const finalRange = moveRangeByOffset(rangeInfo.range, offsetX, offsetY);
            if (rangeInfo.unitId && rangeInfo.sheetName) {
              newToken = serializeRangeWithSpreadsheet(rangeInfo.unitId, rangeInfo.sheetName, finalRange);
            } else if (rangeInfo.sheetName) {
              newToken = serializeRangeWithSheet(rangeInfo.sheetName, finalRange);
            } else {
              newToken = serializeRange(finalRange);
            }
          } else {
            newToken = "#REF!" /* REF */;
          }
          return {
            ...node,
            token: newToken
          };
        } else {
          return node;
        }
        ;
      });
      const newFormulaString = transformSequenceNodes && generateStringWithSequence(transformSequenceNodes);
      return callback(`=${newFormulaString}`);
    };
    sequenceNodes == null ? void 0 : sequenceNodes.forEach((node) => {
      if (typeof node === "object" && node.nodeType === 4 /* REFERENCE */) {
        const gridRangeName = deserializeRangeWithSheetWithCache(node.token);
        const { range, unitId: rangeUnitId, sheetName: rangeSheetName } = gridRangeName;
        const workbook = this._univerInstanceService.getUnit(rangeUnitId || unitId);
        const worksheet = rangeSheetName ? workbook == null ? void 0 : workbook.getSheetBySheetName(rangeSheetName) : workbook == null ? void 0 : workbook.getSheetBySheetId(subUnitId);
        if (!worksheet) {
          return;
        }
        const realUnitId = workbook.getUnitId();
        const realSheetId = worksheet.getSheetId();
        const item = {
          unitId: realUnitId,
          subUnitId: realSheetId,
          range,
          sheetName: rangeSheetName
        };
        rangeMap.set(node.token, item);
        disposableCollection.add(this._refRangeService.registerRefRange(range, handleChange, realUnitId, realSheetId));
      }
    });
    return disposableCollection;
  }
  _getFormulaDependcy(unitId, subUnitId, formula, ranges) {
    const nodes = isFormulaString(formula) ? this._lexerTreeBuilder.sequenceNodesBuilder(formula) : null;
    const dependencyRanges = [];
    nodes == null ? void 0 : nodes.forEach((node) => {
      if (typeof node === "object" && node.nodeType === 4 /* REFERENCE */) {
        const gridRangeName = deserializeRangeWithSheetWithCache(node.token);
        const { range, unitId: rangeUnitId, sheetName: rangeSheetName } = gridRangeName;
        if (range.startAbsoluteRefType === 3 /* ALL */ && range.endAbsoluteRefType === 3 /* ALL */) {
          return;
        }
        const workbook = this._univerInstanceService.getUnit(rangeUnitId || unitId);
        const worksheet = rangeSheetName ? workbook == null ? void 0 : workbook.getSheetBySheetName(rangeSheetName) : workbook == null ? void 0 : workbook.getSheetBySheetId(subUnitId);
        if (!worksheet) {
          return;
        }
        const realUnitId = workbook.getUnitId();
        const realSheetId = worksheet.getSheetId();
        const orginStartRow = ranges[0].startRow;
        const orginStartColumn = ranges[0].startColumn;
        const currentStartRow = range.startRow;
        const currentStartColumn = range.startColumn;
        const offsetRanges = ranges.map((range2) => ({
          startRow: range2.startRow - orginStartRow + currentStartRow,
          endRow: range2.endRow - orginStartRow + currentStartRow,
          startColumn: range2.startColumn - orginStartColumn + currentStartColumn,
          endColumn: range2.endColumn - orginStartColumn + currentStartColumn
        }));
        dependencyRanges.push({
          unitId: realUnitId,
          subUnitId: realSheetId,
          ranges: offsetRanges
        });
      }
    });
    return dependencyRanges;
  }
  // eslint-disable-next-line max-lines-per-function
  registerRangeFormula(unitId, subUnitId, oldRanges, formulas, callback) {
    const disposableCollection = new DisposableCollection();
    const formulaDeps = formulas.map((formula) => this._getFormulaDependcy(unitId, subUnitId, formula, oldRanges));
    const handleRangeChange = (commandInfo) => {
      const effectedRanges = getSeparateEffectedRangesOnCommand(this._injector, commandInfo);
      if (!effectedRanges) {
        return {
          undos: [],
          redos: []
        };
      }
      const originStartRow = oldRanges[0].startRow;
      const originStartColumn = oldRanges[0].startColumn;
      const deps = [{ unitId, subUnitId, ranges: oldRanges }, ...formulaDeps.flat()];
      const matchedEffectedRanges = [];
      for (const { unitId: depUnitId, subUnitId: depSubUnitId, ranges } of deps) {
        if (depUnitId === effectedRanges.unitId && depSubUnitId === effectedRanges.subUnitId) {
          const intersectedRanges = [];
          const currentStartRow = ranges[0].startRow;
          const currentStartColumn = ranges[0].startColumn;
          const offsetRow = currentStartRow - originStartRow;
          const offsetColumn = currentStartColumn - originStartColumn;
          for (const range of effectedRanges.ranges) {
            const intersectedRange = [];
            for (const r of ranges) {
              const intersect = getIntersectRange(range, r);
              if (intersect) {
                intersectedRange.push(intersect);
              }
            }
            if (intersectedRange.length > 0) {
              intersectedRanges.push(...intersectedRange);
            }
          }
          if (intersectedRanges.length > 0) {
            matchedEffectedRanges.push(
              intersectedRanges.map((range) => ({
                startRow: range.startRow - offsetRow,
                endRow: range.endRow - offsetRow,
                startColumn: range.startColumn - offsetColumn,
                endColumn: range.endColumn - offsetColumn
              }))
            );
          }
        }
      }
      if (matchedEffectedRanges.length > 0) {
        const ranges = Rectangle.splitIntoGrid([...matchedEffectedRanges.flat()]);
        const noEffectRanges = Rectangle.subtractMulti(oldRanges, ranges);
        noEffectRanges.sort((a, b) => a.startRow - b.startRow || a.startColumn - b.startColumn);
        const keyMap = /* @__PURE__ */ new Map();
        for (let i = 0; i < ranges.length; i++) {
          const range = ranges[i];
          const currentRow = range.startRow;
          const currentColumn = range.startColumn;
          const offsetRow = currentRow - originStartRow;
          const offsetColumn = currentColumn - originStartColumn;
          const transformedRange = handleCommonDefaultRangeChangeWithEffectRefCommands(range, commandInfo).sort((a, b) => a.startRow - b.startRow || a.startColumn - b.startColumn);
          if (!transformedRange.length) {
            continue;
          }
          const transformedRow = transformedRange[0].startRow;
          const transformedColumn = transformedRange[0].startColumn;
          const transformedOffsetRow = transformedRow - originStartRow;
          const transformedOffsetColumn = transformedColumn - originStartColumn;
          const transformedFormulas = [];
          for (let j = 0; j < formulas.length; j++) {
            const formula = formulas[j];
            const isFormulaFormulaString = isFormulaString(formula);
            const formulaString = isFormulaFormulaString ? this._lexerTreeBuilder.moveFormulaRefOffset(formula, offsetColumn, offsetRow) : formula;
            const newFormula = isFormulaFormulaString ? this.transformFormulaByEffectCommand(unitId, subUnitId, formulaString, commandInfo) : formulaString;
            const orginFormula = getFormulaKeyOffset(this._lexerTreeBuilder, newFormula, -transformedOffsetColumn, -transformedOffsetRow);
            transformedFormulas.push({
              newFormula,
              orginFormula
            });
          }
          const item = {
            formulas: transformedFormulas,
            ranges: transformedRange,
            key: transformedFormulas.map((item2) => item2.orginFormula).join("_")
          };
          if (keyMap.has(item.key)) {
            keyMap.get(item.key).push(item);
          } else {
            keyMap.set(item.key, [item]);
          }
        }
        const originKey = formulas.map((item) => getFormulaKeyOffset(this._lexerTreeBuilder, item, 0, 0)).join("_");
        if (noEffectRanges.length > 0) {
          const currentRow = noEffectRanges[0].startRow;
          const currentColumn = noEffectRanges[0].startColumn;
          const noEffectFormulas = [];
          for (let i = 0; i < formulas.length; i++) {
            const formula = formulas[i];
            noEffectFormulas.push({
              newFormula: isFormulaString(formula) ? this._lexerTreeBuilder.moveFormulaRefOffset(formula, currentColumn - originStartColumn, currentRow - originStartRow) : formula,
              orginFormula: formula
            });
          }
          const item = {
            formulas: noEffectFormulas,
            ranges: noEffectRanges,
            key: originKey
          };
          if (keyMap.has(item.key)) {
            keyMap.get(item.key).push(item);
          } else {
            keyMap.set(item.key, [item]);
          }
        }
        const res = [];
        const keys = Array.from(keyMap.keys());
        for (let i = keys.length - 1; i >= 0; i--) {
          const key = keys[i];
          const ranges2 = keyMap.get(key).sort((a, b) => a.ranges[0].startRow - b.ranges[0].startRow || a.ranges[0].startColumn - b.ranges[0].startColumn);
          const formulas2 = [];
          for (let j = 0; j < ranges2[0].formulas.length; j++) {
            formulas2.push(ranges2[0].formulas[j].newFormula);
          }
          const newRanges = Rectangle.mergeRanges(ranges2.map((item) => item.ranges).flat());
          newRanges.sort((a, b) => a.startRow - b.startRow || a.startColumn - b.startColumn);
          res.push({
            formulas: formulas2,
            ranges: newRanges
          });
        }
        return callback(res);
      }
      return {
        undos: [],
        redos: []
      };
    };
    oldRanges.forEach((range) => {
      const disposable = this._refRangeService.registerRefRange(range, handleRangeChange, unitId, subUnitId);
      disposableCollection.add(disposable);
    });
    [...formulaDeps.flat()].forEach(({ unitId: unitId2, subUnitId: subUnitId2, ranges }) => {
      ranges.forEach((range) => {
        const disposable = this._refRangeService.registerRefRange(range, handleRangeChange, unitId2, subUnitId2);
        disposableCollection.add(disposable);
      });
    });
    return disposableCollection;
  }
};
FormulaRefRangeService = __decorateClass([
  __decorateParam(0, Inject(RefRangeService)),
  __decorateParam(1, Inject(LexerTreeBuilder)),
  __decorateParam(2, IUniverInstanceService),
  __decorateParam(3, Inject(Injector))
], FormulaRefRangeService);

// ../packages/sheets-formula/src/services/remote/remote-register-function.service.ts
var RemoteRegisterFunctionServiceName = "sheets-formula.remote-register-function.service";
var IRemoteRegisterFunctionService = createIdentifier(RemoteRegisterFunctionServiceName);
var RemoteRegisterFunctionService = class {
  constructor(_functionService) {
    __publicField(this, "_functionService", _functionService);
  }
  async registerFunctions(serializedFuncs) {
    rejectRemoteCustomFunctionRegistration(serializedFuncs);
  }
  async registerAsyncFunctions(serializedFuncs) {
    rejectRemoteCustomFunctionRegistration(serializedFuncs);
  }
  async unregisterFunctions(names) {
    this._functionService.unregisterExecutors(...names);
    this._functionService.unregisterDescriptions(...names);
    this._functionService.deleteFormulaAstCacheKey(...names);
  }
};
RemoteRegisterFunctionService = __decorateClass([
  __decorateParam(0, IFunctionService)
], RemoteRegisterFunctionService);
function rejectRemoteCustomFunctionRegistration(serializedFuncs) {
  if (serializedFuncs.length === 0) {
    return;
  }
  throw new Error("Remote custom function registration is disabled because function deserialization over RPC is unsafe.");
}

// ../packages/sheets-formula/src/plugin.ts
var UniverRemoteSheetsFormulaPlugin = class extends Plugin {
  constructor(_config = defaultPluginRemoteConfig, _injector, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    const { ...rest } = merge_default(
      {},
      defaultPluginRemoteConfig,
      this._config
    );
    this._configService.setConfig(PLUGIN_CONFIG_KEY_REMOTE, rest);
  }
  onStarting() {
    this._injector.add([RemoteRegisterFunctionService]);
    this._injector.get(IRPCChannelService).registerChannel(
      RemoteRegisterFunctionServiceName,
      fromModule(this._injector.get(RemoteRegisterFunctionService))
    );
  }
};
__publicField(UniverRemoteSheetsFormulaPlugin, "pluginName", "SHEET_FORMULA_REMOTE_PLUGIN");
__publicField(UniverRemoteSheetsFormulaPlugin, "packageName", package_default2.name);
__publicField(UniverRemoteSheetsFormulaPlugin, "version", package_default2.version);
__publicField(UniverRemoteSheetsFormulaPlugin, "type", 2 /* UNIVER_SHEET */);
UniverRemoteSheetsFormulaPlugin = __decorateClass([
  DependentOn(UniverFormulaEnginePlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverRemoteSheetsFormulaPlugin);
var UniverSheetsFormulaPlugin = class extends Plugin {
  constructor(_config = defaultPluginBaseConfig, _injector, _configService) {
    super();
    __publicField(this, "_config", _config);
    __publicField(this, "_injector", _injector);
    __publicField(this, "_configService", _configService);
    const { ...rest } = merge_default(
      {},
      defaultPluginBaseConfig,
      this._config
    );
    this._configService.setConfig(PLUGIN_CONFIG_KEY_BASE, rest, { merge: true });
  }
  onStarting() {
    var _a;
    const j = this._injector;
    const dependencies = [
      [SheetFormulaCalculationResultApplyController],
      [FormulaController],
      [FormulaRefRangeService],
      [ArrayFormulaCellInterceptorController],
      [ImageFormulaCellInterceptorController],
      [TriggerCalculationController],
      [UpdateFormulaController],
      [ActiveDirtyController],
      [DefinedNameController],
      [UpdateDefinedNameController],
      [SuperTableController],
      [FormulaAutoFillController],
      [UnitQualifierRenameController]
    ];
    if (this._config.notExecuteFormula) {
      const rpcChannelService = j.get(IRPCChannelService);
      dependencies.push([IRemoteRegisterFunctionService, {
        useFactory: () => toModule(rpcChannelService.requestChannel(RemoteRegisterFunctionServiceName))
      }]);
    }
    dependencies.forEach((dependency) => j.add(dependency));
    if ((_a = this._config.description) == null ? void 0 : _a.length) {
      this.disposeWithMe(j.get(IDescriptionService).registerDescriptions(this._config.description));
    }
  }
  onReady() {
    touchDependencies(this._injector, [
      [FormulaController],
      [ActiveDirtyController],
      [ArrayFormulaCellInterceptorController],
      [ImageFormulaCellInterceptorController],
      [UpdateFormulaController],
      [UpdateDefinedNameController],
      [FormulaAutoFillController],
      [UnitQualifierRenameController],
      [SheetFormulaCalculationResultApplyController]
    ]);
    if (isNodeEnv()) {
      touchDependencies(this._injector, [
        [TriggerCalculationController]
      ]);
    }
  }
  onRendered() {
    touchDependencies(this._injector, [
      [DefinedNameController],
      [SuperTableController]
    ]);
    if (!isNodeEnv()) {
      touchDependencies(this._injector, [
        [TriggerCalculationController]
      ]);
    }
  }
};
__publicField(UniverSheetsFormulaPlugin, "pluginName", SHEETS_FORMULA_PLUGIN_NAME);
__publicField(UniverSheetsFormulaPlugin, "packageName", package_default2.name);
__publicField(UniverSheetsFormulaPlugin, "version", package_default2.version);
__publicField(UniverSheetsFormulaPlugin, "type", 2 /* UNIVER_SHEET */);
UniverSheetsFormulaPlugin = __decorateClass([
  DependentOn(UniverFormulaEnginePlugin, UniverSheetsPlugin),
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, IConfigService)
], UniverSheetsFormulaPlugin);

export {
  SetTextSelectionsOperation,
  DocSelectionManagerService,
  DocSkeletonManagerService,
  DocStateEmitService,
  RichTextEditingMutation,
  InsertTextCommand,
  DeleteTextCommand,
  UpdateTextCommand,
  CreateHeaderFooterCommand,
  getTopLevelSectionBreaks,
  SetSectionHeaderFooterLinkCommand,
  getSectionContentWidth,
  createSectionColumnProperties,
  UpdateDocumentSectionCommand,
  InsertDocumentSectionBreakCommand,
  InsertDocumentColumnBreakCommand,
  DeleteDocumentSectionBreakCommand,
  shouldUseInlineTextSelectionForDocsCustomBlockDrawing,
  DocBlockMoveValidatorService,
  DocContentInsertService,
  IDocStateChangeInterceptorService,
  UniverDocsPlugin,
  DOC_INTERCEPTOR_POINT,
  DocInterceptorService,
  addCustomRangeBySelectionFactory,
  deleteCustomRangeFactory,
  generateParagraphs,
  replaceSelectionFactory,
  buildDocTransform,
  docDrawingPositionToTransform,
  consumeContentInsertRange,
  getContentInsertRange,
  normalizeTextRange,
  InsertFunctionCommand,
  QuickSumCommand,
  PLUGIN_CONFIG_KEY_BASE,
  CalculationMode,
  ImageFormulaCellInterceptorController,
  TriggerCalculationController,
  FormulaRefRangeService,
  UniverRemoteSheetsFormulaPlugin,
  UniverSheetsFormulaPlugin
};
