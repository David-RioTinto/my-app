"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"app\\\\layout.tsx\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"./RTBasis-Light.woff2\",\"weight\":\"200\",\"style\":\"normal\"},{\"path\":\"./RTBasis-Regular.woff2\",\"weight\":\"400\",\"style\":\"normal\"},{\"path\":\"./RTBasis-Medium.woff2\",\"weight\":\"500\",\"style\":\"normal\"},{\"path\":\"./RTBasis-Bold.woff2\",\"weight\":\"700\",\"style\":\"normal\"}]}],\"variableName\":\"RTBasis\"} */ \"(app-pages-browser)/./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"./RTBasis-Light.woff2\\\",\\\"weight\\\":\\\"200\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"./RTBasis-Regular.woff2\\\",\\\"weight\\\":\\\"400\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"./RTBasis-Medium.woff2\\\",\\\"weight\\\":\\\"500\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"./RTBasis-Bold.woff2\\\",\\\"weight\\\":\\\"700\\\",\\\"style\\\":\\\"normal\\\"}]}],\\\"variableName\\\":\\\"RTBasis\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var _app_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-bar */ \"(app-pages-browser)/./app/app-bar.tsx\");\n/* harmony import */ var _rio_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rio-theme */ \"(app-pages-browser)/./app/rio-theme.tsx\");\n/* harmony import */ var _rio_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rio_theme__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst rioTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_rio_theme__WEBPACK_IMPORTED_MODULE_3___default()));\nconsole.log(rioTheme);\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    palette: {\n        mode: \"light\",\n        primary: {\n            main: \"#580720\",\n            contrastText: \"#ffffff\"\n        },\n        secondary: {\n            main: \"#ae002f\"\n        },\n        text: {\n            primary: \"#4d4d4d\",\n            secondary: \"#757575\",\n            hint: \"#2a00ff\",\n            disabled: \"#666666\"\n        },\n        background: {\n            default: \"#f8f8f9\",\n            paper: \"#ffffff\"\n        },\n        success: {\n            main: \"#007461\",\n            color: \"#ffffff\"\n        },\n        error: {\n            main: \"#ca2320\"\n        },\n        info: {\n            main: \"#1a6ad6\"\n        },\n        warning: {\n            main: \"#bf4d00\"\n        }\n    },\n    typography: {\n        fontFamily: \"__RTBasis_b7f8e6, fantasy\",\n        fontWeightLight: 200,\n        fontSize: 16,\n        fontWeightRegular: 400,\n        body1: {\n            lineHeight: 1.3,\n            fontWeight: 400,\n            fontSize: 16,\n            paddingBottom: 8,\n            paddingTop: 8,\n            fontVariant: \"tabular-nums slashed-zero\"\n        },\n        h1: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 48,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h2: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 32,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h3: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 24,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h4: {\n            fontWeight: 700,\n            fontSize: 20,\n            lineHeight: 1.2,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h5: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 18,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h6: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 16,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        subtitle1: {\n            fontWeight: 500,\n            lineHeight: 1.2,\n            fontSize: 16,\n            color: \"#4d4d4d\"\n        },\n        subtitle2: {\n            fontWeight: 500,\n            lineHeight: 1.2,\n            fontSize: 12.8,\n            color: \"#4d4d4d\"\n        },\n        button: {\n            fontWeight: 700,\n            lineHeight: 1.4,\n            textTransform: \"none\",\n            fontSize: 16\n        },\n        body2: {\n            fontSize: 14,\n            lineHeight: 1.2,\n            paddingTop: 8,\n            paddingBottom: 8\n        },\n        caption: {\n            fontSize: 12,\n            lineHeight: 1.2,\n            paddingBottom: 8,\n            paddingTop: 8,\n            letterSpacing: 0.24\n        },\n        overline: {\n            fontSize: 12,\n            lineHeight: 1.2,\n            letterSpacing: 0.5,\n            fontWeight: 500\n        }\n    },\n    props: {\n        MuiAppBar: {\n            color: \"inherit\"\n        },\n        MuiInputLabel: {\n            color: \"primary\"\n        }\n    },\n    overrides: {\n        MuiAppBar: {\n            colorInherit: {\n                backgroundColor: \"#689f38\",\n                color: \"#fff\"\n            }\n        }\n    },\n    shape: {\n        borderRadius: 8\n    },\n    components: {\n        MuiInputLabel: {\n            defaultProps: {\n                fontWeight: 700\n            }\n        },\n        MuiInput: {\n            defaultProps: {\n                classes: \"test\"\n            }\n        }\n    },\n    spacing: 8\n});\nfunction RootLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        theme: rioTheme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: \"en\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                sx: {\n                    m: 0\n                },\n                className: (next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_6___default().className),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n                        lineNumber: 225,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n                        lineNumber: 226,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n                lineNumber: 224,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n            lineNumber: 222,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n        lineNumber: 221,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixXQUFXO1lBQ1RHLGNBQWM7Z0JBQ1pDLGlCQUFpQjtnQkFDakJwQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBQ0FxQyxPQUFPO1FBQ0xDLGNBQWM7SUFDaEI7SUFDQUMsWUFBWTtRQUNWTixlQUFlO1lBQ2JPLGNBQWM7Z0JBQ1o3QixZQUFZO1lBQ2Q7UUFDRjtRQUNBOEIsVUFBVTtZQUNSRCxjQUFjO2dCQUNaRSxTQUFTO1lBQ1g7UUFDRjtJQUNGO0lBQ0FDLFNBQVM7QUFDWDtBQUdlLFNBQVNDLFdBQVcsS0FJbEM7UUFKa0MsRUFDakNDLFFBQVEsRUFHVCxHQUprQztJQUtqQyxxQkFDRSw4REFBQ2pFLDREQUFhQTtRQUFDTSxPQUFPSDtrQkFDdEIsNEVBQUMrRDtZQUFLQyxNQUFLO3NCQUVQLDRFQUFDQztnQkFBS0MsSUFBSTtvQkFBRUMsR0FBRztnQkFBRTtnQkFBRUMsV0FBV3pFLGtWQUFpQjs7a0NBQzdDLDhEQUFDRyxnREFBU0E7Ozs7O2tDQUNSLDhEQUFDUztrQ0FDRXVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7S0FuQndCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IGxvY2FsRm9udCBmcm9tICduZXh0L2ZvbnQvbG9jYWwnXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciwgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IFJpb0FwcEJhciBmcm9tICcuL2FwcC1iYXInO1xuaW1wb3J0IFJpb1RoZW1lIGZyb20gJy4vcmlvLXRoZW1lJztcblxuY29uc3QgUlRCYXNpcyA9IGxvY2FsRm9udCh7XG4gIHNyYzogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcuL1JUQmFzaXMtTGlnaHQud29mZjInLFxuICAgICAgd2VpZ2h0OiAnMjAwJyxcbiAgICAgIHN0eWxlOiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcuL1JUQmFzaXMtUmVndWxhci53b2ZmMicsXG4gICAgICB3ZWlnaHQ6ICc0MDAnLFxuICAgICAgc3R5bGU6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy4vUlRCYXNpcy1NZWRpdW0ud29mZjInLFxuICAgICAgd2VpZ2h0OiAnNTAwJyxcbiAgICAgIHN0eWxlOiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcuL1JUQmFzaXMtQm9sZC53b2ZmMicsXG4gICAgICB3ZWlnaHQ6ICc3MDAnLFxuICAgICAgc3R5bGU6ICdub3JtYWwnLFxuICAgIH0sXG4gIF1cbn0pXG5cbmNvbnN0IHJpb1RoZW1lID0gY3JlYXRlVGhlbWUoUmlvVGhlbWUpO1xuY29uc29sZS5sb2cocmlvVGhlbWUpO1xuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnbGlnaHQnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjNTgwNzIwJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnI2FlMDAyZicsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAnIzRkNGQ0ZCcsXG4gICAgICBzZWNvbmRhcnk6ICcjNzU3NTc1JyxcbiAgICAgIGhpbnQ6ICcjMmEwMGZmJyxcbiAgICAgIGRpc2FibGVkOiAnIzY2NjY2NicsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnI2Y4ZjhmOScsXG4gICAgICBwYXBlcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbWFpbjogJyMwMDc0NjEnLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2NhMjMyMCcsXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICBtYWluOiAnIzFhNmFkNicsXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICBtYWluOiAnI2JmNGQwMCcsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdfX1JUQmFzaXNfYjdmOGU2LCBmYW50YXN5JyxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IDIwMCxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IDQwMCxcbiAgICBib2R5MToge1xuICAgICAgbGluZUhlaWdodDogMS4zLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgICBmb250VmFyaWFudDogJ3RhYnVsYXItbnVtcyBzbGFzaGVkLXplcm8nLFxuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiA0OCxcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgc3VidGl0bGUxOiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBjb2xvcjogJyM0ZDRkNGQnLFxuICAgIH0sXG4gICAgc3VidGl0bGUyOiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBmb250U2l6ZTogMTIuOCxcbiAgICAgIGNvbG9yOiAnIzRkNGQ0ZCcsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBwYWRkaW5nVG9wOiA4LFxuICAgICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICB9LFxuICAgIGNhcHRpb246IHtcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIHBhZGRpbmdCb3R0b206IDgsXG4gICAgICBwYWRkaW5nVG9wOiA4LFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4yNCxcbiAgICB9LFxuICAgIG92ZXJsaW5lOiB7XG4gICAgICBmb250U2l6ZTogMTIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjUsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgfSxcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBNdWlBcHBCYXI6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgfSxcbiAgICBNdWlJbnB1dExhYmVsOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gIH0sXG4gIG92ZXJyaWRlczoge1xuICAgIE11aUFwcEJhcjoge1xuICAgICAgY29sb3JJbmhlcml0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2ODlmMzgnLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzaGFwZToge1xuICAgIGJvcmRlclJhZGl1czogOCxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIE11aUlucHV0TGFiZWw6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlJbnB1dDoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNsYXNzZXM6ICd0ZXN0JyxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBzcGFjaW5nOiA4LFxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3Jpb1RoZW1lfT5cbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIHtcbiAgICAgICAgPGJvZHkgc3g9e3sgbTogMCB9fWNsYXNzTmFtZT17UlRCYXNpcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDxSaW9BcHBCYXIgLz5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIH1cbiAgICA8L2h0bWw+XG4gICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSVEJhc2lzIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiUmlvQXBwQmFyIiwiUmlvVGhlbWUiLCJyaW9UaGVtZSIsImNvbnNvbGUiLCJsb2ciLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJ0ZXh0IiwiaGludCIsImRpc2FibGVkIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsInN1Y2Nlc3MiLCJjb2xvciIsImVycm9yIiwiaW5mbyIsIndhcm5pbmciLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHRMaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJib2R5MSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJmb250VmFyaWFudCIsImgxIiwiZm9udEZlYXR1cmVTZXR0aW5ncyIsImZvbnRWYXJpYXRpb25TZXR0aW5ncyIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJzdWJ0aXRsZTEiLCJzdWJ0aXRsZTIiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwiYm9keTIiLCJjYXB0aW9uIiwibGV0dGVyU3BhY2luZyIsIm92ZXJsaW5lIiwicHJvcHMiLCJNdWlBcHBCYXIiLCJNdWlJbnB1dExhYmVsIiwib3ZlcnJpZGVzIiwiY29sb3JJbmhlcml0IiwiYmFja2dyb3VuZENvbG9yIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJjb21wb25lbnRzIiwiZGVmYXVsdFByb3BzIiwiTXVpSW5wdXQiLCJjbGFzc2VzIiwic3BhY2luZyIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImh0bWwiLCJsYW5nIiwiYm9keSIsInN4IiwibSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});