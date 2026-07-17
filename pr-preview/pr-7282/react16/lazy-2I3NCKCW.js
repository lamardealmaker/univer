import {
  UniverDocsMentionUIPlugin
} from "./chunk-PUM4HDKS.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OFNOBNYX.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-GKNDWYSI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-XNVTQVGP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7PKEVNXT.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-OH5UJZPQ.js";
import "./chunk-T43LP4KZ.js";
import "./chunk-OXYDC2X7.js";
import "./chunk-Z6UJHVDJ.js";
import "./chunk-OLLQVX2Y.js";
import "./chunk-RQ4XI4WL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-34QRRYS3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-O6PRRW7Z.js";
import "./chunk-FKIHEANL.js";
import "./chunk-VJLTKP44.js";
import "./chunk-MHBV4NGS.js";
import "./chunk-3322V2EV.js";
import "./chunk-AKJJ4FYL.js";
import "./chunk-EXSD3EBI.js";
import "./chunk-SX6XMEUY.js";
import "./chunk-QAGZHJGL.js";
import "./chunk-S3GUYQY5.js";
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
