import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PFECA6WV.js";
import "./chunk-ELKIVHXI.js";
import "./chunk-TKSXJR5U.js";
import "./chunk-2KXTOOVM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UXAVM3YE.js";
import "./chunk-E4DEPHF7.js";
import "./chunk-TA533AUM.js";
import "./chunk-RGIQILDK.js";
import "./chunk-UEB57LIN.js";
import "./chunk-HINQTSXY.js";
import "./chunk-JBTX5AZD.js";
import "./chunk-MZIIE37M.js";
import "./chunk-AE3R7DH2.js";
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
