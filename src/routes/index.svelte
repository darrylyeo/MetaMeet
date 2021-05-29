<script lang="ts">
	import MeetingSetup from '../components/MeetingSetup.svelte'
	import PersonaSetup from '../components/PersonaSetup.svelte'
</script>


<header>
	<h1>🎡 MetaMeet</h1>
</header>

<section class="card">
	<h2>Create a Meeting</h2>
	<hr>
	<MeetingSetup />
	<hr>
	<button>Create</button>
</section>

<section class="card">
	<h2>Your Persona</h2>
	<hr>
	<PersonaSetup />
	<hr>
	<button>Save</button>
</section>


<style>
	header {
		text-align: center;
	}
</style>