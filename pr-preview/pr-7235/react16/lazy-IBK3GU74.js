import {
  UniverDocsMentionUIPlugin
} from "./chunk-IPJKUMMN.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VHTR4QHH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2KENC34N.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KRBN5KST.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PSJX5MFF.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OE4PG3S3.js";
import "./chunk-3H3VTDWE.js";
import "./chunk-Z3EJXHDN.js";
import "./chunk-WBF63BZZ.js";
import "./chunk-MD4PUTB3.js";
import "./chunk-7DZQ6MTX.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZENWD3RL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WM2NHLMK.js";
import "./chunk-2Q7LXA3Q.js";
import "./chunk-KKYZQQWV.js";
import "./chunk-JE4OBOGU.js";
import "./chunk-T67UMXJD.js";
import "./chunk-LJWJTURH.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
