import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IR77YM6T.js";
import "./chunk-FX3FWPDX.js";
import "./chunk-UNQNW6ZH.js";
import "./chunk-EEQXJFHT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-J2PEVNYA.js";
import "./chunk-LVYBOB7R.js";
import "./chunk-PZEGEJ3B.js";
import "./chunk-ZX25COXL.js";
import "./chunk-ZDWV6DZP.js";
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
