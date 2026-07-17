import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KI3FCATR.js";
import "./chunk-7LOHM2KY.js";
import "./chunk-AKIITBJ4.js";
import "./chunk-6RIJSM3K.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-OLGYSP7K.js";
import "./chunk-VJDAUND5.js";
import "./chunk-VZ7OGHVL.js";
import "./chunk-AZF3DKFC.js";
import "./chunk-23JPBHQA.js";
import "./chunk-C7PERF6S.js";
import "./chunk-SSB36RZY.js";
import "./chunk-QYILVMFA.js";
import "./chunk-SDQSMZKV.js";
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
