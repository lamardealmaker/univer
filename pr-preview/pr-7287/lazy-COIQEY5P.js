import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LST2CBWB.js";
import "./chunk-EAO5EEG4.js";
import "./chunk-2C33NJE7.js";
import "./chunk-WRLVC2BQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VAVZOLQ5.js";
import "./chunk-4W5TOARO.js";
import "./chunk-WLGHV6AH.js";
import "./chunk-2XISZNLI.js";
import "./chunk-6AM74UQX.js";
import "./chunk-JTCGG6PX.js";
import "./chunk-BCAS46ZI.js";
import "./chunk-CFJENZU7.js";
import "./chunk-QO3C2C2Z.js";
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
