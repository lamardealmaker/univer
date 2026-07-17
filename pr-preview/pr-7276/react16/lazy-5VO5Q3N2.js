import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-I6PDN2G3.js";
import "./chunk-XOLRODHO.js";
import "./chunk-7CYBNH2W.js";
import "./chunk-BRX4NJPW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2EU5TYJL.js";
import "./chunk-ZSK52PWR.js";
import "./chunk-3APMRQNE.js";
import "./chunk-YQ7TL2DI.js";
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
