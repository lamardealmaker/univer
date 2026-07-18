import {
  UniverDocsMentionUIPlugin
} from "./chunk-KWY3DRHO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NE3EMVWV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-TUSXIZIM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HASAEM65.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-2CJZYI7V.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GMHQV23Q.js";
import "./chunk-RQEXMJBU.js";
import "./chunk-UGMYLPHH.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-FX3FWPDX.js";
import "./chunk-UNQNW6ZH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WN5HJPPH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Z55LZNQ5.js";
import "./chunk-MB5EUFI3.js";
import "./chunk-XNZBNOKE.js";
import "./chunk-YNGIMNN2.js";
import "./chunk-6ANE5F2C.js";
import "./chunk-UEXZFSJ7.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
