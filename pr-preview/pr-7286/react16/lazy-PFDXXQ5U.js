import {
  UniverDocsMentionUIPlugin
} from "./chunk-Z3MSY4ZA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-DLE3RZJU.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5GE77VNF.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YYQBJVLU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KLV6DOZY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EMJBH6SC.js";
import "./chunk-MCCF6OAL.js";
import "./chunk-HRALYPYA.js";
import "./chunk-6V4PZWJR.js";
import "./chunk-XLWO72EX.js";
import "./chunk-V3GIQBFV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BQPGACRL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P6IC5LHR.js";
import "./chunk-Y3F3JWSH.js";
import "./chunk-AJFEC4AG.js";
import "./chunk-NGBROLQZ.js";
import "./chunk-AMAIQ53J.js";
import "./chunk-KJ3ZQ6XP.js";
import "./chunk-RJZLV6EI.js";
import "./chunk-BYQPA3KP.js";
import "./chunk-OGAOIOI3.js";
import "./chunk-K5ELNLYF.js";
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
