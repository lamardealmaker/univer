import {
  UniverDocsMentionUIPlugin
} from "./chunk-JGBOW74G.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-YPO3ALBH.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-R2XZ557F.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-BIFGCO3L.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-BJ3DGTNP.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-MGH32R3T.js";
import "./chunk-YNGE7UPD.js";
import "./chunk-Q5U42U52.js";
import "./chunk-OYEWOMRQ.js";
import "./chunk-6VDPEYPY.js";
import "./chunk-B6YPZOFU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-67Q25QBV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WGRD5ZZN.js";
import "./chunk-HTHXZRIK.js";
import "./chunk-VTWMNL5O.js";
import "./chunk-6NNCJEUZ.js";
import "./chunk-ALND7WPK.js";
import "./chunk-VUYV6U5L.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
