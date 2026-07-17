import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LWXQCXVA.js";
import "./chunk-HKZSNYSG.js";
import "./chunk-N3H7YJXI.js";
import "./chunk-BPDZYJGF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SRC5WBJI.js";
import "./chunk-RZJRHFVN.js";
import "./chunk-USURWJAH.js";
import "./chunk-UKNH5LUD.js";
import "./chunk-7OQM37ST.js";
import "./chunk-SCJRDX4C.js";
import "./chunk-FMWTNRSJ.js";
import "./chunk-UNYIH6OF.js";
import "./chunk-AYWINPRX.js";
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
