import {
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\$cca3.tsx?browser
init_react();

// app/routes/$cca3.tsx
init_react();
var loader = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
  return res.json();
};
export {
  loader
};
//# sourceMappingURL=/build/routes/$cca3-MQYQHXAR.js.map
