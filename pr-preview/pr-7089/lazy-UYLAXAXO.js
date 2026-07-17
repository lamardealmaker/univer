import {
  UniverDocsMentionUIPlugin
} from "./chunk-ZHBWYZ55.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZMSTBMHT.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SZIVJKVA.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NOIOPTK4.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KX4DAFC2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MS7VMJLM.js";
import "./chunk-D7DHF6GS.js";
import "./chunk-ZTQ7YG5O.js";
import "./chunk-XBJYBWPF.js";
import "./chunk-TTXYMXTZ.js";
import "./chunk-XVYHKR47.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-3LHD5PNH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VKBHAS4H.js";
import "./chunk-4DQL7YD4.js";
import "./chunk-UEXSOKOT.js";
import "./chunk-OT7B7OE4.js";
import "./chunk-OW4T4RYF.js";
import "./chunk-6WYNQIA3.js";
import "./chunk-URSPW5KK.js";
import "./chunk-D56GOLKC.js";
import "./chunk-LPTHD3KJ.js";
import "./chunk-BCDUMSPY.js";
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
