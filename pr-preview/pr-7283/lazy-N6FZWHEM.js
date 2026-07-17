import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NO6EAJWP.js";
import "./chunk-FMNBUAQI.js";
import "./chunk-ZPBJHQKQ.js";
import "./chunk-IRNUT3BQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4TWTP4ZV.js";
import "./chunk-YKNGE33L.js";
import "./chunk-QBN7ANOM.js";
import "./chunk-FZSWXIJC.js";
import "./chunk-GORRU5NH.js";
import "./chunk-VB5TTCGB.js";
import "./chunk-XQM2BAYI.js";
import "./chunk-KJTB5QCX.js";
import "./chunk-KBPXUGTM.js";
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
