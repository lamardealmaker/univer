import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TXAKYHVF.js";
import "./chunk-YORKONEI.js";
import "./chunk-7O2J7JZQ.js";
import "./chunk-LMJ4IFK3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JFFKTPOY.js";
import "./chunk-HP2WEK2B.js";
import "./chunk-MVOWOER3.js";
import "./chunk-WIWKXDD7.js";
import "./chunk-756NKHGC.js";
import "./chunk-KZJMUOYO.js";
import "./chunk-ZEDWP55C.js";
import "./chunk-6KFG42LC.js";
import "./chunk-MRUZHKXB.js";
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
