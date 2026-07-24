import {
  UniverDocsMentionUIPlugin
} from "./chunk-TFICVXS4.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3QF4DYDG.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-G22VGN3Z.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AVNJPVAH.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-MO4ZZILL.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-GLC4FRAE.js";
import "./chunk-L4PBFCX6.js";
import "./chunk-A7LHZAUZ.js";
import "./chunk-DUVAEDV5.js";
import "./chunk-AFA7REW7.js";
import "./chunk-XWDCOBVQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-AT46DNCI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MIPUQYNP.js";
import "./chunk-GFPKZI7F.js";
import "./chunk-FY5J4V3Q.js";
import "./chunk-AHHRULAS.js";
import "./chunk-AMXUHILZ.js";
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
