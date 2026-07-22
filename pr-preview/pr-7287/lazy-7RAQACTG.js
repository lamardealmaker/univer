import {
  UniverDocsMentionUIPlugin
} from "./chunk-N27VRXE2.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-K6FGZ2UH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OA76UJQ4.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DR6SWNDK.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-KYQFXGRA.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-J6BJIQI7.js";
import "./chunk-IKBDRPKY.js";
import "./chunk-MSBPQTCM.js";
import "./chunk-Q5BVY6ZY.js";
import "./chunk-44Y3UKXQ.js";
import "./chunk-646UD4P3.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-7YM7LGE7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-ICLA44LH.js";
import "./chunk-JNYE2C6C.js";
import "./chunk-FIIBSXWG.js";
import "./chunk-I5IWKWLY.js";
import "./chunk-LZ43PMWX.js";
import "./chunk-MEQYGXDL.js";
import "./chunk-MIQDXCVC.js";
import "./chunk-XOVZ3ENV.js";
import "./chunk-ON7MQNKU.js";
import "./chunk-V7YB6CU5.js";
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
