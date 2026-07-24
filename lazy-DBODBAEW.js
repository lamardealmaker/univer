import {
  UniverDocsMentionUIPlugin
} from "./chunk-GW7H74HG.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WO2T5LS6.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-KCPEZQNI.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-X2F5MHTL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PEE4DS5R.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-KD7DYNL4.js";
import "./chunk-BCXRDX4R.js";
import "./chunk-2GZZ7AG3.js";
import "./chunk-TVZ5VKXG.js";
import "./chunk-COYW4VYD.js";
import "./chunk-ECVFANWN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-DCMZMYG3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EC5SJWCG.js";
import "./chunk-GQSEG75L.js";
import "./chunk-PH4B7R6S.js";
import "./chunk-W6GY7QZO.js";
import "./chunk-LVZALIE5.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-2PZVU6UA.js";
import "./chunk-DPZUWCWC.js";
import "./chunk-X3HPZGMT.js";
import "./chunk-RLTCIETE.js";
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
