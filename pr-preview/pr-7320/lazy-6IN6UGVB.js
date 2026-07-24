import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HA5PNPHG.js";
import "./chunk-KOMAIIN2.js";
import "./chunk-J4EG6VZP.js";
import "./chunk-6YJM6F47.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TWZILU24.js";
import "./chunk-EKVF45AQ.js";
import "./chunk-QEEPPHQO.js";
import "./chunk-MOE32XHT.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-D5NPODZW.js";
import "./chunk-PP2PHL2R.js";
import "./chunk-W4NVE3XT.js";
import "./chunk-RLTCIETE.js";
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
