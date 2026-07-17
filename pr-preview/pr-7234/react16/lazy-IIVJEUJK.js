import {
  UniverDocsMentionUIPlugin
} from "./chunk-IPJKUMMN.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7YFUWWDT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XQP6BOBA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-I4Z3WOA4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IZSBVNK4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OE4PG3S3.js";
import "./chunk-3H3VTDWE.js";
import "./chunk-Z3EJXHDN.js";
import "./chunk-WBF63BZZ.js";
import "./chunk-MD4PUTB3.js";
import "./chunk-7DZQ6MTX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3F7B55ZW.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T7OQEU2S.js";
import "./chunk-3ZCCSKSD.js";
import "./chunk-KKYZQQWV.js";
import "./chunk-JE4OBOGU.js";
import "./chunk-T67UMXJD.js";
import "./chunk-LJWJTURH.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
