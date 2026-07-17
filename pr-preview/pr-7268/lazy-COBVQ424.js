import {
  UniverDocsMentionUIPlugin
} from "./chunk-WYVKUGRY.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-NFDUJ3IY.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NYWG55M7.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GNVXFCWK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-ELOPXK3Q.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-DYDML2ES.js";
import "./chunk-JRLUBUSE.js";
import "./chunk-25CTF7AX.js";
import "./chunk-5RAVYVE7.js";
import "./chunk-ILVMKHWX.js";
import "./chunk-KSJIBBF3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EJY34MXJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PDA5QUAT.js";
import "./chunk-FT7X6IJR.js";
import "./chunk-FTZWCOOO.js";
import "./chunk-FDGKLKNF.js";
import "./chunk-XH44RUDB.js";
import "./chunk-65EMFKCV.js";
import "./chunk-NSTTH4CN.js";
import "./chunk-TBQYTQ7Q.js";
import "./chunk-IOSPCB23.js";
import "./chunk-EYIJFNJM.js";
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
