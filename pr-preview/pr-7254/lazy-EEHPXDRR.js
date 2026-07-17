import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MGMTU3DB.js";
import "./chunk-2QKGHOX7.js";
import "./chunk-ORYV3R2Q.js";
import "./chunk-QLEO5UVG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YQOZJN5B.js";
import "./chunk-EAJSHDRG.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-AMB7G3AC.js";
import "./chunk-R3FURYVI.js";
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
