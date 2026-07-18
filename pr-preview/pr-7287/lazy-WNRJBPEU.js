import {
  UniverDocsMentionUIPlugin
} from "./chunk-HMI625N2.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-VKJGAGIQ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-UQKEYZLW.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NLUQHRBK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-K6FQKTCB.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CO73IU64.js";
import "./chunk-NAWMPUL4.js";
import "./chunk-L2XCYILI.js";
import "./chunk-ILX2LUHI.js";
import "./chunk-UHHO2D5T.js";
import "./chunk-FMTT7XZ5.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-N65GP37L.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-377V3BBM.js";
import "./chunk-GJLVDVVC.js";
import "./chunk-XYI6LSLS.js";
import "./chunk-UVHCGEQY.js";
import "./chunk-OLNDOXYK.js";
import "./chunk-UI3JDZLA.js";
import "./chunk-IUA5HQYE.js";
import "./chunk-POGZILZG.js";
import "./chunk-Z4GVOVAB.js";
import "./chunk-3PCLVKGS.js";
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
