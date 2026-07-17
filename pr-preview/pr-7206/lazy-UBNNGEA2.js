import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3OXYL322.js";
import "./chunk-XGUKHRYW.js";
import "./chunk-VZPC23BU.js";
import "./chunk-5I2CJEUN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZOOJRDZ5.js";
import "./chunk-TOHHES4V.js";
import "./chunk-XCPOR4FC.js";
import "./chunk-BZFCRYR3.js";
import "./chunk-5QZWK5BE.js";
import "./chunk-UUXCCQDN.js";
import "./chunk-YGL77P23.js";
import "./chunk-UZB6LHUM.js";
import "./chunk-QJESARYQ.js";
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
