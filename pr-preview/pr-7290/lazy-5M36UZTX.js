import {
  UniverDocsMentionUIPlugin
} from "./chunk-VGPKVDDB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7KIJJWCE.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BEZEM2A3.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IR77YM6T.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KTVJKDI5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-VGEVM5XA.js";
import "./chunk-RQEXMJBU.js";
import "./chunk-UGMYLPHH.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-FX3FWPDX.js";
import "./chunk-UNQNW6ZH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EEQXJFHT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-J2PEVNYA.js";
import "./chunk-LVYBOB7R.js";
import "./chunk-XNZBNOKE.js";
import "./chunk-PZEGEJ3B.js";
import "./chunk-ZX25COXL.js";
import "./chunk-ZDWV6DZP.js";
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
