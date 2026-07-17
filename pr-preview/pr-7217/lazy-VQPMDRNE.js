import {
  UniverDocsMentionUIPlugin
} from "./chunk-QWIAWA6G.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-GHUCGZLR.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-YXFXJ7F2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5QCTIDRC.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-HOBAUPIL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-YOKJ274T.js";
import "./chunk-M344IDQF.js";
import "./chunk-DULHMZA3.js";
import "./chunk-QU7FBAMK.js";
import "./chunk-F5NQUJP4.js";
import "./chunk-HGCM6PHV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BZH5ARX5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WEJOILCA.js";
import "./chunk-JX2CEJDP.js";
import "./chunk-3BYIPW5Y.js";
import "./chunk-JLSCVAQZ.js";
import "./chunk-G7J5JI6Q.js";
import "./chunk-STR5WP3G.js";
import "./chunk-OMOUDXTN.js";
import "./chunk-ZACKK3AL.js";
import "./chunk-HIBANMIM.js";
import "./chunk-TBRD6MYV.js";
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
