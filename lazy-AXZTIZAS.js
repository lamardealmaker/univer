import {
  UniverDocsMentionUIPlugin
} from "./chunk-Q4EYAZR2.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LTPUGG2O.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DMVK7GVH.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KN3BADHM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-DT77EJWT.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EO5A6IE3.js";
import "./chunk-KMSZGGYN.js";
import "./chunk-N74P77RH.js";
import "./chunk-5BQDEOUY.js";
import "./chunk-22OHCTFH.js";
import "./chunk-LOQZRNHL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4X6RCN5O.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2W4YFPUY.js";
import "./chunk-LMBWBPMY.js";
import "./chunk-PH4B7R6S.js";
import "./chunk-K6BRYOOT.js";
import "./chunk-B5HC4CAF.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-F64YQP6G.js";
import "./chunk-7OMJQ65A.js";
import "./chunk-HGZHCRP5.js";
import "./chunk-RLTCIETE.js";
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
