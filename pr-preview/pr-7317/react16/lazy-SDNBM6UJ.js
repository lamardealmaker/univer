import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KN3BADHM.js";
import "./chunk-22OHCTFH.js";
import "./chunk-LOQZRNHL.js";
import "./chunk-4X6RCN5O.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2W4YFPUY.js";
import "./chunk-LMBWBPMY.js";
import "./chunk-K6BRYOOT.js";
import "./chunk-B5HC4CAF.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-F64YQP6G.js";
import "./chunk-7OMJQ65A.js";
import "./chunk-HGZHCRP5.js";
import "./chunk-RLTCIETE.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
