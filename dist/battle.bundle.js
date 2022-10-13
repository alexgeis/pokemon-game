"use strict";
(self["webpackChunkpokemon_game"] = self["webpackChunkpokemon_game"] || []).push([["battle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Press Start 2P', cursive;\n}\n\nbody {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n}\n\n#siteWrap {\n    display: inline-block;\n    position: relative;\n    margin: .5rem;\n}\n\n#overlapWrap {\n    position: absolute;\n    background-color: black;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    opacity: 0;\n    z-index: 10;\n}\n\n#battleWrap {\n    display: none\n}\n\n#battleInterface {\n    position: absolute;\n    background-color: white;\n    height: 140px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-top: 4px black solid;\n    display: flex;\n}\n\n#battleContent {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: white;\n    padding: 12px;\n    display: none;\n    cursor: pointer;\n}\n\n#attacks {\n    width: 66.66%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n#attacks button {\n    border: 1px solid black;\n    font-size: 16px;\n}\n#attacks button:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n#attackType {\n    width: 33.33%;\n    border-left: 4px black solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#attackType h1 {\n    font-size: 16px;\n}\n\n.health {\n    position: absolute;\n    background-color: white;\n    width: 250px;\n    border: 4px solid black;\n    padding: 12px;\n}\n#healthMon1 {\n    top: 50px;\n    left: 50px;\n}\n#healthMon2 {\n    bottom: 190px;\n    right: 50px;\n}\n.health h2 {\n    font-size: 16px;\n}\n\n.healthBarWrap {\n    position: relative;\n}\n\n.healthBar {\n    height: 5px;\n}\n.fullHealth {\n    margin-top: 10px;\n    background-color: #ccc;\n}\n.currHealth {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: green;\n}\n#currHealthEnemy {\n    width: 100%;\n}\n#currHealthPlayer {\n    width: 100%;\n}\n\n#gameInstructions {\n    color: white;\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,oBAAoB;IACpB,UAAU;IACV,WAAW;AACf;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,SAAS;IACT,OAAO;IACP,QAAQ;IACR,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Press Start 2P', cursive;\n}\n\nbody {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n}\n\n#siteWrap {\n    display: inline-block;\n    position: relative;\n    margin: .5rem;\n}\n\n#overlapWrap {\n    position: absolute;\n    background-color: black;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    opacity: 0;\n    z-index: 10;\n}\n\n#battleWrap {\n    display: none\n}\n\n#battleInterface {\n    position: absolute;\n    background-color: white;\n    height: 140px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-top: 4px black solid;\n    display: flex;\n}\n\n#battleContent {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: white;\n    padding: 12px;\n    display: none;\n    cursor: pointer;\n}\n\n#attacks {\n    width: 66.66%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n#attacks button {\n    border: 1px solid black;\n    font-size: 16px;\n}\n#attacks button:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n#attackType {\n    width: 33.33%;\n    border-left: 4px black solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#attackType h1 {\n    font-size: 16px;\n}\n\n.health {\n    position: absolute;\n    background-color: white;\n    width: 250px;\n    border: 4px solid black;\n    padding: 12px;\n}\n#healthMon1 {\n    top: 50px;\n    left: 50px;\n}\n#healthMon2 {\n    bottom: 190px;\n    right: 50px;\n}\n.health h2 {\n    font-size: 16px;\n}\n\n.healthBarWrap {\n    position: relative;\n}\n\n.healthBar {\n    height: 5px;\n}\n.fullHealth {\n    margin-top: 10px;\n    background-color: #ccc;\n}\n.currHealth {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: green;\n}\n#currHealthEnemy {\n    width: 100%;\n}\n#currHealthPlayer {\n    width: 100%;\n}\n\n#gameInstructions {\n    color: white;\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleScene.js":
/*!****************************!*\
  !*** ./src/battleScene.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateBattle": () => (/* binding */ animateBattle)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _data_audio_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/audio/audio */ "./src/data/audio/audio.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _data_attacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/attacks */ "./src/data/attacks.js");
/* harmony import */ var _data_monsters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/monsters */ "./src/data/monsters.js");






const battleBackgroundImg = new Image();
battleBackgroundImg.src = "./img/game_assets/battleBackground.png";
const battleBackground = new _classes__WEBPACK_IMPORTED_MODULE_0__.Sprite({
	position: {
		x: 0,
		y: 0,
	},
	image: battleBackgroundImg,
});

let draggle;
let emby;
let renderedSprites;
let battleAnimationId;
let queue;
const endBattle = () => {
	gsap.to("#overlapWrap", {
		opacity: 1,
		onComplete: () => {
			window.cancelAnimationFrame(battleAnimationId);
			(0,_index__WEBPACK_IMPORTED_MODULE_2__.animate)();
			document.querySelector("#battleWrap").style.display = "none";

			gsap.to("#overlapWrap", {
				opacity: 0,
			});

			battle.initiated = false;
			_data_audio_audio__WEBPACK_IMPORTED_MODULE_1__.audio.map.play();
		},
	});
};

function initBattle() {
	document.querySelector("#battleWrap").style.display = "block";
	document.querySelector("#battleContent").style.display = "none";
	document.querySelector("#currHealthEnemy").style.width = "100%";
	document.querySelector("#currHealthPlayer").style.width = "100%";
	document.querySelector("#attacks").replaceChildren();

	draggle = new _classes__WEBPACK_IMPORTED_MODULE_0__.Monster(_data_monsters__WEBPACK_IMPORTED_MODULE_4__.monstersData.Draggle);
	emby = new _classes__WEBPACK_IMPORTED_MODULE_0__.Monster(_data_monsters__WEBPACK_IMPORTED_MODULE_4__.monstersData.Emby);
	renderedSprites = [draggle, emby];
	queue = [];

	for (const attack of emby.attacks) {
		const button = document.createElement("button");
		button.innerHTML = attack.name;
		button.classList.add("attack");
		document.querySelector("#attacks").append(button);
	}

	document.querySelectorAll(".attack").forEach((button) => {
		button.addEventListener("click", (e) => {
			log(e.currentTarget.textContent);
			const targetAttack = _data_attacks__WEBPACK_IMPORTED_MODULE_3__.attacks[e.currentTarget.innerHTML];

			emby.attack({
				attack: targetAttack,
				recipient: draggle,
				renderedSprites,
			});

			// enemy attacks
			if (draggle.health <= 0) {
				queue.push(() => {
					draggle.faint();
				});

				queue.push(endBattle);
				// return;
			}

			const randomAttackIndex = Math.floor(
				Math.random() * draggle.attacks.length
			);
			const randomAttack = draggle.attacks[randomAttackIndex];
			queue.push(() => {
				draggle.attack({
					attack: randomAttack,
					recipient: emby,
					renderedSprites,
				});

				if (emby.health <= 0) {
					queue.push(() => {
						emby.faint();
					});

					queue.push(endBattle);
				}
			});
		});

		button.addEventListener("mouseenter", (e) => {
			const targetAttack = _data_attacks__WEBPACK_IMPORTED_MODULE_3__.attacks[e.currentTarget.innerHTML];
			document.querySelector("#attackTypeText").textContent = targetAttack.type;
			document.querySelector("#attackTypeText").style.color =
				targetAttack.color;
		});

		button.addEventListener("mouseleave", () => {
			document.querySelector("#attackTypeText").textContent = "Attack Type";
			document.querySelector("#attackTypeText").style.color = "black";
		});
	});
}

function animateBattle() {
	battleAnimationId = window.requestAnimationFrame(animateBattle);
	battleBackground.draw();

	console.log(battleAnimationId);
	for (const sprite of renderedSprites) {
		sprite.draw();
	}
}

(0,_index__WEBPACK_IMPORTED_MODULE_2__.animate)();
// initBattle();
// animateBattle();

document.querySelector("#battleContent").addEventListener("click", (e) => {
	if (queue.length > 0) {
		queue[0]();
		queue.shift();
	} else e.currentTarget.style.display = "none";
});


/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boundary": () => (/* binding */ Boundary),
/* harmony export */   "Monster": () => (/* binding */ Monster),
/* harmony export */   "Sprite": () => (/* binding */ Sprite)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


class Sprite {
	constructor({
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
		rotation = 0,
		velocity,
	}) {
		this.position = position;
		this.image = new Image();
		this.frames = { ...frames, val: 0, elapsed: 0 };
		this.image.onload = () => {
			this.width = this.image.width / this.frames.max;
			this.height = this.image.height;
		};
		this.image.src = image.src;
		this.animate = animate;
		this.sprites = sprites;
		this.opacity = 1;
		this.rotation = rotation;
	}

	draw() {
		_index__WEBPACK_IMPORTED_MODULE_0__.c.save();
		_index__WEBPACK_IMPORTED_MODULE_0__.c.translate(
			this.position.x + this.width / 2,
			this.position.y + this.height / 2
		);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.rotate(this.rotation);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.translate(
			-this.position.x - this.width / 2,
			-this.position.y - this.height / 2
		);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.globalAlpha = this.opacity;
		_index__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(
			this.image,
			// image crop arguments
			this.frames.val * this.width,
			0,
			this.image.width / this.frames.max,
			this.image.height,
			// onscreen position
			this.position.x,
			this.position.y,
			// onscreen render frame
			this.image.width / this.frames.max,
			this.image.height
		);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.restore();

		if (!this.animate) return;

		if (this.frames.max > 1) {
			this.frames.elapsed++;
		}

		if (this.frames.elapsed % this.frames.hold === 0) {
			if (this.frames.val < this.frames.max - 1) this.frames.val++;
			else this.frames.val = 0;
		}
	}
}

class Boundary {
	// 48 px = 400% zoom on our original 12px x 12px grids
	static width = 48;
	static height = 48;
	constructor({ position }) {
		this.position = position;
		this.width = 48;
		this.height = 48;
	}

	draw() {
		_index__WEBPACK_IMPORTED_MODULE_0__.c.fillStyle = "rgba(255,0,0, 0)";
		_index__WEBPACK_IMPORTED_MODULE_0__.c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

class Monster extends Sprite {
	constructor({
		name,
		isEnemy = false,
		attacks,
		// future params
		type,
		defense,
		attackPower,
		// sprite parameters
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
		rotation = 0,
		velocity,
	}) {
		super({
			position,
			image,
			frames,
			sprites,
			animate,
			rotation,
			velocity,
		});
		this.name = name;
		this.health = 100;
		this.attacks = attacks;
		this.isEnemy = isEnemy;
		// future props to implements
		this.type = type;
		this.defense = defense;
		this.attackPower = attackPower;
		// Sprite props
	}

	attack({ attack, recipient, renderedSprites }) {
		document.querySelector("#battleContent").style.display = "block";
		document.querySelector(
			"#battleContent"
		).textContent = `${this.name} used ${attack.name}`;

		let healthBar = "#currHealthEnemy";
		if (this.isEnemy) healthBar = "#currHealthPlayer";

		recipient.health -= attack.damage;
		if (recipient.health < 1) recipient.health = 0;

		let rotation = 1;
		if (this.isEnemy) rotation = -2.2;

		switch (attack.name) {
			case "Tackle":
				const tl = gsap.timeline();

				let movementDistance = 10;
				if (this.isEnemy) movementDistance = -10;

				tl.to(this.position, {
					x: this.position.x - movementDistance * 2,
				})
					.to(this.position, {
						x: this.position.x + movementDistance * 4,
						y: this.position.y - movementDistance,
						duration: 0.1,
						onComplete: () => {
							// enemy gets hit
							audio.tackleHit.play();
							gsap.to(healthBar, {
								width: recipient.health + "%",
							});

							gsap.to(recipient.position, {
								x: recipient.position.x + 10,
								yoyo: true,
								repeat: 5,
								duration: 0.08,
							});

							gsap.to(recipient, {
								opacity: 0,
								repeat: 5,
								yoyo: true,
								duration: 0.08,
							});
						},
					})
					.to(this.position, {
						x: this.position.x,
						y: this.position.y,
					});

				break;
			case "Fireball":
				audio.initFireball.play();
				const fireballImg = new Image();
				fireballImg.src = "./img/game_assets/fireball.png";
				const fireball = new Sprite({
					position: {
						x: this.position.x,
						y: this.position.y,
					},
					image: fireballImg,
					frames: {
						max: 4,
						hold: 10,
					},
					animate: true,
					rotation,
				});
				renderedSprites.splice(1, 0, fireball);

				gsap.to(fireball.position, {
					x: recipient.position.x,
					y: recipient.position.y,
					onComplete: () => {
						// enemy gets hit
						audio.fireballHit.play();

						gsap.to(healthBar, {
							width: recipient.health + "%",
						});

						console.log(recipient.health);
						gsap.to(recipient.position, {
							x: recipient.position.x + 10,
							yoyo: true,
							repeat: 5,
							duration: 0.08,
						});

						gsap.to(recipient, {
							opacity: 0,
							repeat: 5,
							yoyo: true,
							duration: 0.08,
						});
						renderedSprites.splice(1, 1);
					},
				});

				break;
		}
	}

	faint() {
		document.querySelector(
			"#battleContent"
		).innerHTML = `${this.name} fainted!`;
		gsap.to(this.position, {
			y: this.position.y + 20,
		});
		gsap.to(this, {
			opacity: 0,
		});
		audio.battle.stop();
		audio.victory.play();
	}
}

class Attack {
	constructor({ name, type, damage, amount = 10 }) {
		this.name = name;
		this.type = type;
		this.damage = damage;
		this.amount = amount;
	}
}




/***/ }),

/***/ "./src/data/attacks.js":
/*!*****************************!*\
  !*** ./src/data/attacks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attacks": () => (/* binding */ attacks)
/* harmony export */ });
const attacks = {
	Tackle: {
		name: "Tackle",
		damage: 10,
		type: "Normal",
		color: "black",
	},
	Fireball: {
		name: "Fireball",
		damage: 25,
		type: "Fire",
		color: "red",
	},
};


/***/ }),

/***/ "./src/data/audio/audio.js":
/*!*********************************!*\
  !*** ./src/data/audio/audio.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audio": () => (/* binding */ audio)
/* harmony export */ });
const audio = {
	map: new Howl({
		src: "./data/audio/map.wav",
		html5: true,
		volume: 0.1,
	}),
	initBattle: new Howl({
		src: "./data/audio/initBattle.wav",
		html5: true,
		volume: 0.01,
	}),
	battle: new Howl({
		src: "./data/audio/battle.mp3",
		html5: true,
		volume: 0.05,
	}),
	tackleHit: new Howl({
		src: "./data/audio/tackleHit.wav",
		html5: true,
		volume: 0.01,
	}),
	initFireball: new Howl({
		src: "./data/audio/initFireball.wav",
		html5: true,
		volume: 0.05,
	}),
	fireballHit: new Howl({
		src: "./data/audio/fireballHit.wav",
		html5: true,
		volume: 0.05,
	}),
	victory: new Howl({
		src: "./data/audio/victory.wav",
		html5: true,
		volume: 0.05,
	}),
};




/***/ }),

/***/ "./src/data/battleData.js":
/*!********************************!*\
  !*** ./src/data/battleData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "battleZonesData": () => (/* binding */ battleZonesData)
/* harmony export */ });
const battleZonesData = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0,
	0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025,
	0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];


/***/ }),

/***/ "./src/data/collisionData.js":
/*!***********************************!*\
  !*** ./src/data/collisionData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collisions": () => (/* binding */ collisions)
/* harmony export */ });
const collisions = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 0,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0,
	1025, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0,
	1025, 1025, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 1025,
	0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025,
	1025, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	1025, 1025, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 1025, 1025, 0, 0,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
	0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0,
	1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025,
	1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0,
	0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0,
	1025, 0, 0, 0, 0, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 1025,
	0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
];


/***/ }),

/***/ "./src/data/monsters.js":
/*!******************************!*\
  !*** ./src/data/monsters.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monstersData": () => (/* binding */ monstersData)
/* harmony export */ });
const monstersData = {
	Emby: {
		position: {
			x: 280,
			y: 325,
		},
		image: {
			src: "./img/game_assets/embySprite.png",
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		name: "Emby",
		attacks: [attacks.Tackle, attacks.Fireball],
	},
	Draggle: {
		position: {
			x: 800,
			y: 100,
		},
		image: {
			src: "./img/game_assets/draggleSprite.png",
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		isEnemy: true,
		name: "Draggle",
		attacks: [attacks.Tackle, attacks.Fireball],
	},
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_game_assets_pokemonGameMap400_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/game_assets/pokemonGameMap400.png */ "./src/img/game_assets/pokemonGameMap400.png");
/* harmony import */ var _img_game_assets_pokemonGameMapFOREGROUND_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/game_assets/pokemonGameMapFOREGROUND.png */ "./src/img/game_assets/pokemonGameMapFOREGROUND.png");
/* harmony import */ var _img_game_assets_playerDown_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/game_assets/playerDown.png */ "./src/img/game_assets/playerDown.png");
/* harmony import */ var _img_game_assets_playerUp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/game_assets/playerUp.png */ "./src/img/game_assets/playerUp.png");
/* harmony import */ var _img_game_assets_playerLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/game_assets/playerLeft.png */ "./src/img/game_assets/playerLeft.png");
/* harmony import */ var _img_game_assets_playerRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/game_assets/playerRight.png */ "./src/img/game_assets/playerRight.png");
/* harmony import */ var _battleScene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./battleScene */ "./src/battleScene.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _data_audio_audio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/audio/audio */ "./src/data/audio/audio.js");
/* harmony import */ var _data_battleData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/battleData */ "./src/data/battleData.js");
/* harmony import */ var _data_collisionData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/collisionData */ "./src/data/collisionData.js");













function log(input) {
	console.log(input);
}

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c refers to context

canvas.width = 1024;
canvas.height = 576;

let collisionsMap = [];
for (let i = 0; i < _data_collisionData__WEBPACK_IMPORTED_MODULE_11__.collisions.length; i += 70) {
	collisionsMap.push(_data_collisionData__WEBPACK_IMPORTED_MODULE_11__.collisions.slice(i, i + 70));
}

let battleZonesMap = [];
for (let i = 0; i < _data_battleData__WEBPACK_IMPORTED_MODULE_10__.battleZonesData.length; i += 70) {
	battleZonesMap.push(_data_battleData__WEBPACK_IMPORTED_MODULE_10__.battleZonesData.slice(i, i + 70));
}

const boundaries = [];
const offset = {
	x: -1408,
	y: -1130,
};

collisionsMap.forEach((row, i) => {
	row.forEach((value, j) => {
		if (value === 1025) {
			boundaries.push(
				new _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary({
					position: {
						x: j * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.width + offset.x,
						y: i * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.height + offset.y,
					},
				})
			);
		}
	});
});

const battleZones = [];
battleZonesMap.forEach((row, i) => {
	row.forEach((value, j) => {
		if (value === 1025) {
			battleZones.push(
				new _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary({
					position: {
						x: j * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.width + offset.x,
						y: i * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.height + offset.y,
					},
				})
			);
		}
	});
});

const image = new Image(); // creates HTML img element
image.src = _img_game_assets_pokemonGameMap400_png__WEBPACK_IMPORTED_MODULE_1__;

const foregroundImage = new Image();
foregroundImage.src = _img_game_assets_pokemonGameMapFOREGROUND_png__WEBPACK_IMPORTED_MODULE_2__;

const playerDownImage = new Image();
playerDownImage.src = _img_game_assets_playerDown_png__WEBPACK_IMPORTED_MODULE_3__;
const playerUpImage = new Image();
playerUpImage.src = _img_game_assets_playerUp_png__WEBPACK_IMPORTED_MODULE_4__;
const playerLeftImage = new Image();
playerLeftImage.src = _img_game_assets_playerLeft_png__WEBPACK_IMPORTED_MODULE_5__;
const playerRightImage = new Image();
playerRightImage.src = _img_game_assets_playerRight_png__WEBPACK_IMPORTED_MODULE_6__;

const playerWidth = 192;
const playerHeight = 68;
const mvmtDistance = playerDownImage.height / 4 / 2;

const player = new _classes__WEBPACK_IMPORTED_MODULE_8__.Sprite({
	position: {
		x: canvas.width / 2 - playerWidth / 4 / 2,
		y: canvas.height / 2 - playerHeight / 2,
	},
	image: playerDownImage,
	frames: {
		max: 4,
		hold: 10,
	},
	sprites: {
		up: playerUpImage,
		down: playerDownImage,
		left: playerLeftImage,
		right: playerRightImage,
	},
});

const background = new _classes__WEBPACK_IMPORTED_MODULE_8__.Sprite({
	position: {
		x: offset.x,
		y: offset.y,
	},
	image: image,
});

const foreground = new _classes__WEBPACK_IMPORTED_MODULE_8__.Sprite({
	position: {
		x: offset.x,
		y: offset.y,
	},
	image: foregroundImage,
});

const keys = {
	up: {
		pressed: false,
	},
	down: {
		pressed: false,
	},
	left: {
		pressed: false,
	},
	right: {
		pressed: false,
	},
};

const movables = [background, foreground, ...boundaries, ...battleZones];

function shapeCollision({ shape1, shape2 }) {
	return (
		shape1.position.x + shape1.width >= shape2.position.x &&
		shape1.position.x <= shape2.position.x + shape2.width &&
		shape1.position.y + shape1.height * 0.7 >= shape2.position.y &&
		shape1.position.y <= shape2.position.y + shape2.height * 0.2
	);
}

const battle = {
	initiated: false,
};

function animate() {
	const animationId = window.requestAnimationFrame(animate);
	background.draw();
	boundaries.forEach((boundary) => {
		boundary.draw();
	});
	battleZones.forEach((battleZone) => {
		battleZone.draw();
	});
	player.draw();
	foreground.draw();

	// MOVEMENT //
	let moving = true;
	player.animate = false;

	// Battle activation
	if (battle.initiated) return; // skip battle activation if in battle

	if (
		keys.up.pressed ||
		keys.down.pressed ||
		keys.left.pressed ||
		keys.right.pressed
	) {
		for (let i = 0; i < battleZones.length; i++) {
			const battleZone = battleZones[i];
			const overlapX =
				Math.min(
					player.position.x + player.width,
					battleZone.position.x + battleZone.width
				) - Math.max(player.position.x, battleZone.position.x);
			const overlapY =
				Math.min(
					player.position.y + player.height,
					battleZone.position.y + battleZone.height
				) - Math.max(player.position.y, battleZone.position.y);
			const overlappingArea = overlapX * overlapY;

			if (
				shapeCollision({
					shape1: player,
					shape2: battleZone,
				}) &&
				overlappingArea > (player.width * player.height) / 2 &&
				Math.random() < 0.02
			) {
				// deactive current animation loop
				window.cancelAnimationFrame(animationId);

				_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.map.stop();
				_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.initBattle.play();
				_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.battle.play();

				battle.initiated = true;
				gsap.to("#overlapWrap", {
					opacity: 1,
					repeat: 3,
					yoyo: true,
					duration: 0.4,
					onComplete() {
						gsap.to("#overlapWrap", {
							opacity: 1,
							duration: 0.4,
							onComplete() {
								// active new animation loop
								initBattle();
								(0,_battleScene__WEBPACK_IMPORTED_MODULE_7__.animateBattle)();
								gsap.to("#overlapWrap", {
									opacity: 0,
									duration: 0.4,
								});
							},
						});
					},
				});
				break;
			}
		}
	}

	if (keys.down.pressed && lastKey === "down") {
		player.animate = true;
		player.image = player.sprites.down;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x,
							y: boundary.position.y - playerDownImage.height / 2,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.y -= playerDownImage.height / 4 / 2;
			});
		}
		// background.position.y -= playerDownImage.height / 4 / 2;
	} else if (keys.up.pressed && lastKey === "up") {
		player.animate = true;
		player.image = player.sprites.up;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x,
							y: boundary.position.y + playerDownImage.height / 4 / 2,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.y += playerDownImage.height / 4 / 2;
			});
		}
	} else if (keys.left.pressed && lastKey === "left") {
		player.animate = true;
		player.image = player.sprites.left;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x + playerDownImage.height / 4 / 2,
							y: boundary.position.y,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.x += playerDownImage.height / 4 / 2;
			});
		}
	} else if (keys.right.pressed && lastKey === "right") {
		player.animate = true;
		player.image = player.sprites.right;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x - playerDownImage.height / 4 / 2,
							y: boundary.position.y,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.x -= playerDownImage.height / 4 / 2;
			});
		}
	}
}
// animate(); // FOR TESTING, UNCOMMENT WHEN FINISHED

let lastKey = "";
window.addEventListener("keydown", (e) => {
	if (e.key === "s" || e.key === "ArrowDown") {
		keys.down.pressed = true;
		lastKey = "down";
	} else if (e.key === "d" || e.key === "ArrowRight") {
		keys.right.pressed = true;
		lastKey = "right";
	} else if (e.key === "a" || e.key === "ArrowLeft") {
		keys.left.pressed = true;
		lastKey = "left";
	} else if (e.key === "w" || e.key === "ArrowUp") {
		keys.up.pressed = true;
		lastKey = "up";
	}
});

window.addEventListener("keyup", (e) => {
	if (e.key === "s" || e.key === "ArrowDown") {
		keys.down.pressed = false;
	} else if (e.key === "d" || e.key === "ArrowRight") {
		keys.right.pressed = false;
	} else if (e.key === "a" || e.key === "ArrowLeft") {
		keys.left.pressed = false;
	} else if (e.key === "w" || e.key === "ArrowUp") {
		keys.up.pressed = false;
	}
});

let clicked = false;
window.addEventListener("click", () => {
	if (!clicked) {
		_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.map.play();
		clicked = true;
	}
});
window.addEventListener("keydown", () => {
	if (!clicked) {
		_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.map.play();
		clicked = true;
	}
});




/***/ }),

/***/ "./src/img/game_assets/playerDown.png":
/*!********************************************!*\
  !*** ./src/img/game_assets/playerDown.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e65efe9883d2c4410f1.png";

/***/ }),

/***/ "./src/img/game_assets/playerLeft.png":
/*!********************************************!*\
  !*** ./src/img/game_assets/playerLeft.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "900f05a7e1073d842919.png";

/***/ }),

/***/ "./src/img/game_assets/playerRight.png":
/*!*********************************************!*\
  !*** ./src/img/game_assets/playerRight.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9205bb91389883ce0c31.png";

/***/ }),

/***/ "./src/img/game_assets/playerUp.png":
/*!******************************************!*\
  !*** ./src/img/game_assets/playerUp.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9c53af0596ff7bc89e2.png";

/***/ }),

/***/ "./src/img/game_assets/pokemonGameMap400.png":
/*!***************************************************!*\
  !*** ./src/img/game_assets/pokemonGameMap400.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1895be59ef74b7645b1f.png";

/***/ }),

/***/ "./src/img/game_assets/pokemonGameMapFOREGROUND.png":
/*!**********************************************************!*\
  !*** ./src/img/game_assets/pokemonGameMapFOREGROUND.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8904ed58c0302ff808d6.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/battleScene.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxNQUFNO0FBQ04sS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxpQ0FBaUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQzs7Ozs7Ozs7Ozs7Ozs7O0FDOVA5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7OztBQ3RDVjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LE9BQU87QUFDUCxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBYztBQUNoQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLDZEQUFjO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDOztBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvYmF0dGxlU2NlbmUuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXR0YWNrcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby9hdWRpby5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9iYXR0bGVEYXRhLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2NvbGxpc2lvbkRhdGEuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvbW9uc3RlcnMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaXRlV3JhcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4jb3ZlcmxhcFdyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2JhdHRsZVdyYXAge1xcbiAgICBkaXNwbGF5OiBub25lXFxufVxcblxcbiNiYXR0bGVJbnRlcmZhY2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItdG9wOiA0cHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNiYXR0bGVDb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhdHRhY2tzIHtcXG4gICAgd2lkdGg6IDY2LjY2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2F0dGFja3MgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuI2F0dGFja3MgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYXR0YWNrVHlwZSB7XFxuICAgIHdpZHRoOiAzMy4zMyU7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYXR0YWNrVHlwZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhlYWx0aCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcbiNoZWFsdGhNb24xIHtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcbn1cXG4jaGVhbHRoTW9uMiB7XFxuICAgIGJvdHRvbTogMTkwcHg7XFxuICAgIHJpZ2h0OiA1MHB4O1xcbn1cXG4uaGVhbHRoIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaGVhbHRoQmFyV3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlYWx0aEJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbn1cXG4uZnVsbEhlYWx0aCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbi5jdXJySGVhbHRoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuI2N1cnJIZWFsdGhFbmVteSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jY3VyckhlYWx0aFBsYXllciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZ2FtZUluc3RydWN0aW9ucyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztJQUNULHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpdGVXcmFwIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogLjVyZW07XFxufVxcblxcbiNvdmVybGFwV3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jYmF0dGxlV3JhcCB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuXFxuI2JhdHRsZUludGVyZmFjZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlci10b3A6IDRweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2JhdHRsZUNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2F0dGFja3Mge1xcbiAgICB3aWR0aDogNjYuNjYlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4jYXR0YWNrcyBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4jYXR0YWNrcyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhdHRhY2tUeXBlIHtcXG4gICAgd2lkdGg6IDMzLjMzJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhdHRhY2tUeXBlIGgxIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaGVhbHRoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuI2hlYWx0aE1vbjEge1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDUwcHg7XFxufVxcbiNoZWFsdGhNb24yIHtcXG4gICAgYm90dG9tOiAxOTBweDtcXG4gICAgcmlnaHQ6IDUwcHg7XFxufVxcbi5oZWFsdGggaDIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5oZWFsdGhCYXJXcmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVhbHRoQmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxufVxcbi5mdWxsSGVhbHRoIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLmN1cnJIZWFsdGgge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4jY3VyckhlYWx0aEVuZW15IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNjdXJySGVhbHRoUGxheWVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNnYW1lSW5zdHJ1Y3Rpb25zIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNwcml0ZSwgTW9uc3RlciB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IGF1ZGlvIH0gZnJvbSBcIi4vZGF0YS9hdWRpby9hdWRpb1wiO1xuaW1wb3J0IHsgYW5pbWF0ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBhdHRhY2tzIH0gZnJvbSBcIi4vZGF0YS9hdHRhY2tzXCI7XG5pbXBvcnQgeyBtb25zdGVyc0RhdGEgfSBmcm9tIFwiLi9kYXRhL21vbnN0ZXJzXCI7XG5cbmNvbnN0IGJhdHRsZUJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcbmJhdHRsZUJhY2tncm91bmRJbWcuc3JjID0gXCIuL2ltZy9nYW1lX2Fzc2V0cy9iYXR0bGVCYWNrZ3JvdW5kLnBuZ1wiO1xuY29uc3QgYmF0dGxlQmFja2dyb3VuZCA9IG5ldyBTcHJpdGUoe1xuXHRwb3NpdGlvbjoge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0fSxcblx0aW1hZ2U6IGJhdHRsZUJhY2tncm91bmRJbWcsXG59KTtcblxubGV0IGRyYWdnbGU7XG5sZXQgZW1ieTtcbmxldCByZW5kZXJlZFNwcml0ZXM7XG5sZXQgYmF0dGxlQW5pbWF0aW9uSWQ7XG5sZXQgcXVldWU7XG5jb25zdCBlbmRCYXR0bGUgPSAoKSA9PiB7XG5cdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0b25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGJhdHRsZUFuaW1hdGlvbklkKTtcblx0XHRcdGFuaW1hdGUoKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlV3JhcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0XHRcdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0fSk7XG5cblx0XHRcdGJhdHRsZS5pbml0aWF0ZWQgPSBmYWxzZTtcblx0XHRcdGF1ZGlvLm1hcC5wbGF5KCk7XG5cdFx0fSxcblx0fSk7XG59O1xuXG5mdW5jdGlvbiBpbml0QmF0dGxlKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZVdyYXBcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVDb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJySGVhbHRoRW5lbXlcIikuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJySGVhbHRoUGxheWVyXCIpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrc1wiKS5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuXHRkcmFnZ2xlID0gbmV3IE1vbnN0ZXIobW9uc3RlcnNEYXRhLkRyYWdnbGUpO1xuXHRlbWJ5ID0gbmV3IE1vbnN0ZXIobW9uc3RlcnNEYXRhLkVtYnkpO1xuXHRyZW5kZXJlZFNwcml0ZXMgPSBbZHJhZ2dsZSwgZW1ieV07XG5cdHF1ZXVlID0gW107XG5cblx0Zm9yIChjb25zdCBhdHRhY2sgb2YgZW1ieS5hdHRhY2tzKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRidXR0b24uaW5uZXJIVE1MID0gYXR0YWNrLm5hbWU7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2tcIik7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRhY2tzXCIpLmFwcGVuZChidXR0b24pO1xuXHR9XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hdHRhY2tcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0bG9nKGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCk7XG5cdFx0XHRjb25zdCB0YXJnZXRBdHRhY2sgPSBhdHRhY2tzW2UuY3VycmVudFRhcmdldC5pbm5lckhUTUxdO1xuXG5cdFx0XHRlbWJ5LmF0dGFjayh7XG5cdFx0XHRcdGF0dGFjazogdGFyZ2V0QXR0YWNrLFxuXHRcdFx0XHRyZWNpcGllbnQ6IGRyYWdnbGUsXG5cdFx0XHRcdHJlbmRlcmVkU3ByaXRlcyxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBlbmVteSBhdHRhY2tzXG5cdFx0XHRpZiAoZHJhZ2dsZS5oZWFsdGggPD0gMCkge1xuXHRcdFx0XHRxdWV1ZS5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRkcmFnZ2xlLmZhaW50KCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHF1ZXVlLnB1c2goZW5kQmF0dGxlKTtcblx0XHRcdFx0Ly8gcmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByYW5kb21BdHRhY2tJbmRleCA9IE1hdGguZmxvb3IoXG5cdFx0XHRcdE1hdGgucmFuZG9tKCkgKiBkcmFnZ2xlLmF0dGFja3MubGVuZ3RoXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgcmFuZG9tQXR0YWNrID0gZHJhZ2dsZS5hdHRhY2tzW3JhbmRvbUF0dGFja0luZGV4XTtcblx0XHRcdHF1ZXVlLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRkcmFnZ2xlLmF0dGFjayh7XG5cdFx0XHRcdFx0YXR0YWNrOiByYW5kb21BdHRhY2ssXG5cdFx0XHRcdFx0cmVjaXBpZW50OiBlbWJ5LFxuXHRcdFx0XHRcdHJlbmRlcmVkU3ByaXRlcyxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKGVtYnkuaGVhbHRoIDw9IDApIHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRcdGVtYnkuZmFpbnQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHF1ZXVlLnB1c2goZW5kQmF0dGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldEF0dGFjayA9IGF0dGFja3NbZS5jdXJyZW50VGFyZ2V0LmlubmVySFRNTF07XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnRleHRDb250ZW50ID0gdGFyZ2V0QXR0YWNrLnR5cGU7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnN0eWxlLmNvbG9yID1cblx0XHRcdFx0dGFyZ2V0QXR0YWNrLmNvbG9yO1xuXHRcdH0pO1xuXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikudGV4dENvbnRlbnQgPSBcIkF0dGFjayBUeXBlXCI7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVCYXR0bGUoKSB7XG5cdGJhdHRsZUFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlQmF0dGxlKTtcblx0YmF0dGxlQmFja2dyb3VuZC5kcmF3KCk7XG5cblx0Y29uc29sZS5sb2coYmF0dGxlQW5pbWF0aW9uSWQpO1xuXHRmb3IgKGNvbnN0IHNwcml0ZSBvZiByZW5kZXJlZFNwcml0ZXMpIHtcblx0XHRzcHJpdGUuZHJhdygpO1xuXHR9XG59XG5cbmFuaW1hdGUoKTtcbi8vIGluaXRCYXR0bGUoKTtcbi8vIGFuaW1hdGVCYXR0bGUoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVDb250ZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRpZiAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdHF1ZXVlWzBdKCk7XG5cdFx0cXVldWUuc2hpZnQoKTtcblx0fSBlbHNlIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcbiIsImltcG9ydCB7IGMgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jbGFzcyBTcHJpdGUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0cG9zaXRpb24sXG5cdFx0aW1hZ2UsXG5cdFx0ZnJhbWVzID0geyBtYXg6IDEsIGhvbGQ6IDEwIH0sXG5cdFx0c3ByaXRlcyxcblx0XHRhbmltYXRlID0gZmFsc2UsXG5cdFx0cm90YXRpb24gPSAwLFxuXHRcdHZlbG9jaXR5LFxuXHR9KSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHR0aGlzLmZyYW1lcyA9IHsgLi4uZnJhbWVzLCB2YWw6IDAsIGVsYXBzZWQ6IDAgfTtcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5mcmFtZXMubWF4O1xuXHRcdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodDtcblx0XHR9O1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2Uuc3JjO1xuXHRcdHRoaXMuYW5pbWF0ZSA9IGFuaW1hdGU7XG5cdFx0dGhpcy5zcHJpdGVzID0gc3ByaXRlcztcblx0XHR0aGlzLm9wYWNpdHkgPSAxO1xuXHRcdHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcblx0fVxuXG5cdGRyYXcoKSB7XG5cdFx0Yy5zYXZlKCk7XG5cdFx0Yy50cmFuc2xhdGUoXG5cdFx0XHR0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMixcblx0XHRcdHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IC8gMlxuXHRcdCk7XG5cdFx0Yy5yb3RhdGUodGhpcy5yb3RhdGlvbik7XG5cdFx0Yy50cmFuc2xhdGUoXG5cdFx0XHQtdGhpcy5wb3NpdGlvbi54IC0gdGhpcy53aWR0aCAvIDIsXG5cdFx0XHQtdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyXG5cdFx0KTtcblx0XHRjLmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xuXHRcdGMuZHJhd0ltYWdlKFxuXHRcdFx0dGhpcy5pbWFnZSxcblx0XHRcdC8vIGltYWdlIGNyb3AgYXJndW1lbnRzXG5cdFx0XHR0aGlzLmZyYW1lcy52YWwgKiB0aGlzLndpZHRoLFxuXHRcdFx0MCxcblx0XHRcdHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcy5tYXgsXG5cdFx0XHR0aGlzLmltYWdlLmhlaWdodCxcblx0XHRcdC8vIG9uc2NyZWVuIHBvc2l0aW9uXG5cdFx0XHR0aGlzLnBvc2l0aW9uLngsXG5cdFx0XHR0aGlzLnBvc2l0aW9uLnksXG5cdFx0XHQvLyBvbnNjcmVlbiByZW5kZXIgZnJhbWVcblx0XHRcdHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcy5tYXgsXG5cdFx0XHR0aGlzLmltYWdlLmhlaWdodFxuXHRcdCk7XG5cdFx0Yy5yZXN0b3JlKCk7XG5cblx0XHRpZiAoIXRoaXMuYW5pbWF0ZSkgcmV0dXJuO1xuXG5cdFx0aWYgKHRoaXMuZnJhbWVzLm1heCA+IDEpIHtcblx0XHRcdHRoaXMuZnJhbWVzLmVsYXBzZWQrKztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5mcmFtZXMuZWxhcHNlZCAlIHRoaXMuZnJhbWVzLmhvbGQgPT09IDApIHtcblx0XHRcdGlmICh0aGlzLmZyYW1lcy52YWwgPCB0aGlzLmZyYW1lcy5tYXggLSAxKSB0aGlzLmZyYW1lcy52YWwrKztcblx0XHRcdGVsc2UgdGhpcy5mcmFtZXMudmFsID0gMDtcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgQm91bmRhcnkge1xuXHQvLyA0OCBweCA9IDQwMCUgem9vbSBvbiBvdXIgb3JpZ2luYWwgMTJweCB4IDEycHggZ3JpZHNcblx0c3RhdGljIHdpZHRoID0gNDg7XG5cdHN0YXRpYyBoZWlnaHQgPSA0ODtcblx0Y29uc3RydWN0b3IoeyBwb3NpdGlvbiB9KSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMud2lkdGggPSA0ODtcblx0XHR0aGlzLmhlaWdodCA9IDQ4O1xuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjLmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLCAwKVwiO1xuXHRcdGMuZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblx0fVxufVxuXG5jbGFzcyBNb25zdGVyIGV4dGVuZHMgU3ByaXRlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdG5hbWUsXG5cdFx0aXNFbmVteSA9IGZhbHNlLFxuXHRcdGF0dGFja3MsXG5cdFx0Ly8gZnV0dXJlIHBhcmFtc1xuXHRcdHR5cGUsXG5cdFx0ZGVmZW5zZSxcblx0XHRhdHRhY2tQb3dlcixcblx0XHQvLyBzcHJpdGUgcGFyYW1ldGVyc1xuXHRcdHBvc2l0aW9uLFxuXHRcdGltYWdlLFxuXHRcdGZyYW1lcyA9IHsgbWF4OiAxLCBob2xkOiAxMCB9LFxuXHRcdHNwcml0ZXMsXG5cdFx0YW5pbWF0ZSA9IGZhbHNlLFxuXHRcdHJvdGF0aW9uID0gMCxcblx0XHR2ZWxvY2l0eSxcblx0fSkge1xuXHRcdHN1cGVyKHtcblx0XHRcdHBvc2l0aW9uLFxuXHRcdFx0aW1hZ2UsXG5cdFx0XHRmcmFtZXMsXG5cdFx0XHRzcHJpdGVzLFxuXHRcdFx0YW5pbWF0ZSxcblx0XHRcdHJvdGF0aW9uLFxuXHRcdFx0dmVsb2NpdHksXG5cdFx0fSk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmhlYWx0aCA9IDEwMDtcblx0XHR0aGlzLmF0dGFja3MgPSBhdHRhY2tzO1xuXHRcdHRoaXMuaXNFbmVteSA9IGlzRW5lbXk7XG5cdFx0Ly8gZnV0dXJlIHByb3BzIHRvIGltcGxlbWVudHNcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuZGVmZW5zZSA9IGRlZmVuc2U7XG5cdFx0dGhpcy5hdHRhY2tQb3dlciA9IGF0dGFja1Bvd2VyO1xuXHRcdC8vIFNwcml0ZSBwcm9wc1xuXHR9XG5cblx0YXR0YWNrKHsgYXR0YWNrLCByZWNpcGllbnQsIHJlbmRlcmVkU3ByaXRlcyB9KSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVDb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFwiI2JhdHRsZUNvbnRlbnRcIlxuXHRcdCkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IHVzZWQgJHthdHRhY2submFtZX1gO1xuXG5cdFx0bGV0IGhlYWx0aEJhciA9IFwiI2N1cnJIZWFsdGhFbmVteVwiO1xuXHRcdGlmICh0aGlzLmlzRW5lbXkpIGhlYWx0aEJhciA9IFwiI2N1cnJIZWFsdGhQbGF5ZXJcIjtcblxuXHRcdHJlY2lwaWVudC5oZWFsdGggLT0gYXR0YWNrLmRhbWFnZTtcblx0XHRpZiAocmVjaXBpZW50LmhlYWx0aCA8IDEpIHJlY2lwaWVudC5oZWFsdGggPSAwO1xuXG5cdFx0bGV0IHJvdGF0aW9uID0gMTtcblx0XHRpZiAodGhpcy5pc0VuZW15KSByb3RhdGlvbiA9IC0yLjI7XG5cblx0XHRzd2l0Y2ggKGF0dGFjay5uYW1lKSB7XG5cdFx0XHRjYXNlIFwiVGFja2xlXCI6XG5cdFx0XHRcdGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuXG5cdFx0XHRcdGxldCBtb3ZlbWVudERpc3RhbmNlID0gMTA7XG5cdFx0XHRcdGlmICh0aGlzLmlzRW5lbXkpIG1vdmVtZW50RGlzdGFuY2UgPSAtMTA7XG5cblx0XHRcdFx0dGwudG8odGhpcy5wb3NpdGlvbiwge1xuXHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb24ueCAtIG1vdmVtZW50RGlzdGFuY2UgKiAyLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50byh0aGlzLnBvc2l0aW9uLCB7XG5cdFx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uLnggKyBtb3ZlbWVudERpc3RhbmNlICogNCxcblx0XHRcdFx0XHRcdHk6IHRoaXMucG9zaXRpb24ueSAtIG1vdmVtZW50RGlzdGFuY2UsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4xLFxuXHRcdFx0XHRcdFx0b25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQvLyBlbmVteSBnZXRzIGhpdFxuXHRcdFx0XHRcdFx0XHRhdWRpby50YWNrbGVIaXQucGxheSgpO1xuXHRcdFx0XHRcdFx0XHRnc2FwLnRvKGhlYWx0aEJhciwge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiByZWNpcGllbnQuaGVhbHRoICsgXCIlXCIsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdGdzYXAudG8ocmVjaXBpZW50LnBvc2l0aW9uLCB7XG5cdFx0XHRcdFx0XHRcdFx0eDogcmVjaXBpZW50LnBvc2l0aW9uLnggKyAxMCxcblx0XHRcdFx0XHRcdFx0XHR5b3lvOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdHJlcGVhdDogNSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4wOCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0Z3NhcC50byhyZWNpcGllbnQsIHtcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0XHRcdHJlcGVhdDogNSxcblx0XHRcdFx0XHRcdFx0XHR5b3lvOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjA4LFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudG8odGhpcy5wb3NpdGlvbiwge1xuXHRcdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIkZpcmViYWxsXCI6XG5cdFx0XHRcdGF1ZGlvLmluaXRGaXJlYmFsbC5wbGF5KCk7XG5cdFx0XHRcdGNvbnN0IGZpcmViYWxsSW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdGZpcmViYWxsSW1nLnNyYyA9IFwiLi9pbWcvZ2FtZV9hc3NldHMvZmlyZWJhbGwucG5nXCI7XG5cdFx0XHRcdGNvbnN0IGZpcmViYWxsID0gbmV3IFNwcml0ZSh7XG5cdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb24ueCxcblx0XHRcdFx0XHRcdHk6IHRoaXMucG9zaXRpb24ueSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGltYWdlOiBmaXJlYmFsbEltZyxcblx0XHRcdFx0XHRmcmFtZXM6IHtcblx0XHRcdFx0XHRcdG1heDogNCxcblx0XHRcdFx0XHRcdGhvbGQ6IDEwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YW5pbWF0ZTogdHJ1ZSxcblx0XHRcdFx0XHRyb3RhdGlvbixcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlbmRlcmVkU3ByaXRlcy5zcGxpY2UoMSwgMCwgZmlyZWJhbGwpO1xuXG5cdFx0XHRcdGdzYXAudG8oZmlyZWJhbGwucG9zaXRpb24sIHtcblx0XHRcdFx0XHR4OiByZWNpcGllbnQucG9zaXRpb24ueCxcblx0XHRcdFx0XHR5OiByZWNpcGllbnQucG9zaXRpb24ueSxcblx0XHRcdFx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHQvLyBlbmVteSBnZXRzIGhpdFxuXHRcdFx0XHRcdFx0YXVkaW8uZmlyZWJhbGxIaXQucGxheSgpO1xuXG5cdFx0XHRcdFx0XHRnc2FwLnRvKGhlYWx0aEJhciwge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogcmVjaXBpZW50LmhlYWx0aCArIFwiJVwiLFxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlY2lwaWVudC5oZWFsdGgpO1xuXHRcdFx0XHRcdFx0Z3NhcC50byhyZWNpcGllbnQucG9zaXRpb24sIHtcblx0XHRcdFx0XHRcdFx0eDogcmVjaXBpZW50LnBvc2l0aW9uLnggKyAxMCxcblx0XHRcdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0cmVwZWF0OiA1LFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4wOCxcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRnc2FwLnRvKHJlY2lwaWVudCwge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0XHRyZXBlYXQ6IDUsXG5cdFx0XHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjA4LFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZW5kZXJlZFNwcml0ZXMuc3BsaWNlKDEsIDEpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGZhaW50KCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIiNiYXR0bGVDb250ZW50XCJcblx0XHQpLmlubmVySFRNTCA9IGAke3RoaXMubmFtZX0gZmFpbnRlZCFgO1xuXHRcdGdzYXAudG8odGhpcy5wb3NpdGlvbiwge1xuXHRcdFx0eTogdGhpcy5wb3NpdGlvbi55ICsgMjAsXG5cdFx0fSk7XG5cdFx0Z3NhcC50byh0aGlzLCB7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdH0pO1xuXHRcdGF1ZGlvLmJhdHRsZS5zdG9wKCk7XG5cdFx0YXVkaW8udmljdG9yeS5wbGF5KCk7XG5cdH1cbn1cblxuY2xhc3MgQXR0YWNrIHtcblx0Y29uc3RydWN0b3IoeyBuYW1lLCB0eXBlLCBkYW1hZ2UsIGFtb3VudCA9IDEwIH0pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG5cdFx0dGhpcy5hbW91bnQgPSBhbW91bnQ7XG5cdH1cbn1cblxuZXhwb3J0IHsgU3ByaXRlLCBCb3VuZGFyeSwgTW9uc3RlciB9O1xuIiwiZXhwb3J0IGNvbnN0IGF0dGFja3MgPSB7XG5cdFRhY2tsZToge1xuXHRcdG5hbWU6IFwiVGFja2xlXCIsXG5cdFx0ZGFtYWdlOiAxMCxcblx0XHR0eXBlOiBcIk5vcm1hbFwiLFxuXHRcdGNvbG9yOiBcImJsYWNrXCIsXG5cdH0sXG5cdEZpcmViYWxsOiB7XG5cdFx0bmFtZTogXCJGaXJlYmFsbFwiLFxuXHRcdGRhbWFnZTogMjUsXG5cdFx0dHlwZTogXCJGaXJlXCIsXG5cdFx0Y29sb3I6IFwicmVkXCIsXG5cdH0sXG59O1xuIiwiY29uc3QgYXVkaW8gPSB7XG5cdG1hcDogbmV3IEhvd2woe1xuXHRcdHNyYzogXCIuL2RhdGEvYXVkaW8vbWFwLndhdlwiLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4xLFxuXHR9KSxcblx0aW5pdEJhdHRsZTogbmV3IEhvd2woe1xuXHRcdHNyYzogXCIuL2RhdGEvYXVkaW8vaW5pdEJhdHRsZS53YXZcIixcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDEsXG5cdH0pLFxuXHRiYXR0bGU6IG5ldyBIb3dsKHtcblx0XHRzcmM6IFwiLi9kYXRhL2F1ZGlvL2JhdHRsZS5tcDNcIixcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDUsXG5cdH0pLFxuXHR0YWNrbGVIaXQ6IG5ldyBIb3dsKHtcblx0XHRzcmM6IFwiLi9kYXRhL2F1ZGlvL3RhY2tsZUhpdC53YXZcIixcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDEsXG5cdH0pLFxuXHRpbml0RmlyZWJhbGw6IG5ldyBIb3dsKHtcblx0XHRzcmM6IFwiLi9kYXRhL2F1ZGlvL2luaXRGaXJlYmFsbC53YXZcIixcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDUsXG5cdH0pLFxuXHRmaXJlYmFsbEhpdDogbmV3IEhvd2woe1xuXHRcdHNyYzogXCIuL2RhdGEvYXVkaW8vZmlyZWJhbGxIaXQud2F2XCIsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjA1LFxuXHR9KSxcblx0dmljdG9yeTogbmV3IEhvd2woe1xuXHRcdHNyYzogXCIuL2RhdGEvYXVkaW8vdmljdG9yeS53YXZcIixcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDUsXG5cdH0pLFxufTtcblxuZXhwb3J0IHsgYXVkaW8gfTtcbiIsImV4cG9ydCBjb25zdCBiYXR0bGVab25lc0RhdGEgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGNvbGxpc2lvbnMgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDAsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5dO1xuIiwiZXhwb3J0IGNvbnN0IG1vbnN0ZXJzRGF0YSA9IHtcblx0RW1ieToge1xuXHRcdHBvc2l0aW9uOiB7XG5cdFx0XHR4OiAyODAsXG5cdFx0XHR5OiAzMjUsXG5cdFx0fSxcblx0XHRpbWFnZToge1xuXHRcdFx0c3JjOiBcIi4vaW1nL2dhbWVfYXNzZXRzL2VtYnlTcHJpdGUucG5nXCIsXG5cdFx0fSxcblx0XHRmcmFtZXM6IHtcblx0XHRcdG1heDogNCxcblx0XHRcdGhvbGQ6IDMwLFxuXHRcdH0sXG5cdFx0YW5pbWF0ZTogdHJ1ZSxcblx0XHRuYW1lOiBcIkVtYnlcIixcblx0XHRhdHRhY2tzOiBbYXR0YWNrcy5UYWNrbGUsIGF0dGFja3MuRmlyZWJhbGxdLFxuXHR9LFxuXHREcmFnZ2xlOiB7XG5cdFx0cG9zaXRpb246IHtcblx0XHRcdHg6IDgwMCxcblx0XHRcdHk6IDEwMCxcblx0XHR9LFxuXHRcdGltYWdlOiB7XG5cdFx0XHRzcmM6IFwiLi9pbWcvZ2FtZV9hc3NldHMvZHJhZ2dsZVNwcml0ZS5wbmdcIixcblx0XHR9LFxuXHRcdGZyYW1lczoge1xuXHRcdFx0bWF4OiA0LFxuXHRcdFx0aG9sZDogMzAsXG5cdFx0fSxcblx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdGlzRW5lbXk6IHRydWUsXG5cdFx0bmFtZTogXCJEcmFnZ2xlXCIsXG5cdFx0YXR0YWNrczogW2F0dGFja3MuVGFja2xlLCBhdHRhY2tzLkZpcmViYWxsXSxcblx0fSxcbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZVVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvcG9rZW1vbkdhbWVNYXA0MDAucG5nXCI7XG5pbXBvcnQgZm9yZWdyb3VuZEltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wb2tlbW9uR2FtZU1hcEZPUkVHUk9VTkQucG5nXCI7XG5pbXBvcnQgcGxheWVyRG93bkltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wbGF5ZXJEb3duLnBuZ1wiO1xuaW1wb3J0IHBsYXllclVwSW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3BsYXllclVwLnBuZ1wiO1xuaW1wb3J0IHBsYXllckxlZnRJbWFnZVVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvcGxheWVyTGVmdC5wbmdcIjtcbmltcG9ydCBwbGF5ZXJSaWdodEltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wbGF5ZXJSaWdodC5wbmdcIjtcbmltcG9ydCB7IGFuaW1hdGVCYXR0bGUgfSBmcm9tIFwiLi9iYXR0bGVTY2VuZVwiO1xuaW1wb3J0IHsgU3ByaXRlLCBCb3VuZGFyeSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IGF1ZGlvIH0gZnJvbSBcIi4vZGF0YS9hdWRpby9hdWRpb1wiO1xuaW1wb3J0IHsgYmF0dGxlWm9uZXNEYXRhIH0gZnJvbSBcIi4vZGF0YS9iYXR0bGVEYXRhXCI7XG5pbXBvcnQgeyBjb2xsaXNpb25zIH0gZnJvbSBcIi4vZGF0YS9jb2xsaXNpb25EYXRhXCI7XG5cbmZ1bmN0aW9uIGxvZyhpbnB1dCkge1xuXHRjb25zb2xlLmxvZyhpbnB1dCk7XG59XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG5leHBvcnQgY29uc3QgYyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7IC8vIGMgcmVmZXJzIHRvIGNvbnRleHRcblxuY2FudmFzLndpZHRoID0gMTAyNDtcbmNhbnZhcy5oZWlnaHQgPSA1NzY7XG5cbmxldCBjb2xsaXNpb25zTWFwID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IDcwKSB7XG5cdGNvbGxpc2lvbnNNYXAucHVzaChjb2xsaXNpb25zLnNsaWNlKGksIGkgKyA3MCkpO1xufVxuXG5sZXQgYmF0dGxlWm9uZXNNYXAgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgYmF0dGxlWm9uZXNEYXRhLmxlbmd0aDsgaSArPSA3MCkge1xuXHRiYXR0bGVab25lc01hcC5wdXNoKGJhdHRsZVpvbmVzRGF0YS5zbGljZShpLCBpICsgNzApKTtcbn1cblxuY29uc3QgYm91bmRhcmllcyA9IFtdO1xuY29uc3Qgb2Zmc2V0ID0ge1xuXHR4OiAtMTQwOCxcblx0eTogLTExMzAsXG59O1xuXG5jb2xsaXNpb25zTWFwLmZvckVhY2goKHJvdywgaSkgPT4ge1xuXHRyb3cuZm9yRWFjaCgodmFsdWUsIGopID0+IHtcblx0XHRpZiAodmFsdWUgPT09IDEwMjUpIHtcblx0XHRcdGJvdW5kYXJpZXMucHVzaChcblx0XHRcdFx0bmV3IEJvdW5kYXJ5KHtcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0eDogaiAqIEJvdW5kYXJ5LndpZHRoICsgb2Zmc2V0LngsXG5cdFx0XHRcdFx0XHR5OiBpICogQm91bmRhcnkuaGVpZ2h0ICsgb2Zmc2V0LnksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5jb25zdCBiYXR0bGVab25lcyA9IFtdO1xuYmF0dGxlWm9uZXNNYXAuZm9yRWFjaCgocm93LCBpKSA9PiB7XG5cdHJvdy5mb3JFYWNoKCh2YWx1ZSwgaikgPT4ge1xuXHRcdGlmICh2YWx1ZSA9PT0gMTAyNSkge1xuXHRcdFx0YmF0dGxlWm9uZXMucHVzaChcblx0XHRcdFx0bmV3IEJvdW5kYXJ5KHtcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0eDogaiAqIEJvdW5kYXJ5LndpZHRoICsgb2Zmc2V0LngsXG5cdFx0XHRcdFx0XHR5OiBpICogQm91bmRhcnkuaGVpZ2h0ICsgb2Zmc2V0LnksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5jb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpOyAvLyBjcmVhdGVzIEhUTUwgaW1nIGVsZW1lbnRcbmltYWdlLnNyYyA9IGJhY2tncm91bmRJbWFnZVVybDtcblxuY29uc3QgZm9yZWdyb3VuZEltYWdlID0gbmV3IEltYWdlKCk7XG5mb3JlZ3JvdW5kSW1hZ2Uuc3JjID0gZm9yZWdyb3VuZEltYWdlVXJsO1xuXG5jb25zdCBwbGF5ZXJEb3duSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbnBsYXllckRvd25JbWFnZS5zcmMgPSBwbGF5ZXJEb3duSW1hZ2VVcmw7XG5jb25zdCBwbGF5ZXJVcEltYWdlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJVcEltYWdlLnNyYyA9IHBsYXllclVwSW1hZ2VVcmw7XG5jb25zdCBwbGF5ZXJMZWZ0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbnBsYXllckxlZnRJbWFnZS5zcmMgPSBwbGF5ZXJMZWZ0SW1hZ2VVcmw7XG5jb25zdCBwbGF5ZXJSaWdodEltYWdlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJSaWdodEltYWdlLnNyYyA9IHBsYXllclJpZ2h0SW1hZ2VVcmw7XG5cbmNvbnN0IHBsYXllcldpZHRoID0gMTkyO1xuY29uc3QgcGxheWVySGVpZ2h0ID0gNjg7XG5jb25zdCBtdm10RGlzdGFuY2UgPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cbmNvbnN0IHBsYXllciA9IG5ldyBTcHJpdGUoe1xuXHRwb3NpdGlvbjoge1xuXHRcdHg6IGNhbnZhcy53aWR0aCAvIDIgLSBwbGF5ZXJXaWR0aCAvIDQgLyAyLFxuXHRcdHk6IGNhbnZhcy5oZWlnaHQgLyAyIC0gcGxheWVySGVpZ2h0IC8gMixcblx0fSxcblx0aW1hZ2U6IHBsYXllckRvd25JbWFnZSxcblx0ZnJhbWVzOiB7XG5cdFx0bWF4OiA0LFxuXHRcdGhvbGQ6IDEwLFxuXHR9LFxuXHRzcHJpdGVzOiB7XG5cdFx0dXA6IHBsYXllclVwSW1hZ2UsXG5cdFx0ZG93bjogcGxheWVyRG93bkltYWdlLFxuXHRcdGxlZnQ6IHBsYXllckxlZnRJbWFnZSxcblx0XHRyaWdodDogcGxheWVyUmlnaHRJbWFnZSxcblx0fSxcbn0pO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IFNwcml0ZSh7XG5cdHBvc2l0aW9uOiB7XG5cdFx0eDogb2Zmc2V0LngsXG5cdFx0eTogb2Zmc2V0LnksXG5cdH0sXG5cdGltYWdlOiBpbWFnZSxcbn0pO1xuXG5jb25zdCBmb3JlZ3JvdW5kID0gbmV3IFNwcml0ZSh7XG5cdHBvc2l0aW9uOiB7XG5cdFx0eDogb2Zmc2V0LngsXG5cdFx0eTogb2Zmc2V0LnksXG5cdH0sXG5cdGltYWdlOiBmb3JlZ3JvdW5kSW1hZ2UsXG59KTtcblxuY29uc3Qga2V5cyA9IHtcblx0dXA6IHtcblx0XHRwcmVzc2VkOiBmYWxzZSxcblx0fSxcblx0ZG93bjoge1xuXHRcdHByZXNzZWQ6IGZhbHNlLFxuXHR9LFxuXHRsZWZ0OiB7XG5cdFx0cHJlc3NlZDogZmFsc2UsXG5cdH0sXG5cdHJpZ2h0OiB7XG5cdFx0cHJlc3NlZDogZmFsc2UsXG5cdH0sXG59O1xuXG5jb25zdCBtb3ZhYmxlcyA9IFtiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kLCAuLi5ib3VuZGFyaWVzLCAuLi5iYXR0bGVab25lc107XG5cbmZ1bmN0aW9uIHNoYXBlQ29sbGlzaW9uKHsgc2hhcGUxLCBzaGFwZTIgfSkge1xuXHRyZXR1cm4gKFxuXHRcdHNoYXBlMS5wb3NpdGlvbi54ICsgc2hhcGUxLndpZHRoID49IHNoYXBlMi5wb3NpdGlvbi54ICYmXG5cdFx0c2hhcGUxLnBvc2l0aW9uLnggPD0gc2hhcGUyLnBvc2l0aW9uLnggKyBzaGFwZTIud2lkdGggJiZcblx0XHRzaGFwZTEucG9zaXRpb24ueSArIHNoYXBlMS5oZWlnaHQgKiAwLjcgPj0gc2hhcGUyLnBvc2l0aW9uLnkgJiZcblx0XHRzaGFwZTEucG9zaXRpb24ueSA8PSBzaGFwZTIucG9zaXRpb24ueSArIHNoYXBlMi5oZWlnaHQgKiAwLjJcblx0KTtcbn1cblxuY29uc3QgYmF0dGxlID0ge1xuXHRpbml0aWF0ZWQ6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcblx0Y29uc3QgYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXHRiYWNrZ3JvdW5kLmRyYXcoKTtcblx0Ym91bmRhcmllcy5mb3JFYWNoKChib3VuZGFyeSkgPT4ge1xuXHRcdGJvdW5kYXJ5LmRyYXcoKTtcblx0fSk7XG5cdGJhdHRsZVpvbmVzLmZvckVhY2goKGJhdHRsZVpvbmUpID0+IHtcblx0XHRiYXR0bGVab25lLmRyYXcoKTtcblx0fSk7XG5cdHBsYXllci5kcmF3KCk7XG5cdGZvcmVncm91bmQuZHJhdygpO1xuXG5cdC8vIE1PVkVNRU5UIC8vXG5cdGxldCBtb3ZpbmcgPSB0cnVlO1xuXHRwbGF5ZXIuYW5pbWF0ZSA9IGZhbHNlO1xuXG5cdC8vIEJhdHRsZSBhY3RpdmF0aW9uXG5cdGlmIChiYXR0bGUuaW5pdGlhdGVkKSByZXR1cm47IC8vIHNraXAgYmF0dGxlIGFjdGl2YXRpb24gaWYgaW4gYmF0dGxlXG5cblx0aWYgKFxuXHRcdGtleXMudXAucHJlc3NlZCB8fFxuXHRcdGtleXMuZG93bi5wcmVzc2VkIHx8XG5cdFx0a2V5cy5sZWZ0LnByZXNzZWQgfHxcblx0XHRrZXlzLnJpZ2h0LnByZXNzZWRcblx0KSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXR0bGVab25lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYmF0dGxlWm9uZSA9IGJhdHRsZVpvbmVzW2ldO1xuXHRcdFx0Y29uc3Qgb3ZlcmxhcFggPVxuXHRcdFx0XHRNYXRoLm1pbihcblx0XHRcdFx0XHRwbGF5ZXIucG9zaXRpb24ueCArIHBsYXllci53aWR0aCxcblx0XHRcdFx0XHRiYXR0bGVab25lLnBvc2l0aW9uLnggKyBiYXR0bGVab25lLndpZHRoXG5cdFx0XHRcdCkgLSBNYXRoLm1heChwbGF5ZXIucG9zaXRpb24ueCwgYmF0dGxlWm9uZS5wb3NpdGlvbi54KTtcblx0XHRcdGNvbnN0IG92ZXJsYXBZID1cblx0XHRcdFx0TWF0aC5taW4oXG5cdFx0XHRcdFx0cGxheWVyLnBvc2l0aW9uLnkgKyBwbGF5ZXIuaGVpZ2h0LFxuXHRcdFx0XHRcdGJhdHRsZVpvbmUucG9zaXRpb24ueSArIGJhdHRsZVpvbmUuaGVpZ2h0XG5cdFx0XHRcdCkgLSBNYXRoLm1heChwbGF5ZXIucG9zaXRpb24ueSwgYmF0dGxlWm9uZS5wb3NpdGlvbi55KTtcblx0XHRcdGNvbnN0IG92ZXJsYXBwaW5nQXJlYSA9IG92ZXJsYXBYICogb3ZlcmxhcFk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjogYmF0dGxlWm9uZSxcblx0XHRcdFx0fSkgJiZcblx0XHRcdFx0b3ZlcmxhcHBpbmdBcmVhID4gKHBsYXllci53aWR0aCAqIHBsYXllci5oZWlnaHQpIC8gMiAmJlxuXHRcdFx0XHRNYXRoLnJhbmRvbSgpIDwgMC4wMlxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIGRlYWN0aXZlIGN1cnJlbnQgYW5pbWF0aW9uIGxvb3Bcblx0XHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcblxuXHRcdFx0XHRhdWRpby5tYXAuc3RvcCgpO1xuXHRcdFx0XHRhdWRpby5pbml0QmF0dGxlLnBsYXkoKTtcblx0XHRcdFx0YXVkaW8uYmF0dGxlLnBsYXkoKTtcblxuXHRcdFx0XHRiYXR0bGUuaW5pdGlhdGVkID0gdHJ1ZTtcblx0XHRcdFx0Z3NhcC50byhcIiNvdmVybGFwV3JhcFwiLCB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRyZXBlYXQ6IDMsXG5cdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdG9uQ29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHRnc2FwLnRvKFwiI292ZXJsYXBXcmFwXCIsIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuNCxcblx0XHRcdFx0XHRcdFx0b25Db21wbGV0ZSgpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBhY3RpdmUgbmV3IGFuaW1hdGlvbiBsb29wXG5cdFx0XHRcdFx0XHRcdFx0aW5pdEJhdHRsZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVCYXR0bGUoKTtcblx0XHRcdFx0XHRcdFx0XHRnc2FwLnRvKFwiI292ZXJsYXBXcmFwXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChrZXlzLmRvd24ucHJlc3NlZCAmJiBsYXN0S2V5ID09PSBcImRvd25cIikge1xuXHRcdHBsYXllci5hbmltYXRlID0gdHJ1ZTtcblx0XHRwbGF5ZXIuaW1hZ2UgPSBwbGF5ZXIuc3ByaXRlcy5kb3duO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYm91bmRhcnkgPSBib3VuZGFyaWVzW2ldO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFwZUNvbGxpc2lvbih7XG5cdFx0XHRcdFx0c2hhcGUxOiBwbGF5ZXIsXG5cdFx0XHRcdFx0c2hhcGUyOiB7XG5cdFx0XHRcdFx0XHQuLi5ib3VuZGFyeSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHg6IGJvdW5kYXJ5LnBvc2l0aW9uLngsXG5cdFx0XHRcdFx0XHRcdHk6IGJvdW5kYXJ5LnBvc2l0aW9uLnkgLSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gMixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRtb3ZpbmcgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1vdmluZykge1xuXHRcdFx0bW92YWJsZXMuZm9yRWFjaCgobW92YWJsZSkgPT4ge1xuXHRcdFx0XHRtb3ZhYmxlLnBvc2l0aW9uLnkgLT0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIGJhY2tncm91bmQucG9zaXRpb24ueSAtPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdH0gZWxzZSBpZiAoa2V5cy51cC5wcmVzc2VkICYmIGxhc3RLZXkgPT09IFwidXBcIikge1xuXHRcdHBsYXllci5hbmltYXRlID0gdHJ1ZTtcblx0XHRwbGF5ZXIuaW1hZ2UgPSBwbGF5ZXIuc3ByaXRlcy51cDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJvdW5kYXJ5ID0gYm91bmRhcmllc1tpXTtcblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjoge1xuXHRcdFx0XHRcdFx0Li4uYm91bmRhcnksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4OiBib3VuZGFyeS5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdFx0XHR5OiBib3VuZGFyeS5wb3NpdGlvbi55ICsgcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRtb3ZhYmxlcy5mb3JFYWNoKChtb3ZhYmxlKSA9PiB7XG5cdFx0XHRcdG1vdmFibGUucG9zaXRpb24ueSArPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoa2V5cy5sZWZ0LnByZXNzZWQgJiYgbGFzdEtleSA9PT0gXCJsZWZ0XCIpIHtcblx0XHRwbGF5ZXIuYW5pbWF0ZSA9IHRydWU7XG5cdFx0cGxheWVyLmltYWdlID0gcGxheWVyLnNwcml0ZXMubGVmdDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJvdW5kYXJ5ID0gYm91bmRhcmllc1tpXTtcblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjoge1xuXHRcdFx0XHRcdFx0Li4uYm91bmRhcnksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4OiBib3VuZGFyeS5wb3NpdGlvbi54ICsgcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyLFxuXHRcdFx0XHRcdFx0XHR5OiBib3VuZGFyeS5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRtb3ZhYmxlcy5mb3JFYWNoKChtb3ZhYmxlKSA9PiB7XG5cdFx0XHRcdG1vdmFibGUucG9zaXRpb24ueCArPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoa2V5cy5yaWdodC5wcmVzc2VkICYmIGxhc3RLZXkgPT09IFwicmlnaHRcIikge1xuXHRcdHBsYXllci5hbmltYXRlID0gdHJ1ZTtcblx0XHRwbGF5ZXIuaW1hZ2UgPSBwbGF5ZXIuc3ByaXRlcy5yaWdodDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJvdW5kYXJ5ID0gYm91bmRhcmllc1tpXTtcblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjoge1xuXHRcdFx0XHRcdFx0Li4uYm91bmRhcnksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4OiBib3VuZGFyeS5wb3NpdGlvbi54IC0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyLFxuXHRcdFx0XHRcdFx0XHR5OiBib3VuZGFyeS5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRtb3ZhYmxlcy5mb3JFYWNoKChtb3ZhYmxlKSA9PiB7XG5cdFx0XHRcdG1vdmFibGUucG9zaXRpb24ueCAtPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbi8vIGFuaW1hdGUoKTsgLy8gRk9SIFRFU1RJTkcsIFVOQ09NTUVOVCBXSEVOIEZJTklTSEVEXG5cbmxldCBsYXN0S2V5ID0gXCJcIjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRpZiAoZS5rZXkgPT09IFwic1wiIHx8IGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG5cdFx0a2V5cy5kb3duLnByZXNzZWQgPSB0cnVlO1xuXHRcdGxhc3RLZXkgPSBcImRvd25cIjtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG5cdFx0a2V5cy5yaWdodC5wcmVzc2VkID0gdHJ1ZTtcblx0XHRsYXN0S2V5ID0gXCJyaWdodFwiO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuXHRcdGtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZTtcblx0XHRsYXN0S2V5ID0gXCJsZWZ0XCI7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwid1wiIHx8IGUua2V5ID09PSBcIkFycm93VXBcIikge1xuXHRcdGtleXMudXAucHJlc3NlZCA9IHRydWU7XG5cdFx0bGFzdEtleSA9IFwidXBcIjtcblx0fVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcblx0aWYgKGUua2V5ID09PSBcInNcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuXHRcdGtleXMuZG93bi5wcmVzc2VkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuXHRcdGtleXMucmlnaHQucHJlc3NlZCA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuXHRcdGtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwid1wiIHx8IGUua2V5ID09PSBcIkFycm93VXBcIikge1xuXHRcdGtleXMudXAucHJlc3NlZCA9IGZhbHNlO1xuXHR9XG59KTtcblxubGV0IGNsaWNrZWQgPSBmYWxzZTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRpZiAoIWNsaWNrZWQpIHtcblx0XHRhdWRpby5tYXAucGxheSgpO1xuXHRcdGNsaWNrZWQgPSB0cnVlO1xuXHR9XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoKSA9PiB7XG5cdGlmICghY2xpY2tlZCkge1xuXHRcdGF1ZGlvLm1hcC5wbGF5KCk7XG5cdFx0Y2xpY2tlZCA9IHRydWU7XG5cdH1cbn0pO1xuXG5leHBvcnQgeyBhbmltYXRlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=