import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-5LV5RC22.js";
import "../chunk-RRZXYRJ4.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-PHXA7DTN.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-7T2XFBQ7.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-6EUTIKVY.js";
import {
  mergeLocales
} from "../chunk-YZCASKU5.js";
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
