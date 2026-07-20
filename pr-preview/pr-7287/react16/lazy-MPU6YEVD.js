import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LAY4IL4N.js";
import "./chunk-WAHB3PDU.js";
import "./chunk-YIHF46FU.js";
import "./chunk-GBHXLN3S.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A4MVUHOM.js";
import "./chunk-RX3KVBNS.js";
import "./chunk-G5LZZDCW.js";
import "./chunk-OOPSYHJ4.js";
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
