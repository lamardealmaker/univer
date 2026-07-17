import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-CPPV5WHT.js";
import "./chunk-2Q7MDK4J.js";
import "./chunk-YMFRJBK7.js";
import "./chunk-R4LDZ63N.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6FWJQAIA.js";
import "./chunk-UAA6KEXQ.js";
import "./chunk-2H4OG5YB.js";
import "./chunk-TTERHTD7.js";
import "./chunk-NDOVT6LF.js";
import "./chunk-APCJKRSX.js";
import "./chunk-V52KZQ22.js";
import "./chunk-VTGKT7HG.js";
import "./chunk-B5BSMKXI.js";
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
