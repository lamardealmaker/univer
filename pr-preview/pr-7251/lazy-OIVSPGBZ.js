import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HEA7ASOG.js";
import "./chunk-X7EAC4OA.js";
import "./chunk-CSKLQJX2.js";
import "./chunk-RRM46BNB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3GQFV2LS.js";
import "./chunk-76NPPZRE.js";
import "./chunk-7WJRNT6B.js";
import "./chunk-5BR3VP6J.js";
import "./chunk-VCS4X2P7.js";
import "./chunk-BVZP7GFD.js";
import "./chunk-FKTMHZJQ.js";
import "./chunk-DGF75S3T.js";
import "./chunk-APFVPCK4.js";
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
