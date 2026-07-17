import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZRBTVCOF.js";
import "./chunk-N4VOWRDE.js";
import "./chunk-IEG7ZJ26.js";
import "./chunk-QUAO56AA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7WD5UPA7.js";
import "./chunk-GDDFE2LF.js";
import "./chunk-WYUC5LJW.js";
import "./chunk-L53UJCB2.js";
import "./chunk-OBTSUHS4.js";
import "./chunk-HKK367X4.js";
import "./chunk-4LPILMGO.js";
import "./chunk-M56I3X25.js";
import "./chunk-QEB532PW.js";
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
