import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-K4YWX2E3.js";
import "./chunk-Q4NPTQRA.js";
import "./chunk-PNXQMXMC.js";
import "./chunk-B4EGCEYD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-C5QTTVBO.js";
import "./chunk-N46QPJFB.js";
import "./chunk-TCDTP3ZT.js";
import "./chunk-VR6ZIYZ6.js";
import "./chunk-AY63UQCZ.js";
import "./chunk-F4VJL6FP.js";
import "./chunk-NSFKJQN7.js";
import "./chunk-X6CE6G36.js";
import "./chunk-SEOZDTQ5.js";
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
