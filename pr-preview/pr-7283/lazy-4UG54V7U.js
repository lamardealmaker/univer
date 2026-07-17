import {
  UniverDocsMentionUIPlugin
} from "./chunk-NLVRDCNO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-RAHDTBP4.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BIQKJDT6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NO6EAJWP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-V5GBC4JS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FZLQWYZV.js";
import "./chunk-PDG5JRJ5.js";
import "./chunk-ZYNCFXUU.js";
import "./chunk-6JEQMIBG.js";
import "./chunk-FMNBUAQI.js";
import "./chunk-ZPBJHQKQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IRNUT3BQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4TWTP4ZV.js";
import "./chunk-YKNGE33L.js";
import "./chunk-LSFQTCD6.js";
import "./chunk-QBN7ANOM.js";
import "./chunk-FZSWXIJC.js";
import "./chunk-GORRU5NH.js";
import "./chunk-VB5TTCGB.js";
import "./chunk-XQM2BAYI.js";
import "./chunk-KJTB5QCX.js";
import "./chunk-KBPXUGTM.js";
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
