import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TIN6D3JU.js";
import "./chunk-LV22FCWO.js";
import "./chunk-4QKT7R5V.js";
import "./chunk-QPLOI7KP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V6HXYYIT.js";
import "./chunk-W63J6SIM.js";
import "./chunk-TM7KTVMI.js";
import "./chunk-7WKE7NN5.js";
import "./chunk-4TZYBZA3.js";
import "./chunk-MSS67GGG.js";
import "./chunk-FTAZ6D2Q.js";
import "./chunk-HTWP7ETG.js";
import "./chunk-HO2OWOV7.js";
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
