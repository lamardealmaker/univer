import {
  UniverDocsMentionUIPlugin
} from "./chunk-TUW3LUJU.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-X5TOOJ42.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-3OXYL322.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2J54UN22.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-S7IAUOXB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ATKR4BVN.js";
import "./chunk-QQH4WLSL.js";
import "./chunk-B3RFGDU3.js";
import "./chunk-6SJSSRNL.js";
import "./chunk-XGUKHRYW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VZPC23BU.js";
import "./chunk-5I2CJEUN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZOOJRDZ5.js";
import "./chunk-TOHHES4V.js";
import "./chunk-HIJCDAAU.js";
import "./chunk-XCPOR4FC.js";
import "./chunk-BZFCRYR3.js";
import "./chunk-5QZWK5BE.js";
import "./chunk-UUXCCQDN.js";
import "./chunk-YGL77P23.js";
import "./chunk-UZB6LHUM.js";
import "./chunk-QJESARYQ.js";
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
