<script lang="ts">
	import MeetingSetup from '../components/MeetingSetup.svelte'
	import MeetingJoin from '../components/MeetingJoin.svelte'
	import MeetingBrowser from '../components/MeetingBrowser.svelte'
	import PersonaSetup from '../components/PersonaSetup.svelte'
</script>


<header>
	<h1>🎡 MetaMeet</h1>
</header>

<main>
	<section class="card">
		<h2>Create a Meeting</h2>
		<hr>
		<MeetingSetup />
		<hr>
		<button>Create</button>
	</section>

	<section class="card">
		<h2>Join Meeting</h2>
		<hr>
		<MeetingJoin />
		<hr>
		<button>Go</button>
	</section>

	<section class="card">
		<h2>Your Persona</h2>
		<hr>
		<PersonaSetup />
		<hr>
		<button>Save</button>
	</section>
</main>

<section>
	<h2>Happening Now</h2>
	<hr>
	<MeetingBrowser />
</section>


<style>
	:global(#svelte) {
		--gap-vertical: 2rem;
		--gap-horizontal: 1.5rem;
	}
	:global(#svelte > * > *) {
		--gap-vertical: 0.5rem;
		--gap-horizontal: 0.5rem;
	}

	header {
		text-align: center;
	}

	main {
		display: grid;
		grid-auto-flow: column;
		gap: var(--gap-horizontal)
	}
	main > * {
		flex: 1 auto;
	}
</style>