import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-666N4LWS.js";
import {
  createUniver
} from "../chunk-KSRE4GRD.js";
import "../chunk-TSLRAHBE.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-XUPIB4PS.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-HQGT7UAX.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-NTW4V4SW.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-54D2JQ6Q.js";
import {
  mergeLocales
} from "../chunk-LLQCVTT7.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-sheets-core/src/worker.ts
function UniverSheetsCoreWorkerPreset(config = {}) {
  const {
    formula
  } = config;
  return {
    plugins: [
      [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
      [UniverFormulaEnginePlugin, { function: formula == null ? void 0 : formula.function }],
      UniverRPCWorkerThreadPlugin,
      UniverRemoteSheetsFormulaPlugin
    ]
  };
}

// ../presets/packages/preset-sheets-filter/src/worker.ts
function UniverSheetsFilterWorkerPreset() {
  return {
    plugins: [
      UniverSheetsFilterPlugin
    ]
  };
}

// src/preset-sheets-core-with-worker/worker.ts
createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default,
      zh_CN_default2
    )
  },
  presets: [
    UniverSheetsCoreWorkerPreset(),
    UniverSheetsFilterWorkerPreset()
  ]
});
