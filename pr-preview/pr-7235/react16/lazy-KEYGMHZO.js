import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-KRBN5KST.js";
import "./chunk-MD4PUTB3.js";
import "./chunk-7DZQ6MTX.js";
import "./chunk-ZENWD3RL.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-WM2NHLMK.js";
import "./chunk-2Q7LXA3Q.js";
import "./chunk-JE4OBOGU.js";
import "./chunk-T67UMXJD.js";
import "./chunk-LJWJTURH.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
