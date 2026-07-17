import {
  UniverDocsMentionUIPlugin
} from "./chunk-3JZ6JSFJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-A5IW2226.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-L2HO2CQG.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DZDUVWVS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-7M3DEVQO.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JCZPTWXG.js";
import "./chunk-CBES7IWD.js";
import "./chunk-DYRHXZZA.js";
import "./chunk-J5H3AARC.js";
import "./chunk-6SFB24GI.js";
import "./chunk-YCPUPCJF.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4JNGIFBI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6XW5VZ7Z.js";
import "./chunk-HDKTJG76.js";
import "./chunk-D32JIKSU.js";
import "./chunk-3XNHCADX.js";
import "./chunk-WM4GRYXF.js";
import "./chunk-FB3AVI5Q.js";
import "./chunk-L4PYN4TJ.js";
import "./chunk-EY3JSFTH.js";
import "./chunk-SN56XSRC.js";
import "./chunk-LDL4QTZT.js";
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
