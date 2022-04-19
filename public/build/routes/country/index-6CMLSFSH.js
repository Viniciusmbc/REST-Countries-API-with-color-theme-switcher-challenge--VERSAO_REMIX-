import {
  Link,
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-NT6J4OTR.js";

// node_modules/superjson/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/superjson/node_modules/ms/index.js"(exports, module) {
    init_react();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse3(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse3(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/superjson/node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/superjson/node_modules/debug/src/common.js"(exports, module) {
    init_react();
    function setup(env) {
      createDebug2.debug = createDebug2;
      createDebug2.default = createDebug2;
      createDebug2.coerce = coerce;
      createDebug2.disable = disable;
      createDebug2.enable = enable;
      createDebug2.enabled = enabled;
      createDebug2.humanize = require_ms();
      createDebug2.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug2[key] = env[key];
      });
      createDebug2.names = [];
      createDebug2.skips = [];
      createDebug2.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug2.colors[Math.abs(hash) % createDebug2.colors.length];
      }
      createDebug2.selectColor = selectColor;
      function createDebug2(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug2(...args) {
          if (!debug2.enabled) {
            return;
          }
          const self2 = debug2;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug2.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug2.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug2.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug2.log;
          logFn.apply(self2, args);
        }
        debug2.namespace = namespace;
        debug2.useColors = createDebug2.useColors();
        debug2.color = createDebug2.selectColor(namespace);
        debug2.extend = extend;
        debug2.destroy = createDebug2.destroy;
        Object.defineProperty(debug2, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug2.namespaces) {
              namespacesCache = createDebug2.namespaces;
              enabledCache = createDebug2.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug2.init === "function") {
          createDebug2.init(debug2);
        }
        return debug2;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug2(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug2.save(namespaces);
        createDebug2.namespaces = namespaces;
        createDebug2.names = [];
        createDebug2.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug2.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug2.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug2.names.map(toNamespace),
          ...createDebug2.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug2.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug2.skips.length; i < len; i++) {
          if (createDebug2.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug2.names.length; i < len; i++) {
          if (createDebug2.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug2.enable(createDebug2.load());
      return createDebug2;
    }
    module.exports = setup;
  }
});

// node_modules/superjson/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/superjson/node_modules/debug/src/browser.js"(exports, module) {
    init_react();
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/lodash.clonedeep/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.clonedeep/index.js"(exports, module) {
    init_react();
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView2 = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray2(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray2(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function initCloneArray(array) {
      var length = array.length, result = array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function cloneDeep2(value) {
      return baseClone(value, true, true);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray2 = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = cloneDeep2;
  }
});

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\index.tsx?browser
init_react();

// app/routes/country/index.tsx
init_react();

// node_modules/superjson-remix/dist/superjson-remix.esm.js
init_react();

// node_modules/superjson/dist/esm/index.js
init_react();

// node_modules/superjson/dist/esm/class-registry.js
init_react();

// node_modules/superjson/dist/esm/registry.js
init_react();

// node_modules/superjson/dist/esm/double-indexed-kv.js
init_react();
var DoubleIndexedKV = function() {
  function DoubleIndexedKV2() {
    this.keyToValue = /* @__PURE__ */ new Map();
    this.valueToKey = /* @__PURE__ */ new Map();
  }
  DoubleIndexedKV2.prototype.set = function(key, value) {
    this.keyToValue.set(key, value);
    this.valueToKey.set(value, key);
  };
  DoubleIndexedKV2.prototype.getByKey = function(key) {
    return this.keyToValue.get(key);
  };
  DoubleIndexedKV2.prototype.getByValue = function(value) {
    return this.valueToKey.get(value);
  };
  DoubleIndexedKV2.prototype.clear = function() {
    this.keyToValue.clear();
    this.valueToKey.clear();
  };
  return DoubleIndexedKV2;
}();

// node_modules/superjson/dist/esm/registry.js
var import_debug = __toESM(require_browser());
var debug = (0, import_debug.default)("superjson");
var Registry = function() {
  function Registry2(generateIdentifier) {
    this.generateIdentifier = generateIdentifier;
    this.kv = new DoubleIndexedKV();
  }
  Registry2.prototype.register = function(value, identifier) {
    if (this.kv.getByValue(value)) {
      return;
    }
    if (!identifier) {
      identifier = this.generateIdentifier(value);
    }
    if (true) {
      var alreadyRegistered = this.kv.getByKey(identifier);
      if (alreadyRegistered && alreadyRegistered !== value) {
        debug('Ambiguous class "' + identifier + '", provide a unique identifier.');
      }
    }
    this.kv.set(identifier, value);
  };
  Registry2.prototype.clear = function() {
    this.kv.clear();
  };
  Registry2.prototype.getIdentifier = function(value) {
    return this.kv.getByValue(value);
  };
  Registry2.prototype.getValue = function(identifier) {
    return this.kv.getByKey(identifier);
  };
  return Registry2;
}();

// node_modules/superjson/dist/esm/class-registry.js
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var _ClassRegistry = function(_super) {
  __extends(_ClassRegistry2, _super);
  function _ClassRegistry2() {
    var _this = _super.call(this, function(c) {
      return c.name;
    }) || this;
    _this.classToAllowedProps = /* @__PURE__ */ new Map();
    return _this;
  }
  _ClassRegistry2.prototype.register = function(value, options) {
    if (typeof options === "object") {
      if (options.allowProps) {
        this.classToAllowedProps.set(value, options.allowProps);
      }
      _super.prototype.register.call(this, value, options.identifier);
    } else {
      _super.prototype.register.call(this, value, options);
    }
  };
  _ClassRegistry2.prototype.getAllowedProps = function(value) {
    return this.classToAllowedProps.get(value);
  };
  return _ClassRegistry2;
}(Registry);
var ClassRegistry = new _ClassRegistry();

// node_modules/superjson/dist/esm/symbol-registry.js
init_react();
var SymbolRegistry = new Registry(function(s) {
  var _a;
  return (_a = s.description) !== null && _a !== void 0 ? _a : "";
});

// node_modules/superjson/dist/esm/custom-transformer-registry.js
init_react();

// node_modules/superjson/dist/esm/util.js
init_react();
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
function valuesOfObj(record) {
  if ("values" in Object) {
    return Object.values(record);
  }
  var values = [];
  for (var key in record) {
    if (record.hasOwnProperty(key)) {
      values.push(record[key]);
    }
  }
  return values;
}
function find(record, predicate) {
  var values = valuesOfObj(record);
  if ("find" in values) {
    return values.find(predicate);
  }
  var valuesNotNever = values;
  for (var i = 0; i < valuesNotNever.length; i++) {
    var value = valuesNotNever[i];
    if (predicate(value)) {
      return value;
    }
  }
  return void 0;
}
function forEach(record, run) {
  Object.entries(record).forEach(function(_a) {
    var _b = __read(_a, 2), key = _b[0], value = _b[1];
    return run(value, key);
  });
}
function includes(arr, value) {
  return arr.indexOf(value) !== -1;
}

// node_modules/superjson/dist/esm/custom-transformer-registry.js
var transfomers = {};
var CustomTransformerRegistry = {
  register: function(transformer) {
    transfomers[transformer.name] = transformer;
  },
  findApplicable: function(v) {
    return find(transfomers, function(transformer) {
      return transformer.isApplicable(v);
    });
  },
  findByName: function(name) {
    return transfomers[name];
  }
};

// node_modules/superjson/dist/esm/error-props.js
init_react();
var allowedErrorProps = [];

// node_modules/superjson/dist/esm/plainer.js
init_react();

// node_modules/superjson/dist/esm/is.js
init_react();
var getType = function(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
};
var isUndefined = function(payload) {
  return typeof payload === "undefined";
};
var isPlainObject = function(payload) {
  if (getType(payload) !== "Object")
    return false;
  if (Object.getPrototypeOf(payload) === null)
    return true;
  if (payload === Object.prototype)
    return false;
  return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
};
var isArray = function(payload) {
  return Array.isArray(payload);
};
var isRegExp = function(payload) {
  return payload instanceof RegExp;
};
var isMap = function(payload) {
  return payload instanceof Map;
};
var isSet = function(payload) {
  return payload instanceof Set;
};
var isSymbol = function(payload) {
  return getType(payload) === "Symbol";
};
var isDate = function(payload) {
  return payload instanceof Date && !isNaN(payload.valueOf());
};
var isError = function(payload) {
  return payload instanceof Error;
};
var isNaNValue = function(payload) {
  return typeof payload === "number" && isNaN(payload);
};
var isBigint = function(payload) {
  return typeof payload === "bigint";
};
var isInfinite = function(payload) {
  return payload === Infinity || payload === -Infinity;
};
var isTypedArray = function(payload) {
  return ArrayBuffer.isView(payload) && !(payload instanceof DataView);
};

// node_modules/superjson/dist/esm/pathstringifier.js
init_react();
var parsePath = function(string) {
  var result = [];
  var segment = "";
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    var isEscapedDot = char === "\\" && string.charAt(i + 1) === ".";
    if (isEscapedDot) {
      segment += ".";
      i++;
      continue;
    }
    var isEndOfSegment = char === ".";
    if (isEndOfSegment) {
      result.push(segment);
      segment = "";
      continue;
    }
    segment += char;
  }
  var lastSegment = segment;
  result.push(lastSegment);
  return result;
};

// node_modules/superjson/dist/esm/transformer.js
init_react();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __read2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
function simpleTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var simpleRules = [
  simpleTransformation(isUndefined, "undefined", function() {
    return null;
  }, function() {
    return void 0;
  }),
  simpleTransformation(isBigint, "bigint", function(v) {
    return v.toString();
  }, function(v) {
    if (typeof BigInt !== "undefined") {
      return BigInt(v);
    }
    console.error("Please add a BigInt polyfill.");
    return v;
  }),
  simpleTransformation(isDate, "Date", function(v) {
    return v.toISOString();
  }, function(v) {
    return new Date(v);
  }),
  simpleTransformation(isError, "Error", function(v) {
    var baseError = {
      name: v.name,
      message: v.message
    };
    allowedErrorProps.forEach(function(prop) {
      baseError[prop] = v[prop];
    });
    return baseError;
  }, function(v) {
    var e = new Error(v.message);
    e.name = v.name;
    e.stack = v.stack;
    allowedErrorProps.forEach(function(prop) {
      e[prop] = v[prop];
    });
    return e;
  }),
  simpleTransformation(isRegExp, "regexp", function(v) {
    return "" + v;
  }, function(regex) {
    var body = regex.slice(1, regex.lastIndexOf("/"));
    var flags = regex.slice(regex.lastIndexOf("/") + 1);
    return new RegExp(body, flags);
  }),
  simpleTransformation(isSet, "set", function(v) {
    return __spreadArray([], __read2(v.values()));
  }, function(v) {
    return new Set(v);
  }),
  simpleTransformation(isMap, "map", function(v) {
    return __spreadArray([], __read2(v.entries()));
  }, function(v) {
    return new Map(v);
  }),
  simpleTransformation(function(v) {
    return isNaNValue(v) || isInfinite(v);
  }, "number", function(v) {
    if (isNaNValue(v)) {
      return "NaN";
    }
    if (v > 0) {
      return "Infinity";
    } else {
      return "-Infinity";
    }
  }, Number),
  simpleTransformation(function(v) {
    return v === 0 && 1 / v === -Infinity;
  }, "number", function() {
    return "-0";
  }, Number)
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
  return {
    isApplicable,
    annotation,
    transform,
    untransform
  };
}
var symbolRule = compositeTransformation(function(s) {
  if (isSymbol(s)) {
    var isRegistered = !!SymbolRegistry.getIdentifier(s);
    return isRegistered;
  }
  return false;
}, function(s) {
  var identifier = SymbolRegistry.getIdentifier(s);
  return ["symbol", identifier];
}, function(v) {
  return v.description;
}, function(_, a) {
  var value = SymbolRegistry.getValue(a[1]);
  if (!value) {
    throw new Error("Trying to deserialize unknown symbol");
  }
  return value;
});
var constructorToName = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce(function(obj, ctor) {
  obj[ctor.name] = ctor;
  return obj;
}, {});
var typedArrayRule = compositeTransformation(isTypedArray, function(v) {
  return ["typed-array", v.constructor.name];
}, function(v) {
  return __spreadArray([], __read2(v));
}, function(v, a) {
  var ctor = constructorToName[a[1]];
  if (!ctor) {
    throw new Error("Trying to deserialize unknown typed array");
  }
  return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass) {
  if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
    var isRegistered = !!ClassRegistry.getIdentifier(potentialClass.constructor);
    return isRegistered;
  }
  return false;
}
var classRule = compositeTransformation(isInstanceOfRegisteredClass, function(clazz) {
  var identifier = ClassRegistry.getIdentifier(clazz.constructor);
  return ["class", identifier];
}, function(clazz) {
  var allowedProps = ClassRegistry.getAllowedProps(clazz.constructor);
  if (!allowedProps) {
    return __assign({}, clazz);
  }
  var result = {};
  allowedProps.forEach(function(prop) {
    result[prop] = clazz[prop];
  });
  return result;
}, function(v, a) {
  var clazz = ClassRegistry.getValue(a[1]);
  if (!clazz) {
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  }
  return Object.assign(Object.create(clazz.prototype), v);
});
var customRule = compositeTransformation(function(value) {
  return !!CustomTransformerRegistry.findApplicable(value);
}, function(value) {
  var transformer = CustomTransformerRegistry.findApplicable(value);
  return ["custom", transformer.name];
}, function(value) {
  var transformer = CustomTransformerRegistry.findApplicable(value);
  return transformer.serialize(value);
}, function(v, a) {
  var transformer = CustomTransformerRegistry.findByName(a[1]);
  if (!transformer) {
    throw new Error("Trying to deserialize unknown custom value");
  }
  return transformer.deserialize(v);
});
var simpleRulesByAnnotation = {};
simpleRules.forEach(function(rule) {
  simpleRulesByAnnotation[rule.annotation] = rule;
});
var untransformValue = function(json2, type) {
  if (isArray(type)) {
    switch (type[0]) {
      case "symbol":
        return symbolRule.untransform(json2, type);
      case "class":
        return classRule.untransform(json2, type);
      case "custom":
        return customRule.untransform(json2, type);
      case "typed-array":
        return typedArrayRule.untransform(json2, type);
      default:
        throw new Error("Unknown transformation: " + type);
    }
  } else {
    var transformation = simpleRulesByAnnotation[type];
    if (!transformation) {
      throw new Error("Unknown transformation: " + type);
    }
    return transformation.untransform(json2);
  }
};

// node_modules/superjson/dist/esm/accessDeep.js
init_react();
var getNthKey = function(value, n) {
  var keys = value.keys();
  while (n > 0) {
    keys.next();
    n--;
  }
  return keys.next().value;
};
function validatePath(path) {
  if (includes(path, "__proto__")) {
    throw new Error("__proto__ is not allowed as a property");
  }
  if (includes(path, "prototype")) {
    throw new Error("prototype is not allowed as a property");
  }
  if (includes(path, "constructor")) {
    throw new Error("constructor is not allowed as a property");
  }
}
var getDeep = function(object, path) {
  validatePath(path);
  path.forEach(function(key) {
    object = object[key];
  });
  return object;
};
var setDeep = function(object, path, mapper) {
  validatePath(path);
  if (path.length === 0) {
    return mapper(object);
  }
  var parent = object;
  for (var i = 0; i < path.length - 1; i++) {
    var key = path[i];
    if (isArray(parent)) {
      var index = +key;
      parent = parent[index];
    } else if (isPlainObject(parent)) {
      parent = parent[key];
    } else if (isSet(parent)) {
      var row = +key;
      parent = getNthKey(parent, row);
    } else if (isMap(parent)) {
      var isEnd = i === path.length - 2;
      if (isEnd) {
        break;
      }
      var row = +key;
      var type = +path[++i] === 0 ? "key" : "value";
      var keyOfRow = getNthKey(parent, row);
      switch (type) {
        case "key":
          parent = keyOfRow;
          break;
        case "value":
          parent = parent.get(keyOfRow);
          break;
      }
    }
  }
  var lastKey = path[path.length - 1];
  if (isArray(parent) || isPlainObject(parent)) {
    parent[lastKey] = mapper(parent[lastKey]);
  }
  if (isSet(parent)) {
    var oldValue = getNthKey(parent, +lastKey);
    var newValue = mapper(oldValue);
    if (oldValue !== newValue) {
      parent["delete"](oldValue);
      parent.add(newValue);
    }
  }
  if (isMap(parent)) {
    var row = +path[path.length - 2];
    var keyToRow = getNthKey(parent, row);
    var type = +lastKey === 0 ? "key" : "value";
    switch (type) {
      case "key": {
        var newKey = mapper(keyToRow);
        parent.set(newKey, parent.get(keyToRow));
        if (newKey !== keyToRow) {
          parent["delete"](keyToRow);
        }
        break;
      }
      case "value": {
        parent.set(keyToRow, mapper(parent.get(keyToRow)));
        break;
      }
    }
  }
  return object;
};

// node_modules/superjson/dist/esm/plainer.js
var __read3 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
};
var __spreadArray2 = function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
    to[j] = from[i];
  return to;
};
function traverse(tree, walker2, origin) {
  if (origin === void 0) {
    origin = [];
  }
  if (!tree) {
    return;
  }
  if (!isArray(tree)) {
    forEach(tree, function(subtree, key) {
      return traverse(subtree, walker2, __spreadArray2(__spreadArray2([], __read3(origin)), __read3(parsePath(key))));
    });
    return;
  }
  var _a = __read3(tree, 2), nodeValue = _a[0], children = _a[1];
  if (children) {
    forEach(children, function(child, key) {
      traverse(child, walker2, __spreadArray2(__spreadArray2([], __read3(origin)), __read3(parsePath(key))));
    });
  }
  walker2(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations) {
  traverse(annotations, function(type, path) {
    plain = setDeep(plain, path, function(v) {
      return untransformValue(v, type);
    });
  });
  return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
  function apply(identicalPaths, path) {
    var object = getDeep(plain, parsePath(path));
    identicalPaths.map(parsePath).forEach(function(identicalObjectPath) {
      plain = setDeep(plain, identicalObjectPath, function() {
        return object;
      });
    });
  }
  if (isArray(annotations)) {
    var _a = __read3(annotations, 2), root = _a[0], other = _a[1];
    root.forEach(function(identicalPath) {
      plain = setDeep(plain, parsePath(identicalPath), function() {
        return plain;
      });
    });
    if (other) {
      forEach(other, apply);
    }
  } else {
    forEach(annotations, apply);
  }
  return plain;
}

// node_modules/superjson/dist/esm/index.js
var import_lodash = __toESM(require_lodash());
var deserialize = function(payload) {
  var json2 = payload.json, meta = payload.meta;
  var result = (0, import_lodash.default)(json2);
  if (meta === null || meta === void 0 ? void 0 : meta.values) {
    result = applyValueAnnotations(result, meta.values);
  }
  if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
    result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
  }
  return result;
};

// node_modules/superjson-remix/dist/superjson-remix.esm.js
var parse = function parse2(superJsonResult) {
  return deserialize(superJsonResult);
};
var useLoaderData2 = function useLoaderData3() {
  var loaderData = useLoaderData();
  return parse(loaderData);
};

// app/routes/country/index.tsx
var import_react2 = __toESM(require_react());
function Index() {
  const countries = useLoaderData2();
  const [query, setQuery] = (0, import_react2.useState)("");
  return /* @__PURE__ */ React.createElement("section", {
    className: "container mx-auto max-w-screen-lg"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-11"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "h-10",
    placeholder: "Search for a country...",
    onChange: (event) => setQuery(event.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-auto mt-11"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "h-10",
    placeholder: "Filter by region"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-y-12 gap-x-16 mt-11"
  }, countries.filter(({ name }) => {
    if (name === "") {
      return countries;
    } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
      return countries;
    }
  }).map(({ flags, name, population, region, capital, cca3 }) => /* @__PURE__ */ React.createElement("div", {
    key: name.common,
    className: "bg-white shadow-md shadow-white"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-32 w-full",
    src: flags.png,
    alt: `bandeira de ${name.common}`
  }), /* @__PURE__ */ React.createElement(Link, {
    to: `/country/${cca3.toLowerCase()}`
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement("b", null, name.common, " "), " ")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Population:"), " ", population), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Region:"), " ", region), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Capital:"), " ", capital))).splice(0, 8)));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/country/index-6CMLSFSH.js.map
