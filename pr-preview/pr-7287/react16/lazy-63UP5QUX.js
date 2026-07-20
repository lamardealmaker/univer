import {
  UniverDocsMentionUIPlugin
} from "./chunk-EPK642B7.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-6B2RC6AK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5OD6MIXO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LAY4IL4N.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-NIRL23YI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-PCD7NDLK.js";
import "./chunk-IJFUVKZH.js";
import "./chunk-XY5JVYR6.js";
import "./chunk-NYVKN5WT.js";
import "./chunk-WAHB3PDU.js";
import "./chunk-YIHF46FU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GBHXLN3S.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-A4MVUHOM.js";
import "./chunk-RX3KVBNS.js";
import "./chunk-KSYJIXAG.js";
import "./chunk-G5LZZDCW.js";
import "./chunk-OOPSYHJ4.js";
import "./chunk-QR4IXNRE.js";
import "./chunk-EL2MA4WM.js";
import "./chunk-JYVQTEKH.js";
import "./chunk-CSXRQ456.js";
import "./chunk-EIUQN72C.js";
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
