import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IO4IYXGS.js";
import "./chunk-J2CDTN5X.js";
import "./chunk-5NZKCEGQ.js";
import "./chunk-K233QV2H.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BDGBQQMX.js";
import "./chunk-THFR4UFV.js";
import "./chunk-4CFHPDEB.js";
import "./chunk-QKGVWKWV.js";
import "./chunk-CPC53RJS.js";
import "./chunk-LTKAZ3YE.js";
import "./chunk-YJIO2C26.js";
import "./chunk-GHYF6TLP.js";
import "./chunk-GF474R7N.js";
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
