import {
  UniverDocsMentionUIPlugin
} from "./chunk-LHJJH5UA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZDSOB3SD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TUNUJY22.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FTDECQOW.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FE6P5FHG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-7FOEJNL2.js";
import "./chunk-Q2SQO7GH.js";
import "./chunk-FPW3TDOT.js";
import "./chunk-KJB4CDPG.js";
import "./chunk-AMQ3UU6L.js";
import "./chunk-CGJROTPT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-V7YI4T7X.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-W7VCB5UH.js";
import "./chunk-WXYUWY2D.js";
import "./chunk-HQMHRLDX.js";
import "./chunk-Z3WZ4VF2.js";
import "./chunk-PREI6LBO.js";
import "./chunk-7ML65O4Y.js";
import "./chunk-CY6BQZUF.js";
import "./chunk-2E52FVOU.js";
import "./chunk-RQBF6JVW.js";
import "./chunk-KCBSKUX4.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
