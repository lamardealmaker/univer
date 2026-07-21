import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FEF7HC4R.js";
import "./chunk-DYLSCQUF.js";
import "./chunk-EMM7K5JU.js";
import "./chunk-MDJQMXVZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TSOIN4OZ.js";
import "./chunk-JBVAEUFK.js";
import "./chunk-6MWSYICV.js";
import "./chunk-TK5L6D2R.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
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
