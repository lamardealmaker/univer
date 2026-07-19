import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IKWL3PKU.js";
import "./chunk-POJYLXY6.js";
import "./chunk-E6MB3CVO.js";
import "./chunk-TNYKZBXZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4F2ARLJP.js";
import "./chunk-MZHLRYLD.js";
import "./chunk-CK2AJVH4.js";
import "./chunk-CAPRATJL.js";
import "./chunk-SSLJNNLM.js";
import "./chunk-KORVF2GC.js";
import "./chunk-TGILKA5V.js";
import "./chunk-6H5IIH26.js";
import "./chunk-EWDDTFQR.js";
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
