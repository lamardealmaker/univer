import {
  UniverDocsMentionUIPlugin
} from "./chunk-4ID7P7NF.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-AYOQ2LII.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-54ECTEAJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FQNOBKC2.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-HEVSXGR6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-TPDPHTVQ.js";
import "./chunk-QP3UPM3V.js";
import "./chunk-7JX36UGS.js";
import "./chunk-HOT5SNCA.js";
import "./chunk-GPHC2VR3.js";
import "./chunk-PD2ASMGH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-2KAUVM2E.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-V63XZ5XN.js";
import "./chunk-KS6WXDEM.js";
import "./chunk-SHIK4MHB.js";
import "./chunk-NCPGOBBL.js";
import "./chunk-BEQH3R6D.js";
import "./chunk-4CX7GQL6.js";
import "./chunk-XRZRRLSI.js";
import "./chunk-OMRVEMWW.js";
import "./chunk-62P57WM5.js";
import "./chunk-6QPW3C4R.js";
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
