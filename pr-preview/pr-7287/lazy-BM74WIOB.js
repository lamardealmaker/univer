import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JU4IXYAL.js";
import "./chunk-T4LNNQY2.js";
import "./chunk-3BJK6MJ2.js";
import "./chunk-GXWYHDOM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2FP7O2U6.js";
import "./chunk-BIZNHCRU.js";
import "./chunk-7FIJQL3C.js";
import "./chunk-QFEKDUAF.js";
import "./chunk-2LDOLTZK.js";
import "./chunk-APONP5I3.js";
import "./chunk-DYS3SBAV.js";
import "./chunk-TDM22U6Q.js";
import "./chunk-IIRVF2HV.js";
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
