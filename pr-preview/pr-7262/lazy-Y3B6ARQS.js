import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AMYQXIXM.js";
import "./chunk-R6KPCXJQ.js";
import "./chunk-MF7LRCAL.js";
import "./chunk-MVWKHD6A.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-52FGCKD6.js";
import "./chunk-GVSNZEWZ.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-AXY444OX.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-I7VZJZMU.js";
import "./chunk-PCUUUZAN.js";
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
