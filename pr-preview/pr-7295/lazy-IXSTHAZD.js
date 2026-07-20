import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5WA2MYOD.js";
import "./chunk-PVP6TUSB.js";
import "./chunk-GWQLZOWW.js";
import "./chunk-VHL45KXN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IFHZOFXD.js";
import "./chunk-ZQXTXLAM.js";
import "./chunk-XZLDA7KU.js";
import "./chunk-OT2A7JJT.js";
import "./chunk-N3TFKLQB.js";
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
