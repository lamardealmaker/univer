import {
  UniverDocsMentionUIPlugin
} from "./chunk-KS56LCHM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-UOVEX7KS.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-APTPNAOT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BI4QOFZ5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LOZSLAJU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-K227GZ7V.js";
import "./chunk-MPGS2CUR.js";
import "./chunk-224LOGIS.js";
import "./chunk-6B6ZSLV7.js";
import "./chunk-HYCBNN72.js";
import "./chunk-R5EI76RR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QMQR5CDV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A33UBOND.js";
import "./chunk-ACGNN5DC.js";
import "./chunk-FRDCE3MS.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-FLZJBOXA.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-H2PZ3C73.js";
import "./chunk-I7AO7NZF.js";
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
