import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-OMPG7M4Y.js";
import "./chunk-AFA7REW7.js";
import "./chunk-XWDCOBVQ.js";
import "./chunk-JPKIWWZY.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WIWZSY3O.js";
import "./chunk-253HEH7Q.js";
import "./chunk-AHHRULAS.js";
import "./chunk-KKSIKDPM.js";
import "./chunk-7V2XEAWA.js";
import "./chunk-G2ZW2BDM.js";
import "./chunk-47MGLYD5.js";
import "./chunk-PW5H4QGM.js";
import "./chunk-UEDAY4IO.js";
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
