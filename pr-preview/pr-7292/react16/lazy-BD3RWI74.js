import {
  UniverDocsMentionUIPlugin
} from "./chunk-6BP43UVP.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-TZ3U2ON5.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-2URC7XZN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-6SF35ASU.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-REQRIKDK.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ANMTCZKV.js";
import "./chunk-X3H36JYK.js";
import "./chunk-ELJA4CEZ.js";
import "./chunk-ZTLYHSRM.js";
import "./chunk-VTRCQ7BC.js";
import "./chunk-LZ76DP42.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-YNBDU5X4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-JSQU4NND.js";
import "./chunk-W5UJVDJW.js";
import "./chunk-XNZBNOKE.js";
import "./chunk-TOUFNUKR.js";
import "./chunk-JGKDNRCW.js";
import "./chunk-IJ3IXJZK.js";
import "./chunk-3LBADK2S.js";
import "./chunk-JHNQBJPZ.js";
import "./chunk-ALOYUQOY.js";
import "./chunk-KDL4XP5H.js";
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
