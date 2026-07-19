import {
  UniverDocsMentionUIPlugin
} from "./chunk-LBWVA7DU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GDYF2HQ7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-CJNACSUO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-IO4IYXGS.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-35ZUSD6B.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-FCIQWITR.js";
import "./chunk-THQP4RUQ.js";
import "./chunk-IHVLTPVO.js";
import "./chunk-A6IHUNW3.js";
import "./chunk-J2CDTN5X.js";
import "./chunk-5NZKCEGQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-K233QV2H.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-BDGBQQMX.js";
import "./chunk-THFR4UFV.js";
import "./chunk-GBSDMMMU.js";
import "./chunk-4CFHPDEB.js";
import "./chunk-QKGVWKWV.js";
import "./chunk-CPC53RJS.js";
import "./chunk-LTKAZ3YE.js";
import "./chunk-YJIO2C26.js";
import "./chunk-GHYF6TLP.js";
import "./chunk-GF474R7N.js";
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
