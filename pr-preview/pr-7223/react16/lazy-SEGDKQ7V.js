import {
  UniverDocsMentionUIPlugin
} from "./chunk-U4444TH4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TLCQMHM7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZX27ACML.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ESDJOENZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BWRJGAR4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4BMZXSYU.js";
import "./chunk-FHQOY7MO.js";
import "./chunk-K6DGCA62.js";
import "./chunk-IML2UZU3.js";
import "./chunk-ECSJDPYB.js";
import "./chunk-Z6UPV4VM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EHRAJES3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SP4ESVGI.js";
import "./chunk-VR5LMJTG.js";
import "./chunk-3SHPL3YQ.js";
import "./chunk-35YA4EBZ.js";
import "./chunk-OLWLRXHV.js";
import "./chunk-RR54J243.js";
import "./chunk-DQIYATOD.js";
import "./chunk-ZAFX2KIK.js";
import "./chunk-OP5GA72W.js";
import "./chunk-CQ7Q36VO.js";
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
