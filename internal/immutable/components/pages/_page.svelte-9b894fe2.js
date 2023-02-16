import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, h as detach, n as attr, K as src_url_equal, b as insert_hydration, E as append_hydration, C as noop } from "../../chunks/index-aaec11da.js";
import { b as base } from "../../chunks/paths-d0376391.js";
function create_fragment(ctx) {
  let div;
  let img;
  let img_src_value;
  let t0;
  let h3;
  let t1;
  let t2;
  let p;
  let t3;
  return {
    c() {
      div = element("div");
      img = element("img");
      t0 = space();
      h3 = element("h3");
      t1 = text("속박을 기다리는 사람");
      t2 = space();
      p = element("p");
      t3 = text("구원의 손길을 내밀어줄 누군가를 기다리고 있는가. 이러한 자들이 진심으로 손꼽아 기다리는 것은 옴짝달싹 못하게 자신을\n    속박해줄 사람이다. 채찍을 든 맹수조련사처럼 먹이를 주면서 능숙하게 조련해줄 바로 그런 지배자이다.");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", { class: true, src: true, alt: true });
      t0 = claim_space(div_nodes);
      h3 = claim_element(div_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t1 = claim_text(h3_nodes, "속박을 기다리는 사람");
      h3_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", { class: true });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "구원의 손길을 내밀어줄 누군가를 기다리고 있는가. 이러한 자들이 진심으로 손꼽아 기다리는 것은 옴짝달싹 못하게 자신을\n    속박해줄 사람이다. 채찍을 든 맹수조련사처럼 먹이를 주면서 능숙하게 조련해줄 바로 그런 지배자이다.");
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "object-cover");
      if (!src_url_equal(img.src, img_src_value = base + "/pic/pexels-pixabay-40803.jpg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(h3, "class", "mt-2 text-base font-medium tracking-tight text-slate-900 dark:text-white");
      attr(p, "class", "mt-2 mb-2 text-sm text-slate-500 dark:text-slate-400");
      attr(div, "class", "m-10 rounded-lg bg-white p-6 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, img);
      append_hydration(div, t0);
      append_hydration(div, h3);
      append_hydration(h3, t1);
      append_hydration(div, t2);
      append_hydration(div, p);
      append_hydration(p, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
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
