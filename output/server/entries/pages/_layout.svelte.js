import { c as create_ssr_component } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `<h1><a href="${"/"}">home</a>
  <a href="${"/about"}">about</a></h1>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
