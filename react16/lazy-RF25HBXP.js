import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4C7LOLLT.js";
import "./chunk-VYCG7O4S.js";
import "./chunk-LZ76DP42.js";
import "./chunk-VMARFF56.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CIBQEK3L.js";
import "./chunk-GQ4VPMLK.js";
import "./chunk-Y5G2OXH6.js";
import "./chunk-HC4V5NKS.js";
import "./chunk-N3KJJFOF.js";
import "./chunk-3LBADK2S.js";
import "./chunk-JHNQBJPZ.js";
import "./chunk-ALOYUQOY.js";
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
