import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GJ6YT7D5.js";
import "./chunk-LPASTFGN.js";
import "./chunk-KSJIBBF3.js";
import "./chunk-SCZNWHG3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZN57JV22.js";
import "./chunk-6XHHIWPX.js";
import "./chunk-UICQ6I7F.js";
import "./chunk-QEEZAS5D.js";
import "./chunk-CXKDTK37.js";
import "./chunk-NSTTH4CN.js";
import "./chunk-RBYPFHCX.js";
import "./chunk-IOSPCB23.js";
import "./chunk-EYIJFNJM.js";
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
