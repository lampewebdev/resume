<script>
	import Nav from '../components/Nav.svelte';
	import ProfileHeader from '../components/ProfileHeader.svelte';
	export let segment;
</script>

<style>
</style>

<div class="container mx-auto m-6">
	<div class="flex flex-col lg:flex-row">
		<div class="container mx-auto w-full lg:w-3/12">
			<ProfileHeader />
		</div>
		<main class="container mx-auto w-full lg:w-9/12">
			<Nav {segment}/>
			<div class="bg-white p-2 rounded shadow-xl mt-4 lg:mx-4 lg:mt-4">
				<slot></slot>
			</div>
		</main>
	</div>
</div>