import {
  UniverDocsMentionUIPlugin
} from "./chunk-GRB475L5.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RYFJOD4D.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ARGTWYCY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-327TP32G.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ONQ6TBI6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GPJOOWZE.js";
import "./chunk-TSNXCNPS.js";
import "./chunk-LSF4POHA.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KSNEDRGZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R4F3IYPG.js";
import "./chunk-VLUBKWWO.js";
import "./chunk-JIZNSXQD.js";
import "./chunk-65GFA2QT.js";
import "./chunk-2J43C5JD.js";
import "./chunk-FJ7LZHIQ.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
