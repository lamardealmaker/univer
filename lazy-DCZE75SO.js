import {
  UniverDocsMentionUIPlugin
} from "./chunk-TDFERSAN.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FDEX6QJJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FFNR2GHK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VZEC5ZXK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-6X24I5AY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-A7YAPW44.js";
import "./chunk-MCCF6OAL.js";
import "./chunk-HRALYPYA.js";
import "./chunk-6V4PZWJR.js";
import "./chunk-XLWO72EX.js";
import "./chunk-V3GIQBFV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4K2AEDE2.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7LYNUWZC.js";
import "./chunk-R6L53KVG.js";
import "./chunk-AJFEC4AG.js";
import "./chunk-ZW6ILKPP.js";
import "./chunk-FHUBYM4F.js";
import "./chunk-JR6K7VYA.js";
import "./chunk-RJZLV6EI.js";
import "./chunk-BYQPA3KP.js";
import "./chunk-OGAOIOI3.js";
import "./chunk-K5ELNLYF.js";
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
