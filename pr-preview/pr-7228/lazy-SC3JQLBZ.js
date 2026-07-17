import {
  UniverDocsMentionUIPlugin
} from "./chunk-VN4EU2TQ.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-7HXC3OCD.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-ZNSEPSCZ.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GUQHCFD7.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-JXQD3F2U.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WOBEW3UT.js";
import "./chunk-MXJNUPM6.js";
import "./chunk-YJ6BOUR4.js";
import "./chunk-QNCILETD.js";
import "./chunk-Y6JPLMD7.js";
import "./chunk-ZVF2WUFH.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VUGOXGHN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QHFWHD2E.js";
import "./chunk-GRDSFKNG.js";
import "./chunk-ZQLB4SOO.js";
import "./chunk-6GQHUJPJ.js";
import "./chunk-DVBRAQ4D.js";
import "./chunk-EHRDOIXG.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
