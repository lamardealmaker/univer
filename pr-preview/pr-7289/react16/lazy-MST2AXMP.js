import {
  UniverDocsMentionUIPlugin
} from "./chunk-SWD4XTTC.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-KY6E2N5Q.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HSEYVAQE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BKRO4R65.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-RK3FD4G2.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-EQFVSDJQ.js";
import "./chunk-ALK2366H.js";
import "./chunk-U4NMQSDJ.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-ZCXALDSV.js";
import "./chunk-GWQLZOWW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-YMWVEMOA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-FVR3T2BW.js";
import "./chunk-FRPQKBYL.js";
import "./chunk-GBMWEQ3Y.js";
import "./chunk-XHUWJPWL.js";
import "./chunk-I5GDLIYL.js";
import "./chunk-XZJWC6FO.js";
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
