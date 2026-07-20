import {
  UniverDocsMentionUIPlugin
} from "./chunk-NDRMLWG5.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RGP7YOFT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BZ3QZR6A.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-322RL5VP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-O2QBGDRK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PQVG4ZM2.js";
import "./chunk-ITFX647F.js";
import "./chunk-QW5YEHOK.js";
import "./chunk-OD5JULIN.js";
import "./chunk-YSHBZ567.js";
import "./chunk-632LMC3G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HX72CZ3V.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-53PQQWQ4.js";
import "./chunk-RCZUQOBI.js";
import "./chunk-5NCOLTUO.js";
import "./chunk-IXEHVME3.js";
import "./chunk-HLQJAOWY.js";
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
