import {
  UniverDocsMentionUIPlugin
} from "./chunk-2X4CBMYS.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-KHIQTWCK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XHA6ZRA5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MDNIISKB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-Z4DHKN4F.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JEII7SUK.js";
import "./chunk-6S44BJ3H.js";
import "./chunk-PG7YA2D2.js";
import "./chunk-IJTPQ5GC.js";
import "./chunk-BDCYWOZZ.js";
import "./chunk-F2O4YXLR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-22OGS6ZP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7UMULUER.js";
import "./chunk-7UMLLGWV.js";
import "./chunk-P2KMD3TF.js";
import "./chunk-7QHVWLSA.js";
import "./chunk-IQQDFJU7.js";
import "./chunk-XEKXAVJZ.js";
import "./chunk-XUPIB4PS.js";
import "./chunk-NTW4V4SW.js";
import "./chunk-54D2JQ6Q.js";
import "./chunk-LLQCVTT7.js";
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
