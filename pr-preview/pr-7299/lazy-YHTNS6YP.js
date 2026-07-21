import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LW3DNUXO.js";
import "./chunk-DYLSCQUF.js";
import "./chunk-EMM7K5JU.js";
import "./chunk-T2WPJPJ6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FLUE6P6D.js";
import "./chunk-DV3Y5AAS.js";
import "./chunk-6MWSYICV.js";
import "./chunk-XYIUNZZX.js";
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
