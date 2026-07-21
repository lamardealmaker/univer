import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FQNOBKC2.js";
import "./chunk-GPHC2VR3.js";
import "./chunk-PD2ASMGH.js";
import "./chunk-2KAUVM2E.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V63XZ5XN.js";
import "./chunk-KS6WXDEM.js";
import "./chunk-NCPGOBBL.js";
import "./chunk-BEQH3R6D.js";
import "./chunk-4CX7GQL6.js";
import "./chunk-XRZRRLSI.js";
import "./chunk-OMRVEMWW.js";
import "./chunk-62P57WM5.js";
import "./chunk-6QPW3C4R.js";
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
