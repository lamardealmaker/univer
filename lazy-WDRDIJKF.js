import {
  UniverDocsMentionUIPlugin
} from "./chunk-DXM24IDI.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-6QE6YMCV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-J7LZZGYB.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-RV6U7HAR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-55YRPGS6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PLOU6QE7.js";
import "./chunk-2Q5O2FNH.js";
import "./chunk-LNCQ2IGD.js";
import "./chunk-HZVVG4ZG.js";
import "./chunk-YRIMLH5N.js";
import "./chunk-YMY6PXSP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-U3KKUEI6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WLSA7ODV.js";
import "./chunk-V72LHEPZ.js";
import "./chunk-TCDGYH2B.js";
import "./chunk-2JTXL7DQ.js";
import "./chunk-2EIRHLET.js";
import "./chunk-AOFVIMMN.js";
import "./chunk-VU33XQTF.js";
import "./chunk-LMPX2OTW.js";
import "./chunk-RKDQK3XP.js";
import "./chunk-7RPG6EBZ.js";
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
