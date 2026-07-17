import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-5QCTIDRC.js";
import "./chunk-F5NQUJP4.js";
import "./chunk-HGCM6PHV.js";
import "./chunk-BZH5ARX5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WEJOILCA.js";
import "./chunk-JX2CEJDP.js";
import "./chunk-JLSCVAQZ.js";
import "./chunk-G7J5JI6Q.js";
import "./chunk-STR5WP3G.js";
import "./chunk-OMOUDXTN.js";
import "./chunk-ZACKK3AL.js";
import "./chunk-HIBANMIM.js";
import "./chunk-TBRD6MYV.js";
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
