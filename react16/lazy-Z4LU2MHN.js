import {
  UniverDocsMentionUIPlugin
} from "./chunk-WGDZGMQL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-ZGUJXNTG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-534SY22S.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2STSLUZO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-5DQITIM6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4RXTPG5V.js";
import "./chunk-MEB7CVKE.js";
import "./chunk-5Q54XOV2.js";
import "./chunk-PRWGWPE7.js";
import "./chunk-M45B5M2D.js";
import "./chunk-6YIJWKIY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QDGUZT7A.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ACGOQJZI.js";
import "./chunk-3KTUCOBW.js";
import "./chunk-JIG7REER.js";
import "./chunk-AF66R4M7.js";
import "./chunk-B5PLQ7ZK.js";
import "./chunk-OXIT4FXR.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
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
