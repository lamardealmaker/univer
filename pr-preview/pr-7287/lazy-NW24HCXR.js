import {
  UniverDocsMentionUIPlugin
} from "./chunk-A6DGIMPS.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DC7FNVMC.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-F7LMEEDQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JU4IXYAL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-S5IHUIC6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3ED3GAI2.js";
import "./chunk-3YDKLG7R.js";
import "./chunk-D2FZOZNN.js";
import "./chunk-H6QXK5AJ.js";
import "./chunk-T4LNNQY2.js";
import "./chunk-3BJK6MJ2.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GXWYHDOM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2FP7O2U6.js";
import "./chunk-BIZNHCRU.js";
import "./chunk-P27TA3LS.js";
import "./chunk-7FIJQL3C.js";
import "./chunk-QFEKDUAF.js";
import "./chunk-2LDOLTZK.js";
import "./chunk-APONP5I3.js";
import "./chunk-DYS3SBAV.js";
import "./chunk-TDM22U6Q.js";
import "./chunk-IIRVF2HV.js";
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
