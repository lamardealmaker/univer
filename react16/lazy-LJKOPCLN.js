import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-G2SKR3PO.js";
import "./chunk-LMKACHFS.js";
import "./chunk-WOZPGAOD.js";
import "./chunk-NL3XBNZS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CNVKYC6C.js";
import "./chunk-JWWKPC7Q.js";
import "./chunk-BONJDQ7T.js";
import "./chunk-XXJAVF5O.js";
import "./chunk-6AM74UQX.js";
import "./chunk-4GAKH6J2.js";
import "./chunk-WZUQ6F4L.js";
import "./chunk-OR7UCNP7.js";
import "./chunk-QO3C2C2Z.js";
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
