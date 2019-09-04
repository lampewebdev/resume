import { S as SvelteComponentDev, i as init, s as safe_not_equal, r as space, e as element, m as text, o as claim_text, a as claim_element, b as children, d as detach, f as add_location, v as attr, g as insert, p as append, n as noop } from './index.4eb830aa.js';

/* src/routes/index.svelte generated by Svelte v3.9.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div4, div3, div2, div0, t1, t2, div1, t3, t4, img;

	return {
		c: function create() {
			t0 = space();
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			t1 = text("Michael Lazarski");
			t2 = space();
			div1 = element("div");
			t3 = text("Web Developer");
			t4 = space();
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			div4 = claim_element(nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", {}, false);
			var div0_nodes = children(div0);

			t1 = claim_text(div0_nodes, "Michael Lazarski");
			div0_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n\t\t\t");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			t3 = claim_text(div1_nodes, "Web Developer");
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t4 = claim_text(div3_nodes, "\n\t\t");

			img = claim_element(div3_nodes, "IMG", { src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
			add_location(div0, file, 16, 3, 295);
			attr(div1, "class", "job");
			add_location(div1, file, 17, 3, 326);
			attr(div2, "class", "profile svelte-oprxq0");
			add_location(div2, file, 15, 2, 270);
			attr(img, "src", "profile.jpg");
			attr(img, "alt", "profile picture");
			add_location(img, file, 21, 2, 383);
			attr(div3, "class", "container mx-auto shadow-xl self-center m-4");
			add_location(div3, file, 14, 1, 210);
			attr(div4, "class", "flex");
			add_location(div4, file, 13, 0, 190);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div4, anchor);
			append(div4, div3);
			append(div3, div2);
			append(div2, div0);
			append(div0, t1);
			append(div2, t2);
			append(div2, div1);
			append(div1, t3);
			append(div3, t4);
			append(div3, img);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMGEzN2FmMGUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
