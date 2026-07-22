import {
  UniverDocsMentionUIPlugin
} from "./chunk-LPMJOS64.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-242NEQ4P.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FMEMDJIO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-53MSZNYN.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5KRVSNID.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UIILGY57.js";
import "./chunk-SG5NVVSC.js";
import "./chunk-72IJ6NGE.js";
import "./chunk-VUOFGFFP.js";
import "./chunk-XKR5IN3B.js";
import "./chunk-BXZYRREU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NNBYBS6M.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HIOGFRM4.js";
import "./chunk-Z5HOA35Q.js";
import "./chunk-YGGGAOOO.js";
import "./chunk-HEIKB7AI.js";
import "./chunk-36HE7BQM.js";
import "./chunk-VI2WI6CP.js";
import "./chunk-HI3S6XZW.js";
import "./chunk-GC6NIMO6.js";
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
