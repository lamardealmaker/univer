import {
  UniverDocsMentionUIPlugin
} from "./chunk-4UTLHPSH.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-FRP4FWW7.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NM476PP2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2OJQ3S3X.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FPDUODSW.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4GHQQBKI.js";
import "./chunk-L2N3KKQ3.js";
import "./chunk-5ZIMRK3H.js";
import "./chunk-H4PZB2JA.js";
import "./chunk-UFYT4BOO.js";
import "./chunk-WLWR54BP.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VJYXYJC4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XC7VZYVD.js";
import "./chunk-BMXSIPEW.js";
import "./chunk-D6ENEVRM.js";
import "./chunk-WWXZNS2Y.js";
import "./chunk-ZFXRHBTR.js";
import "./chunk-O5REJQTM.js";
import "./chunk-IGTAP655.js";
import "./chunk-IM332U3Z.js";
import "./chunk-YR3EBCJL.js";
import "./chunk-LWQF5CC6.js";
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
