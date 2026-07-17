import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-DZDUVWVS.js";
import "./chunk-6SFB24GI.js";
import "./chunk-YCPUPCJF.js";
import "./chunk-4JNGIFBI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6XW5VZ7Z.js";
import "./chunk-HDKTJG76.js";
import "./chunk-3XNHCADX.js";
import "./chunk-WM4GRYXF.js";
import "./chunk-FB3AVI5Q.js";
import "./chunk-L4PYN4TJ.js";
import "./chunk-EY3JSFTH.js";
import "./chunk-SN56XSRC.js";
import "./chunk-LDL4QTZT.js";
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
