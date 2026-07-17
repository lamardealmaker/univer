import {
  UniverDocsMentionUIPlugin
} from "./chunk-QKZASGH7.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-S7AOBD5O.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JTEJOLFW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AMYQXIXM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PNIRZZAK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-E22DCV2O.js";
import "./chunk-JCUWNQ2Y.js";
import "./chunk-7Y6TA4OB.js";
import "./chunk-5PNUBHZC.js";
import "./chunk-R6KPCXJQ.js";
import "./chunk-MF7LRCAL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MVWKHD6A.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-52FGCKD6.js";
import "./chunk-GVSNZEWZ.js";
import "./chunk-FRDCE3MS.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-AXY444OX.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-I7VZJZMU.js";
import "./chunk-PCUUUZAN.js";
import "./chunk-IQR62XS7.js";
import "./chunk-2CS7RBBN.js";
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
