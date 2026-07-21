import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZEYWB26X.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-UXQBYW4X.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2VFL5IVD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GELXLOFU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-QZSFVOE3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FUEM5726.js";
import "./chunk-UFVTLXFM.js";
import "./chunk-7EXELOVX.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-DYLSCQUF.js";
import "./chunk-EMM7K5JU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WTD6X2JB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-DXHGZOHR.js";
import "./chunk-3KFXFRN6.js";
import "./chunk-T6KH2DAX.js";
import "./chunk-6MWSYICV.js";
import "./chunk-TCZIGRXH.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/lazy.ts
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
