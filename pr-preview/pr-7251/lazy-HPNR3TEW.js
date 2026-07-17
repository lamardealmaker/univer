import {
  UniverDocsMentionUIPlugin
} from "./chunk-X3OP6R7G.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-SLZF244R.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-Q4TZUTKT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HEA7ASOG.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-REGM3EIE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-6QAJMHBC.js";
import "./chunk-2IHD3YVS.js";
import "./chunk-CVZQZNT3.js";
import "./chunk-TLWPZ2NA.js";
import "./chunk-X7EAC4OA.js";
import "./chunk-CSKLQJX2.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RRM46BNB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3GQFV2LS.js";
import "./chunk-76NPPZRE.js";
import "./chunk-MQMXZ5UV.js";
import "./chunk-7WJRNT6B.js";
import "./chunk-5BR3VP6J.js";
import "./chunk-VCS4X2P7.js";
import "./chunk-BVZP7GFD.js";
import "./chunk-FKTMHZJQ.js";
import "./chunk-DGF75S3T.js";
import "./chunk-APFVPCK4.js";
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
