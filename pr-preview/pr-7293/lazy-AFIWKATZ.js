import {
  UniverDocsMentionUIPlugin
} from "./chunk-LDQJIKRL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GDIRL7YW.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PRA3ZPHY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5D3YV6XB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-B6AAAUV7.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SGIFPW7F.js";
import "./chunk-RQEXMJBU.js";
import "./chunk-UGMYLPHH.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-FTIUC2OE.js";
import "./chunk-UNQNW6ZH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3ZZGYV5P.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-TDEZR4AB.js";
import "./chunk-H6XIA66P.js";
import "./chunk-XNZBNOKE.js";
import "./chunk-L6HGHUOF.js";
import "./chunk-IKDOVPVV.js";
import "./chunk-IJ3IXJZK.js";
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
