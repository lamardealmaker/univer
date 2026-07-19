import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-2KE4WHJD.js";
import "../chunk-W7OQZZBD.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-KEXS675W.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-4KLRZ754.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-JLS66HNK.js";
import {
  mergeLocales
} from "../chunk-2TEKAXEL.js";
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
