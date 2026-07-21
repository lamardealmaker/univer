import {
  UniverDocsMentionUIPlugin
} from "./chunk-C2HE6TKE.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HVLZ3YIN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-KD2GLRUW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-W3R5PGIT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JXDVA3GL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UZEQAB7P.js";
import "./chunk-IKBDRPKY.js";
import "./chunk-MSBPQTCM.js";
import "./chunk-Q5BVY6ZY.js";
import "./chunk-44Y3UKXQ.js";
import "./chunk-646UD4P3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EYS3QUF6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BDSLBBPJ.js";
import "./chunk-NVVLMKOI.js";
import "./chunk-FIIBSXWG.js";
import "./chunk-3VCKAITY.js";
import "./chunk-TTOHCSDV.js";
import "./chunk-UP2CNROP.js";
import "./chunk-MIQDXCVC.js";
import "./chunk-LX2DEVI5.js";
import "./chunk-ON7MQNKU.js";
import "./chunk-V7YB6CU5.js";
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
