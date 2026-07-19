import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SGIOAW2O.js";
import "./chunk-SEWMBJGT.js";
import "./chunk-AUAM6ZPL.js";
import "./chunk-CT3NRW2Y.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2FTWYJBI.js";
import "./chunk-WOC376NZ.js";
import "./chunk-DYU5ITRL.js";
import "./chunk-T4UO3ZX3.js";
import "./chunk-FLBWAU7F.js";
import "./chunk-KEXS675W.js";
import "./chunk-4KLRZ754.js";
import "./chunk-JLS66HNK.js";
import "./chunk-2TEKAXEL.js";
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
