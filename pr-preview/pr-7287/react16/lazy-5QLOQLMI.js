import {
  UniverDocsMentionUIPlugin
} from "./chunk-QVQJJTWC.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RZFA7XTI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FWYGTXUX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VD5BZNAV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RNTOVMW6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-Y3TN24SH.js";
import "./chunk-ITFX647F.js";
import "./chunk-QW5YEHOK.js";
import "./chunk-OD5JULIN.js";
import "./chunk-YSHBZ567.js";
import "./chunk-632LMC3G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TGDQGA5B.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4VAHIW5W.js";
import "./chunk-WUWUYCW5.js";
import "./chunk-5NCOLTUO.js";
import "./chunk-IXEHVME3.js";
import "./chunk-S6XGWHVM.js";
import "./chunk-HOJE6KZL.js";
import "./chunk-WNY25Z7C.js";
import "./chunk-XAJLTAUM.js";
import "./chunk-6OBE5I5L.js";
import "./chunk-RJIFU6SG.js";
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
