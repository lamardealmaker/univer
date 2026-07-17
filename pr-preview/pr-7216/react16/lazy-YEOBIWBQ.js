import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-J5XOKWIA.js";
import "./chunk-XYHIVFID.js";
import "./chunk-QTBTVSHV.js";
import "./chunk-2JEQVHCV.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-E7UIGV4Q.js";
import "./chunk-QYYOQ5CI.js";
import "./chunk-OARRDGON.js";
import "./chunk-WV2BWNAK.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-N7L354MO.js";
import "./chunk-VYIAE3OT.js";
import "./chunk-4FXSDHB6.js";
import "./chunk-LT6FETEP.js";
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
