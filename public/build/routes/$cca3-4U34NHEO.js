import {
  getCountryByCCA3,
  json,
  useLoaderData
} from "/build/_shared/chunk-XJROHAQS.js";
import {
  init_react,
  useParams
} from "/build/_shared/chunk-KFHNTOHL.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\$cca3.tsx?browser
init_react();

// app/routes/$cca3.tsx
init_react();
var useCountryByCCA3 = () => {
  const { cca3 } = useParams();
  return useLoaderData(() => getCountryByCCA3(cca3), json);
};
export {
  useCountryByCCA3
};
//# sourceMappingURL=/build/routes/$cca3-4U34NHEO.js.map
