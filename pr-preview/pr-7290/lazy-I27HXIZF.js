import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-JMTABXA6.js";
import "./chunk-FTIUC2OE.js";
import "./chunk-UNQNW6ZH.js";
import "./chunk-LNNXF5VP.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-MZ7NAWAQ.js";
import "./chunk-GP37ZY3N.js";
import "./chunk-YPYMQJUV.js";
import "./chunk-7LULJTMH.js";
import "./chunk-TMTWLXFR.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
