import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TIOUR5FE.js";
import "./chunk-5UNICZEN.js";
import "./chunk-56XVEQPT.js";
import "./chunk-XKQJW7PG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UHZPTQ3S.js";
import "./chunk-YVPRA6TP.js";
import "./chunk-TCS5DXJ7.js";
import "./chunk-UQUTRHPU.js";
import "./chunk-KU2XUV44.js";
import "./chunk-4FGQMKJL.js";
import "./chunk-7UDFNS2Y.js";
import "./chunk-4DYEZKTR.js";
import "./chunk-JSXMCQAF.js";
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
