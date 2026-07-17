import {
  UniverDocsMentionUIPlugin
} from "./chunk-V4VPGO6E.js";
import {
  UniverSheetsThreadCommentUIPlugin
} from "./chunk-2NRTSDLJ.js";
import {
  UniverSheetsNoteUIPlugin,
  UniverSheetsTableUIPlugin
} from "./chunk-PXNRUVDE.js";
import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-F2NZGM6P.js";
import {
  UniverSheetsNumfmtUIPlugin
} from "./chunk-32STYHMU.js";
import {
  UniverThreadCommentUIPlugin
} from "./chunk-5JPCFLQS.js";
import "./chunk-W2QAZLZB.js";
import "./chunk-MQWVFX6D.js";
import "./chunk-JDG5Q7QM.js";
import "./chunk-NWCQRKDM.js";
import "./chunk-5PKSD5FN.js";
import {
  UniverSheetsFormulaUIPlugin
} from "./chunk-LNWB5DY6.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-T7ZNNFUL.js";
import "./chunk-UR7FLBMG.js";
import "./chunk-EEBIG3SP.js";
import "./chunk-VYHEGTXK.js";
import "./chunk-BV7LMME3.js";
import "./chunk-EK2C55KF.js";
import "./chunk-B3NIOS63.js";
import "./chunk-N6UCXEZB.js";
import "./chunk-3EG43LTZ.js";
import "./chunk-DOJ4S5IA.js";
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
