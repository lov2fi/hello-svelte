import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { products } = data;
  const { users } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(products, (product) => {
    return `<h2>${escape(product.title)}</h2>
  <h3>($ ${escape(product.price)})</h3>`;
  })}

${each(users, (user) => {
    return `<p>${escape(user.firstName)}(${escape(user.age)})</p>`;
  })}`;
});
export {
  Page as default
};
