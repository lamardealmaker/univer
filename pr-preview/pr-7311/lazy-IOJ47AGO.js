import {
  UniverDocsMentionUIPlugin
} from "./chunk-UODWRB53.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZTI6M622.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZXOUUKOD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-FTBW54D7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XC6FBFKL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-Q575LJY5.js";
import "./chunk-EWVXPTUI.js";
import "./chunk-CNQBCG2N.js";
import "./chunk-IHRYRAGV.js";
import "./chunk-74PNJ6ER.js";
import "./chunk-JS5QLNPA.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-YYYIVYNZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XGIRKLWT.js";
import "./chunk-UWJKF6PE.js";
import "./chunk-4JVBNTL3.js";
import "./chunk-UT72HRUS.js";
import "./chunk-33WBVZUA.js";
import "./chunk-P2DA4KTU.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
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
