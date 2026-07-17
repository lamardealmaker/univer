import {
  UniverDocsMentionUIPlugin
} from "./chunk-WRFI7SN3.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-LUFXBLBL.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WANLP54G.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-PHZX6A3X.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-I3Q43EG4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MHLMHVNP.js";
import "./chunk-4PXNYECL.js";
import "./chunk-6KSFPQMM.js";
import "./chunk-QPMUETJU.js";
import "./chunk-MHIT6BRF.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-OT3UYMPQ.js";
import "./chunk-LAD4GVSG.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VSVEC6ID.js";
import "./chunk-AL5EYF4N.js";
import "./chunk-XUOZUHNT.js";
import "./chunk-TCIXXMIF.js";
import "./chunk-WLENLEPE.js";
import "./chunk-M2Y4C6XV.js";
import "./chunk-TYFBZFLI.js";
import "./chunk-JUQD2ZD4.js";
import "./chunk-ISOJK5GO.js";
import "./chunk-2NJBYRKH.js";
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
