import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4CYPIC4Z.js";
import "./chunk-XOLRODHO.js";
import "./chunk-7CYBNH2W.js";
import "./chunk-XL2Z5LQD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Y255HRBH.js";
import "./chunk-4HXKLS73.js";
import "./chunk-3APMRQNE.js";
import "./chunk-5WO5ODMW.js";
import "./chunk-CL3B2JWT.js";
import "./chunk-ZCI2FDXL.js";
import "./chunk-KVAY7V76.js";
import "./chunk-Z3BH4FVF.js";
import "./chunk-STB3OOUD.js";
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
