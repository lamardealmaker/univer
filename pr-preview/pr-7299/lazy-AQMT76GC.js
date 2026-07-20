import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QMSEKIUP.js";
import "./chunk-DYJSXBVS.js";
import "./chunk-6YIJWKIY.js";
import "./chunk-QPC36KIP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TXONSSOW.js";
import "./chunk-GC5TIPZA.js";
import "./chunk-HHFW36YX.js";
import "./chunk-GV7BDRSR.js";
import "./chunk-USNZHLNV.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
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
