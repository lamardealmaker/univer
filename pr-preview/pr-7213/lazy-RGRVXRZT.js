import {
  UniverDocsMentionUIPlugin
} from "./chunk-7P2NV3EP.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-CYNDUQYN.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-AZ4K525P.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-JRAGMPDE.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-PQ76F4B4.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-NRP7Z5CH.js";
import "./chunk-FLOTNBP2.js";
import "./chunk-TR5GO2US.js";
import "./chunk-E4LHDMKA.js";
import "./chunk-VVBJABQB.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-4JJBFU2M.js";
import "./chunk-OXMGSPL5.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-AIYWW2PP.js";
import "./chunk-2A52V36M.js";
import "./chunk-FG7AAHC7.js";
import "./chunk-YGRGP2TI.js";
import "./chunk-UKSIMNEJ.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-3VA4ORAS.js";
import "./chunk-X6R3HG3L.js";
import "./chunk-JFITKU43.js";
import "./chunk-LT6FETEP.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/lazy.ts
function getLazyPlugins() {
  return [
    [UniverDocsMentionUIPlugin],
    [UniverSheetsNumfmtUIPlugin],
    [UniverThreadCommentUIPlugin],
    [UniverSheetsThreadCommentUIPlugin],
    [UniverSheetsNoteUIPlugin],
    [UniverSheetsTableUIPlugin],
    [UniverSheetsFormulaUIPlugin],
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
