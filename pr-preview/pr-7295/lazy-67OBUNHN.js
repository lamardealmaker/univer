import {
  UniverDocsMentionUIPlugin
} from "./chunk-WXSXWPFB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-LJ2HNPST.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-AMYGTWT2.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BSCFB2JL.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-YYIUMGZJ.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-UCUQSRMB.js";
import "./chunk-ALK2366H.js";
import "./chunk-U4NMQSDJ.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-73LDN5R3.js";
import "./chunk-GWQLZOWW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-RJBJA3ZB.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3HKGRMLS.js";
import "./chunk-XEDSWTIW.js";
import "./chunk-GBMWEQ3Y.js";
import "./chunk-4FEUQSM7.js";
import "./chunk-JUFLCNL6.js";
import "./chunk-Q24UB5PW.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
