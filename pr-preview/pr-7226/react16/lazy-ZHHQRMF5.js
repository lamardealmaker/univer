import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WZZJKRZV.js";
import "./chunk-FHZ6KYXS.js";
import "./chunk-ZVF2WUFH.js";
import "./chunk-ASBJMGCQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XXLJYHU4.js";
import "./chunk-VWEN55CD.js";
import "./chunk-GNDOLAJ7.js";
import "./chunk-DDRE5RJY.js";
import "./chunk-3BM76LJM.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
