import {
  UniverDocsMentionUIPlugin
} from "./chunk-AYEM65PB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2362RY5I.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HL6DJKFN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VZ4HOG27.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-Y6NYTTAG.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-4A2IO66V.js";
import "./chunk-MCCF6OAL.js";
import "./chunk-HRALYPYA.js";
import "./chunk-6V4PZWJR.js";
import "./chunk-XLWO72EX.js";
import "./chunk-V3GIQBFV.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-WE6HI56M.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5P2XEI2X.js";
import "./chunk-2Q6NNA3D.js";
import "./chunk-AJFEC4AG.js";
import "./chunk-VCMLRY5N.js";
import "./chunk-47ZALXF7.js";
import "./chunk-7TPDZYFV.js";
import "./chunk-RJZLV6EI.js";
import "./chunk-BYQPA3KP.js";
import "./chunk-OGAOIOI3.js";
import "./chunk-K5ELNLYF.js";
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
