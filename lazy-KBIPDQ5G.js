import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SF2H2COD.js";
import "./chunk-NWCQRKDM.js";
import "./chunk-5PKSD5FN.js";
import "./chunk-2FAZR6NI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-APTA7ZOS.js";
import "./chunk-EU4GTUZY.js";
import "./chunk-A4ANDTQT.js";
import "./chunk-4EIOPILK.js";
import "./chunk-E6IF2FEV.js";
import "./chunk-B3NIOS63.js";
import "./chunk-N6UCXEZB.js";
import "./chunk-3EG43LTZ.js";
import "./chunk-DOJ4S5IA.js";
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
