import {
  UniverDocsMentionUIPlugin
} from "./chunk-IAHEODMK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-C5UO7G5I.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PZSKD7PQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-U73SFLS3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WMVPAZJ2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-R35PTHGV.js";
import "./chunk-WZJ5SF3B.js";
import "./chunk-XS4YMJM4.js";
import "./chunk-6AEMDDBA.js";
import "./chunk-ANSEKXH2.js";
import "./chunk-5FFVHMRY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WLT3XFS7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-H46OVIQG.js";
import "./chunk-BJWTFBI2.js";
import "./chunk-5WIOWSVC.js";
import "./chunk-CU2EDUDJ.js";
import "./chunk-JRNM2EKZ.js";
import "./chunk-ULZVYSIP.js";
import "./chunk-6Q2GSEQ3.js";
import "./chunk-5O7RVKHK.js";
import "./chunk-ZQDF6DXU.js";
import "./chunk-IOWTIYQR.js";
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
