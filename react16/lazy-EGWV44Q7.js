import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FTDECQOW.js";
import "./chunk-AMQ3UU6L.js";
import "./chunk-CGJROTPT.js";
import "./chunk-V7YI4T7X.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-W7VCB5UH.js";
import "./chunk-WXYUWY2D.js";
import "./chunk-Z3WZ4VF2.js";
import "./chunk-PREI6LBO.js";
import "./chunk-7ML65O4Y.js";
import "./chunk-CY6BQZUF.js";
import "./chunk-2E52FVOU.js";
import "./chunk-RQBF6JVW.js";
import "./chunk-KCBSKUX4.js";
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
