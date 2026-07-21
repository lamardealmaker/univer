import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GKXNVV2E.js";
import "./chunk-DYLSCQUF.js";
import "./chunk-EMM7K5JU.js";
import "./chunk-BMAWUOUM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GYVSFUCF.js";
import "./chunk-S4XLBRHG.js";
import "./chunk-6MWSYICV.js";
import "./chunk-JSPE2R2S.js";
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
