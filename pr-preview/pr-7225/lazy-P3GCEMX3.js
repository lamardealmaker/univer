import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AJU57UZ3.js";
import "./chunk-L7FJZGIP.js";
import "./chunk-NTBTAPWX.js";
import "./chunk-OP6SLV3A.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AOD4WHEL.js";
import "./chunk-V52OQNKK.js";
import "./chunk-ND7BG4VI.js";
import "./chunk-DJK32BKN.js";
import "./chunk-5WPUL4JN.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
