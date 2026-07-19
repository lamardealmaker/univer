import {
  UniverDocsMentionUIPlugin
} from "./chunk-CCWDC4X4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-R2KUHDXI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TOQBWQPC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TXAKYHVF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-H3Z76XJK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XEV26NTQ.js";
import "./chunk-I6XDMAGE.js";
import "./chunk-OQOUFDNR.js";
import "./chunk-LRNFZAEF.js";
import "./chunk-YORKONEI.js";
import "./chunk-7O2J7JZQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LMJ4IFK3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JFFKTPOY.js";
import "./chunk-HP2WEK2B.js";
import "./chunk-QQCHJU4K.js";
import "./chunk-MVOWOER3.js";
import "./chunk-WIWKXDD7.js";
import "./chunk-756NKHGC.js";
import "./chunk-KZJMUOYO.js";
import "./chunk-ZEDWP55C.js";
import "./chunk-6KFG42LC.js";
import "./chunk-MRUZHKXB.js";
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
