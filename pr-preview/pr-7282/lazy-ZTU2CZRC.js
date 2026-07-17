import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XNVTQVGP.js";
import "./chunk-OLLQVX2Y.js";
import "./chunk-RQ4XI4WL.js";
import "./chunk-34QRRYS3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-O6PRRW7Z.js";
import "./chunk-FKIHEANL.js";
import "./chunk-MHBV4NGS.js";
import "./chunk-3322V2EV.js";
import "./chunk-AKJJ4FYL.js";
import "./chunk-EXSD3EBI.js";
import "./chunk-SX6XMEUY.js";
import "./chunk-QAGZHJGL.js";
import "./chunk-S3GUYQY5.js";
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
