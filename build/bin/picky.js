(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Picky", [], factory);
	else if(typeof exports === 'object')
		exports["Picky"] = factory();
	else
		root["Picky"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Popup_1 = __webpack_require__(1);
	var Toggle_1 = __webpack_require__(8);
	var App_1 = __webpack_require__(4);
	var ColourPicker = (function () {
	    function ColourPicker(options) {
	        console.log('new picky!');
	        this.setup(options);
	    }
	    ColourPicker.prototype.setup = function (options) {
	        App_1.default.popup = new Popup_1.Popup(options);
	        App_1.default.toggle = new Toggle_1.Toggle(options);
	        App_1.default.toggle.setup();
	        App_1.default.popup.setup();
	    };
	    ColourPicker.prototype.destroy = function () {
	    };
	    return ColourPicker;
	}());
	exports.ColourPicker = ColourPicker;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Find_1 = __webpack_require__(2);
	var App_1 = __webpack_require__(4);
	var Css_1 = __webpack_require__(5);
	var HuePane_1 = __webpack_require__(6);
	var TonePane_1 = __webpack_require__(7);
	var Popup = (function () {
	    function Popup(options) {
	        this.options = options;
	    }
	    Popup.prototype.setup = function () {
	        this.element = this.getElement();
	        App_1.default.tonePane = new TonePane_1.TonePane(this.options);
	        App_1.default.huePane = new HuePane_1.HuePane(this.options);
	        App_1.default.tonePane.setup();
	        App_1.default.huePane.setup();
	    };
	    Popup.prototype.getElement = function () {
	        var element;
	        element = Find_1.Find.one(this.options.elements.popup);
	        if (element)
	            return element;
	        return this.createElement();
	    };
	    Popup.prototype.createElement = function () {
	        var element;
	        element = document.createElement('div');
	        Css_1.default.addClass(element, 'picky-popup');
	        App_1.default.toggle.element.appendChild(element);
	        return element;
	    };
	    Popup.prototype.toggleVisibility = function () {
	        Css_1.default.toggleClass(this.element, 'active');
	    };
	    return Popup;
	}());
	exports.Popup = Popup;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StringUtils_1 = __webpack_require__(3);
	var Find = (function () {
	    function Find() {
	    }
	    Find.any = function (selector) {
	        if (!selector)
	            return null;
	        if (~selector.indexOf('#'))
	            return Find.byId(selector);
	        if (~selector.indexOf('.'))
	            return Find.byClass(selector);
	        return null;
	    };
	    Find.one = function (selector) {
	        var result;
	        result = Find.any(selector);
	        if (!result)
	            return null;
	        if (result instanceof HTMLElement)
	            return result;
	        return result.item(0);
	    };
	    Find.byClass = function (className) {
	        return document.getElementsByClassName(StringUtils_1.StringUtils.trim(className, 1));
	    };
	    Find.byId = function (id) {
	        return document.getElementById(StringUtils_1.StringUtils.trim(id, 1));
	    };
	    return Find;
	}());
	exports.Find = Find;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var StringUtils = (function () {
	    function StringUtils() {
	    }
	    StringUtils.trim = function (input, start, end) {
	        var output, split;
	        output = input.trim();
	        if (!start && !end)
	            return output;
	        split = output.split('');
	        split.splice(0, start);
	        split.splice(-1, end);
	        return split.join('');
	    };
	    return StringUtils;
	}());
	exports.StringUtils = StringUtils;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var App = (function () {
	    function App() {
	    }
	    return App;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var Css = (function () {
	    function Css() {
	    }
	    Css.addClass = function (element, className) {
	        if (!element)
	            return false;
	        element.classList.add(className);
	    };
	    Css.removeClass = function (element, className) {
	        if (!element)
	            return false;
	        element.classList.remove(className);
	    };
	    Css.toggleClass = function (element, className, toggle) {
	        if (Css.hasClass(element, className) === false) {
	            Css.addClass(element, className);
	        }
	        else {
	            Css.removeClass(element, className);
	        }
	    };
	    Css.hasClass = function (element, className) {
	        if (!element)
	            return false;
	        return element.classList.contains(className);
	    };
	    return Css;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Css;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var Css_1 = __webpack_require__(5);
	var HuePane = (function () {
	    function HuePane(options) {
	        this.options = options;
	    }
	    HuePane.prototype.setup = function () {
	        this.element = this.getElement();
	    };
	    HuePane.prototype.getElement = function () {
	        return this.createElement();
	    };
	    HuePane.prototype.createElement = function () {
	        var element;
	        element = document.createElement('svg');
	        Css_1.default.addClass(element, 'picky-hue-pane');
	        App_1.default.popup.element.appendChild(element);
	        return element;
	    };
	    HuePane.prototype.drawHues = function () {
	    };
	    return HuePane;
	}());
	exports.HuePane = HuePane;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var Css_1 = __webpack_require__(5);
	var TonePane = (function () {
	    function TonePane(options) {
	        this.options = options;
	    }
	    TonePane.prototype.setup = function () {
	        this.element = this.getElement();
	    };
	    TonePane.prototype.getElement = function () {
	        return this.createElement();
	    };
	    TonePane.prototype.createElement = function () {
	        var element;
	        element = document.createElement('svg');
	        Css_1.default.addClass(element, 'picky-tone-pane');
	        App_1.default.popup.element.appendChild(element);
	        return element;
	    };
	    return TonePane;
	}());
	exports.TonePane = TonePane;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Find_1 = __webpack_require__(2);
	var App_1 = __webpack_require__(4);
	var Toggle = (function () {
	    function Toggle(options) {
	        this.options = options;
	    }
	    Toggle.prototype.setup = function () {
	        this.element = this.getElement();
	        this.listen();
	    };
	    Toggle.prototype.getElement = function () {
	        return Find_1.Find.one(this.options.elements.toggle);
	    };
	    Toggle.prototype.listen = function () {
	        this.element.addEventListener('click', function (event) { return App_1.default.popup.toggleVisibility(); });
	    };
	    return Toggle;
	}());
	exports.Toggle = Toggle;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=picky.js.map