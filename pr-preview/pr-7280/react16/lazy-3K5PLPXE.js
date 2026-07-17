import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-U73SFLS3.js";
import "./chunk-ANSEKXH2.js";
import "./chunk-5FFVHMRY.js";
import "./chunk-WLT3XFS7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H46OVIQG.js";
import "./chunk-BJWTFBI2.js";
import "./chunk-CU2EDUDJ.js";
import "./chunk-JRNM2EKZ.js";
import "./chunk-ULZVYSIP.js";
import "./chunk-6Q2GSEQ3.js";
import "./chunk-5O7RVKHK.js";
import "./chunk-ZQDF6DXU.js";
import "./chunk-IOWTIYQR.js";
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
