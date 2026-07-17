import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-GNVXFCWK.js";
import "./chunk-ILVMKHWX.js";
import "./chunk-KSJIBBF3.js";
import "./chunk-EJY34MXJ.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-PDA5QUAT.js";
import "./chunk-FT7X6IJR.js";
import "./chunk-FDGKLKNF.js";
import "./chunk-XH44RUDB.js";
import "./chunk-65EMFKCV.js";
import "./chunk-NSTTH4CN.js";
import "./chunk-TBQYTQ7Q.js";
import "./chunk-IOSPCB23.js";
import "./chunk-EYIJFNJM.js";
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
