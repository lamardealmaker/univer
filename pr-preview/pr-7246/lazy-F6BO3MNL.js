import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PTTLTC3J.js";
import "./chunk-SVK7ZPPY.js";
import "./chunk-36TEURW2.js";
import "./chunk-EA5XJEOX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GDLQKIFN.js";
import "./chunk-VCITGCDQ.js";
import "./chunk-4OO4Y65L.js";
import "./chunk-TGV5SZHH.js";
import "./chunk-RR34ERDM.js";
import "./chunk-7ZGN2HKJ.js";
import "./chunk-FGYNDRR7.js";
import "./chunk-THSFYI7A.js";
import "./chunk-L2YDHVS3.js";
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
