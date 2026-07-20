import {
  UniverDocsMentionUIPlugin
} from "./chunk-6EFN2RPU.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-IZMP536Y.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-HVLUF3ME.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-ZY5FXZX5.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PAI4U4VE.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-JHJ3FCN2.js";
import "./chunk-ALK2366H.js";
import "./chunk-U4NMQSDJ.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-73LDN5R3.js";
import "./chunk-GWQLZOWW.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-5HWRN3J7.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EVUV6CJL.js";
import "./chunk-NZQRU55Q.js";
import "./chunk-GBMWEQ3Y.js";
import "./chunk-4FEUQSM7.js";
import "./chunk-UAOUR7EN.js";
import "./chunk-Q24UB5PW.js";
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
