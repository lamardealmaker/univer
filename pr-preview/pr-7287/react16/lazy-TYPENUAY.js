import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-73WTACXN.js";
import "./chunk-U5INUUUC.js";
import "./chunk-GOOLQTQL.js";
import "./chunk-UANBNWAU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PNJIYUZM.js";
import "./chunk-BDS5PPVC.js";
import "./chunk-DLVYVF5V.js";
import "./chunk-OSIUONFY.js";
import "./chunk-BD4AZUYQ.js";
import "./chunk-C772RFFN.js";
import "./chunk-7U53J3FY.js";
import "./chunk-7UTO6AD7.js";
import "./chunk-JDLKIM3V.js";
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
