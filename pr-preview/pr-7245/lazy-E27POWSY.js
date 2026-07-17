import {
  UniverDocsMentionUIPlugin
} from "./chunk-EVGV3ZLE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-QNE72PFW.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-FHTCH6D4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KI3FCATR.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ZZ3AIR6M.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3GGQ7PXV.js";
import "./chunk-KVRF5RET.js";
import "./chunk-SGHOWDTQ.js";
import "./chunk-BIVLMGT3.js";
import "./chunk-7LOHM2KY.js";
import "./chunk-AKIITBJ4.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-6RIJSM3K.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OLGYSP7K.js";
import "./chunk-VJDAUND5.js";
import "./chunk-FLHV2W57.js";
import "./chunk-VZ7OGHVL.js";
import "./chunk-AZF3DKFC.js";
import "./chunk-23JPBHQA.js";
import "./chunk-C7PERF6S.js";
import "./chunk-SSB36RZY.js";
import "./chunk-QYILVMFA.js";
import "./chunk-SDQSMZKV.js";
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
