import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F6WTLZQZ.js";
import "./chunk-ZM5DWJZT.js";
import "./chunk-7OWRHZI6.js";
import "./chunk-TGLDH3ZQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7FR4UL6G.js";
import "./chunk-FURGFDHX.js";
import "./chunk-WQ6A4BAN.js";
import "./chunk-B7WTVZJN.js";
import "./chunk-4TZYBZA3.js";
import "./chunk-EYXLHBFO.js";
import "./chunk-FSBNILI5.js";
import "./chunk-EBG4Y6CA.js";
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
