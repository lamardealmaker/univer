import {
  UniverDocsMentionUIPlugin
} from "./chunk-QD3Q5GLT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-4OPIIJGP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OFQIQJID.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-UNCE35P6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MAFSMKBJ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6DTZAPV3.js";
import "./chunk-WPH7MSAJ.js";
import "./chunk-IKYRH57R.js";
import "./chunk-5RDHIJMY.js";
import "./chunk-L7FJZGIP.js";
import "./chunk-NTBTAPWX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3WULWVK6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-66FBM4JQ.js";
import "./chunk-JCZ7TANX.js";
import "./chunk-AKLDEHKU.js";
import "./chunk-EX3OTKVK.js";
import "./chunk-7U37L6BW.js";
import "./chunk-SBOM7SOI.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
