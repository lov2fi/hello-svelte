import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, C as noop, K as destroy_each } from "../../../chunks/index-e5faaebd.js";
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
  let li;
  let t0_value = (
    /*product*/
    ctx[6].title + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*product*/
    ctx[6].price + ""
  );
  let t2;
  let t3;
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = text(" (only $ ");
      t2 = text(t2_value);
      t3 = text(")");
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_text(li_nodes, " (only $ ");
      t2 = claim_text(li_nodes, t2_value);
      t3 = claim_text(li_nodes, ")");
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, t1);
      append_hydration(li, t2);
      append_hydration(li, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block(ctx) {
  let li;
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
      li = element("li");
      t0 = text(t0_value);
      t1 = text(" (");
      t2 = text(t2_value);
      t3 = text(")");
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_text(li_nodes, " (");
      t2 = claim_text(li_nodes, t2_value);
      t3 = claim_text(li_nodes, ")");
      li_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, t1);
      append_hydration(li, t2);
      append_hydration(li, t3);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let ul0;
  let t2;
  let ul1;
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
      h1 = element("h1");
      t0 = text("Async Waterfall Test");
      t1 = space();
      ul0 = element("ul");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t2 = space();
      ul1 = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Async Waterfall Test");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      ul0 = claim_element(nodes, "UL", { class: true });
      var ul0_nodes = children(ul0);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(ul0_nodes);
      }
      ul0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      ul1 = claim_element(nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul1_nodes);
      }
      ul1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-2xl font-bold");
      attr(ul0, "class", "list-inside list-[upper-roman] p-10");
      attr(ul1, "class", "list-outside list-disc pl-10");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, ul0, anchor);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(ul0, null);
      }
      insert_hydration(target, t2, anchor);
      insert_hydration(target, ul1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul1, null);
      }
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
            each_blocks_1[i].m(ul0, null);
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
            each_blocks[i].m(ul1, null);
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
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(ul0);
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(ul1);
      destroy_each(each_blocks, detaching);
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
