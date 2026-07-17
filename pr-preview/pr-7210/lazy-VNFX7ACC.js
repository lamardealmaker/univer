import {
  UniverDocsMentionUIPlugin
} from "./chunk-RLSJIONW.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZWXPB677.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-J6ZPWSE5.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TTKGIDUA.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-OZHTNJPS.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-M4HDUXZE.js";
import "./chunk-SOUYETY7.js";
import "./chunk-Z7VCNMEN.js";
import "./chunk-JCAPPKCA.js";
import "./chunk-YUWTKLZR.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DFMBMIS6.js";
import "./chunk-CDKEXSXQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KYKA2PTJ.js";
import "./chunk-553M5LYJ.js";
import "./chunk-ZJFLUO7O.js";
import "./chunk-GISFGR5G.js";
import "./chunk-FDYQCRUB.js";
import "./chunk-4GOOIQ6L.js";
import "./chunk-QCUG2TSB.js";
import "./chunk-KY3OPPOE.js";
import "./chunk-6VU3U6PO.js";
import "./chunk-BZ7UQADZ.js";
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
