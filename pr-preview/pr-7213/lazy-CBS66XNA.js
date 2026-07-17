import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AZ4K525P.js";
import "./chunk-VVBJABQB.js";
import "./chunk-4JJBFU2M.js";
import "./chunk-OXMGSPL5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AIYWW2PP.js";
import "./chunk-2A52V36M.js";
import "./chunk-YGRGP2TI.js";
import "./chunk-UKSIMNEJ.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-3VA4ORAS.js";
import "./chunk-X6R3HG3L.js";
import "./chunk-JFITKU43.js";
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
