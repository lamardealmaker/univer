import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-YYQBJVLU.js";
import "./chunk-XLWO72EX.js";
import "./chunk-V3GIQBFV.js";
import "./chunk-BQPGACRL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-P6IC5LHR.js";
import "./chunk-Y3F3JWSH.js";
import "./chunk-NGBROLQZ.js";
import "./chunk-AMAIQ53J.js";
import "./chunk-KJ3ZQ6XP.js";
import "./chunk-RJZLV6EI.js";
import "./chunk-BYQPA3KP.js";
import "./chunk-OGAOIOI3.js";
import "./chunk-K5ELNLYF.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
