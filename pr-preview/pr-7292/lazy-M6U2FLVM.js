import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WFIW7JXO.js";
import "./chunk-XB4RNRAJ.js";
import "./chunk-QJ77NYHB.js";
import "./chunk-RLVTVZZU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AVVY4FL4.js";
import "./chunk-VAMRQPL7.js";
import "./chunk-VTI6APCV.js";
import "./chunk-QX73NBUB.js";
import "./chunk-IQMWKPZP.js";
import "./chunk-E5XWEU65.js";
import "./chunk-TI6U6U6U.js";
import "./chunk-E6DJCDTN.js";
import "./chunk-FD3JZH6D.js";
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
