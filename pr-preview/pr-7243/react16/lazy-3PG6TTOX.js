import {
  UniverDocsMentionUIPlugin
} from "./chunk-UZ4YSOQJ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-MA5GW5ZG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-H6CBMPWO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZRBTVCOF.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-IJT3C7TV.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ADO73A2F.js";
import "./chunk-Y6QTLSTA.js";
import "./chunk-GUEVRFZX.js";
import "./chunk-NFNYEJ4L.js";
import "./chunk-N4VOWRDE.js";
import "./chunk-IEG7ZJ26.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-QUAO56AA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-7WD5UPA7.js";
import "./chunk-GDDFE2LF.js";
import "./chunk-LYBFH6FD.js";
import "./chunk-WYUC5LJW.js";
import "./chunk-L53UJCB2.js";
import "./chunk-OBTSUHS4.js";
import "./chunk-HKK367X4.js";
import "./chunk-4LPILMGO.js";
import "./chunk-M56I3X25.js";
import "./chunk-QEB532PW.js";
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
