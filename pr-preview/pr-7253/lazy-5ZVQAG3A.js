import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UI53VB6H.js";
import "./chunk-55GRUYXI.js";
import "./chunk-PJ4JN5BR.js";
import "./chunk-XBVP63BL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BM666JEA.js";
import "./chunk-EURSUFWT.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-LZ4NLJXK.js";
import "./chunk-R3FURYVI.js";
import "./chunk-DVJ3ZZW2.js";
import "./chunk-EMNNNI6N.js";
import "./chunk-623UIBHA.js";
import "./chunk-DJVW44P3.js";
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
