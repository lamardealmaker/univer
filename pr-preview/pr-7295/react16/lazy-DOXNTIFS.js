import {
  UniverDocsMentionUIPlugin
} from "./chunk-Q3CN46WL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-SOX3IWRJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-OIDSYZKV.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5WA2MYOD.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-WIICQ26F.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-WSHNFWMJ.js";
import "./chunk-ALK2366H.js";
import "./chunk-U4NMQSDJ.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-PVP6TUSB.js";
import "./chunk-GWQLZOWW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-VHL45KXN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-IFHZOFXD.js";
import "./chunk-ZQXTXLAM.js";
import "./chunk-GBMWEQ3Y.js";
import "./chunk-XZLDA7KU.js";
import "./chunk-OT2A7JJT.js";
import "./chunk-N3TFKLQB.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
