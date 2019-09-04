import { S as SvelteComponentDev, i as init, s as safe_not_equal, r as space, e as element, m as text, o as claim_text, a as claim_element, b as children, d as detach, f as add_location, v as attr, g as insert, p as append, n as noop } from './index.4eb830aa.js';

/* src/routes/index.svelte generated by Svelte v3.9.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div4, div3, div2, div0, t1, t2, div1, t3, t4, img, t5, ul, li0, t6, li1, p0, span0, t7, t8, t9, li2, p1, span1, t10, t11, t12, li3, p2, span2, t13, t14, t15, li4, p3, span3, t16, t17, t18, li5, p4, span4, t19, t20;

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
			t5 = space();
			ul = element("ul");
			li0 = element("li");
			t6 = space();
			li1 = element("li");
			p0 = element("p");
			span0 = element("span");
			t7 = text("Name:");
			t8 = text("\n          Michael Lazarski");
			t9 = space();
			li2 = element("li");
			p1 = element("p");
			span1 = element("span");
			t10 = text("Degree:");
			t11 = text("\n          Computer Science B.Sc.");
			t12 = space();
			li3 = element("li");
			p2 = element("p");
			span2 = element("span");
			t13 = text("Birthday:");
			t14 = text("\n          13.08.1986");
			t15 = space();
			li4 = element("li");
			p3 = element("p");
			span3 = element("span");
			t16 = text("Email:");
			t17 = text("\n          michael@lampeweb.de");
			t18 = space();
			li5 = element("li");
			p4 = element("p");
			span4 = element("span");
			t19 = text("Github:");
			t20 = text("\n          github.com/lampewebdev");
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
			t2 = claim_text(div2_nodes, "\n      ");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			t3 = claim_text(div1_nodes, "Web Developer");
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t4 = claim_text(div3_nodes, "\n    ");

			img = claim_element(div3_nodes, "IMG", { class: true, src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			t5 = claim_text(div3_nodes, "\n    ");

			ul = claim_element(div3_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li0_nodes = children(li0);

			li0_nodes.forEach(detach);
			t6 = claim_text(ul_nodes, "\n      ");

			li1 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li1_nodes = children(li1);

			p0 = claim_element(li1_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			span0 = claim_element(p0_nodes, "SPAN", {}, false);
			var span0_nodes = children(span0);

			t7 = claim_text(span0_nodes, "Name:");
			span0_nodes.forEach(detach);
			t8 = claim_text(p0_nodes, "\n          Michael Lazarski");
			p0_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t9 = claim_text(ul_nodes, "\n      ");

			li2 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li2_nodes = children(li2);

			p1 = claim_element(li2_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			span1 = claim_element(p1_nodes, "SPAN", {}, false);
			var span1_nodes = children(span1);

			t10 = claim_text(span1_nodes, "Degree:");
			span1_nodes.forEach(detach);
			t11 = claim_text(p1_nodes, "\n          Computer Science B.Sc.");
			p1_nodes.forEach(detach);
			li2_nodes.forEach(detach);
			t12 = claim_text(ul_nodes, "\n      ");

			li3 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li3_nodes = children(li3);

			p2 = claim_element(li3_nodes, "P", {}, false);
			var p2_nodes = children(p2);

			span2 = claim_element(p2_nodes, "SPAN", {}, false);
			var span2_nodes = children(span2);

			t13 = claim_text(span2_nodes, "Birthday:");
			span2_nodes.forEach(detach);
			t14 = claim_text(p2_nodes, "\n          13.08.1986");
			p2_nodes.forEach(detach);
			li3_nodes.forEach(detach);
			t15 = claim_text(ul_nodes, "\n      ");

			li4 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li4_nodes = children(li4);

			p3 = claim_element(li4_nodes, "P", {}, false);
			var p3_nodes = children(p3);

			span3 = claim_element(p3_nodes, "SPAN", {}, false);
			var span3_nodes = children(span3);

			t16 = claim_text(span3_nodes, "Email:");
			span3_nodes.forEach(detach);
			t17 = claim_text(p3_nodes, "\n          michael@lampeweb.de");
			p3_nodes.forEach(detach);
			li4_nodes.forEach(detach);
			t18 = claim_text(ul_nodes, "\n      ");

			li5 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li5_nodes = children(li5);

			p4 = claim_element(li5_nodes, "P", {}, false);
			var p4_nodes = children(p4);

			span4 = claim_element(p4_nodes, "SPAN", {}, false);
			var span4_nodes = children(span4);

			t19 = claim_text(span4_nodes, "Github:");
			span4_nodes.forEach(detach);
			t20 = claim_text(p4_nodes, "\n          github.com/lampewebdev");
			p4_nodes.forEach(detach);
			li5_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
			add_location(div0, file, 127, 6, 2454);
			attr(div1, "class", "job");
			add_location(div1, file, 128, 6, 2488);
			attr(div2, "class", "profile p-2 svelte-11w5uje");
			add_location(div2, file, 126, 4, 2422);
			attr(img, "class", "profile-picture svelte-11w5uje");
			attr(img, "src", "profile.jpg");
			attr(img, "alt", "profile picture");
			add_location(img, file, 130, 4, 2540);
			attr(li0, "class", "svelte-11w5uje");
			add_location(li0, file, 132, 6, 2655);
			add_location(span0, file, 135, 10, 2695);
			add_location(p0, file, 134, 8, 2681);
			attr(li1, "class", "svelte-11w5uje");
			add_location(li1, file, 133, 6, 2668);
			add_location(span1, file, 141, 10, 2799);
			add_location(p1, file, 140, 8, 2785);
			attr(li2, "class", "svelte-11w5uje");
			add_location(li2, file, 139, 6, 2772);
			add_location(span2, file, 147, 10, 2911);
			add_location(p2, file, 146, 8, 2897);
			attr(li3, "class", "svelte-11w5uje");
			add_location(li3, file, 145, 6, 2884);
			add_location(span3, file, 153, 10, 3013);
			add_location(p3, file, 152, 8, 2999);
			attr(li4, "class", "svelte-11w5uje");
			add_location(li4, file, 151, 6, 2986);
			add_location(span4, file, 159, 10, 3121);
			add_location(p4, file, 158, 8, 3107);
			attr(li5, "class", "svelte-11w5uje");
			add_location(li5, file, 157, 6, 3094);
			attr(ul, "class", "profile-information svelte-11w5uje");
			add_location(ul, file, 131, 4, 2616);
			attr(div3, "class", "container mx-auto shadow-xl self-center m-6");
			add_location(div3, file, 125, 2, 2360);
			attr(div4, "class", "flex m-4");
			add_location(div4, file, 124, 0, 2335);
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
			append(div3, t5);
			append(div3, ul);
			append(ul, li0);
			append(ul, t6);
			append(ul, li1);
			append(li1, p0);
			append(p0, span0);
			append(span0, t7);
			append(p0, t8);
			append(ul, t9);
			append(ul, li2);
			append(li2, p1);
			append(p1, span1);
			append(span1, t10);
			append(p1, t11);
			append(ul, t12);
			append(ul, li3);
			append(li3, p2);
			append(p2, span2);
			append(span2, t13);
			append(p2, t14);
			append(ul, t15);
			append(ul, li4);
			append(li4, p3);
			append(p3, span3);
			append(span3, t16);
			append(p3, t17);
			append(ul, t18);
			append(ul, li5);
			append(li5, p4);
			append(p4, span4);
			append(span4, t19);
			append(p4, t20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzc1NWE1OWEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
