import {
  UniverDocsMentionUIPlugin
} from "./chunk-XXMUKKWG.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-KPFSBR43.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-JPVRHAWQ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WZ5MW4DD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-S3W6NRV4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5XPYLON7.js";
import "./chunk-ITFX647F.js";
import "./chunk-QW5YEHOK.js";
import "./chunk-OD5JULIN.js";
import "./chunk-YSHBZ567.js";
import "./chunk-632LMC3G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MXTSIRXO.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PFT6QV62.js";
import "./chunk-ROGKLWAB.js";
import "./chunk-5NCOLTUO.js";
import "./chunk-IXEHVME3.js";
import "./chunk-SVPNNYBX.js";
import "./chunk-HOJE6KZL.js";
import "./chunk-WNY25Z7C.js";
import "./chunk-XAJLTAUM.js";
import "./chunk-6OBE5I5L.js";
import "./chunk-RJIFU6SG.js";
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
