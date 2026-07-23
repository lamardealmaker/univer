import {
  UniverDocsMentionUIPlugin
} from "./chunk-R4AW2L5O.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YEL3AI2Z.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2FYDDQGY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5GODAQFI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-6OO76ZBJ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KEZJH4EX.js";
import "./chunk-G4SPYRC3.js";
import "./chunk-3ZLX3JPA.js";
import "./chunk-WB6AT7VP.js";
import "./chunk-B6BZKVW2.js";
import "./chunk-6HIS66VH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NT27HNAM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-L5N6EK44.js";
import "./chunk-ORNCECME.js";
import "./chunk-NG3XLTNK.js";
import "./chunk-K3ZG63JY.js";
import "./chunk-NDLZPOUP.js";
import "./chunk-ISCJ2R73.js";
import "./chunk-MTLRNOSN.js";
import "./chunk-QDZX4RLS.js";
import "./chunk-XFNITGGT.js";
import "./chunk-JAWHQSZK.js";
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
