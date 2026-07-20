import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VXB5BRKM.js";
import "./chunk-73LDN5R3.js";
import "./chunk-GWQLZOWW.js";
import "./chunk-MHKMSJCT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VV2M4XBG.js";
import "./chunk-A3QGOWU7.js";
import "./chunk-64XE5JND.js";
import "./chunk-NJUCPULC.js";
import "./chunk-MQT4NK3P.js";
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
