import {
  UniverDocsMentionUIPlugin
} from "./chunk-6AWHN425.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FSERFUEN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OONK66FM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ABDCRG5L.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-SR64XNB6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JAXUJMU3.js";
import "./chunk-TSNXCNPS.js";
import "./chunk-LSF4POHA.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IE6GLFSW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BTRJGKKP.js";
import "./chunk-5Y32QPUW.js";
import "./chunk-JIZNSXQD.js";
import "./chunk-O5T7UNDA.js";
import "./chunk-ZNKYSGF6.js";
import "./chunk-FOCWDXCV.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/lazy.ts
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
