<script lang="ts">
	import MeetingSetup from '../components/MeetingSetup.svelte'
	import MeetingJoin from '../components/MeetingJoin.svelte'
	import MeetingBrowser from '../components/MeetingBrowser.svelte'
	import PersonaSetup from '../components/PersonaSetup.svelte'
</script>


<header>
	<h1>🎡 MetaMeet</h1>
	<!-- <h2>Hang out on the decentralized web, beyond space and time.</h2> -->
	<h2>Find a hang-out spot beyond space and time.</h2>
</header>

<main>
	<section class="card create">
		<h2>Create a Meeting</h2>
		<hr>
		<MeetingSetup />
	</section>

	<section class="card join">
		<h2>Join Meeting</h2>
		<hr>
		<MeetingJoin />
		<hr>
		<button>Go</button>
	</section>

	<section class="card profile">
		<h2>Your Profile</h2>
		<!-- <h2>Your Persona</h2> -->
		<hr>
		<PersonaSetup />
		<hr>
		<button>Save</button>
	</section>
</main>

<!-- <section>
	<h2>Happening Now</h2>
	<hr>
	<MeetingBrowser />
</section> -->


<style>
	:global(#svelte) {
		--gap-vertical: 2rem;
		--gap-horizontal: 1.5rem;
	}
	:global(#svelte > * > *) {
		--gap-vertical: 0.5rem;
		--gap-horizontal: 0.5rem;
	}

	/* header {
		text-align: center;
	} */
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* main {
		display: grid;
		grid-auto-flow: column;
		gap: var(--gap-horizontal);
		grid-template-columns: 1.75fr 1fr 1fr;
	}
	main > * {
		flex: 1 auto;
	} */
	main {
		display: grid;
		grid-template-areas:
			"create join"
			"create profile"
			"create .";
		gap: var(--gap-horizontal);
	}

	.create {
		grid-area: create;
	}

	.profile {
		grid-area: profile;
	}

	.join {
		grid-area: join;
	}
</style>