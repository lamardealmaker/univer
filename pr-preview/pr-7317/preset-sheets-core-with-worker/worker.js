import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-JMZJQV3F.js";
import {
  createUniver
} from "../chunk-B54QHKEA.js";
import "../chunk-B4YCZCN6.js";
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
  mergeLocales
} from "../chunk-JD3KJOQJ.js";
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
