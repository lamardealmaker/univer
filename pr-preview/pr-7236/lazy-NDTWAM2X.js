import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NXZLR3YR.js";
import "./chunk-7FHRUHDQ.js";
import "./chunk-242QEQV5.js";
import "./chunk-ISQFSPNJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FHMDFG6E.js";
import "./chunk-XOAR4XWD.js";
import "./chunk-XP3Q3NXY.js";
import "./chunk-CWSGPU2L.js";
import "./chunk-N7X4PJ3A.js";
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
