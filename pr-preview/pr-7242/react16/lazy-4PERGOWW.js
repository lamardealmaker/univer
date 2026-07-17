import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IRSB5AWH.js";
import "./chunk-T33KL2A4.js";
import "./chunk-ISZULVGD.js";
import "./chunk-Q2E2ECAM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T6YW3JCV.js";
import "./chunk-TBKZ3TKR.js";
import "./chunk-TA533AUM.js";
import "./chunk-O6P4CNWQ.js";
import "./chunk-UEB57LIN.js";
import "./chunk-SYKVOUJC.js";
import "./chunk-4AAQ67CN.js";
import "./chunk-Z4HUTZZE.js";
import "./chunk-AE3R7DH2.js";
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
