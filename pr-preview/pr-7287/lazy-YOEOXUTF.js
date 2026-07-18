import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NLUQHRBK.js";
import "./chunk-UHHO2D5T.js";
import "./chunk-FMTT7XZ5.js";
import "./chunk-N65GP37L.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-377V3BBM.js";
import "./chunk-GJLVDVVC.js";
import "./chunk-UVHCGEQY.js";
import "./chunk-OLNDOXYK.js";
import "./chunk-UI3JDZLA.js";
import "./chunk-IUA5HQYE.js";
import "./chunk-POGZILZG.js";
import "./chunk-Z4GVOVAB.js";
import "./chunk-3PCLVKGS.js";
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
