import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, F as update_slot_base, G as get_all_dirty_from_scope, H as get_slot_changes, f as transition_in, t as transition_out } from "../../chunks/index-8e46f45b.js";
function create_fragment(ctx) {
  let h1;
  let a0;
  let t0;
  let t1;
  let a1;
  let t2;
  let t3;
  let current;
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
      h1 = element("h1");
      a0 = element("a");
      t0 = text("home");
      t1 = space();
      a1 = element("a");
      t2 = text("about");
      t3 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
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
      t3 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(a0, "href", "/");
      attr(a1, "href", "/about");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, a0);
      append_hydration(a0, t0);
      append_hydration(h1, t1);
      append_hydration(h1, a1);
      append_hydration(a1, t2);
      insert_hydration(target, t3, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
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
        detach(h1);
      if (detaching)
        detach(t3);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const prerender = true;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [prerender, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { prerender: 0 });
  }
  get prerender() {
    return this.$$.ctx[0];
  }
}
export {
  Layout as default
};
