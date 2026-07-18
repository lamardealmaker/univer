import {
  UniverDocsMentionUIPlugin
} from "./chunk-KWY3DRHO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-547AHUM6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VZC6KSAA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OIQCUWBI.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-T5UL5TBU.js";
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
} from "./chunk-6DVCHJTL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZIZKR5OK.js";
import "./chunk-XQMJNEPX.js";
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
