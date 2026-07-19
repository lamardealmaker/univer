import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5DCN56QG.js";
import "./chunk-7ZUFXX7Z.js";
import "./chunk-VXJUZPNP.js";
import "./chunk-HILEPQAU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ADAHA7HX.js";
import "./chunk-T5RVU3KX.js";
import "./chunk-T6XN4F5H.js";
import "./chunk-5X5VM2J5.js";
import "./chunk-EZPYXFOP.js";
import "./chunk-PHXA7DTN.js";
import "./chunk-7T2XFBQ7.js";
import "./chunk-6EUTIKVY.js";
import "./chunk-YZCASKU5.js";
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
