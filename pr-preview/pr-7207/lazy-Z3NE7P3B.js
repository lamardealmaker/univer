import {
  UniverDocsMentionUIPlugin
} from "./chunk-XTHL6NZE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7EM5M4OY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LWXQCXVA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-POHTJH4O.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5GUCLTQI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VQCBO4GG.js";
import "./chunk-M2TNCR6W.js";
import "./chunk-YU6Q2PNN.js";
import "./chunk-EBAV7YSL.js";
import "./chunk-HKZSNYSG.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-N3H7YJXI.js";
import "./chunk-BPDZYJGF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SRC5WBJI.js";
import "./chunk-RZJRHFVN.js";
import "./chunk-MPJFC7X2.js";
import "./chunk-USURWJAH.js";
import "./chunk-UKNH5LUD.js";
import "./chunk-7OQM37ST.js";
import "./chunk-SCJRDX4C.js";
import "./chunk-FMWTNRSJ.js";
import "./chunk-UNYIH6OF.js";
import "./chunk-AYWINPRX.js";
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
