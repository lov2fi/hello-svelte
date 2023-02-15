import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, J as listen, C as noop } from "../../chunks/index-e5faaebd.js";
function create_fragment(ctx) {
  let div1;
  let div0;
  let h3;
  let t0;
  let t1;
  let p;
  let t2;
  let t3;
  let button;
  let t4;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h3 = element("h3");
      t0 = text("Sveltekit & Tailwindcss");
      t1 = space();
      p = element("p");
      t2 = text("Noto is a global font collection for writing in all modern and ancient languages. Noto Sans KR is an unmodulated\n      (“sans serif”) design for the Korean language using Hangul and the Korean Hanja scripts. It also supports\n      Hiragana, Katakana, Latin, Cyrillic and Greek. It has multiple weights.한글");
      t3 = space();
      button = element("button");
      t4 = text("dark mode");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Sveltekit & Tailwindcss");
      h3_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Noto is a global font collection for writing in all modern and ancient languages. Noto Sans KR is an unmodulated\n      (“sans serif”) design for the Korean language using Hangul and the Korean Hanja scripts. It also supports\n      Hiragana, Katakana, Latin, Cyrillic and Greek. It has multiple weights.한글");
      p_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t4 = claim_text(button_nodes, "dark mode");
      button_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "mt-2 text-base font-medium tracking-tight text-slate-900 dark:text-white");
      attr(p, "class", "mt-2 mb-2 text-sm text-slate-500 dark:text-slate-400");
      attr(button, "class", "rounded-lg bg-red-200 p-2 text-sm shadow-xl");
      attr(div0, "class", "m-10 rounded-lg bg-white p-6 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800");
      attr(div1, "class", "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h3);
      append_hydration(h3, t0);
      append_hydration(div0, t1);
      append_hydration(div0, p);
      append_hydration(p, t2);
      append_hydration(div0, t3);
      append_hydration(div0, button);
      append_hydration(button, t4);
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
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self) {
  const toggleMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return [toggleMode];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
