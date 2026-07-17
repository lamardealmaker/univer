import {
  UniverDocsMentionUIPlugin
} from "./chunk-H5NZGBOA.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GVW6WVLM.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MY2V4SCT.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LILUTIW6.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-NKY4ZW2S.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-XPPYCE2G.js";
import "./chunk-NAA3SL6G.js";
import "./chunk-GA2VRODF.js";
import "./chunk-VYOLSOVH.js";
import "./chunk-7JIY2PC6.js";
import "./chunk-QRQF3CMM.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MJ5OYCOS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PT3A6ZRJ.js";
import "./chunk-LODJHY2U.js";
import "./chunk-EK36UWLA.js";
import "./chunk-TA533AUM.js";
import "./chunk-QSGH4I64.js";
import "./chunk-UEB57LIN.js";
import "./chunk-GZDWINUC.js";
import "./chunk-CJ6CRLJA.js";
import "./chunk-UFHBHMJG.js";
import "./chunk-AE3R7DH2.js";
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
