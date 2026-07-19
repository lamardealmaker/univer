import {
  UniverDocsMentionUIPlugin
} from "./chunk-TF5UQ6GZ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-XGBKOIOJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PZFUIK6E.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IKWL3PKU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4TJTTCPC.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FUT2GBI2.js";
import "./chunk-PQ6KS5NA.js";
import "./chunk-XBLWINS6.js";
import "./chunk-EQYEF7TE.js";
import "./chunk-POJYLXY6.js";
import "./chunk-E6MB3CVO.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-TNYKZBXZ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-4F2ARLJP.js";
import "./chunk-MZHLRYLD.js";
import "./chunk-HG2ILZYY.js";
import "./chunk-CK2AJVH4.js";
import "./chunk-CAPRATJL.js";
import "./chunk-SSLJNNLM.js";
import "./chunk-KORVF2GC.js";
import "./chunk-TGILKA5V.js";
import "./chunk-6H5IIH26.js";
import "./chunk-EWDDTFQR.js";
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
