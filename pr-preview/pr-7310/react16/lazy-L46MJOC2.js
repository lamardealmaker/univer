import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F3QMONU5.js";
import "./chunk-74PNJ6ER.js";
import "./chunk-JS5QLNPA.js";
import "./chunk-JBL2WFD7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D7UM4Y4X.js";
import "./chunk-4QC57VYZ.js";
import "./chunk-IPMBU7QA.js";
import "./chunk-XEUCBHET.js";
import "./chunk-625XF3RN.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
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
