import {
  UniverDocsMentionUIPlugin
} from "./chunk-BTCP4QJA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LLJVVA23.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-UTWX242R.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-S6RX5R5L.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-HAFEJOJ6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YEJKEXHT.js";
import "./chunk-SG5NVVSC.js";
import "./chunk-72IJ6NGE.js";
import "./chunk-VUOFGFFP.js";
import "./chunk-XKR5IN3B.js";
import "./chunk-BXZYRREU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WMJOI7QH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YRKMWVU6.js";
import "./chunk-R5ONU2Q2.js";
import "./chunk-YGGGAOOO.js";
import "./chunk-EEVABD7L.js";
import "./chunk-MEZUJHUE.js";
import "./chunk-VI2WI6CP.js";
import "./chunk-HI3S6XZW.js";
import "./chunk-W2IE7XAE.js";
import "./chunk-FV4IGQDG.js";
import "./chunk-N4BCF5MH.js";
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
