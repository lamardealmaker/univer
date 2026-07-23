import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KJQGHPUM.js";
import "./chunk-B6BZKVW2.js";
import "./chunk-6HIS66VH.js";
import "./chunk-A73TK6BQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FZRUTRIY.js";
import "./chunk-GE5ZFGQN.js";
import "./chunk-7NQHI6ZF.js";
import "./chunk-BJHPWHFO.js";
import "./chunk-WDOGA3AR.js";
import "./chunk-MTLRNOSN.js";
import "./chunk-QDZX4RLS.js";
import "./chunk-XFNITGGT.js";
import "./chunk-JAWHQSZK.js";
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
