import {
  UniverDocsMentionUIPlugin
} from "./chunk-MX3UR53E.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-UHUICAXY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-S5KD7ZUX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UI53VB6H.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GWX4KRLL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KJGKMPOQ.js";
import "./chunk-DJQEO46E.js";
import "./chunk-KJWQ7YIX.js";
import "./chunk-SKBCKMMR.js";
import "./chunk-55GRUYXI.js";
import "./chunk-PJ4JN5BR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-XBVP63BL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BM666JEA.js";
import "./chunk-EURSUFWT.js";
import "./chunk-JF7CL3AQ.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-LZ4NLJXK.js";
import "./chunk-R3FURYVI.js";
import "./chunk-DVJ3ZZW2.js";
import "./chunk-EMNNNI6N.js";
import "./chunk-623UIBHA.js";
import "./chunk-DJVW44P3.js";
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
