import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WANLP54G.js";
import "./chunk-MHIT6BRF.js";
import "./chunk-OT3UYMPQ.js";
import "./chunk-LAD4GVSG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VSVEC6ID.js";
import "./chunk-AL5EYF4N.js";
import "./chunk-TCIXXMIF.js";
import "./chunk-WLENLEPE.js";
import "./chunk-M2Y4C6XV.js";
import "./chunk-TYFBZFLI.js";
import "./chunk-JUQD2ZD4.js";
import "./chunk-ISOJK5GO.js";
import "./chunk-2NJBYRKH.js";
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
