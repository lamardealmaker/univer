import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZHZGZ4PP.js";
import "./chunk-WAHB3PDU.js";
import "./chunk-YIHF46FU.js";
import "./chunk-NO5LXRE5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CWGA7BJN.js";
import "./chunk-325W4XHZ.js";
import "./chunk-37CCQPTR.js";
import "./chunk-PXJRBH6Q.js";
import "./chunk-QR4IXNRE.js";
import "./chunk-EL2MA4WM.js";
import "./chunk-JYVQTEKH.js";
import "./chunk-CSXRQ456.js";
import "./chunk-EIUQN72C.js";
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
