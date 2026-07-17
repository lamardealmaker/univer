import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-327TP32G.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import "./chunk-KSNEDRGZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-R4F3IYPG.js";
import "./chunk-VLUBKWWO.js";
import "./chunk-65GFA2QT.js";
import "./chunk-2J43C5JD.js";
import "./chunk-FJ7LZHIQ.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
