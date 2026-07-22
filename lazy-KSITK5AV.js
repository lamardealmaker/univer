import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-Q7YBTAGK.js";
import "./chunk-YRIMLH5N.js";
import "./chunk-YMY6PXSP.js";
import "./chunk-LLBM76KA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-LSB7NQWY.js";
import "./chunk-UBVKEMWY.js";
import "./chunk-2JTXL7DQ.js";
import "./chunk-2EIRHLET.js";
import "./chunk-AOFVIMMN.js";
import "./chunk-VU33XQTF.js";
import "./chunk-LMPX2OTW.js";
import "./chunk-RKDQK3XP.js";
import "./chunk-7RPG6EBZ.js";
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
