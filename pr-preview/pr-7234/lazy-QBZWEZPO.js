import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-I4Z3WOA4.js";
import "./chunk-MD4PUTB3.js";
import "./chunk-7DZQ6MTX.js";
import "./chunk-3F7B55ZW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T7OQEU2S.js";
import "./chunk-3ZCCSKSD.js";
import "./chunk-JE4OBOGU.js";
import "./chunk-T67UMXJD.js";
import "./chunk-LJWJTURH.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
