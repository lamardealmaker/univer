import {
  UniverDocsMentionUIPlugin
} from "./chunk-JL6E2HV2.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-BVHMDL7S.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NHXUDYXP.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YG4NN45M.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XJ5VMNQG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZNA7KSNR.js";
import "./chunk-UFVTLXFM.js";
import "./chunk-7EXELOVX.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-DYLSCQUF.js";
import "./chunk-EMM7K5JU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-UBKFDUDO.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PD5UZWNY.js";
import "./chunk-NW6FLDF6.js";
import "./chunk-T6KH2DAX.js";
import "./chunk-6MWSYICV.js";
import "./chunk-JSPE2R2S.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
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
