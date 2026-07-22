import {
  UniverDocsMentionUIPlugin
} from "./chunk-YOEUVBIK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-C6JWEZT5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OHK2YLUL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F6WTLZQZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-2JQVS7EW.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WKAKIMUY.js";
import "./chunk-5U3GYV2F.js";
import "./chunk-VQ2VCNXB.js";
import "./chunk-4UQWQTXY.js";
import "./chunk-ZM5DWJZT.js";
import "./chunk-7OWRHZI6.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TGLDH3ZQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7FR4UL6G.js";
import "./chunk-FURGFDHX.js";
import "./chunk-ZKWWW5P3.js";
import "./chunk-WQ6A4BAN.js";
import "./chunk-B7WTVZJN.js";
import "./chunk-4TZYBZA3.js";
import "./chunk-EYXLHBFO.js";
import "./chunk-FSBNILI5.js";
import "./chunk-EBG4Y6CA.js";
import "./chunk-HO2OWOV7.js";
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
