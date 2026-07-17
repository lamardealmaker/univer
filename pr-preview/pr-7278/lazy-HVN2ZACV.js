import {
  UniverDocsMentionUIPlugin
} from "./chunk-UOSOMJDR.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-G4OPLBVK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-KMYE4RMM.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2FIVEGDT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-X3VBXNFL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-G3DC234V.js";
import "./chunk-6CCWAEZS.js";
import "./chunk-2LRQQ4PD.js";
import "./chunk-QYD3IDR3.js";
import "./chunk-RTOBCPIC.js";
import "./chunk-NTBQ37CM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-IOIJEPSD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AJCGR6FF.js";
import "./chunk-7IAGYJ7F.js";
import "./chunk-ILTZ2DRX.js";
import "./chunk-VTS6GCC7.js";
import "./chunk-WECBJNMR.js";
import "./chunk-4S6YNTII.js";
import "./chunk-N4MCUC7X.js";
import "./chunk-7SCTSQ5Z.js";
import "./chunk-ZB2EG2DN.js";
import "./chunk-V2SQB4ZF.js";
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
