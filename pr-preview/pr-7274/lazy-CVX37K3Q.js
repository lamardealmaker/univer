import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TWGRXBUZ.js";
import "./chunk-VJVLRYVG.js";
import "./chunk-7T74GEKY.js";
import "./chunk-M6YB4FOQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TFFEG6BI.js";
import "./chunk-MJISJWUU.js";
import "./chunk-3APMRQNE.js";
import "./chunk-FKIS4BWF.js";
import "./chunk-CL3B2JWT.js";
import "./chunk-UEPGKXGM.js";
import "./chunk-AZVAWBBB.js";
import "./chunk-GAGIXZW5.js";
import "./chunk-STB3OOUD.js";
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
