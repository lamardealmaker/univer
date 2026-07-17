import {
  UniverDocsMentionUIPlugin
} from "./chunk-EILDCUTX.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-S5ZCKZ77.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SZXIIJR2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AJU57UZ3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PVRY2NXE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-IZVXBBG6.js";
import "./chunk-WPH7MSAJ.js";
import "./chunk-IKYRH57R.js";
import "./chunk-5RDHIJMY.js";
import "./chunk-L7FJZGIP.js";
import "./chunk-NTBTAPWX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-OP6SLV3A.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AOD4WHEL.js";
import "./chunk-V52OQNKK.js";
import "./chunk-AKLDEHKU.js";
import "./chunk-ND7BG4VI.js";
import "./chunk-DJK32BKN.js";
import "./chunk-5WPUL4JN.js";
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
