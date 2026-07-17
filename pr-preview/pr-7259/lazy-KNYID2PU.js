import {
  UniverDocsMentionUIPlugin
} from "./chunk-434AVLLK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FR4FALRG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-WQAJ47P5.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6LUC4MLM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XYUU75RY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YSO54OUM.js";
import "./chunk-HVXWG44K.js";
import "./chunk-J5J63VFH.js";
import "./chunk-PV767NNL.js";
import "./chunk-2QKGHOX7.js";
import "./chunk-ORYV3R2Q.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DCXULM53.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YW4LVD5Y.js";
import "./chunk-Z62YTRJ2.js";
import "./chunk-JF7CL3AQ.js";
import "./chunk-CLCIF2ZI.js";
import "./chunk-3MKE4MBD.js";
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
