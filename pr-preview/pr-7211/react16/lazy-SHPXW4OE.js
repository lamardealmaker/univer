import {
  UniverDocsMentionUIPlugin
} from "./chunk-AY3YVMTO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-72RXEFRR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2NDXKZ4J.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NEG46HZY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KVUJOD46.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-C7PUKPIK.js";
import "./chunk-PFNLRKGH.js";
import "./chunk-IGX7TZUG.js";
import "./chunk-ZQ65Q5TK.js";
import "./chunk-VBEBBRGY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-USR2KQ5X.js";
import "./chunk-NIA4YRMS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WMT7DRVA.js";
import "./chunk-RWD2CR44.js";
import "./chunk-U2OJ46UV.js";
import "./chunk-7BZAPDYT.js";
import "./chunk-YROKCJXB.js";
import "./chunk-66F6IXH3.js";
import "./chunk-W2CQHLHX.js";
import "./chunk-DHOPL66F.js";
import "./chunk-BG7SGHYA.js";
import "./chunk-II7REV6J.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
