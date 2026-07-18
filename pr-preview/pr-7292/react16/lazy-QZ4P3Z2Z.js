import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6SF35ASU.js";
import "./chunk-VTRCQ7BC.js";
import "./chunk-LZ76DP42.js";
import "./chunk-YNBDU5X4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JSQU4NND.js";
import "./chunk-W5UJVDJW.js";
import "./chunk-TOUFNUKR.js";
import "./chunk-JGKDNRCW.js";
import "./chunk-IJ3IXJZK.js";
import "./chunk-3LBADK2S.js";
import "./chunk-JHNQBJPZ.js";
import "./chunk-ALOYUQOY.js";
import "./chunk-KDL4XP5H.js";
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
