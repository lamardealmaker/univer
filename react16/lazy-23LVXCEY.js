import {
  UniverDocsMentionUIPlugin
} from "./chunk-2FM6O5XQ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VV4ZKKOE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-CZ5R2EI3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-G2SKR3PO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RXTWEXK2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OGXWULF3.js";
import "./chunk-FTLOCGDF.js";
import "./chunk-TYEKPORL.js";
import "./chunk-ZY225B4L.js";
import "./chunk-LMKACHFS.js";
import "./chunk-WOZPGAOD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NL3XBNZS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CNVKYC6C.js";
import "./chunk-JWWKPC7Q.js";
import "./chunk-OSWEEDUS.js";
import "./chunk-BONJDQ7T.js";
import "./chunk-XXJAVF5O.js";
import "./chunk-6AM74UQX.js";
import "./chunk-4GAKH6J2.js";
import "./chunk-WZUQ6F4L.js";
import "./chunk-OR7UCNP7.js";
import "./chunk-QO3C2C2Z.js";
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
