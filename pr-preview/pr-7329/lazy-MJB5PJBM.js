import {
  UniverDocsMentionUIPlugin
} from "./chunk-VQ3MCTYR.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-G2PAHC33.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-K22CVIUK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VHS5D4YT.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-4PDZMVYI.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JPH4BZQN.js";
import "./chunk-4FL5PJMC.js";
import "./chunk-CNJTNF7M.js";
import "./chunk-ZZI2UBQV.js";
import "./chunk-GVMO7OMJ.js";
import "./chunk-XFT2KTUQ.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7WQRXCNR.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-HCYLXCQ7.js";
import "./chunk-QW62UBVN.js";
import "./chunk-CGDUFVL4.js";
import "./chunk-L5BHKJ4J.js";
import "./chunk-6X57MLET.js";
import "./chunk-XYTTYL24.js";
import "./chunk-L7QJLVG7.js";
import "./chunk-SWWNNEEA.js";
import "./chunk-KKQWNXAE.js";
import "./chunk-JD3KJOQJ.js";
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
