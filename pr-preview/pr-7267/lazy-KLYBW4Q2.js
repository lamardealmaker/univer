import {
  UniverDocsMentionUIPlugin
} from "./chunk-LRKDVICK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-O4LLYY5C.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WHAUQV2V.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-V5XZQ7C4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4MZKWYUF.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MNENHYXO.js";
import "./chunk-MPGS2CUR.js";
import "./chunk-224LOGIS.js";
import "./chunk-6B6ZSLV7.js";
import "./chunk-HYCBNN72.js";
import "./chunk-R5EI76RR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NQ6GFYDH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4F7RKLLQ.js";
import "./chunk-4QZ374LK.js";
import "./chunk-FRDCE3MS.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-P5O3JYY7.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-MXZAKXJ2.js";
import "./chunk-I7AO7NZF.js";
import "./chunk-2CS7RBBN.js";
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
