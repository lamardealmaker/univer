import {
  UniverDocsMentionUIPlugin
} from "./chunk-GS6PBWU5.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-25JVPRKP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2J4FIOIW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4CYPIC4Z.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ERYJAPGK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4YGL7WW4.js";
import "./chunk-6QYH3UXT.js";
import "./chunk-5YD27GFQ.js";
import "./chunk-6YJ6DVO7.js";
import "./chunk-XOLRODHO.js";
import "./chunk-7CYBNH2W.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-XL2Z5LQD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Y255HRBH.js";
import "./chunk-4HXKLS73.js";
import "./chunk-6AVG2GAC.js";
import "./chunk-3APMRQNE.js";
import "./chunk-5WO5ODMW.js";
import "./chunk-CL3B2JWT.js";
import "./chunk-ZCI2FDXL.js";
import "./chunk-KVAY7V76.js";
import "./chunk-Z3BH4FVF.js";
import "./chunk-STB3OOUD.js";
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
