import {
  UniverSheetsConditionalFormattingPreset,
  UniverSheetsCorePreset,
  UniverSheetsDataValidationPreset,
  UniverSheetsDrawingPreset,
  UniverSheetsFilterPreset,
  UniverSheetsFindReplacePreset,
  UniverSheetsHyperLinkPreset,
  UniverSheetsNotePreset,
  UniverSheetsSortPreset,
  UniverSheetsTablePreset,
  UniverSheetsThreadCommentPreset,
  zh_CN_default,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7,
  zh_CN_default6 as zh_CN_default8,
  zh_CN_default7 as zh_CN_default9,
  zh_CN_default8 as zh_CN_default10,
  zh_CN_default9 as zh_CN_default11
} from "../chunk-ABB44IJD.js";
import "../chunk-5OI6KGAA.js";
import "../chunk-ZB3N6S2D.js";
import "../chunk-R3ONP6SD.js";
import "../chunk-WXYEJTAP.js";
import "../chunk-CO5ZTZG7.js";
import "../chunk-7XUWFJ3D.js";
import "../chunk-4HGKHZ6P.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-E7P4VYLH.js";
import "../chunk-7BSI77GC.js";
import "../chunk-TEHFV4JM.js";
import "../chunk-52KCK7BC.js";
import "../chunk-LDMVNR44.js";
import "../chunk-4TJHFV5L.js";
import "../chunk-YMV4YKUD.js";
import "../chunk-B6WJFSEF.js";
import "../chunk-HHW53KEB.js";
import "../chunk-OEPMWHHK.js";
import "../chunk-FX6PDT6G.js";
import "../chunk-HQTDXEAO.js";
import "../chunk-RJDF4YWH.js";
import "../chunk-E2GJZ76B.js";
import "../chunk-U3XZRGOU.js";
import "../chunk-N3OCI5JR.js";
import "../chunk-YUEY4PBV.js";
import "../chunk-5XNU6EHR.js";
import "../chunk-EHROH7XB.js";
import "../chunk-UWN2KQGM.js";
import "../chunk-LI6UXASZ.js";
import {
  FolderIcon,
  IMenuManagerService,
  IconManager
} from "../chunk-DV6SGVPN.js";
import "../chunk-CFAO7OPH.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-PUCENP4Z.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-U3HPYX3U.js";
import {
  SetRangeValuesMutation,
  SetRangeValuesUndoMutationFactory,
  SetWorksheetColumnCountMutation,
  SetWorksheetColumnCountUndoMutationFactory,
  SetWorksheetRowCountMutation,
  SetWorksheetRowCountUndoMutationFactory
} from "../chunk-FGPXQBRL.js";
import {
  ICommandService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  Plugin,
  covertCellValues,
  default_default,
  mergeLocales,
  sequenceExecute
} from "../chunk-RRAAZ522.js";
import "../chunk-EQ2B2W73.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "../chunk-HECJ2TYE.js";

// src/preset-sheets-core/custom-plugin/import-csv-button.ts
function waitUserSelectCSVFile(onSelect) {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";
    input.click();
    input.onchange = () => {
      var _a;
      const file = (_a = input.files) == null ? void 0 : _a[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        if (typeof text !== "string") {
          return;
        }
        const rows = text.split(/\r\n|\n/);
        const data = rows.map((line) => line.split(","));
        const colsCount = data.reduce((max, row) => Math.max(max, row.length), 0);
        const result = onSelect({
          data,
          colsCount,
          rowsCount: data.length
        });
        resolve(result);
      };
      reader.readAsText(file);
    };
  });
}
var ImportCSVButtonPlugin = class extends Plugin {
  constructor(_config, _injector, _menuManagerService, _commandService, _iconManager) {
    super();
    __publicField(this, "_injector", _injector);
    __publicField(this, "_menuManagerService", _menuManagerService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_iconManager", _iconManager);
  }
  /**
   * The first lifecycle of the plugin mounted on the Univer instance,
   * the Univer business instance has not been created at this time.
   * The plugin should add its own module to the dependency injection system at this lifecycle.
   * It is not recommended to initialize the internal module of the plugin outside this lifecycle.
   */
  onStarting() {
    this.disposeWithMe(
      this._iconManager.register("FolderIcon2", FolderIcon)
    );
    const buttonId = "import-csv-button";
    const command = {
      type: 1 /* OPERATION */,
      id: buttonId,
      handler: (accessor) => {
        const univerInstanceService = accessor.get(IUniverInstanceService);
        const commandService = accessor.get(ICommandService);
        const undoRedoService = accessor.get(IUndoRedoService);
        const worksheet = univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */).getActiveSheet();
        const unitId = worksheet.getUnitId();
        const subUnitId = worksheet.getSheetId();
        return waitUserSelectCSVFile(({ data, rowsCount, colsCount }) => {
          const redoMutations = [];
          const undoMutations = [];
          const setRowCountMutationRedoParams = {
            unitId,
            subUnitId,
            rowCount: rowsCount
          };
          const setRowCountMutationUndoParams = SetWorksheetRowCountUndoMutationFactory(
            accessor,
            setRowCountMutationRedoParams
          );
          redoMutations.push({ id: SetWorksheetRowCountMutation.id, params: setRowCountMutationRedoParams });
          undoMutations.push({ id: SetWorksheetRowCountMutation.id, params: setRowCountMutationUndoParams });
          const setColumnCountMutationRedoParams = {
            unitId,
            subUnitId,
            columnCount: colsCount
          };
          const setColumnCountMutationUndoParams = SetWorksheetColumnCountUndoMutationFactory(
            accessor,
            setColumnCountMutationRedoParams
          );
          redoMutations.push({ id: SetWorksheetColumnCountMutation.id, params: setColumnCountMutationRedoParams });
          undoMutations.unshift({ id: SetWorksheetColumnCountMutation.id, params: setColumnCountMutationUndoParams });
          const cellValue = covertCellValues(data, {
            startColumn: 0,
            // start column index
            startRow: 0,
            // start row index
            endColumn: colsCount - 1,
            // end column index
            endRow: rowsCount - 1
            // end row index
          });
          const setRangeValuesMutationRedoParams = {
            unitId,
            subUnitId,
            cellValue
          };
          const setRangeValuesMutationUndoParams = SetRangeValuesUndoMutationFactory(
            accessor,
            setRangeValuesMutationRedoParams
          );
          redoMutations.push({ id: SetRangeValuesMutation.id, params: setRangeValuesMutationRedoParams });
          undoMutations.unshift({ id: SetRangeValuesMutation.id, params: setRangeValuesMutationUndoParams });
          const result = sequenceExecute(redoMutations, commandService);
          if (result.result) {
            undoRedoService.pushUndoRedo({
              unitID: unitId,
              undoMutations,
              redoMutations
            });
            return true;
          }
          return false;
        });
      }
    };
    const menuItemFactory = () => ({
      id: buttonId,
      title: "Import CSV",
      tooltip: "Import CSV",
      icon: "FolderIcon2",
      // icon name
      type: 0 /* BUTTON */
    });
    this._menuManagerService.mergeMenu({
      ["ribbon.start.others" /* OTHERS */]: {
        [buttonId]: {
          order: 10,
          menuItemFactory
        }
      }
    });
    this._commandService.registerCommand(command);
  }
};
__publicField(ImportCSVButtonPlugin, "pluginName", "import-csv-plugin");
ImportCSVButtonPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(IMenuManagerService)),
  __decorateParam(3, Inject(ICommandService)),
  __decorateParam(4, Inject(IconManager))
], ImportCSVButtonPlugin);
var import_csv_button_default = ImportCSVButtonPlugin;

// src/preset-sheets-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default2,
      zh_CN_default4,
      zh_CN_default,
      zh_CN_default3,
      zh_CN_default5,
      zh_CN_default6,
      zh_CN_default7,
      zh_CN_default8,
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11
    )
  },
  theme: default_default,
  presets: [
    UniverSheetsCorePreset(),
    UniverSheetsDrawingPreset(),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsFindReplacePreset(),
    UniverSheetsNotePreset(),
    UniverSheetsSortPreset(),
    UniverSheetsTablePreset(),
    UniverSheetsThreadCommentPreset()
  ],
  plugins: [
    import_csv_button_default
  ]
});
univerAPI.createWorkbook({ name: "Test Sheet" });
window.univer = univer;
window.univerAPI = univerAPI;
