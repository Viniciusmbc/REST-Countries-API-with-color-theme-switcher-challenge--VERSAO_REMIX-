import {
  useLoaderData
} from "/build/_shared/chunk-D76HYSAF.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-CYR63KRY.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());
function Index() {
  const countries = useLoaderData();
  const [query, setQuery] = (0, import_react.useState)("");
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
    className: "grid grid-cols-4 gap-y-24 mt-11 place-items-center place-content-between"
  }, countries.filter(({ name }) => {
    if (name === "") {
      return countries;
    } else if (name.common.toLowerCase().includes(query.toLowerCase())) {
      return countries;
    }
  }).map(({ flags, name, population, region, capital }) => /* @__PURE__ */ React.createElement("div", {
    key: name.common
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-32 w-3/4",
    src: flags.png,
    alt: `bandeira de ${name.common}`
  }), /* @__PURE__ */ React.createElement("h2", null, name.common), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Population:"), " ", population), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Region:"), " ", region), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Capital:"), " ", capital))).splice(0, 8)));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-KZOOKWL6.js.map
