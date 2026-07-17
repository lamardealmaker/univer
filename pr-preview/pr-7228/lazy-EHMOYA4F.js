import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GUQHCFD7.js";
import "./chunk-Y6JPLMD7.js";
import "./chunk-ZVF2WUFH.js";
import "./chunk-VUGOXGHN.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-QHFWHD2E.js";
import "./chunk-GRDSFKNG.js";
import "./chunk-6GQHUJPJ.js";
import "./chunk-DVBRAQ4D.js";
import "./chunk-EHRDOIXG.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
