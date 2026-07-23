import {
  UniverDocsMentionUIPlugin
} from "./chunk-RIH4TWTL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YTXM36FP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-6A3SL3WY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F3QMONU5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IYCTEJLX.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6CEK6IIM.js";
import "./chunk-EWVXPTUI.js";
import "./chunk-CNQBCG2N.js";
import "./chunk-IHRYRAGV.js";
import "./chunk-74PNJ6ER.js";
import "./chunk-JS5QLNPA.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-JBL2WFD7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-D7UM4Y4X.js";
import "./chunk-4QC57VYZ.js";
import "./chunk-4JVBNTL3.js";
import "./chunk-IPMBU7QA.js";
import "./chunk-XEUCBHET.js";
import "./chunk-625XF3RN.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
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
