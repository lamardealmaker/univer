import {
  UniverDocsMentionUIPlugin
} from "./chunk-443HEYGB.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-WRYNXJAN.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-MISXZRLK.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HZB6YN4B.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-FSMI7FRX.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-LXGRZLER.js";
import "./chunk-ALK2366H.js";
import "./chunk-U4NMQSDJ.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-RBQEOVAZ.js";
import "./chunk-GWQLZOWW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-E6F5OJNJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6ACXN3IF.js";
import "./chunk-JWYUVLZU.js";
import "./chunk-GBMWEQ3Y.js";
import "./chunk-4PDAPJGR.js";
import "./chunk-QUM3JBTX.js";
import "./chunk-IQMWKPZP.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
