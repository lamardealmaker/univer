import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DF4VINGC.js";
import "./chunk-HULMZVJC.js";
import "./chunk-IMH5SVYZ.js";
import "./chunk-FWB76SBQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EPF64CV7.js";
import "./chunk-CRFXJBEX.js";
import "./chunk-274MQYO6.js";
import "./chunk-EOQESUVA.js";
import "./chunk-WZRSDBHA.js";
import "./chunk-EXFLV3OL.js";
import "./chunk-PQNGZWJ6.js";
import "./chunk-4BVUHLOO.js";
import "./chunk-NOU3WR7A.js";
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
