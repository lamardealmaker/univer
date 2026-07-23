import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5GODAQFI.js";
import "./chunk-B6BZKVW2.js";
import "./chunk-6HIS66VH.js";
import "./chunk-NT27HNAM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-L5N6EK44.js";
import "./chunk-ORNCECME.js";
import "./chunk-K3ZG63JY.js";
import "./chunk-NDLZPOUP.js";
import "./chunk-ISCJ2R73.js";
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
