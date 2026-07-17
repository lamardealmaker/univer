import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QQCI5AYE.js";
import "./chunk-R6KPCXJQ.js";
import "./chunk-MF7LRCAL.js";
import "./chunk-PGJL75VV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P2I5HKIR.js";
import "./chunk-APBWMNOX.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-CTCLZJJS.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-I7VZJZMU.js";
import "./chunk-7HAHH2CT.js";
import "./chunk-IQR62XS7.js";
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
