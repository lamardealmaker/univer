import {
  UniverDocsMentionUIPlugin
} from "./chunk-CG4UNVBI.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZB3N6S2D.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-R3ONP6SD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CO5ZTZG7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7XUWFJ3D.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4HGKHZ6P.js";
import "./chunk-LDMVNR44.js";
import "./chunk-YMV4YKUD.js";
import "./chunk-HHW53KEB.js";
import "./chunk-OEPMWHHK.js";
import "./chunk-FX6PDT6G.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-HQTDXEAO.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-RJDF4YWH.js";
import "./chunk-E2GJZ76B.js";
import "./chunk-5XNU6EHR.js";
import "./chunk-EHROH7XB.js";
import "./chunk-UWN2KQGM.js";
import "./chunk-DV6SGVPN.js";
import "./chunk-PUCENP4Z.js";
import "./chunk-U3HPYX3U.js";
import "./chunk-FGPXQBRL.js";
import "./chunk-RRAAZ522.js";
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
