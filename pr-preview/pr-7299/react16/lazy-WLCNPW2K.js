import {
  UniverDocsMentionUIPlugin
} from "./chunk-OEGLEFB2.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BAD2INHV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XZ5VIRML.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QLA67DFJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MO7ANF65.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4DS7Q5YJ.js";
import "./chunk-I3HNE6OK.js";
import "./chunk-WL4TCTFA.js";
import "./chunk-67SAKULC.js";
import "./chunk-YUQEJC7N.js";
import "./chunk-BL4KLOAB.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MYLWSSFO.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QF7C6WXX.js";
import "./chunk-WMI7TYEP.js";
import "./chunk-UY626MVT.js";
import "./chunk-I36BEPXV.js";
import "./chunk-5RF6QEJE.js";
import "./chunk-3XYSHYJO.js";
import "./chunk-5FVFOJ5F.js";
import "./chunk-O7SFXNR4.js";
import "./chunk-ZUW5CMIO.js";
import "./chunk-5FNWWQ47.js";
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
