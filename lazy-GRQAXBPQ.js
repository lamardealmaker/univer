import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2STSLUZO.js";
import "./chunk-M45B5M2D.js";
import "./chunk-6YIJWKIY.js";
import "./chunk-QDGUZT7A.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ACGOQJZI.js";
import "./chunk-3KTUCOBW.js";
import "./chunk-AF66R4M7.js";
import "./chunk-B5PLQ7ZK.js";
import "./chunk-OXIT4FXR.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
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
