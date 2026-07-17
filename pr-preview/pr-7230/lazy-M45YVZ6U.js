import {
  UniverDocsMentionUIPlugin
} from "./chunk-PM6CKEDM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-F3X23FBL.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-QHE7M3JV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-K4YWX2E3.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KNCTJ2LK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-7UXYXSX3.js";
import "./chunk-WHYPIR2R.js";
import "./chunk-A6J6W6RX.js";
import "./chunk-INYOQ74Z.js";
import "./chunk-Q4NPTQRA.js";
import "./chunk-PNXQMXMC.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-B4EGCEYD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-C5QTTVBO.js";
import "./chunk-N46QPJFB.js";
import "./chunk-RBO2BXRJ.js";
import "./chunk-TCDTP3ZT.js";
import "./chunk-VR6ZIYZ6.js";
import "./chunk-AY63UQCZ.js";
import "./chunk-F4VJL6FP.js";
import "./chunk-NSFKJQN7.js";
import "./chunk-X6CE6G36.js";
import "./chunk-SEOZDTQ5.js";
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
