import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-WIDZKBUZ.js";
import "./chunk-5SLZ5VWA.js";
import "./chunk-2JO6UJAJ.js";
import "./chunk-LIILBURA.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-J4UA2YWF.js";
import "./chunk-GGRT3HJ6.js";
import "./chunk-JCLKBUN7.js";
import "./chunk-2NOALENK.js";
import "./chunk-KGQPEUSI.js";
import "./chunk-J4SJ2JVM.js";
import "./chunk-HWBBMCPW.js";
import "./chunk-2ZHNGVC5.js";
import "./chunk-6Z6YV3AU.js";
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
