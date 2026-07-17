import {
  UniverDocsMentionUIPlugin
} from "./chunk-BBERMI2L.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-N3HZ7BCC.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZZQRW4SS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PFECA6WV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-GAC2MQ7G.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-TN5FUPZM.js";
import "./chunk-SWGUQWHA.js";
import "./chunk-ILADHZMU.js";
import "./chunk-Q7QIMPSL.js";
import "./chunk-ELKIVHXI.js";
import "./chunk-TKSXJR5U.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-2KXTOOVM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UXAVM3YE.js";
import "./chunk-E4DEPHF7.js";
import "./chunk-EK36UWLA.js";
import "./chunk-TA533AUM.js";
import "./chunk-RGIQILDK.js";
import "./chunk-UEB57LIN.js";
import "./chunk-HINQTSXY.js";
import "./chunk-JBTX5AZD.js";
import "./chunk-MZIIE37M.js";
import "./chunk-AE3R7DH2.js";
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
