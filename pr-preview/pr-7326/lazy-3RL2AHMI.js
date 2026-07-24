import {
  UniverDocsMentionUIPlugin
} from "./chunk-YWFI52U3.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ASYNUHCX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VJX7AIVO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CJ5YK7KN.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TZJXNVYS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YOLGGFFO.js";
import "./chunk-L4PBFCX6.js";
import "./chunk-A7LHZAUZ.js";
import "./chunk-DUVAEDV5.js";
import "./chunk-AFA7REW7.js";
import "./chunk-XWDCOBVQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-2FC7ABTG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TLBWQULZ.js";
import "./chunk-N4XH5WKY.js";
import "./chunk-FY5J4V3Q.js";
import "./chunk-AHHRULAS.js";
import "./chunk-JWN5VN3B.js";
import "./chunk-7V2XEAWA.js";
import "./chunk-G2ZW2BDM.js";
import "./chunk-47MGLYD5.js";
import "./chunk-PW5H4QGM.js";
import "./chunk-UEDAY4IO.js";
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
