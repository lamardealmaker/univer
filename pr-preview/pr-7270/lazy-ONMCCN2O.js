import {
  UniverDocsMentionUIPlugin
} from "./chunk-64LKE6GW.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DZE6SND6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MQYZFOQR.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GJ6YT7D5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MNK7SNRP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4OO3DABW.js";
import "./chunk-JRLUBUSE.js";
import "./chunk-25CTF7AX.js";
import "./chunk-5RAVYVE7.js";
import "./chunk-LPASTFGN.js";
import "./chunk-KSJIBBF3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-SCZNWHG3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ZN57JV22.js";
import "./chunk-6XHHIWPX.js";
import "./chunk-FTZWCOOO.js";
import "./chunk-UICQ6I7F.js";
import "./chunk-QEEZAS5D.js";
import "./chunk-CXKDTK37.js";
import "./chunk-NSTTH4CN.js";
import "./chunk-RBYPFHCX.js";
import "./chunk-IOSPCB23.js";
import "./chunk-EYIJFNJM.js";
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
