System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui","jimu-ui/basic/color-picker"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./finn/widgets/parking-lot-widget/src/setting/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./finn/widgets/parking-lot-widget/src/setting/translations/default.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    parkingLotField: 'Parking Lot Field',
    utilizationField: 'Utilization Field',
    showUtilizationText: 'Show Utilization Text',
    allowNegatives: 'Allow Negative Values',
    fullThreshold: 'Full % Threshold',
    availableColor: 'Available Color',
    unavailableColor: 'Unavailable Color',
    dataFormatExpected: 'Data Format Expected',
    dataFormatDescription: 'Your data source should contain fields for parking lot names and utilization percentages (0-100). The widget shows a red availability gauge for each lot and respects any filters applied to the layer or view in ArcGIS.'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************!*\
  !*** ./finn/widgets/parking-lot-widget/src/setting/setting.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translations/default */ "./finn/widgets/parking-lot-widget/src/setting/translations/default.ts");
/** @jsx jsx */







const Setting = (props) => {
    const { config, id, onSettingChange, useDataSources, useDataSourcesEnabled, useMapWidgetIds } = props;
    const supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer]);
    const onMapWidgetSelected = (useMapWidgetIds) => {
        onSettingChange({
            id: id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    const onDataSourceChange = (useDataSources) => {
        onSettingChange({
            id: id,
            useDataSources: useDataSources || []
        });
    };
    const onToggleUseDataEnabled = (useDataSourcesEnabled) => {
        onSettingChange({
            id: id,
            useDataSourcesEnabled: useDataSourcesEnabled
        });
    };
    const onFieldChange = (field, value) => {
        onSettingChange({
            id: id,
            config: config.set(field, value)
        });
    };
    const onShowUtilizationTextChange = (checked) => {
        onSettingChange({
            id: id,
            config: config.set('showUtilizationText', checked)
        });
    };
    const onAllowNegativesChange = (checked) => {
        onSettingChange({
            id: id,
            config: config.set('allowNegatives', checked)
        });
    };
    const onFullThresholdChange = (value) => {
        var _a;
        let nextValue = Number.isFinite(value) ? value : (_a = config.fullThreshold) !== null && _a !== void 0 ? _a : 95;
        nextValue = Math.max(0, Math.min(100, Math.round(nextValue)));
        onSettingChange({
            id: id,
            config: config.set('fullThreshold', nextValue)
        });
    };
    const onAvailableColorChange = (color) => {
        onSettingChange({
            id: id,
            config: config.set('availableColor', color)
        });
    };
    const onUnavailableColorChange = (color) => {
        onSettingChange({
            id: id,
            config: config.set('unavailableColor', color)
        });
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "parking-lot-widget-setting p-2" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "selectMap", defaultMessage: "Select Map" }) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: useMapWidgetIds }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { types: supportedTypes, mustUseDataSource: true, useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSources || []), useDataSourcesEnabled: useDataSourcesEnabled, onToggleUseDataEnabled: onToggleUseDataEnabled, onChange: onDataSourceChange, widgetId: id }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "parkingLotField", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].parkingLotField })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", className: "form-control", value: config.parkingLotField, onChange: (e) => onFieldChange('parkingLotField', e.target.value), placeholder: "e.g., parking_lot, name, lot_id" })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "utilizationField", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].utilizationField })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", className: "form-control", value: config.utilizationField, onChange: (e) => onFieldChange('utilizationField', e.target.value), placeholder: "e.g., utilisationPercentage, utilization, percent_used" })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "showUtilizationText", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].showUtilizationText })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-1" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: config.showUtilizationText, onChange: (e) => onShowUtilizationTextChange(e.target.checked) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "allowNegatives", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].allowNegatives })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-1" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: config.allowNegatives, onChange: (e) => onAllowNegativesChange(e.target.checked) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label", style: { display: 'block', marginBottom: '8px' } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "fullThreshold", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].fullThreshold })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", className: "form-control", value: config.fullThreshold, onChange: (e) => onFullThresholdChange(parseInt(e.target.value)), min: "0", max: "100", placeholder: "e.g., 95" }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "availableColor", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].availableColor }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { color: config.availableColor || '#E683DD', onChange: onAvailableColorChange, "aria-label": _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].availableColor })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "unavailableColor", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].unavailableColor }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { color: config.unavailableColor || '#8B8B8B', onChange: onUnavailableColorChange, "aria-label": _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].unavailableColor }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "setting-section mt-3" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "alert alert-info" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "dataFormatExpected", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].dataFormatExpected })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "dataFormatDescription", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_5__["default"].dataFormatDescription }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wYXJraW5nLWxvdC13aWRnZXQvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsZUFBZSxFQUFFLG1CQUFtQjtJQUNwQyxnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsbUJBQW1CLEVBQUUsdUJBQXVCO0lBQzVDLGNBQWMsRUFBRSx1QkFBdUI7SUFDdkMsYUFBYSxFQUFFLGtCQUFrQjtJQUNqQyxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxrQkFBa0IsRUFBRSxzQkFBc0I7SUFDMUMscUJBQXFCLEVBQUUsMk5BQTJOO0NBQ25QOzs7Ozs7Ozs7Ozs7QUNWRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBQ3FFO0FBRUo7QUFDTjtBQUNIO0FBQ3ZDO0FBQ3dCO0FBRUE7QUFFeEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7SUFDekQsTUFBTSxFQUFFLE1BQU0sRUFB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QUFjLEVBQUUsNkRBQW1CLENBQUMsa0JBQWtCLEdBQUcsQ0FBUztvQkFBQSwwREFBSztvQkFDekgsK0NBQUMsdURBQWdCLElBQUMsRUFBRSxFQUFDLHVCQUF1QixFQUFDLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxDQUNuRyxDQUNKLENBQ0YsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE9BQU87QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9maW5uL3dpZGdldHMvcGFya2luZy1sb3Qtd2lkZ2V0L3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2Zpbm4vd2lkZ2V0cy9wYXJraW5nLWxvdC13aWRnZXQvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBwYXJraW5nTG90RmllbGQ6ICdQYXJraW5nIExvdCBGaWVsZCcsXG4gIHV0aWxpemF0aW9uRmllbGQ6ICdVdGlsaXphdGlvbiBGaWVsZCcsXG4gIHNob3dVdGlsaXphdGlvblRleHQ6ICdTaG93IFV0aWxpemF0aW9uIFRleHQnLFxuICBhbGxvd05lZ2F0aXZlczogJ0FsbG93IE5lZ2F0aXZlIFZhbHVlcycsXG4gIGZ1bGxUaHJlc2hvbGQ6ICdGdWxsICUgVGhyZXNob2xkJyxcbiAgYXZhaWxhYmxlQ29sb3I6ICdBdmFpbGFibGUgQ29sb3InLFxuICB1bmF2YWlsYWJsZUNvbG9yOiAnVW5hdmFpbGFibGUgQ29sb3InLFxuICBkYXRhRm9ybWF0RXhwZWN0ZWQ6ICdEYXRhIEZvcm1hdCBFeHBlY3RlZCcsXG4gIGRhdGFGb3JtYXREZXNjcmlwdGlvbjogJ1lvdXIgZGF0YSBzb3VyY2Ugc2hvdWxkIGNvbnRhaW4gZmllbGRzIGZvciBwYXJraW5nIGxvdCBuYW1lcyBhbmQgdXRpbGl6YXRpb24gcGVyY2VudGFnZXMgKDAtMTAwKS4gVGhlIHdpZGdldCBzaG93cyBhIHJlZCBhdmFpbGFiaWxpdHkgZ2F1Z2UgZm9yIGVhY2ggbG90IGFuZCByZXNwZWN0cyBhbnkgZmlsdGVycyBhcHBsaWVkIHRvIHRoZSBsYXllciBvciB2aWV3IGluIEFyY0dJUy4nXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2NvbG9yX3BpY2tlcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIEltbXV0YWJsZSwgRm9ybWF0dGVkTWVzc2FnZSwganN4LCBEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcbmltcG9ydCB7IE1hcFdpZGdldFNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgQ29sb3JQaWNrZXIgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlcidcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgZGVmYXVsdEkxOG5NZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG5jb25zdCBTZXR0aW5nID0gKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IHsgY29uZmlnLCBpZCwgb25TZXR0aW5nQ2hhbmdlLCB1c2VEYXRhU291cmNlcywgdXNlRGF0YVNvdXJjZXNFbmFibGVkLCB1c2VNYXBXaWRnZXRJZHMgfSA9IHByb3BzXG5cbiAgY29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsIERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyXSlcblxuICBjb25zdCBvbk1hcFdpZGdldFNlbGVjdGVkID0gKHVzZU1hcFdpZGdldElkczogc3RyaW5nW10pID0+IHtcbiAgICBvblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHNcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBhbnlbXSkgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogaWQsXG4gICAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMgfHwgW11cbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25Ub2dnbGVVc2VEYXRhRW5hYmxlZCA9ICh1c2VEYXRhU291cmNlc0VuYWJsZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBvblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkOiB1c2VEYXRhU291cmNlc0VuYWJsZWRcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25GaWVsZENoYW5nZSA9IChmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgb25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNvbmZpZzogY29uZmlnLnNldChmaWVsZCwgdmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uU2hvd1V0aWxpemF0aW9uVGV4dENoYW5nZSA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgb25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNvbmZpZzogY29uZmlnLnNldCgnc2hvd1V0aWxpemF0aW9uVGV4dCcsIGNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uQWxsb3dOZWdhdGl2ZXNDaGFuZ2UgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogaWQsXG4gICAgICBjb25maWc6IGNvbmZpZy5zZXQoJ2FsbG93TmVnYXRpdmVzJywgY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25GdWxsVGhyZXNob2xkQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBsZXQgbmV4dFZhbHVlID0gTnVtYmVyLmlzRmluaXRlKHZhbHVlKSA/IHZhbHVlIDogY29uZmlnLmZ1bGxUaHJlc2hvbGQgPz8gOTVcbiAgICBuZXh0VmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIE1hdGgucm91bmQobmV4dFZhbHVlKSkpXG4gICAgb25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNvbmZpZzogY29uZmlnLnNldCgnZnVsbFRocmVzaG9sZCcsIG5leHRWYWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25BdmFpbGFibGVDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgb25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNvbmZpZzogY29uZmlnLnNldCgnYXZhaWxhYmxlQ29sb3InLCBjb2xvcilcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25VbmF2YWlsYWJsZUNvbG9yQ2hhbmdlID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICBvblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgY29uZmlnOiBjb25maWcuc2V0KCd1bmF2YWlsYWJsZUNvbG9yJywgY29sb3IpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJraW5nLWxvdC13aWRnZXQtc2V0dGluZyBwLTJcIj5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJzZWxlY3RNYXBcIiBkZWZhdWx0TWVzc2FnZT1cIlNlbGVjdCBNYXBcIi8+fT5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgdHlwZXM9e3N1cHBvcnRlZFR5cGVzfVxuICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICB1c2VEYXRhU291cmNlcz17SW1tdXRhYmxlKHVzZURhdGFTb3VyY2VzIHx8IFtdKX1cbiAgICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkPXt1c2VEYXRhU291cmNlc0VuYWJsZWR9XG4gICAgICAgIG9uVG9nZ2xlVXNlRGF0YUVuYWJsZWQ9e29uVG9nZ2xlVXNlRGF0YUVuYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkRhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgIHdpZGdldElkPXtpZH1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxTZXR0aW5nU2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicGFya2luZ0xvdEZpZWxkXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMucGFya2luZ0xvdEZpZWxkfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnBhcmtpbmdMb3RGaWVsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GaWVsZENoYW5nZSgncGFya2luZ0xvdEZpZWxkJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBwYXJraW5nX2xvdCwgbmFtZSwgbG90X2lkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInV0aWxpemF0aW9uRmllbGRcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy51dGlsaXphdGlvbkZpZWxkfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnV0aWxpemF0aW9uRmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmllbGRDaGFuZ2UoJ3V0aWxpemF0aW9uRmllbGQnLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4sIHV0aWxpc2F0aW9uUGVyY2VudGFnZSwgdXRpbGl6YXRpb24sIHBlcmNlbnRfdXNlZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJzaG93VXRpbGl6YXRpb25UZXh0XCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMuc2hvd1V0aWxpemF0aW9uVGV4dH0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5zaG93VXRpbGl6YXRpb25UZXh0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uU2hvd1V0aWxpemF0aW9uVGV4dENoYW5nZShlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiYWxsb3dOZWdhdGl2ZXNcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5hbGxvd05lZ2F0aXZlc30vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5hbGxvd05lZ2F0aXZlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkFsbG93TmVnYXRpdmVzQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzhweCcgfX0+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImZ1bGxUaHJlc2hvbGRcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5mdWxsVGhyZXNob2xkfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHZhbHVlPXtjb25maWcuZnVsbFRocmVzaG9sZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GdWxsVGhyZXNob2xkQ2hhbmdlKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4sIDk1XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbj5cbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiYXZhaWxhYmxlQ29sb3JcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5hdmFpbGFibGVDb2xvcn0vPn0+XG4gICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICBjb2xvcj17Y29uZmlnLmF2YWlsYWJsZUNvbG9yIHx8ICcjRTY4M0REJ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkF2YWlsYWJsZUNvbG9yQ2hhbmdlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17ZGVmYXVsdEkxOG5NZXNzYWdlcy5hdmFpbGFibGVDb2xvcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIFxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJ1bmF2YWlsYWJsZUNvbG9yXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMudW5hdmFpbGFibGVDb2xvcn0vPn0+XG4gICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICBjb2xvcj17Y29uZmlnLnVuYXZhaWxhYmxlQ29sb3IgfHwgJyM4QjhCOEInfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVW5hdmFpbGFibGVDb2xvckNoYW5nZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2RlZmF1bHRJMThuTWVzc2FnZXMudW5hdmFpbGFibGVDb2xvcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtdC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxuICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgIDxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJkYXRhRm9ybWF0RXhwZWN0ZWRcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5kYXRhRm9ybWF0RXhwZWN0ZWR9Lz48L3N0cm9uZz48YnIvPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJkYXRhRm9ybWF0RGVzY3JpcHRpb25cIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5kYXRhRm9ybWF0RGVzY3JpcHRpb259Lz5cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=