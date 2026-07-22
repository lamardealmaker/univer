import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QLA67DFJ.js";
import "./chunk-YUQEJC7N.js";
import "./chunk-BL4KLOAB.js";
import "./chunk-MYLWSSFO.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QF7C6WXX.js";
import "./chunk-WMI7TYEP.js";
import "./chunk-I36BEPXV.js";
import "./chunk-5RF6QEJE.js";
import "./chunk-3XYSHYJO.js";
import "./chunk-5FVFOJ5F.js";
import "./chunk-O7SFXNR4.js";
import "./chunk-ZUW5CMIO.js";
import "./chunk-5FNWWQ47.js";
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
