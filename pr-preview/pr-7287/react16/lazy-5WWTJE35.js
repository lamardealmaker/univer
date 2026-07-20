import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OCJNYJF6.js";
import "./chunk-YSHBZ567.js";
import "./chunk-632LMC3G.js";
import "./chunk-OAMAUPJX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IBCIDPS3.js";
import "./chunk-7LDHFNZ4.js";
import "./chunk-IXEHVME3.js";
import "./chunk-W72J2EQD.js";
import "./chunk-HOJE6KZL.js";
import "./chunk-WNY25Z7C.js";
import "./chunk-XAJLTAUM.js";
import "./chunk-6OBE5I5L.js";
import "./chunk-RJIFU6SG.js";
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
