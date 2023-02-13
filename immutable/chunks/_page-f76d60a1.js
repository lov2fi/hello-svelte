const load = async ({ fetch }) => {
  console.log("fetching");
  const fetchProducts = async () => {
    const productsRes = await fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price");
    const productsData = await productsRes.json();
    return productsData.products;
  };
  const fetchUsers = async () => {
    const usersRes = await fetch("https://dummyjson.com/users?limit=5&skip=10&select=firstName,age");
    const usersData = await usersRes.json();
    return usersData.users;
  };
  return {
    products: fetchProducts(),
    users: fetchUsers()
  };
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
export {
  _page as _,
  load as l
};
