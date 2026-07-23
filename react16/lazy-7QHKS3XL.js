import {
  UniverDocsMentionUIPlugin
} from "./chunk-VXSS6FTE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-I4LWWTAB.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TIZNNVPP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6RS5ZB5Q.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PJQA6XWJ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GF3DMXSE.js";
import "./chunk-SG5NVVSC.js";
import "./chunk-72IJ6NGE.js";
import "./chunk-VUOFGFFP.js";
import "./chunk-XKR5IN3B.js";
import "./chunk-BXZYRREU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TLDW2BE4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BLJKDDIV.js";
import "./chunk-VWB4YFLH.js";
import "./chunk-YGGGAOOO.js";
import "./chunk-LJDSQID3.js";
import "./chunk-IGM2PDFK.js";
import "./chunk-5ZVYOOOJ.js";
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
