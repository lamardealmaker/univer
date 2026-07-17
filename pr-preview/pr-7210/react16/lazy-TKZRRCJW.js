import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-J6ZPWSE5.js";
import "./chunk-YUWTKLZR.js";
import "./chunk-DFMBMIS6.js";
import "./chunk-CDKEXSXQ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-KYKA2PTJ.js";
import "./chunk-553M5LYJ.js";
import "./chunk-GISFGR5G.js";
import "./chunk-FDYQCRUB.js";
import "./chunk-4GOOIQ6L.js";
import "./chunk-QCUG2TSB.js";
import "./chunk-KY3OPPOE.js";
import "./chunk-6VU3U6PO.js";
import "./chunk-BZ7UQADZ.js";
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
