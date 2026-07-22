import {
  UniverDocsMentionUIPlugin
} from "./chunk-3LJGNC7G.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-6T6QAGLQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-VSUP6LFO.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LST2CBWB.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TAO7YLDO.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-IOPGM32D.js";
import "./chunk-4FKDO22W.js";
import "./chunk-JZKYDZC3.js";
import "./chunk-ZUX2FETO.js";
import "./chunk-EAO5EEG4.js";
import "./chunk-2C33NJE7.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WRLVC2BQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VAVZOLQ5.js";
import "./chunk-4W5TOARO.js";
import "./chunk-OSWEEDUS.js";
import "./chunk-WLGHV6AH.js";
import "./chunk-2XISZNLI.js";
import "./chunk-6AM74UQX.js";
import "./chunk-JTCGG6PX.js";
import "./chunk-BCAS46ZI.js";
import "./chunk-CFJENZU7.js";
import "./chunk-QO3C2C2Z.js";
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
