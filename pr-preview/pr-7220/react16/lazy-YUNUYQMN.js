import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DAS5YIBO.js";
import "./chunk-L7FJZGIP.js";
import "./chunk-NTBTAPWX.js";
import "./chunk-RFNRLHMJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KVTYVSIH.js";
import "./chunk-3TDTMNGA.js";
import "./chunk-EX3OTKVK.js";
import "./chunk-7U37L6BW.js";
import "./chunk-SBOM7SOI.js";
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
