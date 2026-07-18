import {
  zh_CN_default
} from "../chunk-BRWVMUDH.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-SKO3JANX.js";
import "../chunk-JXXTLVNI.js";
import "../chunk-R7KLXWDQ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-N7S5VYEO.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-Z4IK4AV3.js";
import {
  Univer
} from "../chunk-FD3JZH6D.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
