import {
  UniverDocsMentionUIPlugin
} from "./chunk-EILDCUTX.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-C2YNMFJH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-W3B46X4G.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XORXCH5U.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VXEVKRCX.js";
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
} from "./chunk-PEAFN7ZQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SRL2N57D.js";
import "./chunk-QZVDG6QU.js";
import "./chunk-AKLDEHKU.js";
import "./chunk-2RXBLMEL.js";
import "./chunk-DJK32BKN.js";
import "./chunk-5WPUL4JN.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
