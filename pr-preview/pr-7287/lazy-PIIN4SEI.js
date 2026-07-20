import {
  UniverDocsMentionUIPlugin
} from "./chunk-2JSK2VPT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NAVXKMPI.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-XIMCZRXX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OCJNYJF6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5ICEQOD7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-V6M5UXZ2.js";
import "./chunk-ITFX647F.js";
import "./chunk-QW5YEHOK.js";
import "./chunk-OD5JULIN.js";
import "./chunk-YSHBZ567.js";
import "./chunk-632LMC3G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-OAMAUPJX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IBCIDPS3.js";
import "./chunk-7LDHFNZ4.js";
import "./chunk-5NCOLTUO.js";
import "./chunk-IXEHVME3.js";
import "./chunk-W72J2EQD.js";
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
