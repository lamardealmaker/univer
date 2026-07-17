import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TLDPK6S3.js";
import "./chunk-AIF6WIMX.js";
import "./chunk-FGO4QI4I.js";
import "./chunk-ZQVTSRNL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SCOCWE3G.js";
import "./chunk-DJ56KLBT.js";
import "./chunk-WMOUGJI7.js";
import "./chunk-ZRZVVOUC.js";
import "./chunk-LH3GFQJE.js";
import "./chunk-6LLP25PE.js";
import "./chunk-MYV6UH5V.js";
import "./chunk-GP5SU7I4.js";
import "./chunk-LAUCJFSS.js";
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
