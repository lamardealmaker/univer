import {
  UniverDocsMentionUIPlugin
} from "./chunk-IVSGDT6G.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DXIJSOJD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FD2WPNDT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SGIOAW2O.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MOZJSNVM.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-H5X5ROJJ.js";
import "./chunk-IVDCP3QQ.js";
import "./chunk-VI6BHERV.js";
import "./chunk-JWT242QM.js";
import "./chunk-SEWMBJGT.js";
import "./chunk-AUAM6ZPL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-CT3NRW2Y.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-2FTWYJBI.js";
import "./chunk-WOC376NZ.js";
import "./chunk-TB4GRE4Z.js";
import "./chunk-DYU5ITRL.js";
import "./chunk-T4UO3ZX3.js";
import "./chunk-FLBWAU7F.js";
import "./chunk-KEXS675W.js";
import "./chunk-4KLRZ754.js";
import "./chunk-JLS66HNK.js";
import "./chunk-2TEKAXEL.js";
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
