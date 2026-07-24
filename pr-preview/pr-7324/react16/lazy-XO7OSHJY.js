import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MDNIISKB.js";
import "./chunk-BDCYWOZZ.js";
import "./chunk-F2O4YXLR.js";
import "./chunk-22OGS6ZP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7UMULUER.js";
import "./chunk-7UMLLGWV.js";
import "./chunk-7QHVWLSA.js";
import "./chunk-IQQDFJU7.js";
import "./chunk-XEKXAVJZ.js";
import "./chunk-XUPIB4PS.js";
import "./chunk-NTW4V4SW.js";
import "./chunk-54D2JQ6Q.js";
import "./chunk-LLQCVTT7.js";
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
