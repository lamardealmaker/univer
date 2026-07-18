import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-HZB6YN4B.js";
import "./chunk-RBQEOVAZ.js";
import "./chunk-GWQLZOWW.js";
import "./chunk-E6F5OJNJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-6ACXN3IF.js";
import "./chunk-JWYUVLZU.js";
import "./chunk-4PDAPJGR.js";
import "./chunk-QUM3JBTX.js";
import "./chunk-IQMWKPZP.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
