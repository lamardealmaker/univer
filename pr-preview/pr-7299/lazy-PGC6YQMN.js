import {
  UniverDocsMentionUIPlugin
} from "./chunk-7A6SNAA4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-4QIOEDMG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-V3TTP6K3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QMSEKIUP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PIUBTNQU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-O3YLY23X.js";
import "./chunk-MEB7CVKE.js";
import "./chunk-5Q54XOV2.js";
import "./chunk-PRWGWPE7.js";
import "./chunk-DYJSXBVS.js";
import "./chunk-6YIJWKIY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QPC36KIP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TXONSSOW.js";
import "./chunk-GC5TIPZA.js";
import "./chunk-JIG7REER.js";
import "./chunk-HHFW36YX.js";
import "./chunk-GV7BDRSR.js";
import "./chunk-USNZHLNV.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/lazy.ts
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
