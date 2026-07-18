import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-VZ4HOG27.js";
import "./chunk-XLWO72EX.js";
import "./chunk-V3GIQBFV.js";
import "./chunk-WE6HI56M.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-5P2XEI2X.js";
import "./chunk-2Q6NNA3D.js";
import "./chunk-VCMLRY5N.js";
import "./chunk-47ZALXF7.js";
import "./chunk-7TPDZYFV.js";
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
