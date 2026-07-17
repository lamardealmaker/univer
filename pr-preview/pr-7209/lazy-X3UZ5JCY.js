import {
  UniverDocsMentionUIPlugin
} from "./chunk-UH4XJRAT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-IEQZJKOA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OECSQAVJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-M3TCLJF7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-L45QNFQ4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ONG3ZCVX.js";
import "./chunk-MQHEIXSS.js";
import "./chunk-4E23E6KR.js";
import "./chunk-IOI6MC44.js";
import "./chunk-KR7HM66P.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-V2QKBXES.js";
import "./chunk-GLCMBMOE.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-26UHMP6F.js";
import "./chunk-YWBWRFZC.js";
import "./chunk-JTPAYPT3.js";
import "./chunk-LR5HIO4Y.js";
import "./chunk-XKO3JW3B.js";
import "./chunk-63DFZAS2.js";
import "./chunk-PDNVFZC7.js";
import "./chunk-POXKYJUQ.js";
import "./chunk-XF4LYEKE.js";
import "./chunk-OVV7GT3M.js";
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
