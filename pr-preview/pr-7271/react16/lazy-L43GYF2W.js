import {
  UniverDocsMentionUIPlugin
} from "./chunk-NDKSBHNE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2SWP6S22.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FKFDAD4B.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TWGRXBUZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YRO7IMQK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YBLNBX4R.js";
import "./chunk-ADXOCU2R.js";
import "./chunk-G2Y77UZG.js";
import "./chunk-ZIINSQ7M.js";
import "./chunk-VJVLRYVG.js";
import "./chunk-7T74GEKY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-M6YB4FOQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZXSS252V.js";
import "./chunk-MJISJWUU.js";
import "./chunk-6AVG2GAC.js";
import "./chunk-3SEI2WAI.js";
import "./chunk-FKIS4BWF.js";
import "./chunk-CL3B2JWT.js";
import "./chunk-UEPGKXGM.js";
import "./chunk-AZVAWBBB.js";
import "./chunk-GAGIXZW5.js";
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
