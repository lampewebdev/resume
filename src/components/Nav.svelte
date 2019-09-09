<script>
	export let segment;
</script>

<style>
	a {
		text-transform: uppercase;
	}
</style>

<nav class="bg-white rounded shadow-xl mt-4 lg:mt-0 lg:mx-4">
	<div class="flex md:mr-1">
		<span class="">
			<a class='
				bg-white inline-block py-4 px-4 font-semibold
				{segment === undefined ? "text-black bg-accent hover:bg-accent-hover hover:text-black" : "text-yellow-400"}'
				href="/">Home
			</a>
		</span>
		<span class="md:mr-1">
			<a class="bg-white inline-block py-4 px-4 text-yellow-400 hover:text-yellow-500 font-semibold" href="/portfolio">Portfolio</a>
		</span>
		<span class="md:mr-1">
			<a class="bg-white inline-block py-4 px-4 text-yellow-400 hover:text-yellow-500 font-semibold" href="https://lampewebdevblog.netlify.com/" target="_blank">Blog</a>
		</span>
	</div>
</nav>