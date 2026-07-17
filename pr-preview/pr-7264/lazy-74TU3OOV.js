import {
  UniverDocsMentionUIPlugin
} from "./chunk-NSCOFQBQ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7MF7T6KH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NHTRM7X5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QQCI5AYE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3ACGPJXL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BAU3OKZR.js";
import "./chunk-JCUWNQ2Y.js";
import "./chunk-7Y6TA4OB.js";
import "./chunk-5PNUBHZC.js";
import "./chunk-R6KPCXJQ.js";
import "./chunk-MF7LRCAL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-PGJL75VV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P2I5HKIR.js";
import "./chunk-APBWMNOX.js";
import "./chunk-FRDCE3MS.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-CTCLZJJS.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-I7VZJZMU.js";
import "./chunk-7HAHH2CT.js";
import "./chunk-IQR62XS7.js";
import "./chunk-2CS7RBBN.js";
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
