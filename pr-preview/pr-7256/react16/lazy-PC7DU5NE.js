import {
  UniverDocsMentionUIPlugin
} from "./chunk-MDIUNSEZ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PX7A6ODL.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ORTQE64G.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HFR64GC4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZW5DECE3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ROJQ2WH7.js";
import "./chunk-HVXWG44K.js";
import "./chunk-J5J63VFH.js";
import "./chunk-PV767NNL.js";
import "./chunk-2QKGHOX7.js";
import "./chunk-ORYV3R2Q.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZLHKM4LB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Z4V4SH7Q.js";
import "./chunk-EVFLLNMM.js";
import "./chunk-JF7CL3AQ.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-OZI25QXK.js";
import "./chunk-R3FURYVI.js";
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
