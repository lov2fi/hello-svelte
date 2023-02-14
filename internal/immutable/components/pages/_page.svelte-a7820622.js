import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, n as attr, b as insert_hydration, E as append_hydration, C as noop } from "../../chunks/index-8e46f45b.js";
function create_fragment(ctx) {
  let h1;
  let t;
  return {
    c() {
      h1 = element("h1");
      t = text("This is the Sveltekit & Tailwindcss");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t = claim_text(h1_nodes, "This is the Sveltekit & Tailwindcss");
      h1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-2xl font-bold");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
