import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PXZAA6PG.js";
import "./chunk-74PNJ6ER.js";
import "./chunk-JS5QLNPA.js";
import "./chunk-KSHJKSBK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JNE34MJT.js";
import "./chunk-PV3BL3QF.js";
import "./chunk-5M2S7MS4.js";
import "./chunk-Z34WP5PA.js";
import "./chunk-C72VBTJ2.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
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
