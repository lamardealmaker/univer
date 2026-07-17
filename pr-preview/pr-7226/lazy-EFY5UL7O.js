import {
  UniverDocsMentionUIPlugin
} from "./chunk-SIJPJEXY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-67TP6MOM.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HBA37YG6.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WZZJKRZV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YVPPJKST.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JDHADAWT.js";
import "./chunk-MXJNUPM6.js";
import "./chunk-YJ6BOUR4.js";
import "./chunk-QNCILETD.js";
import "./chunk-FHZ6KYXS.js";
import "./chunk-ZVF2WUFH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ASBJMGCQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XXLJYHU4.js";
import "./chunk-VWEN55CD.js";
import "./chunk-ZQLB4SOO.js";
import "./chunk-GNDOLAJ7.js";
import "./chunk-DDRE5RJY.js";
import "./chunk-3BM76LJM.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
