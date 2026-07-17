import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-LILUTIW6.js";
import "./chunk-7JIY2PC6.js";
import "./chunk-QRQF3CMM.js";
import "./chunk-MJ5OYCOS.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PT3A6ZRJ.js";
import "./chunk-LODJHY2U.js";
import "./chunk-TA533AUM.js";
import "./chunk-QSGH4I64.js";
import "./chunk-UEB57LIN.js";
import "./chunk-GZDWINUC.js";
import "./chunk-CJ6CRLJA.js";
import "./chunk-UFHBHMJG.js";
import "./chunk-AE3R7DH2.js";
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
