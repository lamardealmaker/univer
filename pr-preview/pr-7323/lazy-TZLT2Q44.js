import {
  UniverDocsMentionUIPlugin
} from "./chunk-DFJRXM5A.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-HGVR3RMP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MJ5BSR67.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-SFGOYCQL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RWBP45G6.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-AE5LW3MQ.js";
import "./chunk-L4PBFCX6.js";
import "./chunk-A7LHZAUZ.js";
import "./chunk-DUVAEDV5.js";
import "./chunk-AFA7REW7.js";
import "./chunk-XWDCOBVQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-GBY6LQAF.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WIWZSY3O.js";
import "./chunk-253HEH7Q.js";
import "./chunk-FY5J4V3Q.js";
import "./chunk-AHHRULAS.js";
import "./chunk-KKSIKDPM.js";
import "./chunk-7V2XEAWA.js";
import "./chunk-G2ZW2BDM.js";
import "./chunk-47MGLYD5.js";
import "./chunk-PW5H4QGM.js";
import "./chunk-UEDAY4IO.js";
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
