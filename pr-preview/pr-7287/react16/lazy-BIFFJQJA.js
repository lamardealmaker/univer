import {
  UniverDocsMentionUIPlugin
} from "./chunk-UBHFW7AV.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-O2R56MLK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-EPVICGC4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TIOUR5FE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KC6QDIKW.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UY5NFMM2.js";
import "./chunk-SPWZPPSZ.js";
import "./chunk-K6IULCAH.js";
import "./chunk-2YWOGR4N.js";
import "./chunk-5UNICZEN.js";
import "./chunk-56XVEQPT.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-XKQJW7PG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-UHZPTQ3S.js";
import "./chunk-YVPRA6TP.js";
import "./chunk-6OZPNGHY.js";
import "./chunk-TCS5DXJ7.js";
import "./chunk-UQUTRHPU.js";
import "./chunk-KU2XUV44.js";
import "./chunk-4FGQMKJL.js";
import "./chunk-7UDFNS2Y.js";
import "./chunk-4DYEZKTR.js";
import "./chunk-JSXMCQAF.js";
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
