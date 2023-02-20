import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, F as listen, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out } from "../../chunks/index-cc1931c7.js";
import { b as base } from "../../chunks/paths-d0376391.js";
const app = "";
function create_fragment(ctx) {
  let div1;
  let div0;
  let h1;
  let a0;
  let t0;
  let t1;
  let a1;
  let t2;
  let t3;
  let button;
  let t4;
  let t5;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      a0 = element("a");
      t0 = text("home");
      t1 = space();
      a1 = element("a");
      t2 = text("about");
      t3 = space();
      button = element("button");
      t4 = text("mode");
      t5 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      a0 = claim_element(h1_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "home");
      a0_nodes.forEach(detach);
      t1 = claim_space(h1_nodes);
      a1 = claim_element(h1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "about");
      a1_nodes.forEach(detach);
      h1_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t4 = claim_text(button_nodes, "mode");
      button_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      if (default_slot)
        default_slot.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", base + "/");
      attr(a1, "href", base + "/about");
      attr(h1, "class", "fond-bold flex-auto space-x-2 text-3xl underline");
      attr(button, "class", "rounded-lg bg-slate-800 p-2 text-sm text-white shadow-xl");
      attr(div0, "class", "flex flex-row");
      attr(div1, "class", "h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h1);
      append_hydration(h1, a0);
      append_hydration(a0, t0);
      append_hydration(h1, t1);
      append_hydration(h1, a1);
      append_hydration(a1, t2);
      append_hydration(div0, t3);
      append_hydration(div0, button);
      append_hydration(button, t4);
      append_hydration(div1, t5);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*toggleMode*/
          ctx[0]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const toggleMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [toggleMode, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
