import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OIQCUWBI.js";
import "./chunk-FX3FWPDX.js";
import "./chunk-UNQNW6ZH.js";
import "./chunk-6DVCHJTL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZIZKR5OK.js";
import "./chunk-XQMJNEPX.js";
import "./chunk-YNGIMNN2.js";
import "./chunk-6ANE5F2C.js";
import "./chunk-UEXZFSJ7.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
