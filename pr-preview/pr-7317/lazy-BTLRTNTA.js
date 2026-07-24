import {
  UniverDocsMentionUIPlugin
} from "./chunk-SNRD2POT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HPXXIG5H.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7DFCGOBE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HA5PNPHG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZEDNCQIS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ERP34QE6.js";
import "./chunk-GOTAAGVZ.js";
import "./chunk-5ZY2KXGP.js";
import "./chunk-GTQCXVS5.js";
import "./chunk-KOMAIIN2.js";
import "./chunk-J4EG6VZP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-6YJM6F47.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TWZILU24.js";
import "./chunk-EKVF45AQ.js";
import "./chunk-PH4B7R6S.js";
import "./chunk-QEEPPHQO.js";
import "./chunk-MOE32XHT.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-D5NPODZW.js";
import "./chunk-PP2PHL2R.js";
import "./chunk-W4NVE3XT.js";
import "./chunk-RLTCIETE.js";
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
