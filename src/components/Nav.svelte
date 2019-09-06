<script>
	export let segment;
</script>

<style>
	a{
		text-transform: uppercase;
	}
</style>

<nav class="bg-white rounded shadow-xl mt-4 lg:mt-0 lg:mx-4">
	<ul class="flex md:mr-1">
		<li class="">
			<a class='
				bg-white inline-block py-4 px-4 font-semibold
				{segment === undefined ? "text-black bg-accent hover:bg-accent-hover hover:text-black" : "text-yellow-400"}'
				href="/">Home</a>
		</li>
		<li class="md:mr-1">
			<a class="bg-white inline-block py-4 px-4 text-yellow-400 hover:text-yellow-500 font-semibold" href="/resume">Resume</a>
		</li>
		<li class="md:mr-1">
			<a class="bg-white inline-block py-4 px-4 text-yellow-400 hover:text-yellow-500 font-semibold" href="/portfolio">Portfolio</a>
		</li>
		<li class="md:mr-1">
			<a class="bg-white inline-block py-4 px-4 text-yellow-400 hover:text-yellow-500 font-semibold" href="/blog">Blog</a>
		</li>
		<li class="md:mr-1">
			<a class="bg-white inline-block py-4 px-4 text-yellow-400 hover:text-yellow-500 font-semibold" href="/contact">Contact</a>
		</li>
	</ul>
</nav>