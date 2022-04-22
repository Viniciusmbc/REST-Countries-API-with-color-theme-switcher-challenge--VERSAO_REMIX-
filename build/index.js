var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/guinho/rest-countries-remix-version/REST-Countries-API-with-color-theme-switcher-challenge--VERSAO_REMIX-/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/root.css
var root_default = "/build/_assets/root-236B5CWE.css";

// route:/home/guinho/rest-countries-remix-version/REST-Countries-API-with-color-theme-switcher-challenge--VERSAO_REMIX-/app/root.tsx
var import_io5 = require("react-icons/io5");
function links() {
  return [{ rel: "stylesheet", href: root_default }];
}
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("main", {
    className: "main_layout"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar_itens"
  }, /* @__PURE__ */ React.createElement("h2", null, " Where in the World? "), /* @__PURE__ */ React.createElement("button", {
    className: "dark_mode_button"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(import_io5.IoMoonOutline, {
    className: "moon_icon"
  })), /* @__PURE__ */ React.createElement("p", null, "Dark Mode")))), /* @__PURE__ */ React.createElement("section", null, children));
}

// route:/home/guinho/rest-countries-remix-version/REST-Countries-API-with-color-theme-switcher-challenge--VERSAO_REMIX-/app/routes/country/$cca3.tsx
var cca3_exports = {};
__export(cca3_exports, {
  default: () => CountryDetails,
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());
async function loader({ params }) {
  params.cca3 = params.cca3.toLowerCase();
  const countries = await fetch(`https://restcountries.com/v3.1/alpha/${params.cca3}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders`);
  const country = await countries.json();
  const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders}`);
  const borders = await res.json();
  return {
    country,
    borders
  };
}
function CountryDetails() {
  const { country, borders } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    className: "flex"
  }, /* @__PURE__ */ React.createElement("h2", null, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: country.flags.png,
    alt: `bandeira de ${country.name.common}`
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", country.name.common, " "), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Native Name:", " ", Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].common), /* @__PURE__ */ React.createElement("li", null, " Population: ", country.population, " "), /* @__PURE__ */ React.createElement("li", null, " Region: ", country.region, " "), /* @__PURE__ */ React.createElement("li", null, " Sub Region: ", country.subregion, " "), /* @__PURE__ */ React.createElement("li", null, " Capital: ", country.capital, " "), /* @__PURE__ */ React.createElement("li", null, " Top Level Domain: ", country.tld[0], " "), /* @__PURE__ */ React.createElement("li", null, " Curriencies: ", Object.values(country.currencies)[0].name, " "), /* @__PURE__ */ React.createElement("li", null, " Languages: ", Object.values(country.languages).join(", "), " "), /* @__PURE__ */ React.createElement("li", null, " ", country.borders.length > 0 ? /* @__PURE__ */ React.createElement("div", null, " ", "Borders :", " ", borders.map(({ name }) => /* @__PURE__ */ React.createElement("p", null, " ", name.common, " "))) : null)))));
}

// route:/home/guinho/rest-countries-remix-version/REST-Countries-API-with-color-theme-switcher-challenge--VERSAO_REMIX-/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader2
});
init_react();
var import_react = require("@remix-run/react");
var import_superjson_remix2 = require("superjson-remix");
var import_react2 = require("react");

// app/api/countries.tsx
init_react();
var import_superjson_remix = require("superjson-remix");
async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3");
  const countries = (0, import_superjson_remix.json)(await response.json());
  return countries;
}

// route:/home/guinho/rest-countries-remix-version/REST-Countries-API-with-color-theme-switcher-challenge--VERSAO_REMIX-/app/routes/index.tsx
var import_io52 = require("react-icons/io5");

// app/styles/index.css
var styles_default = "/build/_assets/index-NNCXZ3PN.css";

// route:/home/guinho/rest-countries-remix-version/REST-Countries-API-with-color-theme-switcher-challenge--VERSAO_REMIX-/app/routes/index.tsx
function links2() {
  return [{ rel: "stylesheet", href: styles_default }];
}
async function loader2() {
  return getCountries();
}
function Index() {
  const countries = (0, import_superjson_remix2.useLoaderData)();
  const [query, setQuery] = (0, import_react2.useState)("");
  return /* @__PURE__ */ React.createElement("article", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("article", {
    className: "inputs_search_filter"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input_search"
  }, /* @__PURE__ */ React.createElement(import_io52.IoSearchSharp, {
    className: "input_search_icon"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "input_search_input",
    type: "text",
    placeholder: "Search for a country...",
    onChange: (event) => setQuery(event.target.value)
  })), /* @__PURE__ */ React.createElement("details", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("summary", {
    role: "button",
    className: "name_button_dropdown"
  }, /* @__PURE__ */ React.createElement("span", null, "Filter by Region"), /* @__PURE__ */ React.createElement("a", {
    className: "button"
  }, /* @__PURE__ */ React.createElement(import_io52.IoChevronDown, {
    className: "button_arrow_down"
  }), " ")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: `/countries/Africa`
  }, "Africa"), " "), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: `/countries/Americas`
  }, "Americas")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: `/countries/Asia`
  }, "Asia")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: `/countries/Europe`
  }, "Europe")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: `/countries/Oceania`
  }, "Oceania"))))), /* @__PURE__ */ React.createElement("article", {
    className: "card_grid"
  }, countries.filter(({ name }) => {
    if (name === "") {
      return countries;
    } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
      return countries;
    }
  }).map(({ flags, name, population, region, capital, cca3 }) => /* @__PURE__ */ React.createElement("div", {
    key: cca3,
    className: "cards"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "card_flags",
    src: flags.png,
    alt: `bandeira de ${name.common}`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "card_body"
  }, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: `/country/${cca3.toLowerCase()}`
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("b", null, name.common))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Population: "), " ", population), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Region: "), " ", region), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Capital: "), " ", capital)))).splice(0, 8)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "21f84b86", "entry": { "module": "/build/entry.client-DZYHFD4I.js", "imports": ["/build/_shared/chunk-CXVVDQDO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-3BYOI5FC.js", "imports": ["/build/_shared/chunk-GFZ4EQ4X.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/country/$cca3": { "id": "routes/country/$cca3", "parentId": "root", "path": "country/:cca3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/country/$cca3-O4FZE3NN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IL52QX3W.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-21F84B86.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/country/$cca3": {
    id: "routes/country/$cca3",
    parentId: "root",
    path: "country/:cca3",
    index: void 0,
    caseSensitive: void 0,
    module: cca3_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL2d1aW5oby9yZXN0LWNvdW50cmllcy1yZW1peC12ZXJzaW9uL1JFU1QtQ291bnRyaWVzLUFQSS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLWNoYWxsZW5nZS0tVkVSU0FPX1JFTUlYLS9hcHAvcm9vdC50c3giLCAicm91dGU6L2hvbWUvZ3VpbmhvL3Jlc3QtY291bnRyaWVzLXJlbWl4LXZlcnNpb24vUkVTVC1Db3VudHJpZXMtQVBJLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItY2hhbGxlbmdlLS1WRVJTQU9fUkVNSVgtL2FwcC9yb3V0ZXMvY291bnRyeS8kY2NhMy50c3giLCAicm91dGU6L2hvbWUvZ3VpbmhvL3Jlc3QtY291bnRyaWVzLXJlbWl4LXZlcnNpb24vUkVTVC1Db3VudHJpZXMtQVBJLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXItY2hhbGxlbmdlLS1WRVJTQU9fUkVNSVgtL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9hcGkvY291bnRyaWVzLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2d1aW5oby9yZXN0LWNvdW50cmllcy1yZW1peC12ZXJzaW9uL1JFU1QtQ291bnRyaWVzLUFQSS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLWNoYWxsZW5nZS0tVkVSU0FPX1JFTUlYLS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9ndWluaG8vcmVzdC1jb3VudHJpZXMtcmVtaXgtdmVyc2lvbi9SRVNULUNvdW50cmllcy1BUEktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci1jaGFsbGVuZ2UtLVZFUlNBT19SRU1JWC0vYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL2d1aW5oby9yZXN0LWNvdW50cmllcy1yZW1peC12ZXJzaW9uL1JFU1QtQ291bnRyaWVzLUFQSS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLWNoYWxsZW5nZS0tVkVSU0FPX1JFTUlYLS9hcHAvcm91dGVzL2NvdW50cnkvJGNjYTMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL2d1aW5oby9yZXN0LWNvdW50cmllcy1yZW1peC12ZXJzaW9uL1JFU1QtQ291bnRyaWVzLUFQSS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyLWNoYWxsZW5nZS0tVkVSU0FPX1JFTUlYLS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY291bnRyeS8kY2NhM1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY291bnRyeS8kY2NhM1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3VudHJ5LzpjY2EzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9yb290LmNzc1wiO1xuaW1wb3J0IHsgSW9Nb29uT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbl9sYXlvdXRcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX2l0ZW5zXCI+XG4gICAgICAgICAgPGgyPiBXaGVyZSBpbiB0aGUgV29ybGQ/IDwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYXJrX21vZGVfYnV0dG9uXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPElvTW9vbk91dGxpbmUgY2xhc3NOYW1lPVwibW9vbl9pY29uXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxwPkRhcmsgTW9kZTwvcD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzZWN0aW9uPntjaGlsZHJlbn08L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9KSB7XG4gIHBhcmFtcy5jY2EzID0gcGFyYW1zLmNjYTMudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY291bnRyaWVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9hbHBoYS8ke3BhcmFtcy5jY2EzfT9maWVsZHM9bmFtZSxmbGFncyxwb3B1bGF0aW9uLHJlZ2lvbixzdWJyZWdpb24sY2FwaXRhbCxsYW5ndWFnZXMsdGxkLGN1cnJlbmNpZXMsYm9yZGVyc2BcbiAgKTtcbiAgY29uc3QgY291bnRyeSA9IGF3YWl0IGNvdW50cmllcy5qc29uKCk7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9hbHBoYT9jb2Rlcz0ke2NvdW50cnkuYm9yZGVyc31gXG4gICk7XG5cbiAgY29uc3QgYm9yZGVycyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgY291bnRyeSxcbiAgICBib3JkZXJzLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJ5RGV0YWlscygpIHtcbiAgY29uc3QgeyBjb3VudHJ5LCBib3JkZXJzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgdG89e1wiL1wifSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxoMj5CYWNrPC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0xMFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtjb3VudHJ5LmZsYWdzLnBuZ31cbiAgICAgICAgICBhbHQ9e2BiYW5kZWlyYSBkZSAke2NvdW50cnkubmFtZS5jb21tb259YH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+IHtjb3VudHJ5Lm5hbWUuY29tbW9ufSA8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgTmF0aXZlIE5hbWU6e1wiIFwifVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjb3VudHJ5Lm5hbWUubmF0aXZlTmFtZSlbXG4gICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGNvdW50cnkubmFtZS5uYXRpdmVOYW1lKS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgXS5jb21tb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT4gUG9wdWxhdGlvbjoge2NvdW50cnkucG9wdWxhdGlvbn0gPC9saT5cbiAgICAgICAgICAgIDxsaT4gUmVnaW9uOiB7Y291bnRyeS5yZWdpb259IDwvbGk+XG4gICAgICAgICAgICA8bGk+IFN1YiBSZWdpb246IHtjb3VudHJ5LnN1YnJlZ2lvbn0gPC9saT5cbiAgICAgICAgICAgIDxsaT4gQ2FwaXRhbDoge2NvdW50cnkuY2FwaXRhbH0gPC9saT5cbiAgICAgICAgICAgIDxsaT4gVG9wIExldmVsIERvbWFpbjoge2NvdW50cnkudGxkWzBdfSA8L2xpPlxuICAgICAgICAgICAgPGxpPiBDdXJyaWVuY2llczoge09iamVjdC52YWx1ZXMoY291bnRyeS5jdXJyZW5jaWVzKVswXS5uYW1lfSA8L2xpPlxuICAgICAgICAgICAgPGxpPiBMYW5ndWFnZXM6IHtPYmplY3QudmFsdWVzKGNvdW50cnkubGFuZ3VhZ2VzKS5qb2luKFwiLCBcIil9IDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAge2NvdW50cnkuYm9yZGVycy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICBCb3JkZXJzIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB7Ym9yZGVycy5tYXAoKHsgbmFtZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPiB7bmFtZS5jb21tb259IDwvcD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwic3VwZXJqc29uLXJlbWl4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0Q291bnRyaWVzIH0gZnJvbSBcIn4vYXBpL2NvdW50cmllc1wiO1xuaW1wb3J0IHsgSW9TZWFyY2hTaGFycCwgSW9DaGV2cm9uRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgcmV0dXJuIGdldENvdW50cmllcygpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGNvdW50cmllcyA9IHVzZUxvYWRlckRhdGEoKTtcblxuICAvLyBTZWFyY2ggYmFyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImlucHV0c19zZWFyY2hfZmlsdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfc2VhcmNoXCI+XG4gICAgICAgICAgPElvU2VhcmNoU2hhcnAgY2xhc3NOYW1lPVwiaW5wdXRfc2VhcmNoX2ljb25cIiAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfc2VhcmNoX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIGNvdW50cnkuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxzdW1tYXJ5IHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYW1lX2J1dHRvbl9kcm9wZG93blwiPlxuICAgICAgICAgICAgPHNwYW4+RmlsdGVyIGJ5IFJlZ2lvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICA8SW9DaGV2cm9uRG93biBjbGFzc05hbWU9XCJidXR0b25fYXJyb3dfZG93blwiIC8+e1wiIFwifVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3VtbWFyeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2NvdW50cmllcy9BZnJpY2FgfT5BZnJpY2E8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvY291bnRyaWVzL0FtZXJpY2FzYH0+QW1lcmljYXM8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9jb3VudHJpZXMvQXNpYWB9PkFzaWE8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9jb3VudHJpZXMvRXVyb3BlYH0+RXVyb3BlPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvY291bnRyaWVzL09jZWFuaWFgfT5PY2VhbmlhPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2RldGFpbHM+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNhcmRfZ3JpZFwiPlxuICAgICAgICB7Y291bnRyaWVzXG4gICAgICAgICAgLmZpbHRlcigoeyBuYW1lIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb3VudHJpZXM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICBuYW1lLmNvbW1vbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cmllcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoKHsgZmxhZ3MsIG5hbWUsIHBvcHVsYXRpb24sIHJlZ2lvbiwgY2FwaXRhbCwgY2NhMyB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2NhM30gY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRfZmxhZ3NcIlxuICAgICAgICAgICAgICAgIHNyYz17ZmxhZ3MucG5nfVxuICAgICAgICAgICAgICAgIGFsdD17YGJhbmRlaXJhIGRlICR7bmFtZS5jb21tb259YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC9jb3VudHJ5LyR7Y2NhMy50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICA8Yj57bmFtZS5jb21tb259PC9iPlxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxiPlBvcHVsYXRpb246IDwvYj4ge3BvcHVsYXRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGI+UmVnaW9uOiA8L2I+IHtyZWdpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGI+Q2FwaXRhbDogPC9iPiB7Y2FwaXRhbH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgICAuc3BsaWNlKDAsIDgpfVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBqc29uIH0gZnJvbSBcInN1cGVyanNvbi1yZW1peFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnRyaWVzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbD9maWVsZHM9ZmxhZ3MsbmFtZSxwb3B1bGF0aW9uLHJlZ2lvbixjYXBpdGFsLGNjYTNcIlxuICApO1xuXG4gIGNvbnN0IGNvdW50cmllcyA9IGpzb24oYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcblxuICByZXR1cm4gY291bnRyaWVzO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzIxZjg0Yjg2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1EWllIRkQ0SS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1hWVkRRRE8uanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTNCWU9JNUZDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HRlo0RVE0WC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY291bnRyeS8kY2NhMyc6eydpZCc6J3JvdXRlcy9jb3VudHJ5LyRjY2EzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvdW50cnkvOmNjYTMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY291bnRyeS8kY2NhMy1PNEZaRTNOTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtSUw1MlFYM1cuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0yMUY4NEI4Ni5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFB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
