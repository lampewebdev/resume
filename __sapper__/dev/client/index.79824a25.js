import { S as SvelteComponentDev, i as init, s as safe_not_equal, r as space, e as element, m as text, o as claim_text, a as claim_element, b as children, d as detach, f as add_location, v as attr, g as insert, p as append, n as noop } from './index.4eb830aa.js';

/* src/routes/index.svelte generated by Svelte v3.9.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div2, div1, div0, span0, t1, t2, span1, t3, t4, img;

	return {
		c: function create() {
			t0 = space();
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			span0 = element("span");
			t1 = text("Michael Lazarski");
			t2 = space();
			span1 = element("span");
			t3 = text("Web Developer");
			t4 = space();
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			span0 = claim_element(div0_nodes, "SPAN", {}, false);
			var span0_nodes = children(span0);

			t1 = claim_text(span0_nodes, "Michael Lazarski");
			span0_nodes.forEach(detach);
			t2 = claim_text(div0_nodes, "\n\t\t\t");

			span1 = claim_element(div0_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			t3 = claim_text(span1_nodes, "Web Developer");
			span1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t4 = claim_text(div1_nodes, "\n\t\t");

			img = claim_element(div1_nodes, "IMG", { src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
			add_location(span0, file, 15, 3, 241);
			attr(span1, "class", "job");
			add_location(span1, file, 16, 3, 274);
			attr(div0, "class", "profile svelte-otr701");
			add_location(div0, file, 14, 2, 216);
			attr(img, "src", "profile.jpg");
			attr(img, "alt", "profile picture");
			add_location(img, file, 20, 2, 333);
			attr(div1, "class", "container mx-auto");
			add_location(div1, file, 13, 1, 182);
			attr(div2, "class", "flex");
			add_location(div2, file, 12, 0, 162);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, div0);
			append(div0, span0);
			append(span0, t1);
			append(div0, t2);
			append(div0, span1);
			append(span1, t3);
			append(div1, t4);
			append(div1, img);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div2);
			}
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzk4MjRhMjUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
