import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CO5ZTZG7.js";
import "./chunk-OEPMWHHK.js";
import "./chunk-FX6PDT6G.js";
import "./chunk-HQTDXEAO.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RJDF4YWH.js";
import "./chunk-E2GJZ76B.js";
import "./chunk-EHROH7XB.js";
import "./chunk-UWN2KQGM.js";
import "./chunk-DV6SGVPN.js";
import "./chunk-PUCENP4Z.js";
import "./chunk-U3HPYX3U.js";
import "./chunk-FGPXQBRL.js";
import "./chunk-RRAAZ522.js";
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
