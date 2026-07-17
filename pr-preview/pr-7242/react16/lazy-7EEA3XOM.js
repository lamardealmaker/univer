import {
  UniverDocsMentionUIPlugin
} from "./chunk-67EBVZT5.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-CBMI6CPQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-W444BKP4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IRSB5AWH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-V7NFKSZZ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-RTSB7ITY.js";
import "./chunk-7R5P6265.js";
import "./chunk-ZXZHIOYR.js";
import "./chunk-6FSECGKG.js";
import "./chunk-T33KL2A4.js";
import "./chunk-ISZULVGD.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-Q2E2ECAM.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T6YW3JCV.js";
import "./chunk-TBKZ3TKR.js";
import "./chunk-EK36UWLA.js";
import "./chunk-TA533AUM.js";
import "./chunk-O6P4CNWQ.js";
import "./chunk-UEB57LIN.js";
import "./chunk-SYKVOUJC.js";
import "./chunk-4AAQ67CN.js";
import "./chunk-Z4HUTZZE.js";
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
