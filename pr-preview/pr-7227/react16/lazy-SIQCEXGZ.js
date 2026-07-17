import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HMBXEKVO.js";
import "./chunk-S344MX4T.js";
import "./chunk-B6YPZOFU.js";
import "./chunk-BM3OTM4R.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MFV6DFJH.js";
import "./chunk-U3BXGKHY.js";
import "./chunk-6NQTIW2J.js";
import "./chunk-23VYIF3M.js";
import "./chunk-GA5VID6A.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
