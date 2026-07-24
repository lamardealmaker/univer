import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-X2F5MHTL.js";
import "./chunk-COYW4VYD.js";
import "./chunk-ECVFANWN.js";
import "./chunk-DCMZMYG3.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-EC5SJWCG.js";
import "./chunk-GQSEG75L.js";
import "./chunk-W6GY7QZO.js";
import "./chunk-LVZALIE5.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-2PZVU6UA.js";
import "./chunk-DPZUWCWC.js";
import "./chunk-X3HPZGMT.js";
import "./chunk-RLTCIETE.js";
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
