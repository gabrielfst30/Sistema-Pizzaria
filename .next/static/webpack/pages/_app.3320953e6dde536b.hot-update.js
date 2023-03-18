"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/apiClient */ \"./src/services/apiClient.ts\");\n\nvar _s = $RefreshSig$();\n\n//importanto o destruidor de cookies\n\n//importando o router para acessar as rotas\n\n\n//recebendo o contexto doq vamos usar e recebendo a tipagem com as propriedades\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n//função de deslogar\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@nextauth.token\") //destruindo a sessão do usuário\n        ;\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\") // mandando o usuário de volta a tela inicial (login)\n        ;\n    } catch (e) {\n        console.log(\"erro ao deslogar\");\n    }\n}\n//onde vai prover informaçoes e ter os métodos\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    //armazenar as informações de quando o usuário fizer o login\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    //uma variável com base no user\n    //se o usário não estiver logado o isAuthenticated será falso, se tiver logado será verdadeiro\n    const isAuthenticated = !!user; //convertendo a variável do user como booleano com as interrogações\n    //recebendo os dados de LOGIN\n    async function signIn(param) {\n        let { email , password  } = param;\n        //tentanto logar buscando os dados da rota /session da API\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.post(\"/session\", {\n                email,\n                password\n            });\n            //desconstruindo o response data\n            const { id , name , token  } = response.data;\n            //SALVANDO o cookie de autenticação em session\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24,\n                path: \"/\" //Quais caminhos terão acesso aos cookies\n            });\n            //console.log(response.data);\n            //passando para o user os dados de login (ja logado)\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passando o token para manter-lo nas próximas requisiçoes\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n            //Redirecionar o user para o /dashboard\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/dashboard\");\n        } catch (err) {\n            console.log(\"ERRO AO ACESSAR\", err);\n        }\n    }\n    async function name(params) {}\n    return(//retornando o provider\n    //dentro do value qualquer componente depois poderá acessar\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Documents\\\\Sistema Pizzaria\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 109,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"kGLk6m4BT90iK1d91zRYm0C2usk=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2dFO0FBRWhFLG9DQUFvQztBQUM2QjtBQUNqRSwyQ0FBMkM7QUFDVjtBQUNVO0FBNEIzQywrRUFBK0U7QUFDeEUsTUFBTU0sNEJBQWNOLG9EQUFhQSxDQUFDLENBQUMsR0FBcUI7QUFHL0Qsb0JBQW9CO0FBQ2IsU0FBU08sVUFBUztJQUNyQixJQUFHO1FBQ0NMLHNEQUFhQSxDQUFDTSxXQUFXLG1CQUFtQixnQ0FBZ0M7O1FBQzVFSix1REFBVyxDQUFDLEtBQUkscURBQXFEOztJQUN6RSxFQUFDLFVBQUs7UUFDRk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0osQ0FBQztBQUdELDhDQUE4QztBQUN2QyxTQUFTQyxhQUFhLEtBQStCLEVBQUM7UUFBaEMsRUFBRUMsU0FBUSxFQUFxQixHQUEvQjs7SUFFekIsNERBQTREO0lBQzVELE1BQUssQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUE7SUFFL0IsK0JBQStCO0lBQy9CLDhGQUE4RjtJQUM5RixNQUFNZSxrQkFBa0IsQ0FBQyxDQUFDRixNQUFNLG1FQUFtRTtJQUduRyw2QkFBNkI7SUFDN0IsZUFBZUcsT0FBTyxLQUFnQyxFQUFDO1lBQWpDLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFlLEdBQWhDO1FBQ2xCLDBEQUEwRDtRQUMxRCxJQUFHO1lBQ0MsTUFBTUMsV0FBVyxNQUFNZix5REFBUSxDQUFDLFlBQVc7Z0JBQ3ZDYTtnQkFDQUM7WUFDUjtZQUVBLGdDQUFnQztZQUNoQyxNQUFNLEVBQUVHLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0osU0FBU0ssSUFBSTtZQUV6Qyw4Q0FBOEM7WUFDOUN0QixrREFBU0EsQ0FBQ0ssV0FBVyxtQkFBbUJnQixPQUFNO2dCQUMxQ0UsUUFBUSxLQUFLLEtBQUs7Z0JBQ2xCQyxNQUFNLElBQUkseUNBQXlDO1lBQ3ZEO1lBQ0EsNkJBQTZCO1lBRTdCLG9EQUFvRDtZQUNwRFosUUFBUTtnQkFDSk87Z0JBQ0FDO2dCQUNBTDtZQUNKO1lBRUEsMERBQTBEO1lBQzFEYixtRkFBcUMsR0FBRyxVQUFnQixPQUFObUI7WUFJbEQsdUNBQXVDO1lBQ3ZDcEIsdURBQVcsQ0FBQztRQUVaLEVBQUMsT0FBTTBCLEtBQUk7WUFDUHBCLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJtQjtRQUNuQztJQUNKO0lBRUEsZUFBZVAsS0FBS1EsTUFBVyxFQUFFLENBRWpDO0lBR0EsT0FDSSx1QkFBdUI7SUFDdkIsMkRBQTJEO2tCQUMzRCw4REFBQ3pCLFlBQVkwQixRQUFRO1FBQUNDLE9BQU87WUFBRW5CO1lBQU1FO1lBQWlCQztZQUFRVjtRQUFRO2tCQUNqRU07Ozs7OztBQUdiLENBQUM7R0E3RGVEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWduIH0gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2UsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vaW1wb3J0YW50byBvIGRlc3RydWlkb3IgZGUgY29va2llc1xuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSwgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuLy9pbXBvcnRhbmRvIG8gcm91dGVyIHBhcmEgYWNlc3NhciBhcyByb3Rhc1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJAL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xuXG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICAgIHVzZXI6IFVzZXJQcm9wcyB8IHVuZGVmaW5lZDsgLy9yZWNlYmVuZG8gYSBwcm9wcmllZGFkZSBkZSBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuOyAvL3JlY2ViZW5kbyBhIHByb3ByaWVkYWRlIGRlIHNlIG8gdXN1w6FyaW8gZXN0YSBsb2dhZG9cbiAgICBzaWduSW46IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+ICBQcm9taXNlPHZvaWQ+IC8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgZGFkb3MgZGUgbG9naW4gZG8gdXN1w6FyaW9cbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkIC8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgZGVzbG9nYXJcbn1cblxuLy90aXBhZ2VtIGRlIGluZm9ybWHDp8O1ZXMgZG8gdXN1w6FyaW9cbnR5cGUgVXNlclByb3BzID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG59XG5cbi8vY3JlZGVuY2lhaXMgZGUgZW1haWwgZSBzZW5oYSBwYXJhIGxvZ2luXG50eXBlIFNpZ25JblByb3BzID0ge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgICAvL2NoaWxkcmVuIMOpIG8gY29tcG9uZW50ZSBwYXJhIHJlbmRlcml6YXIgYXMgcMOhZ2luYXNcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbi8vcmVjZWJlbmRvIG8gY29udGV4dG8gZG9xIHZhbW9zIHVzYXIgZSByZWNlYmVuZG8gYSB0aXBhZ2VtIGNvbSBhcyBwcm9wcmllZGFkZXNcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKVxuXG5cbi8vZnVuw6fDo28gZGUgZGVzbG9nYXJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCl7XG4gICAgdHJ5e1xuICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ0BuZXh0YXV0aC50b2tlbicpIC8vZGVzdHJ1aW5kbyBhIHNlc3PDo28gZG8gdXN1w6FyaW9cbiAgICAgICAgUm91dGVyLnB1c2goJy8nKS8vIG1hbmRhbmRvIG8gdXN1w6FyaW8gZGUgdm9sdGEgYSB0ZWxhIGluaWNpYWwgKGxvZ2luKVxuICAgIH1jYXRjaHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm8gYW8gZGVzbG9nYXInKVxuICAgIH1cbn1cblxuXG4vL29uZGUgdmFpIHByb3ZlciBpbmZvcm1hw6dvZXMgZSB0ZXIgb3MgbcOpdG9kb3NcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcyl7XG4gICAgXG4gICAgLy9hcm1hemVuYXIgYXMgaW5mb3JtYcOnw7VlcyBkZSBxdWFuZG8gbyB1c3XDoXJpbyBmaXplciBvIGxvZ2luXG4gICAgY29uc3RbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyUHJvcHM+KClcbiAgICBcbiAgICAvL3VtYSB2YXJpw6F2ZWwgY29tIGJhc2Ugbm8gdXNlclxuICAgIC8vc2UgbyB1c8OhcmlvIG7Do28gZXN0aXZlciBsb2dhZG8gbyBpc0F1dGhlbnRpY2F0ZWQgc2Vyw6EgZmFsc28sIHNlIHRpdmVyIGxvZ2FkbyBzZXLDoSB2ZXJkYWRlaXJvXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyOyAvL2NvbnZlcnRlbmRvIGEgdmFyacOhdmVsIGRvIHVzZXIgY29tbyBib29sZWFubyBjb20gYXMgaW50ZXJyb2dhw6fDtWVzXG5cblxuICAgIC8vcmVjZWJlbmRvIG9zIGRhZG9zIGRlIExPR0lOXG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKHsgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25JblByb3BzKXtcbiAgICAgICAgLy90ZW50YW50byBsb2dhciBidXNjYW5kbyBvcyBkYWRvcyBkYSByb3RhIC9zZXNzaW9uIGRhIEFQSVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc2Vzc2lvbicse1xuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9kZXNjb25zdHJ1aW5kbyBvIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgdG9rZW4gfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgLy9TQUxWQU5ETyBvIGNvb2tpZSBkZSBhdXRlbnRpY2HDp8OjbyBlbSBzZXNzaW9uXG4gICAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICdAbmV4dGF1dGgudG9rZW4nLCB0b2tlbix7XG4gICAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCwgLy90ZW1wbyBkZSBleHBpcmHDp8OjbyBkZSB1bSBtZXNcbiAgICAgICAgICAgIHBhdGg6IFwiL1wiIC8vUXVhaXMgY2FtaW5ob3MgdGVyw6NvIGFjZXNzbyBhb3MgY29va2llc1xuICAgICAgICB9KVxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgIC8vcGFzc2FuZG8gcGFyYSBvIHVzZXIgb3MgZGFkb3MgZGUgbG9naW4gKGphIGxvZ2FkbylcbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgfSlcblxuICAgICAgICAvL1Bhc3NhbmRvIG8gdG9rZW4gcGFyYSBtYW50ZXItbG8gbmFzIHByw7N4aW1hcyByZXF1aXNpw6dvZXNcbiAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gXG5cblxuXG4gICAgICAgIC8vUmVkaXJlY2lvbmFyIG8gdXNlciBwYXJhIG8gL2Rhc2hib2FyZFxuICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIilcblxuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSTyBBTyBBQ0VTU0FSXCIsIGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG5hbWUocGFyYW1zOnR5cGUpIHtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIC8vcmV0b3JuYW5kbyBvIHByb3ZpZGVyXG4gICAgICAgIC8vZGVudHJvIGRvIHZhbHVlIHF1YWxxdWVyIGNvbXBvbmVudGUgZGVwb2lzIHBvZGVyw6EgYWNlc3NhclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4sIHNpZ25PdXQgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJkZXN0cm95Q29va2llIiwic2V0Q29va2llIiwiUm91dGVyIiwiYXBpIiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsImlkIiwibmFtZSIsInRva2VuIiwiZGF0YSIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJlcnIiLCJwYXJhbXMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});