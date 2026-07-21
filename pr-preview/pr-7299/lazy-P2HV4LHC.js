import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KSCMWR5H.js";
import "./chunk-77DKWK35.js";
import "./chunk-6YIJWKIY.js";
import "./chunk-A4CGI55K.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-Q3OLG6W5.js";
import "./chunk-RLLRRRGG.js";
import "./chunk-RR7Q7XGK.js";
import "./chunk-GPIGWJPB.js";
import "./chunk-VEOKQKQZ.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
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
