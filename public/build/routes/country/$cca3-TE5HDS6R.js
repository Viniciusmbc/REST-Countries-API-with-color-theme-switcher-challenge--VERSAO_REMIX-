import {
  json
} from "/build/_shared/chunk-72TKTXES.js";
import {
  init_react
} from "/build/_shared/chunk-ZYAOY4CR.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();
async function loader({ params }) {
  params.cca3 = params.cca3.toLowerCase();
  const countries = await fetch(`https://restcountries.com/v3/alpha/${params.cca3}?fields=name,population,region,capital`);
  const country = json(await countries.json());
  return country;
}
export {
  loader
};
//# sourceMappingURL=/build/routes/country/$cca3-TE5HDS6R.js.map
