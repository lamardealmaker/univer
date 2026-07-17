import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-V272AGBT.js";
import "./chunk-2QKGHOX7.js";
import "./chunk-ORYV3R2Q.js";
import "./chunk-NJTRPA3N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XPEV33P2.js";
import "./chunk-WH4F52QW.js";
import "./chunk-6Z5DQ2EY.js";
import "./chunk-KFOSQTFK.js";
import "./chunk-ARBK2HJI.js";
import "./chunk-DSXI3R4L.js";
import "./chunk-AVV6LYFI.js";
import "./chunk-XY6TNQNM.js";
import "./chunk-DJVW44P3.js";
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
