import {
  UniverDocsMentionUIPlugin
} from "./chunk-YEBSQZYM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-K5OUIQE6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-3JLP5Y4H.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-M3K5IO7L.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3XHEEINM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HMO7FSNI.js";
import "./chunk-MPGS2CUR.js";
import "./chunk-224LOGIS.js";
import "./chunk-6B6ZSLV7.js";
import "./chunk-HYCBNN72.js";
import "./chunk-R5EI76RR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-I5V7OOD4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-W3HUSZAZ.js";
import "./chunk-I34ZMAPC.js";
import "./chunk-FRDCE3MS.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-SI2HPRNT.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-2PLZSTXB.js";
import "./chunk-I7AO7NZF.js";
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
