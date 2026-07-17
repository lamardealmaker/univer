import {
  UniverDocsMentionUIPlugin
} from "./chunk-CAGXAXQT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NZL5ZDFS.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-RVPSALWM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QAT6DWJY.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-AUX4GYTZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-E7QOGQAM.js";
import "./chunk-HVXWG44K.js";
import "./chunk-J5J63VFH.js";
import "./chunk-PV767NNL.js";
import "./chunk-2QKGHOX7.js";
import "./chunk-ORYV3R2Q.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3TOTVEAB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FAOYOEW2.js";
import "./chunk-22MD2OJX.js";
import "./chunk-JF7CL3AQ.js";
import "./chunk-CLCIF2ZI.js";
import "./chunk-XBVSVYYT.js";
import "./chunk-T44DWQTU.js";
import "./chunk-DSXI3R4L.js";
import "./chunk-AVV6LYFI.js";
import "./chunk-XY6TNQNM.js";
import "./chunk-DJVW44P3.js";
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
