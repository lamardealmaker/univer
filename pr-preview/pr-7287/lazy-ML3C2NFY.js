import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-2OJQ3S3X.js";
import "./chunk-UFYT4BOO.js";
import "./chunk-WLWR54BP.js";
import "./chunk-VJYXYJC4.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-XC7VZYVD.js";
import "./chunk-BMXSIPEW.js";
import "./chunk-WWXZNS2Y.js";
import "./chunk-ZFXRHBTR.js";
import "./chunk-O5REJQTM.js";
import "./chunk-IGTAP655.js";
import "./chunk-IM332U3Z.js";
import "./chunk-YR3EBCJL.js";
import "./chunk-LWQF5CC6.js";
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
