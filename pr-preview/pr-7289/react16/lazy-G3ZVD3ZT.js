import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BKRO4R65.js";
import "./chunk-ZCXALDSV.js";
import "./chunk-GWQLZOWW.js";
import "./chunk-YMWVEMOA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FVR3T2BW.js";
import "./chunk-FRPQKBYL.js";
import "./chunk-XHUWJPWL.js";
import "./chunk-I5GDLIYL.js";
import "./chunk-XZJWC6FO.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
