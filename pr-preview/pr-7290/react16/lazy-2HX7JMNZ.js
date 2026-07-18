import {
  UniverDocsMentionUIPlugin
} from "./chunk-TYMVJJVT.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-5TDI6Z24.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SAUT4CXK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JMTABXA6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FOCSXWNL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-AMDCK2K3.js";
import "./chunk-RQEXMJBU.js";
import "./chunk-UGMYLPHH.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-FTIUC2OE.js";
import "./chunk-UNQNW6ZH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LNNXF5VP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MZ7NAWAQ.js";
import "./chunk-GP37ZY3N.js";
import "./chunk-XNZBNOKE.js";
import "./chunk-YPYMQJUV.js";
import "./chunk-7LULJTMH.js";
import "./chunk-TMTWLXFR.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
