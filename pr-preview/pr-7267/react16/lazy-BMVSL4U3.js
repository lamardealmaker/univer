import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-V5XZQ7C4.js";
import "./chunk-HYCBNN72.js";
import "./chunk-R5EI76RR.js";
import "./chunk-NQ6GFYDH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4F7RKLLQ.js";
import "./chunk-4QZ374LK.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-P5O3JYY7.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-MXZAKXJ2.js";
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
