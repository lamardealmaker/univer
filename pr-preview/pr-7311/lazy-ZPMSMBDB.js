import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FTBW54D7.js";
import "./chunk-74PNJ6ER.js";
import "./chunk-JS5QLNPA.js";
import "./chunk-YYYIVYNZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XGIRKLWT.js";
import "./chunk-UWJKF6PE.js";
import "./chunk-UT72HRUS.js";
import "./chunk-33WBVZUA.js";
import "./chunk-P2DA4KTU.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
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
