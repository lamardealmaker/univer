import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BI4QOFZ5.js";
import "./chunk-HYCBNN72.js";
import "./chunk-R5EI76RR.js";
import "./chunk-QMQR5CDV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A33UBOND.js";
import "./chunk-ACGNN5DC.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-FLZJBOXA.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-H2PZ3C73.js";
import "./chunk-I7AO7NZF.js";
import "./chunk-2CS7RBBN.js";
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
