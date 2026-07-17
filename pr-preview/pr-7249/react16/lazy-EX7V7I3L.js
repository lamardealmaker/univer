import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QAT6DWJY.js";
import "./chunk-2QKGHOX7.js";
import "./chunk-ORYV3R2Q.js";
import "./chunk-3TOTVEAB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FAOYOEW2.js";
import "./chunk-22MD2OJX.js";
import "./chunk-CLCIF2ZI.js";
import "./chunk-XBVSVYYT.js";
import "./chunk-T44DWQTU.js";
import "./chunk-DSXI3R4L.js";
import "./chunk-AVV6LYFI.js";
import "./chunk-XY6TNQNM.js";
import "./chunk-DJVW44P3.js";
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
