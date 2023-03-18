/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"signOut\": () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/apiClient */ \"./src/services/apiClient.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_apiClient__WEBPACK_IMPORTED_MODULE_4__]);\n_services_apiClient__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//importanto o destruidor de cookies\n\n//importando o router para acessar as rotas\n\n\n//recebendo o contexto doq vamos usar e recebendo a tipagem com as propriedades\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n//função de deslogar\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@nextauth.token\") //destruindo a sessão do usuário\n        ;\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\") // mandando o usuário de volta a tela inicial (login)\n        ;\n    } catch  {\n        console.log(\"erro ao deslogar\");\n    }\n}\n//onde vai prover informaçoes e ter os métodos\nfunction AuthProvider({ children  }) {\n    //armazenar as informações de quando o usuário fizer o login\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    //uma variável com base no user\n    //se o usário não estiver logado o isAuthenticated será falso, se tiver logado será verdadeiro\n    const isAuthenticated = !!user; //convertendo a variável do user como booleano com as interrogações\n    //recebendo os dados de LOGIN\n    async function signIn({ email , password  }) {\n        //tentanto logar buscando os dados da rota /session da API\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.post(\"/session\", {\n                email,\n                password\n            });\n            //desconstruindo o response data\n            const { id , name , token  } = response.data;\n            //SALVANDO o cookie de autenticação em session\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24,\n                path: \"/\" //Quais caminhos terão acesso aos cookies\n            });\n            //console.log(response.data);\n            //passando para o user os dados de login (ja logado)\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passando o token para manter-lo nas próximas requisiçoes\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            //Redirecionar o user para o /dashboard\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/dashboard\");\n        } catch (err) {\n            console.log(\"ERRO AO ACESSAR\", err);\n        }\n    }\n    //recebendo dados de CADASTRO\n    async function signUp({ name , email , password  }) {\n        try {\n            //salvando os dados na API\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_4__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            console.log(\"CADASTRADO COM SUCESSO\");\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n        } catch (err) {\n            console.log(\"Erro ao cadastrar\", err);\n        }\n    }\n    return(//retornando o provider\n    //dentro do value qualquer componente depois poderá acessar\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Documents\\\\Sistema Pizzaria\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 132,\n        columnNumber: 9\n    }, this));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDZ0U7QUFFaEUsb0NBQW9DO0FBQzZCO0FBQ2pFLDJDQUEyQztBQUNWO0FBQ1U7QUFtQzNDLCtFQUErRTtBQUN4RSxNQUFNTSw0QkFBY04sb0RBQWFBLENBQUMsQ0FBQyxHQUFxQjtBQUcvRCxvQkFBb0I7QUFDYixTQUFTTyxVQUFTO0lBQ3JCLElBQUc7UUFDQ0wsc0RBQWFBLENBQUNNLFdBQVcsbUJBQW1CLGdDQUFnQzs7UUFDNUVKLHVEQUFXLENBQUMsS0FBSSxxREFBcUQ7O0lBQ3pFLEVBQUMsT0FBSztRQUNGTSxRQUFRQyxHQUFHLENBQUM7SUFDaEI7QUFDSixDQUFDO0FBR0QsOENBQThDO0FBQ3ZDLFNBQVNDLGFBQWEsRUFBRUMsU0FBUSxFQUFxQixFQUFDO0lBRXpELDREQUE0RDtJQUM1RCxNQUFLLENBQUNDLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBO0lBRS9CLCtCQUErQjtJQUMvQiw4RkFBOEY7SUFDOUYsTUFBTWUsa0JBQWtCLENBQUMsQ0FBQ0YsTUFBTSxtRUFBbUU7SUFHbkcsNkJBQTZCO0lBQzdCLGVBQWVHLE9BQU8sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQWUsRUFBQztRQUNuRCwwREFBMEQ7UUFDMUQsSUFBRztZQUNDLE1BQU1DLFdBQVcsTUFBTWYseURBQVEsQ0FBQyxZQUFXO2dCQUN2Q2E7Z0JBQ0FDO1lBQ1I7WUFFQSxnQ0FBZ0M7WUFDaEMsTUFBTSxFQUFFRyxHQUFFLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdKLFNBQVNLLElBQUk7WUFFekMsOENBQThDO1lBQzlDdEIsa0RBQVNBLENBQUNLLFdBQVcsbUJBQW1CZ0IsT0FBTTtnQkFDMUNFLFFBQVEsS0FBSyxLQUFLO2dCQUNsQkMsTUFBTSxJQUFJLHlDQUF5QztZQUN2RDtZQUNBLDZCQUE2QjtZQUU3QixvREFBb0Q7WUFDcERaLFFBQVE7Z0JBQ0pPO2dCQUNBQztnQkFDQUw7WUFDSjtZQUVBLDBEQUEwRDtZQUMxRGIsbUZBQXFDLEdBQUcsQ0FBQyxPQUFPLEVBQUVtQixNQUFNLENBQUM7WUFJekQsdUNBQXVDO1lBQ3ZDcEIsdURBQVcsQ0FBQztRQUVaLEVBQUMsT0FBTTBCLEtBQUk7WUFDUHBCLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJtQjtRQUNuQztJQUNKO0lBRUEsNkJBQTZCO0lBQzdCLGVBQWVDLE9BQU8sRUFBRVIsS0FBSSxFQUFFTCxNQUFLLEVBQUVDLFNBQVEsRUFBZSxFQUFDO1FBQ3pELElBQUc7WUFFQywwQkFBMEI7WUFDMUIsTUFBTUMsV0FBVyxNQUFNZix5REFBUSxDQUFDLFVBQVM7Z0JBQ3JDa0I7Z0JBQ0FMO2dCQUNBQztZQUNKO1lBRUFULFFBQVFDLEdBQUcsQ0FBQztZQUVaUCx1REFBVyxDQUFDO1FBRWhCLEVBQUMsT0FBTTBCLEtBQUk7WUFDUHBCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJtQjtRQUNyQztJQUNKO0lBR0EsT0FDSSx1QkFBdUI7SUFDdkIsMkRBQTJEO2tCQUMzRCw4REFBQ3hCLFlBQVkwQixRQUFRO1FBQUNDLE9BQU87WUFBRW5CO1lBQU1FO1lBQWlCQztZQUFRVjtZQUFTd0I7UUFBTztrQkFDekVsQjs7Ozs7O0FBR2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ24gfSBmcm9tIFwiY3J5cHRvXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy9pbXBvcnRhbnRvIG8gZGVzdHJ1aWRvciBkZSBjb29raWVzXHJcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHNldENvb2tpZSwgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuLy9pbXBvcnRhbmRvIG8gcm91dGVyIHBhcmEgYWNlc3NhciBhcyByb3Rhc1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcclxuXHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcclxuICAgIHVzZXI6IFVzZXJQcm9wcyB8IHVuZGVmaW5lZDsgLy9yZWNlYmVuZG8gYSBwcm9wcmllZGFkZSBkZSBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47IC8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgc2UgbyB1c3XDoXJpbyBlc3RhIGxvZ2Fkb1xyXG4gICAgc2lnbkluOiAoY3JlZGVudGlhbHM6IFNpZ25JblByb3BzKSA9PiAgUHJvbWlzZTx2b2lkPiAvL3JlY2ViZW5kbyBhIHByb3ByaWVkYWRlIGRlIGRhZG9zIGRlIGxvZ2luIGRvIHVzdcOhcmlvXHJcbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkIC8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgZGVzbG9nYXJcclxuICAgIHNpZ25VcDogKGNyZWRlbnRpYWxzOiBTaWduVXBQcm9wcykgPT4gUHJvbWlzZTx2b2lkPi8vcmVjZWJlbmRvIGEgcHJvcHJpZWRhZGUgZGUgaW5mb3JtYcOnw7VlcyBkZSBjYWRhc3Ryb1xyXG59XHJcblxyXG4vL3RpcGFnZW0gZGUgaW5mb3JtYcOnw7VlcyBkbyB1c3XDoXJpb1xyXG50eXBlIFVzZXJQcm9wcyA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG4vL2NyZWRlbmNpYWlzIGRlIGVtYWlsIGUgc2VuaGEgcGFyYSBsb2dpblxyXG50eXBlIFNpZ25JblByb3BzID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgU2lnblVwUHJvcHMgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcclxuICAgIC8vY2hpbGRyZW4gw6kgbyBjb21wb25lbnRlIHBhcmEgcmVuZGVyaXphciBhcyBww6FnaW5hc1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG4vL3JlY2ViZW5kbyBvIGNvbnRleHRvIGRvcSB2YW1vcyB1c2FyIGUgcmVjZWJlbmRvIGEgdGlwYWdlbSBjb20gYXMgcHJvcHJpZWRhZGVzXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKVxyXG5cclxuXHJcbi8vZnVuw6fDo28gZGUgZGVzbG9nYXJcclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKXtcclxuICAgIHRyeXtcclxuICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ0BuZXh0YXV0aC50b2tlbicpIC8vZGVzdHJ1aW5kbyBhIHNlc3PDo28gZG8gdXN1w6FyaW9cclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpLy8gbWFuZGFuZG8gbyB1c3XDoXJpbyBkZSB2b2x0YSBhIHRlbGEgaW5pY2lhbCAobG9naW4pXHJcbiAgICB9Y2F0Y2h7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm8gYW8gZGVzbG9nYXInKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9vbmRlIHZhaSBwcm92ZXIgaW5mb3JtYcOnb2VzIGUgdGVyIG9zIG3DqXRvZG9zXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBcclxuICAgIC8vYXJtYXplbmFyIGFzIGluZm9ybWHDp8O1ZXMgZGUgcXVhbmRvIG8gdXN1w6FyaW8gZml6ZXIgbyBsb2dpblxyXG4gICAgY29uc3RbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyUHJvcHM+KClcclxuICAgIFxyXG4gICAgLy91bWEgdmFyacOhdmVsIGNvbSBiYXNlIG5vIHVzZXJcclxuICAgIC8vc2UgbyB1c8OhcmlvIG7Do28gZXN0aXZlciBsb2dhZG8gbyBpc0F1dGhlbnRpY2F0ZWQgc2Vyw6EgZmFsc28sIHNlIHRpdmVyIGxvZ2FkbyBzZXLDoSB2ZXJkYWRlaXJvXHJcbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7IC8vY29udmVydGVuZG8gYSB2YXJpw6F2ZWwgZG8gdXNlciBjb21vIGJvb2xlYW5vIGNvbSBhcyBpbnRlcnJvZ2HDp8O1ZXNcclxuXHJcblxyXG4gICAgLy9yZWNlYmVuZG8gb3MgZGFkb3MgZGUgTE9HSU5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9OiBTaWduSW5Qcm9wcyl7XHJcbiAgICAgICAgLy90ZW50YW50byBsb2dhciBidXNjYW5kbyBvcyBkYWRvcyBkYSByb3RhIC9zZXNzaW9uIGRhIEFQSVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Nlc3Npb24nLHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL2Rlc2NvbnN0cnVpbmRvIG8gcmVzcG9uc2UgZGF0YVxyXG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHRva2VuIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAvL1NBTFZBTkRPIG8gY29va2llIGRlIGF1dGVudGljYcOnw6NvIGVtIHNlc3Npb25cclxuICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnQG5leHRhdXRoLnRva2VuJywgdG9rZW4se1xyXG4gICAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCwgLy90ZW1wbyBkZSBleHBpcmHDp8OjbyBkZSB1bSBtZXNcclxuICAgICAgICAgICAgcGF0aDogXCIvXCIgLy9RdWFpcyBjYW1pbmhvcyB0ZXLDo28gYWNlc3NvIGFvcyBjb29raWVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAvL3Bhc3NhbmRvIHBhcmEgbyB1c2VyIG9zIGRhZG9zIGRlIGxvZ2luIChqYSBsb2dhZG8pXHJcbiAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL1Bhc3NhbmRvIG8gdG9rZW4gcGFyYSBtYW50ZXItbG8gbmFzIHByw7N4aW1hcyByZXF1aXNpw6dvZXNcclxuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWBcclxuXHJcblxyXG5cclxuICAgICAgICAvL1JlZGlyZWNpb25hciBvIHVzZXIgcGFyYSBvIC9kYXNoYm9hcmRcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIilcclxuXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSTyBBTyBBQ0VTU0FSXCIsIGVycilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZWNlYmVuZG8gZGFkb3MgZGUgQ0FEQVNUUk9cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25VcCh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9OiBTaWduVXBQcm9wcyl7XHJcbiAgICAgICAgdHJ5e1xyXG5cclxuICAgICAgICAgICAgLy9zYWx2YW5kbyBvcyBkYWRvcyBuYSBBUElcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3VzZXJzJyx7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQURBU1RSQURPIENPTSBTVUNFU1NPXCIpXHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcblxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm8gYW8gY2FkYXN0cmFyXCIsIGVycilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICAvL3JldG9ybmFuZG8gbyBwcm92aWRlclxyXG4gICAgICAgIC8vZGVudHJvIGRvIHZhbHVlIHF1YWxxdWVyIGNvbXBvbmVudGUgZGVwb2lzIHBvZGVyw6EgYWNlc3NhclxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIHNpZ25Jbiwgc2lnbk91dCwgc2lnblVwIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJkZXN0cm95Q29va2llIiwic2V0Q29va2llIiwiUm91dGVyIiwiYXBpIiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsImlkIiwibmFtZSIsInRva2VuIiwiZGF0YSIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJlcnIiLCJzaWduVXAiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//importando o contexto AuthProvider\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel\\\\Documents\\\\Sistema Pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel\\\\Documents\\\\Sistema Pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUcvQixvQ0FBb0M7QUFDaUI7QUFFdEMsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDSCwrREFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcblxyXG4vL2ltcG9ydGFuZG8gbyBjb250ZXh0byBBdXRoUHJvdmlkZXJcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0cy9BdXRoQ29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupAPIClient\": () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenErrors */ \"./src/services/errors/AuthTokenErrors.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n //paga pegar os cookies\n //importanto o erro personalizado\n//importando a funçao de deslogar usuário\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx); //pegando os cookies\n    //criando o axios para configurar a api\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: \"http://localhost:8888/\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@nextauth.token\"]}` //pegando o token para definir a sessão pelos cookies(autorização de login)\n        }\n    });\n    //caso a API de erro\n    api.interceptors.response.use((response)=>{\n        return response;\n    //caso dê errado\n    }, (error)=>{\n        //qualquer erro 401 (nao autorizado) devemos deslogar o usuário   \n        if (error.response.status === 401) {\n            //chamando função para deslogar o usuário\n            if (true) {\n                (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.signOut)(); //deslogando usuário\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNILENBQUMsdUJBQXVCO0FBQ0osQ0FBQyxpQ0FBaUM7QUFFNUYseUNBQXlDO0FBQ1E7QUFFMUMsU0FBU0ksZUFBZUMsTUFBTUMsU0FBUyxFQUFFO0lBQzVDLElBQUlDLFVBQVVOLHFEQUFZQSxDQUFDSSxNQUFNLG9CQUFvQjtJQUVyRCx1Q0FBdUM7SUFDdkMsTUFBTUcsTUFBTVIsb0RBQVksQ0FBQztRQUNyQlUsU0FBUztRQUNUQyxTQUFTO1lBQ0xDLGVBQWUsQ0FBQyxPQUFPLEVBQUVMLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsMkVBQTJFO1FBQ3JJO0lBQ0o7SUFFQSxvQkFBb0I7SUFDcEJDLElBQUlLLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQUNELENBQUFBLFdBQVk7UUFDdEMsT0FBT0E7SUFDUCxnQkFBZ0I7SUFDcEIsR0FBRyxDQUFDRSxRQUFzQjtRQUV0QixrRUFBa0U7UUFDbEUsSUFBSUEsTUFBTUYsUUFBUSxDQUFFRyxNQUFNLEtBQUssS0FBSztZQUVsQyx5Q0FBeUM7WUFDekMsSUFBSSxJQUEyQlgsRUFBRTtnQkFDM0JILDhEQUFPQSxJQUFHLG9CQUFvQjtZQUN0QyxPQUFPLEVBR047UUFDRCxDQUFDO1FBRUQsT0FBT2UsUUFBUUMsTUFBTSxDQUFDSDtJQUMxQjtJQUVBLE9BQU9SO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnIC8vcGFnYSBwZWdhciBvcyBjb29raWVzXHJcbmltcG9ydCB7IEF1dGhUb2tlbkVycm9yIH0gZnJvbSAnLi9lcnJvcnMvQXV0aFRva2VuRXJyb3JzJzsgLy9pbXBvcnRhbnRvIG8gZXJybyBwZXJzb25hbGl6YWRvXHJcblxyXG4vL2ltcG9ydGFuZG8gYSBmdW7Dp2FvIGRlIGRlc2xvZ2FyIHVzdcOhcmlvXHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICdAL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEFQSUNsaWVudChjdHggPSB1bmRlZmluZWQpIHsvL2NvbnRleHRvIGluZGVmaW5pZG8gY2FzbyBvIHVzdcOhcmlvIG7Do28gcGFzc2UgbmFkYVxyXG4gICAgbGV0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTsgLy9wZWdhbmRvIG9zIGNvb2tpZXNcclxuXHJcbiAgICAvL2NyaWFuZG8gbyBheGlvcyBwYXJhIGNvbmZpZ3VyYXIgYSBhcGlcclxuICAgIGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OC8nLC8vcGVnYW5kbyBhIHVybCBiYXNlXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1snQG5leHRhdXRoLnRva2VuJ119YCAvL3BlZ2FuZG8gbyB0b2tlbiBwYXJhIGRlZmluaXIgYSBzZXNzw6NvIHBlbG9zIGNvb2tpZXMoYXV0b3JpemHDp8OjbyBkZSBsb2dpbilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vY2FzbyBhIEFQSSBkZSBlcnJvXHJcbiAgICBhcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIC8vY2FzbyBkw6ogZXJyYWRvXHJcbiAgICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvL3F1YWxxdWVyIGVycm8gNDAxIChuYW8gYXV0b3JpemFkbykgZGV2ZW1vcyBkZXNsb2dhciBvIHVzdcOhcmlvICAgXHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlIS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC8vY2hhbWFuZG8gZnVuw6fDo28gcGFyYSBkZXNsb2dhciBvIHVzdcOhcmlvXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzaWduT3V0KCk7Ly9kZXNsb2dhbmRvIHVzdcOhcmlvXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9yZXRvcm5hbmRvIGZ1bsOnw6NvIGRlIGVycm9cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBBdXRoVG9rZW5FcnJvcigpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBhcGk7XHJcbn0gIl0sIm5hbWVzIjpbImF4aW9zIiwicGFyc2VDb29raWVzIiwiQXV0aFRva2VuRXJyb3IiLCJzaWduT3V0Iiwic2V0dXBBUElDbGllbnQiLCJjdHgiLCJ1bmRlZmluZWQiLCJjb29raWVzIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzPzdkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBBUElDbGllbnQgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBzZXR1cEFQSUNsaWVudCgpOyJdLCJuYW1lcyI6WyJzZXR1cEFQSUNsaWVudCIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/apiClient.ts\n");

/***/ }),

/***/ "./src/services/errors/AuthTokenErrors.ts":
/*!************************************************!*\
  !*** ./src/services/errors/AuthTokenErrors.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthTokenError\": () => (/* binding */ AuthTokenError)\n/* harmony export */ });\n//criando um erro personalizado\nclass AuthTokenError extends Error {\n    constructor(){\n        super(\"Erro com a autentica\\xe7\\xe3o\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9ycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0JBQStCO0FBQ3hCLE1BQU1BLHVCQUF1QkM7SUFDaENDLGFBQWE7UUFDVCxLQUFLLENBQUM7SUFDVjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zZXJ2aWNlcy9lcnJvcnMvQXV0aFRva2VuRXJyb3JzLnRzP2RiNjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jcmlhbmRvIHVtIGVycm8gcGVyc29uYWxpemFkb1xyXG5leHBvcnQgY2xhc3MgQXV0aFRva2VuRXJyb3IgZXh0ZW5kcyBFcnJvcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoJ0Vycm8gY29tIGEgYXV0ZW50aWNhw6fDo28nKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkF1dGhUb2tlbkVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/errors/AuthTokenErrors.ts\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();