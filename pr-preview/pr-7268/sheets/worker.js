import {
  zh_CN_default
} from "../chunk-QCTH2JYE.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-NSTTH4CN.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-TBQYTQ7Q.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-IOSPCB23.js";
import {
  Univer
} from "../chunk-EYIJFNJM.js";
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
