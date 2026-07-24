import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VHS5D4YT.js";
import "./chunk-GVMO7OMJ.js";
import "./chunk-XFT2KTUQ.js";
import "./chunk-7WQRXCNR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OQWO2XHG.js";
import "./chunk-QW62UBVN.js";
import "./chunk-SSGJVDJE.js";
import "./chunk-6X57MLET.js";
import "./chunk-XYTTYL24.js";
import "./chunk-L7QJLVG7.js";
import "./chunk-SWWNNEEA.js";
import "./chunk-KKQWNXAE.js";
import "./chunk-JD3KJOQJ.js";
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
