import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BIFGCO3L.js";
import "./chunk-6VDPEYPY.js";
import "./chunk-B6YPZOFU.js";
import "./chunk-67Q25QBV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WGRD5ZZN.js";
import "./chunk-HTHXZRIK.js";
import "./chunk-6NNCJEUZ.js";
import "./chunk-ALND7WPK.js";
import "./chunk-VUYV6U5L.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
