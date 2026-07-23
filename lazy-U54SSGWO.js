import {
  UniverDocsMentionUIPlugin
} from "./chunk-5VSJ53WH.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NNQ7G3R3.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-54TMZYMX.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KJQGHPUM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7OZRJMUA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NFTG6TUX.js";
import "./chunk-G4SPYRC3.js";
import "./chunk-3ZLX3JPA.js";
import "./chunk-WB6AT7VP.js";
import "./chunk-B6BZKVW2.js";
import "./chunk-6HIS66VH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-A73TK6BQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FZRUTRIY.js";
import "./chunk-GE5ZFGQN.js";
import "./chunk-NG3XLTNK.js";
import "./chunk-7NQHI6ZF.js";
import "./chunk-BJHPWHFO.js";
import "./chunk-WDOGA3AR.js";
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
