import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, b as insert_hydration, E as append_hydration, u as set_data, C as noop, J as component_subscribe } from "../../chunks/index-cc1931c7.js";
import { s as stores } from "../../chunks/singletons-e7278713.js";
const getStores = () => {
  const stores$1 = stores;
  return {
    page: {
      subscribe: stores$1.page.subscribe
    },
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    updated: stores$1.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1_value = (
    /*$page*/
    ctx[0].status + ""
  );
  let t1;
  let t2;
  let t3_value = (
    /*$page*/
    ctx[0].error.message + ""
  );
  let t3;
  return {
    c() {
      h1 = element("h1");
      t0 = text("this is the global error view\n  ");
      t1 = text(t1_value);
      t2 = text(": ");
      t3 = text(t3_value);
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "this is the global error view\n  ");
      t1 = claim_text(h1_nodes, t1_value);
      t2 = claim_text(h1_nodes, ": ");
      t3 = claim_text(h1_nodes, t3_value);
      h1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      append_hydration(h1, t1);
      append_hydration(h1, t2);
      append_hydration(h1, t3);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$page*/
      1 && t1_value !== (t1_value = /*$page*/
      ctx2[0].status + ""))
        set_data(t1, t1_value);
      if (dirty & /*$page*/
      1 && t3_value !== (t3_value = /*$page*/
      ctx2[0].error.message + ""))
        set_data(t3, t3_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
let Error$1 = class Error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
};
export {
  Error$1 as default
};
