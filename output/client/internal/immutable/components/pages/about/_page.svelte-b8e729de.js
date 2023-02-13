import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as empty, c as claim_space, b as insert_hydration, C as noop, J as destroy_each, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, E as append_hydration } from "../../../chunks/index-8e46f45b.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let h2;
  let t0_value = (
    /*product*/
    ctx[6].title + ""
  );
  let t0;
  let t1;
  let h3;
  let t2;
  let t3_value = (
    /*product*/
    ctx[6].price + ""
  );
  let t3;
  let t4;
  return {
    c() {
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      h3 = element("h3");
      t2 = text("($ ");
      t3 = text(t3_value);
      t4 = text(")");
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach);
      t1 = claim_space(nodes);
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, "($ ");
      t3 = claim_text(h3_nodes, t3_value);
      t4 = claim_text(h3_nodes, ")");
      h3_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
      append_hydration(h2, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t2);
      append_hydration(h3, t3);
      append_hydration(h3, t4);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(h2);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(h3);
    }
  };
}
function create_each_block(ctx) {
  let p;
  let t0_value = (
    /*user*/
    ctx[3].firstName + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*user*/
    ctx[3].age + ""
  );
  let t2;
  let t3;
  return {
    c() {
      p = element("p");
      t0 = text(t0_value);
      t1 = text("(");
      t2 = text(t2_value);
      t3 = text(")");
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      t1 = claim_text(p_nodes, "(");
      t2 = claim_text(p_nodes, t2_value);
      t3 = claim_text(p_nodes, ")");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t0);
      append_hydration(p, t1);
      append_hydration(p, t2);
      append_hydration(p, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment(ctx) {
  let t;
  let each1_anchor;
  let each_value_1 = (
    /*products*/
    ctx[0]
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*users*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(nodes);
      }
      t = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each1_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*products*/
      1) {
        each_value_1 = /*products*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(t.parentNode, t);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*users*/
      2) {
        each_value = /*users*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach(t);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each1_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  const { products } = data;
  const { users } = data;
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(2, data = $$props2.data);
  };
  return [products, users, data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 2 });
  }
}
export {
  Page as default
};
