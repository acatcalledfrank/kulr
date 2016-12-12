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
	var Toggle_1 = __webpack_require__(25);
	var App_1 = __webpack_require__(4);
	var UniqueId_1 = __webpack_require__(15);
	var ColourPalette_1 = __webpack_require__(28);
	var Events_1 = __webpack_require__(33);
	var State_1 = __webpack_require__(35);
	var ColourPicker = (function () {
	    function ColourPicker(options) {
	        this.setup(options);
	    }
	    ColourPicker.prototype.setup = function (options) {
	        this.iid = UniqueId_1.getUniqueId('picky-');
	        App_1.default.state = new State_1.State(this.iid, options);
	        App_1.default.events = new Events_1.Events(this.iid, options);
	        App_1.default.palette = new ColourPalette_1.ColourPalette(this.iid, options);
	        App_1.default.popup = new Popup_1.Popup(this.iid, options);
	        App_1.default.toggle = new Toggle_1.Toggle(this.iid, options);
	        App_1.default.events.setup();
	        App_1.default.palette.setup();
	        App_1.default.toggle.setup();
	        App_1.default.popup.setup();
	        App_1.default.palette.setHexString(options.defaultColour || '000000');
	    };
	    Object.defineProperty(ColourPicker.prototype, "onUpdate", {
	        get: function () {
	            return App_1.default.events.updateColour;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ColourPicker.prototype, "hex", {
	        get: function () {
	            return App_1.default.palette.getHexString();
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	var HuePane_1 = __webpack_require__(5);
	var TonePane_1 = __webpack_require__(18);
	var Swatch_1 = __webpack_require__(21);
	var TextInput_1 = __webpack_require__(22);
	var Css_1 = __webpack_require__(17);
	var Css_2 = __webpack_require__(17);
	var ShowElement_1 = __webpack_require__(24);
	var Popup = (function () {
	    function Popup(iid, options) {
	        var _this = this;
	        this.iid = iid;
	        this.options = options;
	        this.onTogglePopup = function (iid) {
	            if (iid !== _this.iid) {
	                Css_1.removeClass(_this.element, 'open');
	                return;
	            }
	            Css_1.toggleClass(_this.element, 'open', App_1.default.state.open);
	        };
	    }
	    Popup.prototype.setup = function () {
	        var _this = this;
	        this.element = this.getElement();
	        ShowElement_1.hideElement(this.element);
	        this.element.dataset['iid'] = this.iid;
	        Swatch_1.createSwatches(this.options.elements.swatches);
	        App_1.default.textInput = new TextInput_1.TextInput(this.iid, this.options);
	        App_1.default.tonePane = new TonePane_1.TonePane(this.iid, this.options);
	        App_1.default.huePane = new HuePane_1.HuePane(this.iid, this.options);
	        Swatch_1.setupSwatches();
	        App_1.default.textInput.setup();
	        App_1.default.tonePane.setup();
	        App_1.default.huePane.setup();
	        this.listen();
	        setTimeout(function () { return ShowElement_1.showElement(_this.element); }, 2000);
	    };
	    Popup.prototype.getElement = function () {
	        var element;
	        element = Find_1.findOne(this.options.elements.popup);
	        if (element)
	            return element;
	        return this.createElement();
	    };
	    Popup.prototype.createElement = function () {
	        var element;
	        element = document.createElement('div');
	        Css_2.addClass(element, 'picky-popup');
	        App_1.default.toggle.element.parentNode.insertBefore(element, App_1.default.toggle.element.nextSibling);
	        return element;
	    };
	    Popup.prototype.listen = function () {
	        App_1.default.events.togglePopup.add(this.onTogglePopup);
	    };
	    return Popup;
	}());
	exports.Popup = Popup;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var StringUtils_1 = __webpack_require__(3);
	function findAny(selector) {
	    if (!selector)
	        return null;
	    if (~selector.indexOf('#'))
	        return findById(selector);
	    if (~selector.indexOf('.'))
	        return findByClass(selector);
	    return null;
	}
	exports.findAny = findAny;
	function findOne(selector) {
	    var result;
	    result = findAny(selector);
	    if (!result)
	        return null;
	    if (result instanceof HTMLElement)
	        return result;
	    return result.item(0);
	}
	exports.findOne = findOne;
	function findByClass(className) {
	    return document.getElementsByClassName(StringUtils_1.trimString(className, 1));
	}
	exports.findByClass = findByClass;
	function findById(id) {
	    return document.getElementById(StringUtils_1.trimString(id, 1));
	}
	exports.findById = findById;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	function trimString(input, start, end) {
	    var output, split;
	    output = input.trim();
	    if (!start && !end)
	        return output;
	    split = output.split('');
	    split.splice(0, start);
	    split.splice(-1, end);
	    return split.join('');
	}
	exports.trimString = trimString;
	function prefixString(input, prefix, length) {
	    if (length === void 0) { length = input.length + 1; }
	    var characters;
	    characters = input.split('');
	    while (characters.length < length) {
	        characters.unshift(prefix);
	    }
	    return characters.join('');
	}
	exports.prefixString = prefixString;


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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Find_1 = __webpack_require__(2);
	var CreateGradientElement_1 = __webpack_require__(6);
	var SetGradientDirection_1 = __webpack_require__(7);
	var FillGradient_1 = __webpack_require__(8);
	var CreateColourRect_1 = __webpack_require__(9);
	var Interactions_1 = __webpack_require__(11);
	var UniqueId_1 = __webpack_require__(15);
	var FillContainer_1 = __webpack_require__(16);
	var Css_1 = __webpack_require__(17);
	var HuePane = (function () {
	    function HuePane(iid, options) {
	        this.iid = iid;
	        this.options = options;
	    }
	    HuePane.prototype.setup = function () {
	        this.element = this.createGradientElement();
	        CreateColourRect_1.default(this.element, this.drawGradient());
	        new Interactions_1.Interactions(this.element).listen();
	    };
	    HuePane.prototype.createGradientElement = function () {
	        var element;
	        element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	        Css_1.addClass(element, 'picky-hue-pane__palette');
	        FillContainer_1.fillContainer(element);
	        this.getContainer().appendChild(element);
	        return element;
	    };
	    HuePane.prototype.getContainer = function () {
	        return Find_1.findOne(this.options.elements.hue_pane);
	    };
	    HuePane.prototype.drawGradient = function () {
	        var id, gradient, stops;
	        id = UniqueId_1.getUniqueId('picky-svg-gradient-');
	        stops =
	            [
	                {
	                    colour: '#ff0000',
	                    offset: '0%'
	                },
	                {
	                    colour: '#ff00ff',
	                    offset: '16%'
	                },
	                {
	                    colour: '#0000ff',
	                    offset: '33%'
	                },
	                {
	                    colour: '#00ffff',
	                    offset: '50%'
	                },
	                {
	                    colour: '#00ff00',
	                    offset: '67%'
	                },
	                {
	                    colour: '#ffff00',
	                    offset: '84%'
	                },
	                {
	                    colour: '#ff0000',
	                    offset: '100%'
	                }
	            ];
	        gradient = CreateGradientElement_1.default(this.element, id);
	        SetGradientDirection_1.default(gradient, ['0', '0', '0', '100%']);
	        FillGradient_1.default(gradient, stops);
	        return id;
	    };
	    HuePane.prototype.setHue = function (hue) {
	    };
	    return HuePane;
	}());
	exports.HuePane = HuePane;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (svg, id, type) {
	    if (type === void 0) { type = 'linearGradient'; }
	    var svg_ns, defs, gradient;
	    svg_ns = svg.namespaceURI;
	    defs = (svg.querySelector('defs') || svg.insertBefore(document.createElementNS(svg_ns, 'defs'), svg.firstChild));
	    gradient = document.createElementNS(svg_ns, type);
	    gradient.setAttribute('id', id);
	    gradient.setAttribute('x1', '0%');
	    gradient.setAttribute('y1', '0%');
	    gradient.setAttribute('x2', '0%');
	    gradient.setAttribute('y2', '100%');
	    defs.appendChild(gradient);
	    return gradient;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (gradient, points) {
	    gradient.setAttribute('x1', points[0]);
	    gradient.setAttribute('y1', points[1]);
	    gradient.setAttribute('x2', points[2]);
	    gradient.setAttribute('y2', points[3]);
	    return gradient;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (gradient, stops) {
	    var svg_ns, stop;
	    svg_ns = gradient.parentElement.namespaceURI;
	    for (var i = 0; i < stops.length; i++) {
	        stop = document.createElementNS(svg_ns, 'stop');
	        stop.setAttribute('offset', stops[i].offset);
	        stop.setAttribute('stop-color', stops[i].colour);
	        stop.setAttribute('stop-opacity', stops[i].opacity || '1');
	        gradient.appendChild(stop);
	    }
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var UrlUtils_1 = __webpack_require__(10);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (svg, gradient_id) {
	    var rect;
	    rect = document.createElementNS(svg.namespaceURI, 'rect');
	    rect.setAttribute('x', '0');
	    rect.setAttribute('y', '0');
	    rect.setAttribute('width', '100%');
	    rect.setAttribute('height', '100%');
	    rect.setAttribute('fill', 'url(' + UrlUtils_1.getCurrentUrl() + '#' + gradient_id + ')');
	    svg.appendChild(rect);
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	function getCurrentUrl() {
	    return window.location.href;
	}
	exports.getCurrentUrl = getCurrentUrl;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var GetHueAtCursor_1 = __webpack_require__(12);
	var PreventSelections_1 = __webpack_require__(14);
	var Interactions = (function () {
	    function Interactions(element) {
	        var _this = this;
	        this.element = element;
	        this.onMouseDown = function () {
	            PreventSelections_1.preventSelections();
	            App_1.default.state.dragging = true;
	            document.addEventListener('mousemove', _this.onMouseMove);
	            document.addEventListener('mouseup', _this.onMouseUp);
	        };
	        this.onMouseMove = function (event) {
	            var hue;
	            hue = GetHueAtCursor_1.getHueAtCursor(_this.element, event);
	            App_1.default.palette.setHue(hue);
	            App_1.default.events.updateColour.dispatch(App_1.default.palette.getHexString());
	        };
	        this.onMouseUp = function (event) {
	            PreventSelections_1.preventSelections(false);
	            _this.onMouseMove(event);
	            App_1.default.state.dragging = false;
	            document.removeEventListener('mousemove', _this.onMouseMove);
	            document.removeEventListener('mouseup', _this.onMouseUp);
	        };
	    }
	    Interactions.prototype.listen = function () {
	        this.element.addEventListener('mousedown', this.onMouseDown);
	    };
	    return Interactions;
	}());
	exports.Interactions = Interactions;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Clamp_1 = __webpack_require__(13);
	function getHueAtCursor(target, event) {
	    var client_rect, mouse_offset, hue;
	    client_rect = target.getBoundingClientRect();
	    mouse_offset = event.pageY - client_rect.top;
	    mouse_offset = Clamp_1.clamp(mouse_offset, 0, client_rect.height);
	    hue = 1 - (mouse_offset / client_rect.height);
	    return hue;
	}
	exports.getHueAtCursor = getHueAtCursor;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	function clamp(n, min, max) {
	    return Math.max(min, Math.min(n, max));
	}
	exports.clamp = clamp;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	function preventSelections(preventSelections) {
	    if (preventSelections === void 0) { preventSelections = true; }
	    var styles, value;
	    styles =
	        [
	            'webkitTouchCallout',
	            'webkitUserSelect',
	            'mozUserSelect',
	            'msUserSelect',
	            'userSelect'
	        ];
	    value = preventSelections === true ? 'none' : '';
	    for (var i = 0; i < styles.length; i++) {
	        document.body.style[styles[i]] = value;
	    }
	}
	exports.preventSelections = preventSelections;


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	function getUniqueId(prefix) {
	    if (prefix === void 0) { prefix = ''; }
	    return prefix + Math.random() * 10;
	}
	exports.getUniqueId = getUniqueId;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	function fillContainer(element) {
	    element.style.position = 'absolute';
	    element.style.top = '0px';
	    element.style.left = '0px';
	    element.style.width = '100%';
	    element.style.height = '100%';
	}
	exports.fillContainer = fillContainer;


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	function addClass(element, className) {
	    if (!element)
	        return false;
	    element.classList.add(className);
	}
	exports.addClass = addClass;
	function removeClass(element, className) {
	    if (!element)
	        return false;
	    element.classList.remove(className);
	}
	exports.removeClass = removeClass;
	function toggleClass(element, className, add) {
	    var has_class;
	    if (add !== undefined) {
	        add ? addClass(element, className) : removeClass(element, className);
	        return;
	    }
	    has_class = hasClass(element, className);
	    if (has_class === false) {
	        addClass(element, className);
	    }
	    else {
	        removeClass(element, className);
	    }
	    return !has_class;
	}
	exports.toggleClass = toggleClass;
	function hasClass(element, className) {
	    if (!element)
	        return false;
	    return element.classList.contains(className);
	}
	exports.hasClass = hasClass;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var CreateGradientElement_1 = __webpack_require__(6);
	var SetGradientDirection_1 = __webpack_require__(7);
	var FillGradient_1 = __webpack_require__(8);
	var CreateColourRect_1 = __webpack_require__(9);
	var Interactions_1 = __webpack_require__(19);
	var UniqueId_1 = __webpack_require__(15);
	var Find_1 = __webpack_require__(2);
	var FillContainer_1 = __webpack_require__(16);
	var Css_1 = __webpack_require__(17);
	var TonePane = (function () {
	    function TonePane(iid, options) {
	        var _this = this;
	        this.iid = iid;
	        this.options = options;
	        this.onColourSet = function () {
	            _this.setHue(App_1.default.palette.hsl.hue * 360);
	        };
	    }
	    TonePane.prototype.setup = function () {
	        this.element = this.createGradientElement();
	        CreateColourRect_1.default(this.element, this.drawGradient('#ffffff', ['0', '0', '100%', '0']));
	        CreateColourRect_1.default(this.element, this.drawGradient('#000000', ['0', '100%', '0', '0']));
	        new Interactions_1.Interactions(this.iid, this.element).listen();
	        App_1.default.events.updateColour.add(this.onColourSet);
	    };
	    TonePane.prototype.createGradientElement = function () {
	        var element;
	        element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	        Css_1.addClass(element, 'picky-tone-pane__palette');
	        FillContainer_1.fillContainer(element);
	        this.getContainer().appendChild(element);
	        return element;
	    };
	    TonePane.prototype.getContainer = function () {
	        return Find_1.findOne(this.options.elements.tone_pane);
	    };
	    TonePane.prototype.drawGradient = function (fill, direction) {
	        var id, gradient, stops;
	        id = UniqueId_1.getUniqueId('picky-svg-gradient-');
	        stops =
	            [
	                {
	                    colour: fill,
	                    offset: '0%'
	                },
	                {
	                    colour: fill,
	                    opacity: '0',
	                    offset: '100%'
	                }
	            ];
	        gradient = CreateGradientElement_1.default(this.element, id);
	        SetGradientDirection_1.default(gradient, direction);
	        FillGradient_1.default(gradient, stops);
	        return id;
	    };
	    TonePane.prototype.setHue = function (hue) {
	        this.element.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
	    };
	    TonePane.prototype.setSaturation = function (saturation) {
	    };
	    TonePane.prototype.setLightness = function (lightness) {
	    };
	    TonePane.prototype.getCombinedHSLColour = function () {
	    };
	    return TonePane;
	}());
	exports.TonePane = TonePane;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var PreventSelections_1 = __webpack_require__(14);
	var GetColourAtCursor_1 = __webpack_require__(20);
	var Interactions = (function () {
	    function Interactions(iid, element) {
	        var _this = this;
	        this.iid = iid;
	        this.element = element;
	        this.onMouseDown = function () {
	            PreventSelections_1.preventSelections();
	            App_1.default.state.dragging = true;
	            document.addEventListener('mousemove', _this.onMouseMove);
	            document.addEventListener('mouseup', _this.onMouseUp);
	        };
	        this.onMouseMove = function (event) {
	            var hsl;
	            hsl = GetColourAtCursor_1.getSaturationAndLightnessAtCursor(_this.element, event);
	            App_1.default.palette.setSaturation(hsl.saturation);
	            App_1.default.palette.setLightness(hsl.lightness);
	            App_1.default.events.updateColour.dispatch(App_1.default.palette.getHexString());
	        };
	        this.onMouseUp = function (event) {
	            PreventSelections_1.preventSelections(false);
	            _this.onMouseMove(event);
	            App_1.default.state.dragging = false;
	            document.removeEventListener('mousemove', _this.onMouseMove);
	            document.removeEventListener('mouseup', _this.onMouseUp);
	        };
	    }
	    Interactions.prototype.listen = function () {
	        this.element.addEventListener('mousedown', this.onMouseDown);
	    };
	    return Interactions;
	}());
	exports.Interactions = Interactions;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Clamp_1 = __webpack_require__(13);
	function getSaturationAndLightnessAtCursor(target, event) {
	    var client_rect, mouse_offset_x, mouse_offset_y, saturation, lightness;
	    client_rect = target.getBoundingClientRect();
	    mouse_offset_x = (event.pageX - client_rect.left) / client_rect.width;
	    mouse_offset_y = (event.pageY - client_rect.top) / client_rect.height;
	    saturation = Clamp_1.clamp(mouse_offset_x, 0, 1);
	    lightness = (1 - Clamp_1.clamp(mouse_offset_y, 0, 1));
	    lightness -= saturation * 0.5 * lightness;
	    return { hue: null, saturation: saturation, lightness: lightness };
	}
	exports.getSaturationAndLightnessAtCursor = getSaturationAndLightnessAtCursor;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Find_1 = __webpack_require__(2);
	var App_1 = __webpack_require__(4);
	var Swatch = (function () {
	    function Swatch(iid, element) {
	        var _this = this;
	        this.iid = iid;
	        this.element = element;
	        this.onColourSet = function () {
	            _this.element.style.backgroundColor = App_1.default.palette.getHexString();
	        };
	    }
	    Swatch.prototype.setup = function () {
	        if (!this.element)
	            return;
	        App_1.default.events.updateColour.add(this.onColourSet);
	    };
	    return Swatch;
	}());
	exports.Swatch = Swatch;
	function createSwatches(selectors) {
	    var _this = this;
	    selectors.map(function (selector) {
	        saveSwatch(new Swatch(_this.iid, Find_1.findOne(selector)));
	    });
	}
	exports.createSwatches = createSwatches;
	function setupSwatches() {
	    getAppSwatchList().map(function (swatch) {
	        swatch.setup();
	    });
	}
	exports.setupSwatches = setupSwatches;
	function getAppSwatchList() {
	    return App_1.default.swatches || (App_1.default.swatches = []);
	}
	function saveSwatch(swatch) {
	    return getAppSwatchList().push(swatch);
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Find_1 = __webpack_require__(2);
	var App_1 = __webpack_require__(4);
	var Interaction_1 = __webpack_require__(23);
	var TextInput = (function () {
	    function TextInput(iid, options) {
	        var _this = this;
	        this.iid = iid;
	        this.options = options;
	        this.onColourSet = function () {
	            if (_this.debounce)
	                clearTimeout(_this.debounce);
	            _this.debounce = setTimeout(function () {
	                _this.element.value = App_1.default.palette.getHexString();
	                _this.debounce = null;
	            }, 500);
	        };
	    }
	    TextInput.prototype.setup = function () {
	        this.element = this.getElement();
	        if (!this.element)
	            return;
	        new Interaction_1.Interactions(this.element).listen();
	        App_1.default.events.updateColour.add(this.onColourSet);
	    };
	    TextInput.prototype.getElement = function () {
	        return Find_1.findOne(this.options.elements.text_input);
	    };
	    return TextInput;
	}());
	exports.TextInput = TextInput;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var Interactions = (function () {
	    function Interactions(element) {
	        var _this = this;
	        this.element = element;
	        this.onContentInput = function () {
	            App_1.default.palette.setHexString(_this.element.value);
	        };
	    }
	    Interactions.prototype.listen = function () {
	        this.element.addEventListener('input', this.onContentInput);
	    };
	    return Interactions;
	}());
	exports.Interactions = Interactions;


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	function showElement(element) {
	    element.style.display = null;
	}
	exports.showElement = showElement;
	function hideElement(element) {
	    element.style.display = 'none';
	}
	exports.hideElement = hideElement;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Find_1 = __webpack_require__(2);
	var App_1 = __webpack_require__(4);
	var Css_1 = __webpack_require__(17);
	var Interactions_1 = __webpack_require__(26);
	var Toggle = (function () {
	    function Toggle(iid, options) {
	        var _this = this;
	        this.iid = iid;
	        this.options = options;
	        this.onClick = function (event) {
	            App_1.default.state.open = !App_1.default.state.open;
	            App_1.default.events.togglePopup.dispatch(_this.iid);
	        };
	        this.onTogglePopup = function (iid) {
	            Css_1.toggleClass(_this.element, 'open', App_1.default.state.open);
	        };
	    }
	    Toggle.prototype.setup = function () {
	        this.element = this.getElement();
	        this.element.dataset['iid'] = this.iid;
	        this.listen();
	        new Interactions_1.Interactions(this.iid, this.options).listen();
	    };
	    Toggle.prototype.getElement = function () {
	        return Find_1.findOne(this.options.elements.toggle);
	    };
	    Toggle.prototype.listen = function () {
	        this.element.addEventListener('click', this.onClick);
	        App_1.default.events.togglePopup.add(this.onTogglePopup);
	    };
	    return Toggle;
	}());
	exports.Toggle = Toggle;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var ClickOutside_1 = __webpack_require__(27);
	var Interactions = (function () {
	    function Interactions(iid, options) {
	        var _this = this;
	        this.iid = iid;
	        this.options = options;
	        this.onTogglePopup = function (iid) {
	            if (iid === _this.iid && App_1.default.state.open) {
	                document.addEventListener('mouseup', _this.onDocumentClick);
	                return;
	            }
	            document.removeEventListener('mouseup', _this.onDocumentClick);
	        };
	        this.onDocumentClick = function (event) {
	            if (ClickOutside_1.clickWasOutside(event, _this.iid) && !App_1.default.state.dragging) {
	                App_1.default.state.open = false;
	                App_1.default.events.togglePopup.dispatch(_this.iid);
	            }
	        };
	    }
	    Interactions.prototype.listen = function () {
	        App_1.default.events.togglePopup.add(this.onTogglePopup);
	    };
	    return Interactions;
	}());
	exports.Interactions = Interactions;


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	function clickWasOutside(event, iid) {
	    var parent;
	    parent = event.target;
	    while (parent) {
	        if (parent.dataset && parent.dataset['iid'] === iid)
	            return false;
	        parent = parent.parentElement;
	    }
	    return true;
	}
	exports.clickWasOutside = clickWasOutside;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var App_1 = __webpack_require__(4);
	var HslToRgb_1 = __webpack_require__(29);
	var RgbToString_1 = __webpack_require__(30);
	var RgbToHsl_1 = __webpack_require__(32);
	var ColourPalette = (function () {
	    function ColourPalette(iid, options) {
	        this.iid = iid;
	        this.options = options;
	    }
	    ColourPalette.prototype.setup = function () {
	        this.hsl = { hue: 0, saturation: 0, lightness: 0 };
	        this.rgb = { r: 0, g: 0, b: 0 };
	    };
	    ColourPalette.prototype.setHue = function (hue) {
	        this.hsl.hue = hue;
	    };
	    ColourPalette.prototype.setSaturation = function (saturation) {
	        this.hsl.saturation = saturation;
	    };
	    ColourPalette.prototype.setLightness = function (lightness) {
	        this.hsl.lightness = lightness;
	    };
	    ColourPalette.prototype.setRgb = function (rgb) {
	    };
	    ColourPalette.prototype.getHsl = function () {
	        return this.hsl;
	    };
	    ColourPalette.prototype.getRgb = function () {
	        return HslToRgb_1.hslToRgb(this.hsl.hue, this.hsl.saturation, this.hsl.lightness);
	    };
	    ColourPalette.prototype.getHexString = function () {
	        return RgbToString_1.rgbToHex(this.getRgb());
	    };
	    ColourPalette.prototype.setHexString = function (hex) {
	        this.hsl = RgbToHsl_1.rgbToHsl(RgbToString_1.hexToRgb(hex));
	        App_1.default.events.updateColour.dispatch(App_1.default.palette.getHexString());
	    };
	    return ColourPalette;
	}());
	exports.ColourPalette = ColourPalette;


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	function hslToRgb(h, s, l) {
	    var r, g, b;
	    if (s === 0) {
	        r = g = b = l;
	    }
	    else {
	        var q, p;
	        q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        p = 2 * l - q;
	        r = hueToRgb(p, q, h + 1 / 3);
	        g = hueToRgb(p, q, h);
	        b = hueToRgb(p, q, h - 1 / 3);
	    }
	    r = Math.round(r * 255);
	    g = Math.round(g * 255);
	    b = Math.round(b * 255);
	    return { r: r, g: g, b: b };
	}
	exports.hslToRgb = hslToRgb;
	function hueToRgb(p, q, t) {
	    if (t < 0)
	        t += 1;
	    if (t > 1)
	        t -= 1;
	    if (t < 1 / 6)
	        return p + (q - p) * 6 * t;
	    if (t < 1 / 2)
	        return q;
	    if (t < 2 / 3)
	        return p + (q - p) * (2 / 3 - t) * 6;
	    return p;
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Validator_1 = __webpack_require__(31);
	function rgbToHex(rgb) {
	    var hex;
	    hex = ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
	    return '#' + hex;
	}
	exports.rgbToHex = rgbToHex;
	function hexToRgb(hex) {
	    var bigint, r, g, b;
	    hex = Validator_1.dehashString(expandShortHexCode(hex));
	    bigint = parseInt(hex, 16);
	    r = (bigint >> 16) & 255;
	    g = (bigint >> 8) & 255;
	    b = bigint & 255;
	    return { r: r, g: g, b: b };
	}
	exports.hexToRgb = hexToRgb;
	function expandShortHexCode(hex) {
	    var regexp;
	    regexp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    return hex.replace(regexp, function (m, r, g, b) {
	        return r + r + g + g + b + b;
	    });
	}
	exports.expandShortHexCode = expandShortHexCode;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	function hashString(hex) {
	    var characters;
	    if (isHashed(hex))
	        return hex;
	    characters = hex.split('');
	    characters.unshift('#');
	    return characters.join('');
	}
	exports.hashString = hashString;
	function dehashString(hex) {
	    var characters;
	    if (isHashed(hex) === false)
	        return hex;
	    characters = hex.split('');
	    characters.shift();
	    return characters.join('');
	}
	exports.dehashString = dehashString;
	function isHashed(hex) {
	    var characters;
	    characters = hex.split('');
	    return characters[0] === '#';
	}


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	function rgbToHsl(rgb) {
	    var max, min, r, g, b, h, s, l, d;
	    r = rgb.r / 255;
	    g = rgb.g / 255;
	    b = rgb.b / 255;
	    max = Math.max(r, g, b);
	    min = Math.min(r, g, b);
	    h = s = l = (max + min) / 2;
	    if (max == min) {
	        h = s = 0;
	    }
	    else {
	        d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch (max) {
	            case r:
	                h = (g - b) / d + (g < b ? 6 : 0);
	                break;
	            case g:
	                h = (b - r) / d + 2;
	                break;
	            case b:
	                h = (r - g) / d + 4;
	                break;
	        }
	        h /= 6;
	    }
	    return { hue: h, saturation: s, lightness: l };
	}
	exports.rgbToHsl = rgbToHsl;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var signals = __webpack_require__(34);
	var Events = (function () {
	    function Events(iid, options) {
	        this.iid = iid;
	        this.options = options;
	    }
	    Events.prototype.setup = function () {
	        this.updateColour = new signals.Signal();
	        this.togglePopup = new signals.Signal();
	    };
	    return Events;
	}());
	exports.Events = Events;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
	/*global define:false, require:false, exports:false, module:false, signals:false */
	
	/** @license
	 * JS Signals <http://millermedeiros.github.com/js-signals/>
	 * Released under the MIT license
	 * Author: Miller Medeiros
	 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
	 */
	
	(function(global){
	
	    // SignalBinding -------------------------------------------------
	    //================================================================
	
	    /**
	     * Object that represents a binding between a Signal and a listener function.
	     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
	     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
	     * @author Miller Medeiros
	     * @constructor
	     * @internal
	     * @name SignalBinding
	     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
	     * @param {Function} listener Handler function bound to the signal.
	     * @param {boolean} isOnce If binding should be executed just once.
	     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
	     * @param {Number} [priority] The priority level of the event listener. (default = 0).
	     */
	    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
	
	        /**
	         * Handler function bound to the signal.
	         * @type Function
	         * @private
	         */
	        this._listener = listener;
	
	        /**
	         * If binding should be executed just once.
	         * @type boolean
	         * @private
	         */
	        this._isOnce = isOnce;
	
	        /**
	         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
	         * @memberOf SignalBinding.prototype
	         * @name context
	         * @type Object|undefined|null
	         */
	        this.context = listenerContext;
	
	        /**
	         * Reference to Signal object that listener is currently bound to.
	         * @type Signal
	         * @private
	         */
	        this._signal = signal;
	
	        /**
	         * Listener priority
	         * @type Number
	         * @private
	         */
	        this._priority = priority || 0;
	    }
	
	    SignalBinding.prototype = {
	
	        /**
	         * If binding is active and should be executed.
	         * @type boolean
	         */
	        active : true,
	
	        /**
	         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
	         * @type Array|null
	         */
	        params : null,
	
	        /**
	         * Call listener passing arbitrary parameters.
	         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
	         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
	         * @return {*} Value returned by the listener.
	         */
	        execute : function (paramsArr) {
	            var handlerReturn, params;
	            if (this.active && !!this._listener) {
	                params = this.params? this.params.concat(paramsArr) : paramsArr;
	                handlerReturn = this._listener.apply(this.context, params);
	                if (this._isOnce) {
	                    this.detach();
	                }
	            }
	            return handlerReturn;
	        },
	
	        /**
	         * Detach binding from signal.
	         * - alias to: mySignal.remove(myBinding.getListener());
	         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
	         */
	        detach : function () {
	            return this.isBound()? this._signal.remove(this._listener, this.context) : null;
	        },
	
	        /**
	         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
	         */
	        isBound : function () {
	            return (!!this._signal && !!this._listener);
	        },
	
	        /**
	         * @return {boolean} If SignalBinding will only be executed once.
	         */
	        isOnce : function () {
	            return this._isOnce;
	        },
	
	        /**
	         * @return {Function} Handler function bound to the signal.
	         */
	        getListener : function () {
	            return this._listener;
	        },
	
	        /**
	         * @return {Signal} Signal that listener is currently bound to.
	         */
	        getSignal : function () {
	            return this._signal;
	        },
	
	        /**
	         * Delete instance properties
	         * @private
	         */
	        _destroy : function () {
	            delete this._signal;
	            delete this._listener;
	            delete this.context;
	        },
	
	        /**
	         * @return {string} String representation of the object.
	         */
	        toString : function () {
	            return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
	        }
	
	    };
	
	
	/*global SignalBinding:false*/
	
	    // Signal --------------------------------------------------------
	    //================================================================
	
	    function validateListener(listener, fnName) {
	        if (typeof listener !== 'function') {
	            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
	        }
	    }
	
	    /**
	     * Custom event broadcaster
	     * <br />- inspired by Robert Penner's AS3 Signals.
	     * @name Signal
	     * @author Miller Medeiros
	     * @constructor
	     */
	    function Signal() {
	        /**
	         * @type Array.<SignalBinding>
	         * @private
	         */
	        this._bindings = [];
	        this._prevParams = null;
	
	        // enforce dispatch to aways work on same context (#47)
	        var self = this;
	        this.dispatch = function(){
	            Signal.prototype.dispatch.apply(self, arguments);
	        };
	    }
	
	    Signal.prototype = {
	
	        /**
	         * Signals Version Number
	         * @type String
	         * @const
	         */
	        VERSION : '1.0.0',
	
	        /**
	         * If Signal should keep record of previously dispatched parameters and
	         * automatically execute listener during `add()`/`addOnce()` if Signal was
	         * already dispatched before.
	         * @type boolean
	         */
	        memorize : false,
	
	        /**
	         * @type boolean
	         * @private
	         */
	        _shouldPropagate : true,
	
	        /**
	         * If Signal is active and should broadcast events.
	         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
	         * @type boolean
	         */
	        active : true,
	
	        /**
	         * @param {Function} listener
	         * @param {boolean} isOnce
	         * @param {Object} [listenerContext]
	         * @param {Number} [priority]
	         * @return {SignalBinding}
	         * @private
	         */
	        _registerListener : function (listener, isOnce, listenerContext, priority) {
	
	            var prevIndex = this._indexOfListener(listener, listenerContext),
	                binding;
	
	            if (prevIndex !== -1) {
	                binding = this._bindings[prevIndex];
	                if (binding.isOnce() !== isOnce) {
	                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
	                }
	            } else {
	                binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
	                this._addBinding(binding);
	            }
	
	            if(this.memorize && this._prevParams){
	                binding.execute(this._prevParams);
	            }
	
	            return binding;
	        },
	
	        /**
	         * @param {SignalBinding} binding
	         * @private
	         */
	        _addBinding : function (binding) {
	            //simplified insertion sort
	            var n = this._bindings.length;
	            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
	            this._bindings.splice(n + 1, 0, binding);
	        },
	
	        /**
	         * @param {Function} listener
	         * @return {number}
	         * @private
	         */
	        _indexOfListener : function (listener, context) {
	            var n = this._bindings.length,
	                cur;
	            while (n--) {
	                cur = this._bindings[n];
	                if (cur._listener === listener && cur.context === context) {
	                    return n;
	                }
	            }
	            return -1;
	        },
	
	        /**
	         * Check if listener was attached to Signal.
	         * @param {Function} listener
	         * @param {Object} [context]
	         * @return {boolean} if Signal has the specified listener.
	         */
	        has : function (listener, context) {
	            return this._indexOfListener(listener, context) !== -1;
	        },
	
	        /**
	         * Add a listener to the signal.
	         * @param {Function} listener Signal handler function.
	         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
	         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
	         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
	         */
	        add : function (listener, listenerContext, priority) {
	            validateListener(listener, 'add');
	            return this._registerListener(listener, false, listenerContext, priority);
	        },
	
	        /**
	         * Add listener to the signal that should be removed after first execution (will be executed only once).
	         * @param {Function} listener Signal handler function.
	         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
	         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
	         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
	         */
	        addOnce : function (listener, listenerContext, priority) {
	            validateListener(listener, 'addOnce');
	            return this._registerListener(listener, true, listenerContext, priority);
	        },
	
	        /**
	         * Remove a single listener from the dispatch queue.
	         * @param {Function} listener Handler function that should be removed.
	         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
	         * @return {Function} Listener handler function.
	         */
	        remove : function (listener, context) {
	            validateListener(listener, 'remove');
	
	            var i = this._indexOfListener(listener, context);
	            if (i !== -1) {
	                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
	                this._bindings.splice(i, 1);
	            }
	            return listener;
	        },
	
	        /**
	         * Remove all listeners from the Signal.
	         */
	        removeAll : function () {
	            var n = this._bindings.length;
	            while (n--) {
	                this._bindings[n]._destroy();
	            }
	            this._bindings.length = 0;
	        },
	
	        /**
	         * @return {number} Number of listeners attached to the Signal.
	         */
	        getNumListeners : function () {
	            return this._bindings.length;
	        },
	
	        /**
	         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
	         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
	         * @see Signal.prototype.disable
	         */
	        halt : function () {
	            this._shouldPropagate = false;
	        },
	
	        /**
	         * Dispatch/Broadcast Signal to all listeners added to the queue.
	         * @param {...*} [params] Parameters that should be passed to each handler.
	         */
	        dispatch : function (params) {
	            if (! this.active) {
	                return;
	            }
	
	            var paramsArr = Array.prototype.slice.call(arguments),
	                n = this._bindings.length,
	                bindings;
	
	            if (this.memorize) {
	                this._prevParams = paramsArr;
	            }
	
	            if (! n) {
	                //should come after memorize
	                return;
	            }
	
	            bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
	            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.
	
	            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
	            //reverse loop since listeners with higher priority will be added at the end of the list
	            do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
	        },
	
	        /**
	         * Forget memorized arguments.
	         * @see Signal.memorize
	         */
	        forget : function(){
	            this._prevParams = null;
	        },
	
	        /**
	         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
	         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
	         */
	        dispose : function () {
	            this.removeAll();
	            delete this._bindings;
	            delete this._prevParams;
	        },
	
	        /**
	         * @return {string} String representation of the object.
	         */
	        toString : function () {
	            return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
	        }
	
	    };
	
	
	    // Namespace -----------------------------------------------------
	    //================================================================
	
	    /**
	     * Signals namespace
	     * @namespace
	     * @name signals
	     */
	    var signals = Signal;
	
	    /**
	     * Custom event broadcaster
	     * @see Signal
	     */
	    // alias for backwards compatibility (see #gh-44)
	    signals.Signal = Signal;
	
	
	
	    //exports to multiple environments
	    if(true){ //AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return signals; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module.exports){ //node
	        module.exports = signals;
	    } else { //browser
	        //use string because of Google closure compiler ADVANCED_MODE
	        /*jslint sub:true */
	        global['signals'] = signals;
	    }
	
	}(this));


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	var State = (function () {
	    function State(iid, options) {
	        this.iid = iid;
	        this.options = options;
	    }
	    return State;
	}());
	exports.State = State;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=picky.js.map