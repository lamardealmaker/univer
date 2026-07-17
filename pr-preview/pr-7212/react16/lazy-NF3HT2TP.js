import {
  UniverDocsMentionUIPlugin
} from "./chunk-MYALKCWO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HDYUJ3BZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JREKNBDR.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DAVIWVET.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-LAWHNR3A.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SJSEUVBV.js";
import "./chunk-ELCV5JL4.js";
import "./chunk-POWHMBJH.js";
import "./chunk-7BBPEWH7.js";
import "./chunk-XYHIVFID.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HF7CNNUA.js";
import "./chunk-2JEQVHCV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VORRC5WD.js";
import "./chunk-MFGUBHYT.js";
import "./chunk-FG7AAHC7.js";
import "./chunk-KDG6ZP5S.js";
import "./chunk-TMUUSCWM.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-N7L354MO.js";
import "./chunk-VYIAE3OT.js";
import "./chunk-4FXSDHB6.js";
import "./chunk-LT6FETEP.js";
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
