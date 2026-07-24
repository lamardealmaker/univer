import {
  zh_CN_default
} from "../chunk-MSZ7TRT3.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-L7QJLVG7.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-GNL7T4QS.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-SWWNNEEA.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-KKQWNXAE.js";
import {
  Univer
} from "../chunk-JD3KJOQJ.js";
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
