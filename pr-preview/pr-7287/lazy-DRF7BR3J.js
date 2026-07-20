import {
  UniverDocsMentionUIPlugin
} from "./chunk-OXQ5JDYO.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-X6LUM34X.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-5NHEOI43.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4TKRF5TJ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-UTWCMFZ5.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-SCWO42BY.js";
import "./chunk-XDQJB3YL.js";
import "./chunk-SKTYHO2A.js";
import "./chunk-TGKQJ2YD.js";
import "./chunk-JV6Z7DOT.js";
import "./chunk-CIJRPV3L.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4ANS6WEI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-J4UA4L7Q.js";
import "./chunk-BKIR34HR.js";
import "./chunk-JQGW5555.js";
import "./chunk-5GI44LH7.js";
import "./chunk-GLPPCME6.js";
import "./chunk-2CV4JNOO.js";
import "./chunk-BBOHSEUH.js";
import "./chunk-TDSPDX3L.js";
import "./chunk-CDLFIQUZ.js";
import "./chunk-UOL2OHAA.js";
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
