import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-S6RX5R5L.js";
import "./chunk-XKR5IN3B.js";
import "./chunk-BXZYRREU.js";
import "./chunk-WMJOI7QH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YRKMWVU6.js";
import "./chunk-R5ONU2Q2.js";
import "./chunk-EEVABD7L.js";
import "./chunk-MEZUJHUE.js";
import "./chunk-VI2WI6CP.js";
import "./chunk-HI3S6XZW.js";
import "./chunk-W2IE7XAE.js";
import "./chunk-FV4IGQDG.js";
import "./chunk-N4BCF5MH.js";
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
