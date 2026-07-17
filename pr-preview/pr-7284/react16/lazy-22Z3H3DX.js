import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F2NZGM6P.js";
import "./chunk-NWCQRKDM.js";
import "./chunk-5PKSD5FN.js";
import "./chunk-LNWB5DY6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T7ZNNFUL.js";
import "./chunk-UR7FLBMG.js";
import "./chunk-VYHEGTXK.js";
import "./chunk-BV7LMME3.js";
import "./chunk-EK2C55KF.js";
import "./chunk-B3NIOS63.js";
import "./chunk-N6UCXEZB.js";
import "./chunk-3EG43LTZ.js";
import "./chunk-DOJ4S5IA.js";
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
