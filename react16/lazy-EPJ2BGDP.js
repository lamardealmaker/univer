import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4GYZJWNZ.js";
import "./chunk-ITNWKUEF.js";
import "./chunk-4SRC5Y7S.js";
import "./chunk-G64QXZJY.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WGEGFOVE.js";
import "./chunk-HN6XBBWJ.js";
import "./chunk-K6KVGUQA.js";
import "./chunk-URJDLYLM.js";
import "./chunk-KWSI3CYQ.js";
import "./chunk-DVPFJYEU.js";
import "./chunk-FBTXTQTX.js";
import "./chunk-T3ZF4P6J.js";
import "./chunk-MIK4BD7H.js";
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
