import {
  UniverDocsMentionUIPlugin
} from "./chunk-QBLZ5GZ7.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JD5RSNBI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZFW26AYT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4C7LOLLT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZHITJDMY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-A6ONLSWS.js";
import "./chunk-X3H36JYK.js";
import "./chunk-ELJA4CEZ.js";
import "./chunk-ZTLYHSRM.js";
import "./chunk-VYCG7O4S.js";
import "./chunk-LZ76DP42.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VMARFF56.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CIBQEK3L.js";
import "./chunk-GQ4VPMLK.js";
import "./chunk-XNZBNOKE.js";
import "./chunk-Y5G2OXH6.js";
import "./chunk-HC4V5NKS.js";
import "./chunk-N3KJJFOF.js";
import "./chunk-3LBADK2S.js";
import "./chunk-JHNQBJPZ.js";
import "./chunk-ALOYUQOY.js";
import "./chunk-KDL4XP5H.js";
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
