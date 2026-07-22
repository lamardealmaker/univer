import {
  UniverDocsMentionUIPlugin
} from "./chunk-DAMEDH64.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IFA2N6X6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DSXQFZNM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TIN6D3JU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-CYVDSYXT.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-IQBBNL5T.js";
import "./chunk-XCE6EMHQ.js";
import "./chunk-SU7XEKFZ.js";
import "./chunk-FMUHC6KL.js";
import "./chunk-LV22FCWO.js";
import "./chunk-4QKT7R5V.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QPLOI7KP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V6HXYYIT.js";
import "./chunk-W63J6SIM.js";
import "./chunk-ZKWWW5P3.js";
import "./chunk-TM7KTVMI.js";
import "./chunk-7WKE7NN5.js";
import "./chunk-4TZYBZA3.js";
import "./chunk-MSS67GGG.js";
import "./chunk-FTAZ6D2Q.js";
import "./chunk-HTWP7ETG.js";
import "./chunk-HO2OWOV7.js";
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
