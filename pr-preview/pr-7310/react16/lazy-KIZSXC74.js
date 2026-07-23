import {
  UniverDocsMentionUIPlugin
} from "./chunk-4RU6PFU4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-AJA3AWYR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-23HFZ7IJ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PXZAA6PG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XUGG3FXM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4VLTE3YT.js";
import "./chunk-EWVXPTUI.js";
import "./chunk-CNQBCG2N.js";
import "./chunk-IHRYRAGV.js";
import "./chunk-74PNJ6ER.js";
import "./chunk-JS5QLNPA.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-KSHJKSBK.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JNE34MJT.js";
import "./chunk-PV3BL3QF.js";
import "./chunk-4JVBNTL3.js";
import "./chunk-5M2S7MS4.js";
import "./chunk-Z34WP5PA.js";
import "./chunk-C72VBTJ2.js";
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
