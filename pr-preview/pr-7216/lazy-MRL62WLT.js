import {
  UniverDocsMentionUIPlugin
} from "./chunk-XZLNIH6M.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-M53KS4HM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-J5XOKWIA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-OU6HTVHM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RPRTAKME.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-AGHS3Y5S.js";
import "./chunk-ELCV5JL4.js";
import "./chunk-POWHMBJH.js";
import "./chunk-7BBPEWH7.js";
import "./chunk-XYHIVFID.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QTBTVSHV.js";
import "./chunk-2JEQVHCV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-E7UIGV4Q.js";
import "./chunk-QYYOQ5CI.js";
import "./chunk-FG7AAHC7.js";
import "./chunk-OARRDGON.js";
import "./chunk-WV2BWNAK.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-N7L354MO.js";
import "./chunk-VYIAE3OT.js";
import "./chunk-4FXSDHB6.js";
import "./chunk-LT6FETEP.js";
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
