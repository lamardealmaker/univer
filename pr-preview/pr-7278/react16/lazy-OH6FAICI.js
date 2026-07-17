import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2FIVEGDT.js";
import "./chunk-RTOBCPIC.js";
import "./chunk-NTBQ37CM.js";
import "./chunk-IOIJEPSD.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AJCGR6FF.js";
import "./chunk-7IAGYJ7F.js";
import "./chunk-VTS6GCC7.js";
import "./chunk-WECBJNMR.js";
import "./chunk-4S6YNTII.js";
import "./chunk-N4MCUC7X.js";
import "./chunk-7SCTSQ5Z.js";
import "./chunk-ZB2EG2DN.js";
import "./chunk-V2SQB4ZF.js";
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
