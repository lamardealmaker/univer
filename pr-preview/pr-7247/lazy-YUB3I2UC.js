import {
  UniverDocsMentionUIPlugin
} from "./chunk-S2OLVBQK.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NS26NNBK.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-7TNQCIF7.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-QP2KAAFV.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-XCVCJ5AI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-L6OYKSQP.js";
import "./chunk-Y6QTLSTA.js";
import "./chunk-GUEVRFZX.js";
import "./chunk-NFNYEJ4L.js";
import "./chunk-N4VOWRDE.js";
import "./chunk-IEG7ZJ26.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-C3GRK3JN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-3J4AFXWB.js";
import "./chunk-OPJZR7GP.js";
import "./chunk-LYBFH6FD.js";
import "./chunk-MUR5TKJK.js";
import "./chunk-2I3MX5JU.js";
import "./chunk-K4JVPNG6.js";
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
