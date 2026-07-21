import {
  UniverDocsMentionUIPlugin
} from "./chunk-W43D4IRT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3PUBZ4JZ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-J646KIUT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LW3DNUXO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-G3AR4VZP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OHWU2QOI.js";
import "./chunk-UFVTLXFM.js";
import "./chunk-7EXELOVX.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-DYLSCQUF.js";
import "./chunk-EMM7K5JU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-T2WPJPJ6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FLUE6P6D.js";
import "./chunk-DV3Y5AAS.js";
import "./chunk-T6KH2DAX.js";
import "./chunk-6MWSYICV.js";
import "./chunk-XYIUNZZX.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
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
