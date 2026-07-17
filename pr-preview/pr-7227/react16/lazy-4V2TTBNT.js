import {
  UniverDocsMentionUIPlugin
} from "./chunk-WFZNC5JL.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-MKOLWGNV.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-DJ6SVGJS.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HMBXEKVO.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-TWWMYJPO.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-W4JGY4O3.js";
import "./chunk-YNGE7UPD.js";
import "./chunk-Q5U42U52.js";
import "./chunk-OYEWOMRQ.js";
import "./chunk-S344MX4T.js";
import "./chunk-B6YPZOFU.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-BM3OTM4R.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MFV6DFJH.js";
import "./chunk-U3BXGKHY.js";
import "./chunk-VTWMNL5O.js";
import "./chunk-6NQTIW2J.js";
import "./chunk-23VYIF3M.js";
import "./chunk-GA5VID6A.js";
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
