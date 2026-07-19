import {
  UniverDocsMentionUIPlugin
} from "./chunk-H6POWFQZ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-D2UTKP4C.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-IFEPPHV4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5DCN56QG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-DOOW3NLH.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-K54GOBMG.js";
import "./chunk-EZOPNH5V.js";
import "./chunk-NUZYTKHD.js";
import "./chunk-NQT6WNFH.js";
import "./chunk-7ZUFXX7Z.js";
import "./chunk-VXJUZPNP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HILEPQAU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ADAHA7HX.js";
import "./chunk-T5RVU3KX.js";
import "./chunk-GN6BNH6W.js";
import "./chunk-T6XN4F5H.js";
import "./chunk-5X5VM2J5.js";
import "./chunk-EZPYXFOP.js";
import "./chunk-PHXA7DTN.js";
import "./chunk-7T2XFBQ7.js";
import "./chunk-6EUTIKVY.js";
import "./chunk-YZCASKU5.js";
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
