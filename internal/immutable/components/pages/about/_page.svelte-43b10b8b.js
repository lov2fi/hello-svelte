import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, L as set_input_value, F as listen, M as to_number, u as set_data, C as noop, N as destroy_each, O as run_all } from "../../../chunks/index-cc1931c7.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let li;
  let t0_value = (
    /*product*/
    ctx[12].title + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*product*/
    ctx[12].price + ""
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
    ctx[9].firstName + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*user*/
    ctx[9].age + ""
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
  let h10;
  let t0;
  let t1;
  let ul0;
  let t2;
  let ul1;
  let t3;
  let br;
  let t4;
  let h11;
  let t5;
  let t6;
  let input0;
  let t7;
  let input1;
  let t8;
  let t9;
  let t10;
  let button;
  let t11;
  let mounted;
  let dispose;
  let each_value_1 = (
    /*products*/
    ctx[3]
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*users*/
    ctx[4]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      h10 = element("h1");
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
      t3 = space();
      br = element("br");
      t4 = space();
      h11 = element("h1");
      t5 = text("+server api test");
      t6 = space();
      input0 = element("input");
      t7 = text(" +\n");
      input1 = element("input");
      t8 = text(" =\n");
      t9 = text(
        /*total*/
        ctx[2]
      );
      t10 = space();
      button = element("button");
      t11 = text("Calculate");
      this.h();
    },
    l(nodes) {
      h10 = claim_element(nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      t0 = claim_text(h10_nodes, "Async Waterfall Test");
      h10_nodes.forEach(detach);
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
      t3 = claim_space(nodes);
      br = claim_element(nodes, "BR", {});
      t4 = claim_space(nodes);
      h11 = claim_element(nodes, "H1", {});
      var h11_nodes = children(h11);
      t5 = claim_text(h11_nodes, "+server api test");
      h11_nodes.forEach(detach);
      t6 = claim_space(nodes);
      input0 = claim_element(nodes, "INPUT", { type: true });
      t7 = claim_text(nodes, " +\n");
      input1 = claim_element(nodes, "INPUT", { type: true });
      t8 = claim_text(nodes, " =\n");
      t9 = claim_text(
        nodes,
        /*total*/
        ctx[2]
      );
      t10 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      t11 = claim_text(button_nodes, "Calculate");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h10, "class", "text-2xl font-bold");
      attr(ul0, "class", "list-inside list-[upper-roman] p-10");
      attr(ul1, "class", "list-outside list-disc pl-10");
      attr(input0, "type", "number");
      attr(input1, "type", "number");
    },
    m(target, anchor) {
      insert_hydration(target, h10, anchor);
      append_hydration(h10, t0);
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
      insert_hydration(target, t3, anchor);
      insert_hydration(target, br, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, h11, anchor);
      append_hydration(h11, t5);
      insert_hydration(target, t6, anchor);
      insert_hydration(target, input0, anchor);
      set_input_value(
        input0,
        /*a*/
        ctx[0]
      );
      insert_hydration(target, t7, anchor);
      insert_hydration(target, input1, anchor);
      set_input_value(
        input1,
        /*b*/
        ctx[1]
      );
      insert_hydration(target, t8, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, t11);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[7]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[8]
          ),
          listen(
            button,
            "click",
            /*add*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*products*/
      8) {
        each_value_1 = /*products*/
        ctx2[3];
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
      16) {
        each_value = /*users*/
        ctx2[4];
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
      if (dirty & /*a*/
      1 && to_number(input0.value) !== /*a*/
      ctx2[0]) {
        set_input_value(
          input0,
          /*a*/
          ctx2[0]
        );
      }
      if (dirty & /*b*/
      2 && to_number(input1.value) !== /*b*/
      ctx2[1]) {
        set_input_value(
          input1,
          /*b*/
          ctx2[1]
        );
      }
      if (dirty & /*total*/
      4)
        set_data(
          t9,
          /*total*/
          ctx2[2]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h10);
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
      if (detaching)
        detach(t3);
      if (detaching)
        detach(br);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(h11);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(input0);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(input1);
      if (detaching)
        detach(t8);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(button);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { data } = $$props;
  const { products } = data;
  const { users } = data;
  let a = 0;
  let b = 0;
  let total = 0;
  function add() {
    $$invalidate(2, total = a + b);
  }
  function input0_input_handler() {
    a = to_number(this.value);
    $$invalidate(0, a);
  }
  function input1_input_handler() {
    b = to_number(this.value);
    $$invalidate(1, b);
  }
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(6, data = $$props2.data);
  };
  return [
    a,
    b,
    total,
    products,
    users,
    add,
    data,
    input0_input_handler,
    input1_input_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 6 });
  }
}
export {
  Page as default
};
