import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-W3R5PGIT.js";
import "./chunk-44Y3UKXQ.js";
import "./chunk-646UD4P3.js";
import "./chunk-EYS3QUF6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BDSLBBPJ.js";
import "./chunk-NVVLMKOI.js";
import "./chunk-3VCKAITY.js";
import "./chunk-TTOHCSDV.js";
import "./chunk-UP2CNROP.js";
import "./chunk-MIQDXCVC.js";
import "./chunk-LX2DEVI5.js";
import "./chunk-ON7MQNKU.js";
import "./chunk-V7YB6CU5.js";
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
