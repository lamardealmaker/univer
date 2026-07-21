import {
  UniverDocsMentionUIPlugin
} from "./chunk-42GRLOSM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GMUAELPL.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JSOBLVGV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FEF7HC4R.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JDITWGLU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3JGN6F7R.js";
import "./chunk-UFVTLXFM.js";
import "./chunk-7EXELOVX.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-DYLSCQUF.js";
import "./chunk-EMM7K5JU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MDJQMXVZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TSOIN4OZ.js";
import "./chunk-JBVAEUFK.js";
import "./chunk-T6KH2DAX.js";
import "./chunk-6MWSYICV.js";
import "./chunk-TK5L6D2R.js";
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
