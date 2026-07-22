import {
  UniverDocsHyperLinkPlugin,
  UniverDocsHyperLinkUIPlugin,
  UniverDocsThreadCommentUIPlugin
} from "../chunk-S3UIV5EK.js";
import {
  UniverThreadCommentUIPlugin
} from "../chunk-UIILGY57.js";
import {
  createUniver
} from "../chunk-3AD5ACMS.js";
import {
  UniverDocsDrawingUIPlugin
} from "../chunk-VSRJGQ4N.js";
import {
  DEFAULT_DOCUMENT_DATA_SIMPLE
} from "../chunk-J4N6JNOG.js";
import "../chunk-EDU3U37W.js";
import {
  UniverNetworkPlugin
} from "../chunk-YGHFFUED.js";
import {
  FDocument
} from "../chunk-JFIP6YNB.js";
import "../chunk-YGGGAOOO.js";
import {
  DRAWING_IMAGE_HEIGHT_LIMIT,
  DRAWING_IMAGE_WIDTH_LIMIT,
  InsertDocDrawingCommand,
  RemoveDocDrawingCommand,
  SetDocDrawingArrangeCommand,
  TextWrappingStyle,
  UniverDocsDrawingPlugin,
  UniverDrawingPlugin,
  UniverDrawingUIPlugin,
  UpdateDocDrawingWrappingStyleCommand,
  UpdateDrawingDocTransformCommand,
  WRAPPING_STYLE_TO_LAYOUT_TYPE,
  getImageSize
} from "../chunk-HEIKB7AI.js";
import {
  UniverDocsUIPlugin
} from "../chunk-36HE7BQM.js";
import "../chunk-LI6UXASZ.js";
import {
  UniverUIPlugin
} from "../chunk-VI2WI6CP.js";
import {
  FEnum
} from "../chunk-VAYUBKAG.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4
} from "../chunk-DBRQB4K6.js";
import {
  zh_CN_default as zh_CN_default6,
  zh_CN_default2 as zh_CN_default7
} from "../chunk-SNSWR7JB.js";
import {
  zh_CN_default,
  zh_CN_default2 as zh_CN_default5,
  zh_CN_default3 as zh_CN_default8
} from "../chunk-6E3W7VDH.js";
import {
  UniverDocsPlugin,
  buildDocTransform,
  docDrawingPositionToTransform
} from "../chunk-GC6NIMO6.js";
import {
  UniverFormulaEnginePlugin
} from "../chunk-FV4IGQDG.js";
import {
  ICommandService,
  IImageIoService,
  IURLImageService,
  ObjectRelativeFromH,
  ObjectRelativeFromV,
  UniverRenderEnginePlugin,
  default_default,
  generateRandomId,
  mergeLocales
} from "../chunk-N4BCF5MH.js";
import "../chunk-EQ2B2W73.js";
import {
  __publicField
} from "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-docs-core/src/preset.ts
function UniverDocsCorePreset(config = {}) {
  const {
    container = "app",
    header,
    footer,
    toolbar,
    ribbonType,
    menu,
    contextMenu,
    disableAutoFocus
  } = config;
  return {
    plugins: [
      UniverNetworkPlugin,
      UniverDocsPlugin,
      UniverRenderEnginePlugin,
      [UniverUIPlugin, {
        container,
        header,
        footer,
        toolbar,
        ribbonType,
        menu,
        contextMenu,
        disableAutoFocus
      }],
      UniverDocsUIPlugin,
      UniverFormulaEnginePlugin
    ]
  };
}

// ../presets/packages/preset-docs-core/src/locales/zh-CN.ts
var zh_CN_default9 = Object.assign(
  {},
  zh_CN_default,
  zh_CN_default5,
  zh_CN_default8
);

// ../packages/docs-drawing/src/facade/f-document-image.ts
var FDocumentImage = class {
  constructor(_document, _imageId, _injector) {
    __publicField(this, "_document", _document);
    __publicField(this, "_imageId", _imageId);
    __publicField(this, "_injector", _injector);
  }
  /**
   * Gets the id of the document containing the image.
   * @returns {string} The document unit id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getUnitId());
   * }
   * ```
   */
  getUnitId() {
    return this._document.getId();
  }
  /**
   * Gets the drawing id of the image.
   * @returns {string} The drawing id.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getId());
   * }
   * ```
   */
  getId() {
    return this._imageId;
  }
  /**
   * Gets the image source supplied at insertion time.
   * @returns {string | undefined} The image source, or `undefined` when the image no longer exists.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getSource());
   * }
   * ```
   */
  getSource() {
    var _a;
    return (_a = this.getImageData()) == null ? void 0 : _a.source;
  }
  /**
   * Gets the image source type supplied at insertion time.
   * @returns {ImageSourceType | undefined} The image source type, or `undefined` when the image no longer exists.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getSourceType());
   * }
   * ```
   */
  getSourceType() {
    var _a;
    return (_a = this.getImageData()) == null ? void 0 : _a.imageSourceType;
  }
  /**
   * Gets the current image size.
   * @returns {ISize | null} The width and height in pixels, or `null` when the image no longer exists.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getSize());
   * }
   * ```
   */
  getSize() {
    var _a, _b;
    return (_b = (_a = this.getImageData()) == null ? void 0 : _a.docTransform.size) != null ? _b : null;
  }
  /**
   * Gets the current clockwise rotation angle.
   * @returns {number | undefined} The rotation angle in degrees, or `undefined` when the image no longer exists.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getAngle());
   * }
   * ```
   */
  getAngle() {
    var _a;
    return (_a = this.getImageData()) == null ? void 0 : _a.docTransform.angle;
  }
  /**
   * Gets the current horizontal position.
   * @returns {IObjectPositionH | null} The horizontal position, or `null` when the image no longer exists.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getPositionH());
   * }
   * ```
   */
  getPositionH() {
    var _a, _b;
    return (_b = (_a = this.getImageData()) == null ? void 0 : _a.docTransform.positionH) != null ? _b : null;
  }
  /**
   * Gets the current vertical position.
   * @returns {IObjectPositionV | null} The vertical position, or `null` when the image no longer exists.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getPositionV());
   * }
   * ```
   */
  getPositionV() {
    var _a, _b;
    return (_b = (_a = this.getImageData()) == null ? void 0 : _a.docTransform.positionV) != null ? _b : null;
  }
  /**
   * Gets the current raw document image data.
   * @returns {IDocImage | null} The image data, or `null` when the image no longer exists.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   console.log(image.getImageData());
   * }
   * ```
   */
  getImageData() {
    var _a;
    const drawing = (_a = this._document.getDocumentDataModel().getDrawings()) == null ? void 0 : _a[this._imageId];
    if (!drawing || drawing.drawingType !== 0 /* DRAWING_IMAGE */) {
      return null;
    }
    return drawing;
  }
  /**
   * Sets the image size.
   * @param {number} width The width in pixels.
   * @param {number} height The height in pixels.
   * @returns {boolean} `true` when the update command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setSize(400, 300);
   *   console.log(success);
   * }
   * ```
   */
  setSize(width, height) {
    return this._updateTransform("size", { width, height });
  }
  /**
   * Sets the clockwise rotation angle.
   * @param {number} angle The rotation angle in degrees.
   * @returns {boolean} `true` when the update command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setRotate(45);
   *   console.log(success);
   * }
   * ```
   */
  setRotate(angle) {
    return this._updateTransform("angle", angle);
  }
  /**
   * Sets the horizontal position of the image.
   * Inline images are positioned by their document placeholder, so this has a visible effect only when the image
   * wrapping style is not `TextWrappingStyle.INLINE`.
   * @param {IObjectPositionH} positionH The horizontal position relative to the document.
   * @returns {boolean} `true` when the update command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setPositionH({
   *     relativeFrom: univerAPI.Enum.DocsImageRelativeFromH.MARGIN,
   *     posOffset: 100
   *   });
   *   console.log(success);
   * }
   * ```
   */
  setPositionH(positionH) {
    return this._updateTransform("positionH", positionH);
  }
  /**
   * Sets the vertical position of the image.
   * Inline images are positioned by their document placeholder, so this has a visible effect only when the image
   * wrapping style is not `TextWrappingStyle.INLINE`.
   * @param {IObjectPositionV} positionV The vertical position relative to the document.
   * @returns {boolean} `true` when the update command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setPositionV({
   *     relativeFrom: univerAPI.Enum.DocsImageRelativeFromV.MARGIN,
   *     posOffset: 100
   *   });
   *   console.log(success);
   * }
   * ```
   */
  setPositionV(positionV) {
    return this._updateTransform("positionV", positionV);
  }
  /**
   * Sets the image wrapping style.
   * When switching from inline to a floating style in a UI environment, the current visual position is preserved.
   * @param {TextWrappingStyle} wrappingStyle The wrapping style to apply.
   * @returns {boolean} `true` when the update command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setWrappingStyle(univerAPI.Enum.DocsImageWrappingStyle.WRAP_SQUARE);
   *   console.log(success);
   * }
   * ```
   */
  setWrappingStyle(wrappingStyle) {
    const image = this.getImageData();
    if (!image) {
      return false;
    }
    return this._injector.get(ICommandService).syncExecuteCommand(
      UpdateDocDrawingWrappingStyleCommand.id,
      {
        unitId: this.getUnitId(),
        subUnitId: this.getUnitId(),
        drawings: [image],
        wrappingStyle
      }
    );
  }
  /**
   * Moves the image forward by one level in the drawing order.
   * @returns {boolean} `true` when the arrange command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setForward();
   *   console.log(success);
   * }
   * ```
   */
  setForward() {
    return this._arrange(0 /* forward */);
  }
  /**
   * Moves the image backward by one level in the drawing order.
   * @returns {boolean} `true` when the arrange command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setBackward();
   *   console.log(success);
   * }
   * ```
   */
  setBackward() {
    return this._arrange(1 /* backward */);
  }
  /**
   * Moves the image to the back of the drawing order.
   * @returns {boolean} `true` when the arrange command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setBack();
   *   console.log(success);
   * }
   * ```
   */
  setBack() {
    return this._arrange(3 /* back */);
  }
  /**
   * Moves the image to the front of the drawing order.
   * @returns {boolean} `true` when the arrange command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.setFront();
   *   console.log(success);
   * }
   * ```
   */
  setFront() {
    return this._arrange(2 /* front */);
  }
  /**
   * Removes the image and its document placeholder.
   * @returns {boolean} `true` when the remove command succeeds; otherwise, `false`.
   * @example
   * ```ts
   * const fDocument = univerAPI.getActiveDocument();
   * const image = fDocument.getImages()[0];
   *
   * if (image) {
   *   const success = image.remove();
   *   console.log(success);
   * }
   * ```
   */
  remove() {
    const image = this.getImageData();
    const textRange = this._getTextRange();
    if (!image || !textRange) {
      return false;
    }
    return this._injector.get(ICommandService).syncExecuteCommand(RemoveDocDrawingCommand.id, {
      unitId: this.getUnitId(),
      drawings: [{
        unitId: this.getUnitId(),
        subUnitId: this.getUnitId(),
        drawingId: this._imageId,
        drawingType: 0 /* DRAWING_IMAGE */
      }],
      textRange
    });
  }
  _updateTransform(key, value) {
    return this._injector.get(ICommandService).syncExecuteCommand(UpdateDrawingDocTransformCommand.id, {
      unitId: this.getUnitId(),
      subUnitId: this.getUnitId(),
      drawings: [{ drawingId: this._imageId, key, value }]
    });
  }
  _arrange(arrangeType) {
    return this._injector.get(ICommandService).syncExecuteCommand(SetDocDrawingArrangeCommand.id, {
      unitId: this.getUnitId(),
      subUnitId: this.getUnitId(),
      drawingIds: [this._imageId],
      arrangeType
    });
  }
  _getTextRange() {
    var _a;
    const snapshot = this._document.getDocumentDataModel().getSnapshot();
    const { body, headers = {}, footers = {} } = snapshot;
    const segments = [
      { segmentId: "", body },
      ...Object.entries(headers).map(([segmentId, header]) => ({ segmentId, body: header.body })),
      ...Object.entries(footers).map(([segmentId, footer]) => ({ segmentId, body: footer.body }))
    ];
    for (const { segmentId, body: body2 } of segments) {
      const customBlock = (_a = body2 == null ? void 0 : body2.customBlocks) == null ? void 0 : _a.find((block) => block.blockId === this._imageId);
      if (customBlock) {
        return {
          startOffset: customBlock.startIndex,
          endOffset: customBlock.startIndex,
          collapsed: true,
          segmentId
        };
      }
    }
    return null;
  }
};

// ../packages/docs-drawing/src/facade/f-document.ts
var FDocumentImageMixin = class extends FDocument {
  async insertImage(options) {
    var _a, _b, _c, _d;
    const unitId = this.getId();
    const imageId = generateRandomId(6);
    const intrinsicSize = await this._getIntrinsicSize(options.source, options.imageSourceType);
    const size = resolveImageSize(intrinsicSize, options);
    const defaultTransform = buildDocTransform(size.width, size.height);
    const wrappingStyle = (_a = options.wrappingStyle) != null ? _a : "inline" /* INLINE */;
    const docTransform = {
      ...defaultTransform,
      angle: (_b = options.angle) != null ? _b : defaultTransform.angle,
      positionH: (_c = options.positionH) != null ? _c : defaultTransform.positionH,
      positionV: (_d = options.positionV) != null ? _d : defaultTransform.positionV
    };
    const transform = docDrawingPositionToTransform(docTransform);
    const drawing = {
      unitId,
      subUnitId: unitId,
      drawingId: imageId,
      drawingType: 0 /* DRAWING_IMAGE */,
      imageSourceType: options.imageSourceType,
      source: options.source,
      transform,
      docTransform,
      behindDoc: wrappingStyle === "behindText" /* BEHIND_TEXT */ ? 1 /* TRUE */ : 0 /* FALSE */,
      title: "",
      description: "",
      layoutType: WRAPPING_STYLE_TO_LAYOUT_TYPE[wrappingStyle],
      wrapText: 0 /* BOTH_SIDES */,
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    };
    const inserted = this._injector.get(ICommandService).syncExecuteCommand(InsertDocDrawingCommand.id, {
      unitId,
      drawings: [drawing],
      textRange: options.textRange
    });
    if (!inserted) {
      return null;
    }
    return this._injector.createInstance(FDocumentImage, this, imageId, this._injector);
  }
  getImage(imageId) {
    var _a;
    const drawing = (_a = this.getDocumentDataModel().getDrawings()) == null ? void 0 : _a[imageId];
    if (!drawing || drawing.drawingType !== 0 /* DRAWING_IMAGE */) {
      return null;
    }
    return this._injector.createInstance(FDocumentImage, this, imageId, this._injector);
  }
  getImages() {
    var _a, _b;
    const documentDataModel = this.getDocumentDataModel();
    const drawings = (_a = documentDataModel.getDrawings()) != null ? _a : {};
    const drawingIds = (_b = documentDataModel.getDrawingsOrder()) != null ? _b : Object.keys(drawings);
    return drawingIds.filter((drawingId) => {
      var _a2;
      return ((_a2 = drawings[drawingId]) == null ? void 0 : _a2.drawingType) === 0 /* DRAWING_IMAGE */;
    }).map((drawingId) => this._injector.createInstance(FDocumentImage, this, drawingId, this._injector));
  }
  async _getIntrinsicSize(source, imageSourceType) {
    const imageIoService = this._injector.has(IImageIoService) ? this._injector.get(IImageIoService) : null;
    let resolvedSource = source;
    if (imageSourceType === "UUID" /* UUID */ && imageIoService) {
      resolvedSource = await imageIoService.getImage(source);
    } else if (imageSourceType === "URL" /* URL */ && this._injector.has(IURLImageService)) {
      try {
        resolvedSource = await this._injector.get(IURLImageService).getImage(source);
      } catch {
        resolvedSource = source;
      }
    }
    const { width, height, image } = await getImageSize(resolvedSource);
    imageIoService == null ? void 0 : imageIoService.addImageSourceCache(source, imageSourceType, image);
    return { width, height };
  }
};
function resolveImageSize(intrinsicSize, options) {
  const { width: intrinsicWidth, height: intrinsicHeight } = intrinsicSize;
  if (options.width != null && options.height != null) {
    return { width: options.width, height: options.height };
  }
  if (options.width != null) {
    return { width: options.width, height: intrinsicHeight * options.width / intrinsicWidth };
  }
  if (options.height != null) {
    return { width: intrinsicWidth * options.height / intrinsicHeight, height: options.height };
  }
  const scale = Math.min(
    1,
    DRAWING_IMAGE_WIDTH_LIMIT / intrinsicWidth,
    DRAWING_IMAGE_HEIGHT_LIMIT / intrinsicHeight
  );
  return { width: intrinsicWidth * scale, height: intrinsicHeight * scale };
}
FDocument.extend(FDocumentImageMixin);

// ../packages/docs-drawing/src/facade/f-enum.ts
var FDocumentImageEnumMixin = class extends FEnum {
  get DocsImageWrappingStyle() {
    return TextWrappingStyle;
  }
  get DocsImageRelativeFromH() {
    return ObjectRelativeFromH;
  }
  get DocsImageRelativeFromV() {
    return ObjectRelativeFromV;
  }
};
FEnum.extend(FDocumentImageEnumMixin);

// ../presets/packages/preset-docs-drawing/src/preset.ts
function UniverDocsDrawingPreset(config = {}) {
  const { collaboration = false } = config;
  return {
    plugins: [
      [UniverDrawingPlugin, { override: collaboration ? [[IImageIoService, null]] : [] }],
      UniverDrawingUIPlugin,
      UniverDocsDrawingPlugin,
      UniverDocsDrawingUIPlugin
    ].filter((v) => !!v)
  };
}

// ../presets/packages/preset-docs-drawing/src/locales/zh-CN.ts
var zh_CN_default10 = Object.assign(
  {},
  zh_CN_default2,
  zh_CN_default6
);

// ../presets/packages/preset-docs-hyper-link/src/preset.ts
function UniverDocsHyperLinkPreset() {
  return {
    plugins: [
      UniverDocsHyperLinkPlugin,
      UniverDocsHyperLinkUIPlugin
    ].filter((v) => !!v)
  };
}

// ../presets/packages/preset-docs-hyper-link/src/locales/zh-CN.ts
var zh_CN_default11 = Object.assign(
  {},
  zh_CN_default3
);

// ../presets/packages/preset-docs-thread-comment/src/preset.ts
function UniverDocsThreadCommentPreset(_config = {}) {
  const plugins = [
    UniverThreadCommentUIPlugin,
    UniverDocsThreadCommentUIPlugin
  ];
  return { plugins };
}

// ../presets/packages/preset-docs-thread-comment/src/locales/zh-CN.ts
var zh_CN_default12 = Object.assign(
  {},
  zh_CN_default4,
  zh_CN_default7
);

// src/preset-docs-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    ["zhCN" /* ZH_CN */]: mergeLocales(
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11,
      zh_CN_default12
    )
  },
  theme: default_default,
  logLevel: 4 /* VERBOSE */,
  presets: [
    UniverDocsCorePreset({
      container: "app"
    }),
    UniverDocsDrawingPreset(),
    UniverDocsHyperLinkPreset(),
    UniverDocsThreadCommentPreset()
  ]
});
univer.createUnit(1 /* UNIVER_DOC */, DEFAULT_DOCUMENT_DATA_SIMPLE);
window.univer = univer;
window.univerAPI = univerAPI;
