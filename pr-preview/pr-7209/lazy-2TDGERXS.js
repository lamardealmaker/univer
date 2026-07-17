import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OECSQAVJ.js";
import "./chunk-KR7HM66P.js";
import "./chunk-V2QKBXES.js";
import "./chunk-GLCMBMOE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-26UHMP6F.js";
import "./chunk-YWBWRFZC.js";
import "./chunk-LR5HIO4Y.js";
import "./chunk-XKO3JW3B.js";
import "./chunk-63DFZAS2.js";
import "./chunk-PDNVFZC7.js";
import "./chunk-POXKYJUQ.js";
import "./chunk-XF4LYEKE.js";
import "./chunk-OVV7GT3M.js";
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
