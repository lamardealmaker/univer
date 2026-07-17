import {
  UniverDocsMentionUIPlugin
} from "./chunk-GAAFIMN6.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-K2VLMTYO.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-I6RWVQWY.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CPPV5WHT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MRCKUQUK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-7FCT3ZTF.js";
import "./chunk-AUXTOEKZ.js";
import "./chunk-M7CXJCJJ.js";
import "./chunk-ZXCF2ITU.js";
import "./chunk-2Q7MDK4J.js";
import "./chunk-YMFRJBK7.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-R4LDZ63N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6FWJQAIA.js";
import "./chunk-UAA6KEXQ.js";
import "./chunk-MNKBO34U.js";
import "./chunk-2H4OG5YB.js";
import "./chunk-TTERHTD7.js";
import "./chunk-NDOVT6LF.js";
import "./chunk-APCJKRSX.js";
import "./chunk-V52KZQ22.js";
import "./chunk-VTGKT7HG.js";
import "./chunk-B5BSMKXI.js";
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
