import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-VH7M5EOK.js";
import "../chunk-52QD5ZOZ.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-5FVFOJ5F.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-O7SFXNR4.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-ZUW5CMIO.js";
import {
  mergeLocales
} from "../chunk-5FNWWQ47.js";
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
