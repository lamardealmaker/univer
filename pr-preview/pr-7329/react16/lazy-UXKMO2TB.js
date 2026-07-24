import {
  UniverDocsMentionUIPlugin
} from "./chunk-FL2URLBI.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7WHWJJOM.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ALKE2RHE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4GYZJWNZ.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IIC6ZIYR.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-T6ZWLSPM.js";
import "./chunk-ZEBB6T6M.js";
import "./chunk-TM6UE34F.js";
import "./chunk-OUAO32Y6.js";
import "./chunk-ITNWKUEF.js";
import "./chunk-4SRC5Y7S.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-G64QXZJY.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VJOPFSNF.js";
import "./chunk-HN6XBBWJ.js";
import "./chunk-OOOLFT6Z.js";
import "./chunk-TKWFBVT2.js";
import "./chunk-URJDLYLM.js";
import "./chunk-KWSI3CYQ.js";
import "./chunk-DVPFJYEU.js";
import "./chunk-FBTXTQTX.js";
import "./chunk-T3ZF4P6J.js";
import "./chunk-MIK4BD7H.js";
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
