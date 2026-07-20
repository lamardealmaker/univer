import {
  UniverDocsMentionUIPlugin
} from "./chunk-BMMHVBE4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-N54U6N7H.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DF66723P.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZHZGZ4PP.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OHIDBXG3.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-LPWODWHQ.js";
import "./chunk-IJFUVKZH.js";
import "./chunk-XY5JVYR6.js";
import "./chunk-NYVKN5WT.js";
import "./chunk-WAHB3PDU.js";
import "./chunk-YIHF46FU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-NO5LXRE5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-CWGA7BJN.js";
import "./chunk-325W4XHZ.js";
import "./chunk-KSYJIXAG.js";
import "./chunk-37CCQPTR.js";
import "./chunk-PXJRBH6Q.js";
import "./chunk-QR4IXNRE.js";
import "./chunk-EL2MA4WM.js";
import "./chunk-JYVQTEKH.js";
import "./chunk-CSXRQ456.js";
import "./chunk-EIUQN72C.js";
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
