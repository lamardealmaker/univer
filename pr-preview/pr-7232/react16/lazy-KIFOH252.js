import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ABDCRG5L.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import "./chunk-IE6GLFSW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BTRJGKKP.js";
import "./chunk-5Y32QPUW.js";
import "./chunk-O5T7UNDA.js";
import "./chunk-ZNKYSGF6.js";
import "./chunk-FOCWDXCV.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
