import {
  UniverDocsMentionUIPlugin
} from "./chunk-AQ5DALAJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-B5KFRK6A.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FQ2MZFU2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WFIW7JXO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GDT6IPE5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ADIQAT3H.js";
import "./chunk-UEY4NPMX.js";
import "./chunk-ZWMXUPGO.js";
import "./chunk-QGZQGIZ2.js";
import "./chunk-XB4RNRAJ.js";
import "./chunk-QJ77NYHB.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RLVTVZZU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AVVY4FL4.js";
import "./chunk-VAMRQPL7.js";
import "./chunk-GBMWEQ3Y.js";
import "./chunk-VTI6APCV.js";
import "./chunk-QX73NBUB.js";
import "./chunk-IQMWKPZP.js";
import "./chunk-E5XWEU65.js";
import "./chunk-TI6U6U6U.js";
import "./chunk-E6DJCDTN.js";
import "./chunk-FD3JZH6D.js";
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
