import {
  UniverDocsMentionUIPlugin
} from "./chunk-FDDZDHI7.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FSKPZZGN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-H6AO7XWI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QBNKIGH3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FLUXXK2P.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-HAOYYA4I.js";
import "./chunk-TYFZZ63T.js";
import "./chunk-ID2G45H5.js";
import "./chunk-JC4REQEP.js";
import "./chunk-FFWFY2UD.js";
import "./chunk-5D5W5W4O.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RM3DWPNN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WNH2ZYUY.js";
import "./chunk-VMIBYCYR.js";
import "./chunk-Q76RBTRB.js";
import "./chunk-44FRZNN5.js";
import "./chunk-BMGP4575.js";
import "./chunk-H6XSKLCW.js";
import "./chunk-LKK342C3.js";
import "./chunk-BVJL2XEK.js";
import "./chunk-B6QBU7G3.js";
import "./chunk-I7JVIHX5.js";
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
