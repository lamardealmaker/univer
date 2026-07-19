import {
  UniverDocsMentionUIPlugin
} from "./chunk-D5DXLIZX.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ANISBYP3.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-SQNB5BXN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-73WTACXN.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-44MRLDFT.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-7TQX2BCF.js";
import "./chunk-JXLSNPRY.js";
import "./chunk-MWIL75HP.js";
import "./chunk-LWZEJZFI.js";
import "./chunk-U5INUUUC.js";
import "./chunk-GOOLQTQL.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-UANBNWAU.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PNJIYUZM.js";
import "./chunk-BDS5PPVC.js";
import "./chunk-SN3VLZBH.js";
import "./chunk-DLVYVF5V.js";
import "./chunk-OSIUONFY.js";
import "./chunk-BD4AZUYQ.js";
import "./chunk-C772RFFN.js";
import "./chunk-7U53J3FY.js";
import "./chunk-7UTO6AD7.js";
import "./chunk-JDLKIM3V.js";
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
