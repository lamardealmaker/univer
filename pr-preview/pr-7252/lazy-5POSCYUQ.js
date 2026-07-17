import {
  UniverDocsMentionUIPlugin
} from "./chunk-SNLJ6CCH.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-24AM24JJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-Z3VAGB2B.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-TLDPK6S3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-2A7HU63J.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-75ZJWXYE.js";
import "./chunk-A22B6KID.js";
import "./chunk-6XST37Q6.js";
import "./chunk-MM6QQTMY.js";
import "./chunk-AIF6WIMX.js";
import "./chunk-FGO4QI4I.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-ZQVTSRNL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-SCOCWE3G.js";
import "./chunk-DJ56KLBT.js";
import "./chunk-KT3O4UYY.js";
import "./chunk-WMOUGJI7.js";
import "./chunk-ZRZVVOUC.js";
import "./chunk-LH3GFQJE.js";
import "./chunk-6LLP25PE.js";
import "./chunk-MYV6UH5V.js";
import "./chunk-GP5SU7I4.js";
import "./chunk-LAUCJFSS.js";
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
