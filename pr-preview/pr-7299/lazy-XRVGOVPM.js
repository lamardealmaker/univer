import {
  UniverDocsMentionUIPlugin
} from "./chunk-TQZSPXY4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-K2D4TYUS.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-AKHW6ZOD.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KSCMWR5H.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-3MAQ3IOH.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-3GKLVJ2E.js";
import "./chunk-MEB7CVKE.js";
import "./chunk-5Q54XOV2.js";
import "./chunk-PRWGWPE7.js";
import "./chunk-77DKWK35.js";
import "./chunk-6YIJWKIY.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-A4CGI55K.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q3OLG6W5.js";
import "./chunk-RLLRRRGG.js";
import "./chunk-JIG7REER.js";
import "./chunk-RR7Q7XGK.js";
import "./chunk-GPIGWJPB.js";
import "./chunk-VEOKQKQZ.js";
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
