import {
  UniverDocsMentionUIPlugin
} from "./chunk-HWVPXEIE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5ON7TDNA.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TC2RVDGT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-MGMTU3DB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3VFAUICB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-BTLEE7A7.js";
import "./chunk-HVXWG44K.js";
import "./chunk-J5J63VFH.js";
import "./chunk-PV767NNL.js";
import "./chunk-2QKGHOX7.js";
import "./chunk-ORYV3R2Q.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QLEO5UVG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-YQOZJN5B.js";
import "./chunk-EAJSHDRG.js";
import "./chunk-JF7CL3AQ.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-AMB7G3AC.js";
import "./chunk-R3FURYVI.js";
import "./chunk-DSXI3R4L.js";
import "./chunk-AVV6LYFI.js";
import "./chunk-XY6TNQNM.js";
import "./chunk-DJVW44P3.js";
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
