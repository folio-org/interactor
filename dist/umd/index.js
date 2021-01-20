(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.BigTest = global.BigTest || {}, global.BigTest.Interactor = {})));
}(this, (function (exports) { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _typeof$1(obj) {
  if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") {
    _typeof$1 = function _typeof$$1(obj) {
      return _typeof(obj);
    };
  } else {
    _typeof$1 = function _typeof$$1(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
    };
  }

  return _typeof$1(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function convergeOn(assertion, timeout, always) {
  var start = Date.now();
  var interval = 10;
  var stats = {
    start: start,
    runs: 0,
    end: start,
    elapsed: 0,
    always: always,
    timeout: timeout,
    value: undefined
  };
  return new Promise(function (resolve, reject) {
    (function loop() {
      stats.runs += 1;

      try {
        var results = assertion();

        if (results && typeof results.then === 'function') {
          throw new Error('convergent assertion encountered a async function or promise; ' + 'since convergent assertions can run multiple times, you should ' + 'avoid introducing side-effects inside of them');
        }

        var doLoop = Date.now() - start < timeout;

        if (always && doLoop) {
          setTimeout(loop, interval);
        } else if (results === false) {
          throw new Error('convergent assertion returned `false`');
        } else if (!always && !doLoop) {
          throw new Error('convergent assertion was successful, ' + "but exceeded the ".concat(timeout, "ms timeout"));
        } else {
          stats.end = Date.now();
          stats.elapsed = stats.end - start;
          stats.value = results;
          resolve(stats);
        }
      } catch (error) {
        var _doLoop = Date.now() - start < timeout;

        if (!always && _doLoop) {
          setTimeout(loop, interval);
        } else if (always || !_doLoop) {
          reject(error);
        }
      }
    })();
  });
}

function when(assertion) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  return convergeOn(assertion, timeout, false);
}

function always(assertion) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  return convergeOn(assertion, timeout, true);
}

function getElapsedSince(start, max) {
  var elapsed = Date.now() - start;

  if (elapsed >= max) {
    throw new Error("convergence exceeded the ".concat(max, "ms timeout"));
  }

  return elapsed;
}

function collectStats(accumulator, stats) {
  accumulator.runs += stats.runs;
  accumulator.elapsed += stats.elapsed;
  accumulator.end = stats.end;
  accumulator.value = stats.value;
  accumulator.queue.push(stats);
  return stats.value;
}

function isConvergence(obj) {
  return !!obj && _typeof$1(obj) === 'object' && '_queue' in obj && Array.isArray(obj._queue) && 'timeout' in obj && typeof obj.timeout === 'function' && 'run' in obj && typeof obj.run === 'function';
}

function runAssertion(subject, arg, stats) {
  var timeout = stats.timeout - getElapsedSince(stats.start, stats.timeout);
  var assertion = subject.assertion.bind(this, arg);
  var converge = subject.always ? always : when;

  if (subject.always && !subject.last) {
    if (subject.timeout) {
      timeout = Math.min(timeout, subject.timeout);
    } else {
      timeout = Math.max(stats.timeout / 10, 20);
    }
  }

  return converge(assertion, timeout).then(function (convergeStats) {
    return collectStats(stats, convergeStats);
  });
}

function runCallback(subject, arg, stats) {
  var start = Date.now();
  var result = subject.callback.call(this, arg);

  var collectExecStats = function collectExecStats(value) {
    return collectStats(stats, {
      start: start,
      runs: 1,
      end: Date.now(),
      elapsed: getElapsedSince(start, stats.timeout),
      value: value
    });
  };

  if (isConvergence(result)) {
    var timeout = stats.timeout - getElapsedSince(start, stats.timeout);

    if (!subject.last) {
      result = result["do"](function (ret) {
        return ret;
      });
    }

    return result.timeout(timeout).run().then(function (convergeStats) {
      return collectStats(stats, convergeStats);
    });
  } else if (result && typeof result.then === 'function') {
    return result.then(collectExecStats);
  } else {
    return collectExecStats(result);
  }
}

var Convergence = function () {
  function Convergence() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Convergence);

    if (typeof options === 'number') {
      options = {
        timeout: options
      };
    }

    var _options = options,
        _options$timeout = _options.timeout,
        timeout = _options$timeout === void 0 ? previous._timeout || 2000 : _options$timeout,
        _options$_queue = _options._queue,
        _queue = _options$_queue === void 0 ? [] : _options$_queue;

    _queue = _toConsumableArray$1(previous._queue || []).concat(_toConsumableArray$1(_queue));
    Object.defineProperties(this, {
      _timeout: {
        value: timeout
      },
      _queue: {
        value: _queue
      }
    });
  }

  _createClass$1(Convergence, [{
    key: "timeout",
    value: function timeout(_timeout) {
      if (typeof _timeout !== 'undefined') {
        return new this.constructor(_timeout, this);
      } else {
        return this._timeout;
      }
    }
  }, {
    key: "when",
    value: function when(assertion) {
      return new this.constructor({
        _queue: [{
          assertion: assertion
        }]
      }, this);
    }
  }, {
    key: "once",
    value: function once() {
      console.warn('#once() has been deprecated in favor of #when()');
      return this.when.apply(this, arguments);
    }
  }, {
    key: "always",
    value: function always(assertion, timeout) {
      return new this.constructor({
        _queue: [{
          always: true,
          assertion: assertion,
          timeout: timeout
        }]
      }, this);
    }
  }, {
    key: "do",
    value: function _do(callback) {
      return new this.constructor({
        _queue: [{
          callback: callback
        }]
      }, this);
    }
  }, {
    key: "append",
    value: function append(convergence) {
      if (!isConvergence(convergence)) {
        throw new Error('.append() only works with convergence instances');
      }

      return new this.constructor({
        _queue: convergence._queue
      }, this);
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var start = Date.now();
      var stats = {
        start: start,
        runs: 0,
        end: start,
        elapsed: 0,
        value: undefined,
        timeout: this._timeout,
        queue: []
      };
      return this._queue.reduce(function (promise, subject, i) {
        if (i === _this._queue.length - 1) {
          subject = Object.assign({
            last: true
          }, subject);
        }

        return promise.then(function (ret) {
          if (subject.assertion) {
            return runAssertion.call(_this, subject, ret, stats);
          } else if (subject.callback) {
            return runCallback.call(_this, subject, ret, stats);
          }
        });
      }, Promise.resolve()).then(function () {
        return stats;
      });
    }
  }, {
    key: "then",
    value: function then() {
      var promise = this.run().then(function (_ref) {
        var value = _ref.value;
        return value;
      });
      return promise.then.apply(promise, arguments);
    }
  }]);

  return Convergence;
}();

Convergence.isConvergence = isConvergence;

function $(selector) {
  var $ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var $node = null;

  if (!$ctx || typeof $ctx.querySelector !== 'function') {
    throw new Error('unable to use the current context');
  }

  if (typeof selector === 'string') {
    try {
      $node = $ctx.querySelector(selector);
    } catch (e) {
      throw new SyntaxError("\"".concat(selector, "\" is not a valid selector"));
    }
  } else if (selector instanceof Element) {
    return selector;
  } else if (!selector) {
    return $ctx;
  }

  if (!$node) {
    throw new Error("unable to find \"".concat(selector, "\""));
  }

  return $node;
}
function $$(selector) {
  var $ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var nodes = [];

  if (!$ctx || typeof $ctx.querySelectorAll !== 'function') {
    throw new Error('unable to use the current context');
  }

  if (typeof selector === 'string') {
    try {
      nodes = [].slice.call($ctx.querySelectorAll(selector));
    } catch (e) {
      throw new SyntaxError("\"".concat(selector, "\" is not a valid selector"));
    }
  } else if (Symbol.iterator in Object(selector)) {
    nodes = [].slice.call(selector);
  }

  return nodes.filter(function ($node) {
    return $node instanceof Element;
  });
}
function isInteractor(obj) {
  return isConvergence(obj) && '$' in obj && typeof obj.$ === 'function' && '$$' in obj && typeof obj.$$ === 'function' && '$root' in obj;
}
function isPropertyDescriptor(descr) {
  return descr && (Object.hasOwnProperty.call(descr, 'get') || Object.hasOwnProperty.call(descr, 'value')) && Object.hasOwnProperty.call(descr, 'enumerable') && Object.hasOwnProperty.call(descr, 'configurable');
}
function getDescriptor(instance, key) {
  var proto = instance;
  var descr = null;

  while (proto && proto !== Object.prototype) {
    descr = Object.getOwnPropertyDescriptor(proto, key);
    proto = Object.getPrototypeOf(proto);
    if (descr) break;
  }

  return descr;
}
function getDescriptors(instance) {
  var proto = Object.getPrototypeOf(instance);
  var descr = {};

  while (proto && proto !== Object.prototype) {
    descr = Object.assign({}, Object.getOwnPropertyDescriptors(proto), descr);
    proto = Object.getPrototypeOf(proto);
  }

  delete descr.constructor;
  return descr;
}
function appendUp(interactor) {
  while (interactor.__parent__) {
    interactor = interactor.__parent__.append(interactor);
  }

  return interactor;
}

function computed(getter) {
  return Object.assign({
    enumerable: false,
    configurable: false,
    get: getter
  });
}
function action(method) {
  return Object.assign({
    enumerable: false,
    configurable: false,
    value: method
  });
}

function find(selector) {
  var _this = this;

  return this.when(function () {
    return _this.$(selector);
  });
}
function find$1 (selector) {
  return computed(function () {
    return this.$(selector);
  });
}

function findAll(selector) {
  var _this = this;

  return this.when(function () {
    return _this.$$(selector);
  });
}
function findAll$1 (selector) {
  return computed(function () {
    return this.$$(selector);
  });
}

function getInteractorDescriptors(instance) {
  var descriptors = Object.getOwnPropertyDescriptors(instance);

  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (isPropertyDescriptor(value)) {
      descriptors[key] = value;
    } else if (isInteractor(value)) {
      descriptors[key] = {
        get: function get() {
          return new value.constructor({
            parent: this
          }, value);
        }
      };
    } else {
      descriptors[key] = {
        value: value
      };
    }
  };

  for (var _i = 0, _Object$entries = Object.entries(instance); _i < _Object$entries.length; _i++) {
    _loop();
  }

  return descriptors;
}

function checkForReservedProperties(obj) {
  var blacklist = ['only'].concat(Object.getOwnPropertyNames(Convergence.prototype));

  for (var _i2 = 0, _Object$keys = Object.keys(obj); _i2 < _Object$keys.length; _i2++) {
    var key = _Object$keys[_i2];

    if (blacklist.includes(key)) {
      throw new Error("\"".concat(key, "\" is a reserved property name"));
    }
  }
}

function interactor(from) {
  var CustomInteractor = function (_Interactor) {
    _inherits(CustomInteractor, _Interactor);

    var _super = _createSuper(CustomInteractor);

    function CustomInteractor() {
      _classCallCheck(this, CustomInteractor);

      return _super.apply(this, arguments);
    }

    return CustomInteractor;
  }(Interactor);

  var proto = Object.create(null);

  if (from.prototype instanceof Interactor) {
    return from;
  }

  if (Object.getPrototypeOf(from) === Object.prototype) {
    proto = Object.getOwnPropertyDescriptors(from);
    Object.assign(proto, getInteractorDescriptors(from));
  } else if (typeof from === 'function') {
    proto = Object.getOwnPropertyDescriptors(from.prototype);
    Object.assign(proto, getInteractorDescriptors(new from()));
    Object.defineProperties(CustomInteractor, {
      name: {
        value: from.name
      },
      defaultScope: {
        value: from.defaultScope || Interactor.defaultScope
      }
    });
  }

  delete proto.constructor;
  checkForReservedProperties(proto);
  Object.defineProperties(CustomInteractor.prototype, proto);
  return CustomInteractor;
}

function scoped(selector) {
  var _this = this;

  var descriptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ScopedInteractor = interactor(descriptors);
  return new ScopedInteractor({
    scope: function scope() {
      return _this.$(selector);
    },
    parent: this
  });
}
function scoped$1 (selector) {
  var descriptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return computed(function () {
    return scoped.call(this, selector, descriptors);
  });
}

function click(selector) {
  return find.call(this, selector)["do"](function ($node) {
    return $node.click();
  });
}
function clickable (selector) {
  return action(function () {
    return click.call(this, selector);
  });
}

function fill(selectorOrValue, value) {
  var selector;

  if (typeof value === 'undefined') {
    value = selectorOrValue;
  } else {
    selector = selectorOrValue;
  }

  return find.call(this, selector)["do"](function ($node) {
    var descriptor = Object.getOwnPropertyDescriptor($node, 'value');
    if (descriptor) delete $node.value;
    $node.value = value;
    $node.dispatchEvent(new Event('input', {
      bubbles: true,
      cancelable: true
    }));
    $node.dispatchEvent(new Event('change', {
      bubbles: true,
      cancelable: true
    }));

    if (descriptor) {
      Object.defineProperty($node, 'value', descriptor);
    }
  });
}
function fillable (selector) {
  return action(function (value) {
    return fill.call(this, selector, value);
  });
}

function select(selectorOrOption, option) {
  var selector;

  if (typeof option === 'undefined') {
    option = selectorOrOption;
  } else {
    selector = selectorOrOption;
  }

  return find.call(this, selector).when(function ($select) {
    var _iterator = _createForOfIteratorHelper($select.options),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var $option = _step.value;

        if ($option.text === option) {
          return [$select, $option];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    throw new Error("unable to find option \"".concat(option, "\""));
  })["do"](function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        $select = _ref2[0],
        $option = _ref2[1];

    $option.selected = true;
    $select.dispatchEvent(new Event('input', {
      bubbles: true,
      cancelable: true
    }));
    $select.dispatchEvent(new Event('change', {
      bubbles: true,
      cancelable: true
    }));
  });
}
function selectable (selector) {
  return action(function (option) {
    return select.call(this, selector, option);
  });
}

function focus(selector) {
  return find.call(this, selector)["do"](function ($node) {
    $node.dispatchEvent(new Event('focusin', {
      bubbles: true,
      cancelable: true
    }));
  });
}
function focusable (selector) {
  return action(function () {
    return focus.call(this, selector);
  });
}

function blur(selector) {
  return find.call(this, selector)["do"](function ($node) {
    $node.dispatchEvent(new Event('focusout', {
      bubbles: true,
      cancelable: true
    }));
  });
}
function blurrable (selector) {
  return action(function () {
    return blur.call(this, selector);
  });
}

function getTriggerArgs(args) {
  var selector, eventName, options;

  if (args.length === 3) {
    var _args = _slicedToArray(args, 3);

    selector = _args[0];
    eventName = _args[1];
    options = _args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === 'string') {
      var _args2 = _slicedToArray(args, 2);

      selector = _args2[0];
      eventName = _args2[1];
    } else {
      var _args3 = _slicedToArray(args, 2);

      eventName = _args3[0];
      options = _args3[1];
    }
  } else {
    var _args4 = _slicedToArray(args, 1);

    eventName = _args4[0];
  }

  return [selector, eventName, options];
}

function trigger() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _getTriggerArgs = getTriggerArgs(args),
      _getTriggerArgs2 = _slicedToArray(_getTriggerArgs, 3),
      selector = _getTriggerArgs2[0],
      eventName = _getTriggerArgs2[1],
      _getTriggerArgs2$ = _getTriggerArgs2[2],
      options = _getTriggerArgs2$ === void 0 ? {} : _getTriggerArgs2$;

  return find.call(this, selector)["do"](function ($node) {
    var bubbles = 'bubbles' in options ? options.bubbles : true;
    var cancelable = 'cancelable' in options ? options.cancelable : true;
    delete options.bubbles;
    delete options.cancelable;
    var event = new Event(eventName, {
      bubbles: bubbles,
      cancelable: cancelable
    });
    Object.assign(event, options);
    $node.dispatchEvent(event);
  });
}
function triggerable () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var _getTriggerArgs3 = getTriggerArgs(args),
      _getTriggerArgs4 = _slicedToArray(_getTriggerArgs3, 3),
      selector = _getTriggerArgs4[0],
      eventName = _getTriggerArgs4[1],
      _getTriggerArgs4$ = _getTriggerArgs4[2],
      options = _getTriggerArgs4$ === void 0 ? {} : _getTriggerArgs4$;

  return action(function (opts) {
    opts = Object.assign({}, options, opts);
    return trigger.call(this, selector, eventName, opts);
  });
}

function scroll(selectorOrScrollTo, scrollTo) {
  var selector;

  if (typeof scrollTo === 'undefined') {
    scrollTo = selectorOrScrollTo;
  } else {
    selector = selectorOrScrollTo;
  }

  return find.call(this, selector)["do"](function ($node) {
    if (typeof scrollTo.left === 'number') {
      $node.scrollLeft = scrollTo.left;
    }

    if (typeof scrollTo.top === 'number') {
      $node.scrollTop = scrollTo.top;
    }

    $node.dispatchEvent(new Event('scroll', {
      bubbles: true,
      cancelable: true
    }));
  });
}
function scrollable (selector) {
  return action(function (scrollTo) {
    return scroll.call(this, selector, scrollTo);
  });
}

function getText($el) {
  return $el.textContent.replace(/[\n\r]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

function text() {
  return getText(this.$root);
}
function text$1 (selector) {
  return computed(function () {
    return getText(this.$(selector));
  });
}

function value() {
  return this.$root.value;
}
function value$1 (selector) {
  return computed(function () {
    return this.$(selector).value;
  });
}

function isVisible() {
  return !!this.$root.getClientRects().length;
}
function isVisible$1 (selector) {
  return computed(function () {
    return !!this.$(selector).getClientRects().length;
  });
}

function isHidden() {
  return !this.$root.getClientRects().length;
}
function isHidden$1 (selector) {
  return computed(function () {
    return !this.$(selector).getClientRects().length;
  });
}

function isPresent() {
  try {
    return !!this.$root;
  } catch (e) {
    return false;
  }
}
function isPresent$1 (selector) {
  return computed(function () {
    return this.isPresent && !!this.$$(selector).length;
  });
}

var Interactor = function (_Convergence) {
  _inherits(Interactor, _Convergence);

  var _super = _createSuper(Interactor);

  function Interactor() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Interactor);

    _this = _super.call(this, options, previous);

    if (typeof options === 'string' || options instanceof Element || typeof options === 'function') {
      options = {
        scope: options
      };
    }

    var _options = options,
        _options$parent = _options.parent,
        parent = _options$parent === void 0 ? previous.__parent__ : _options$parent,
        _options$scope = _options.scope,
        scope = _options$scope === void 0 ? _this.constructor.defaultScope : _options$scope;
    Object.defineProperties(_assertThisInitialized(_this), {
      __parent__: {
        value: parent
      },
      $root: getDescriptor(previous, '$root') || {
        get: function get() {
          return $(typeof scope === 'function' ? scope() : scope);
        }
      }
    });

    if (parent) {
      var descriptors = Object.entries(getDescriptors(_assertThisInitialized(_this)));

      var isSameType = function isSameType(i) {
        return i instanceof _this.constructor;
      };

      var chainable = function chainable(fn) {
        return function () {
          var orphan = new _this.constructor({
            parent: null
          }, _assertThisInitialized(_this));

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var results = fn.apply(orphan, args);

          if (results && isSameType(results.__parent__)) {
            results = new results.constructor({
              parent: _assertThisInitialized(_this)
            }, results);
          }

          if (isSameType(results)) {
            results = appendUp(parent.append(results));
          }

          return results;
        };
      };

      return _possibleConstructorReturn(_this, Object.create(_assertThisInitialized(_this), descriptors.reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            descriptor = _ref2[1];

        var _descriptor = descriptor,
            value$$1 = _descriptor.value,
            get = _descriptor.get;

        if (typeof value$$1 === 'function') {
          descriptor = action(chainable(value$$1));
        } else if (typeof get === 'function') {
          descriptor = computed(chainable(get));
        }

        return Object.assign(_defineProperty({}, name, descriptor), acc);
      }, {
        only: action(function () {
          return new _this.constructor(scope).append(appendUp(_assertThisInitialized(_this)));
        })
      })));
    }

    return _this;
  }

  _createClass(Interactor, [{
    key: "$",
    value: function $$$1(selector) {
      return $(selector, this.$root);
    }
  }, {
    key: "$$",
    value: function $$$$1(selector) {
      return $$(selector, this.$root);
    }
  }, {
    key: "pause",
    value: function pause() {
      return this["do"](function () {
        return new Promise(function () {});
      });
    }
  }]);

  return Interactor;
}(Convergence);

Object.defineProperties(Interactor, {
  isInteractor: {
    value: isInteractor
  },
  defaultScope: {
    value: document.body
  }
});
Object.defineProperties(Interactor.prototype, Object.entries({
  find: find,
  findAll: findAll,
  scoped: scoped,
  click: click,
  fill: fill,
  select: select,
  focus: focus,
  blur: blur,
  trigger: trigger,
  scroll: scroll
}).reduce(function (descriptors, _ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      name = _ref4[0],
      method = _ref4[1];

  return Object.assign(descriptors, _defineProperty({}, name, action(method)));
}, {}));
Object.defineProperties(Interactor.prototype, Object.entries({
  text: text,
  value: value,
  isVisible: isVisible,
  isHidden: isHidden,
  isPresent: isPresent
}).reduce(function (descriptors, _ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      name = _ref6[0],
      getter = _ref6[1];

  return Object.assign(descriptors, _defineProperty({}, name, computed(getter)));
}, {}));

function collection (selector) {
  var descriptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ItemInteractor = interactor(descriptors);
  var _scope = selector;

  if (typeof selector === 'string') {
    _scope = function scope(index) {
      if (typeof index === 'number') {
        var items = this.$$(selector);

        if (!items[index]) {
          throw new Error("unable to find \"".concat(selector, "\" at index ").concat(index));
        }

        return items[index];
      } else {
        return selector;
      }
    };
  }

  return action(function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length) {
      return new ItemInteractor({
        scope: function scope() {
          return _scope.apply(_this, args);
        },
        parent: this
      });
    } else {
      return this.$$(_scope.call(this)).map(function (item) {
        return new ItemInteractor(item);
      });
    }
  });
}

function count (selector) {
  return computed(function () {
    return this.$$(selector).length;
  });
}

function attribute (selector, attr) {
  if (!attr) {
    attr = selector;
    selector = null;
  }

  return computed(function () {
    return this.$(selector).getAttribute(attr);
  });
}

function property (selector, prop) {
  if (!prop) {
    prop = selector;
    selector = null;
  }

  return computed(function () {
    return this.$(selector)[prop];
  });
}

function hasClass (selector, className) {
  if (!className) {
    className = selector;
    selector = null;
  }

  return computed(function () {
    return this.$(selector).classList.contains(className);
  });
}

function elementMatches($el, selector) {
  if (!$el.matches) {
    return $el.msMatchesSelector(selector);
  } else {
    return $el.matches(selector);
  }
}

function is (selector, match) {
  if (!match) {
    match = selector;
    selector = null;
  }

  return computed(function () {
    return elementMatches(this.$(selector), match);
  });
}

exports.Interactor = Interactor;
exports.interactor = interactor;
exports.clickable = clickable;
exports.fillable = fillable;
exports.selectable = selectable;
exports.focusable = focusable;
exports.blurrable = blurrable;
exports.triggerable = triggerable;
exports.scrollable = scrollable;
exports.collection = collection;
exports.scoped = scoped$1;
exports.find = find$1;
exports.findAll = findAll$1;
exports.count = count;
exports.text = text$1;
exports.value = value$1;
exports.attribute = attribute;
exports.property = property;
exports.hasClass = hasClass;
exports.is = is;
exports.isVisible = isVisible$1;
exports.isHidden = isHidden$1;
exports.isPresent = isPresent$1;
exports.computed = computed;
exports.action = action;

Object.defineProperty(exports, '__esModule', { value: true });

})));