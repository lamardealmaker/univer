import {
  UniverDocsMentionUIPlugin
} from "./chunk-YKE3ST4P.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-3LNXBOCJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-NJRYQNNU.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-PTTLTC3J.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-VIWUNEFP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-ZTJE7WNT.js";
import "./chunk-XLUVLZ72.js";
import "./chunk-M7LOWCOD.js";
import "./chunk-IVZBQVQ4.js";
import "./chunk-SVK7ZPPY.js";
import "./chunk-36TEURW2.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-EA5XJEOX.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-GDLQKIFN.js";
import "./chunk-VCITGCDQ.js";
import "./chunk-S2KU4FZR.js";
import "./chunk-4OO4Y65L.js";
import "./chunk-TGV5SZHH.js";
import "./chunk-RR34ERDM.js";
import "./chunk-7ZGN2HKJ.js";
import "./chunk-FGYNDRR7.js";
import "./chunk-THSFYI7A.js";
import "./chunk-L2YDHVS3.js";
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
