import {
  UniverDocsMentionUIPlugin
} from "./chunk-WSOCEPZM.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-EENBMYBS.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-BNGSIIYC.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VXB5BRKM.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-DX46GJEY.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-CREIIXC7.js";
import "./chunk-ALK2366H.js";
import "./chunk-U4NMQSDJ.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-73LDN5R3.js";
import "./chunk-GWQLZOWW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-MHKMSJCT.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VV2M4XBG.js";
import "./chunk-A3QGOWU7.js";
import "./chunk-GBMWEQ3Y.js";
import "./chunk-64XE5JND.js";
import "./chunk-NJUCPULC.js";
import "./chunk-MQT4NK3P.js";
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
