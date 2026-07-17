import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-M3K5IO7L.js";
import "./chunk-HYCBNN72.js";
import "./chunk-R5EI76RR.js";
import "./chunk-I5V7OOD4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-W3HUSZAZ.js";
import "./chunk-I34ZMAPC.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-SI2HPRNT.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-2PLZSTXB.js";
import "./chunk-I7AO7NZF.js";
import "./chunk-2CS7RBBN.js";
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
