import {
  UniverDocsMentionUIPlugin
} from "./chunk-S2VHPOZB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RKREIEXI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6FEM6RZW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DF4VINGC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5C65OQR4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-Y7D5S35F.js";
import "./chunk-LZDNN7JO.js";
import "./chunk-D7XRXF3M.js";
import "./chunk-GKOPRLVD.js";
import "./chunk-HULMZVJC.js";
import "./chunk-IMH5SVYZ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-FWB76SBQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EPF64CV7.js";
import "./chunk-CRFXJBEX.js";
import "./chunk-G4HGUORG.js";
import "./chunk-274MQYO6.js";
import "./chunk-EOQESUVA.js";
import "./chunk-WZRSDBHA.js";
import "./chunk-EXFLV3OL.js";
import "./chunk-PQNGZWJ6.js";
import "./chunk-4BVUHLOO.js";
import "./chunk-NOU3WR7A.js";
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
