import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AAGI625O.js";
import "./chunk-ANWCRG6I.js";
import "./chunk-2LXWY3TI.js";
import "./chunk-54PFHOII.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VYUSG6PR.js";
import "./chunk-4UI5G7GT.js";
import "./chunk-7BSR2VVD.js";
import "./chunk-LKQHL32Y.js";
import "./chunk-L4PCTLJZ.js";
import "./chunk-CQ7UYAIQ.js";
import "./chunk-7QDY2TDF.js";
import "./chunk-5BWHODX4.js";
import "./chunk-7X4H4BYU.js";
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
