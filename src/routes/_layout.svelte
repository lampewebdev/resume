<script>
	import Nav from '../components/Nav.svelte';
	import ProfileHeader from '../components/ProfileHeader.svelte';
	export let segment;
</script>

<ProfileHeader />
<Nav {segment} />
<main>
	<slot></slot>
</main>