<script lang="ts">
	import { env } from '../data/env'
	import { fetchStreams } from '../data/livepeer'
    import type { Stream } from '../data/livepeer'

    let streams: Stream[]
	let apiKey = '' // env.LIVEPEER_API_KEY as string

    $: if(apiKey)
		loadLivepeerStreams()

	function loadLivepeerStreams(){
		streams = undefined
		fetchStreams(apiKey, {only: 'streams'}).then(_ => streams = _).catch(console.error)
	}
	$: console.log('streams', streams)
	
	
    export let selectedStream: Stream

	import LivepeerStream from './LivepeerStream.svelte'
</script>


{#if !apiKey}
	<form on:submit|preventDefault={e => apiKey = new FormData(e.target).get('apiKey')}>
		<label>
			<span>Livepeer.com API Key <small>(<a href="https://livepeer.com/app/user/keys" target="_blank">Create</a>)</small></span>
			<input type="text" name="apiKey" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
			<button type="submit" class="medium">Confirm</button>
		</label>
	</form>
{:else}
	<label>
		<span>Choose Livepeer.com Video Stream<!-- <small>(<a href="https://livepeer.com/app/user" target="_blank">Create</a>)</small>--></span>
		<div class="card">
			{#if !streams}
				Fetching streams...
			{:else}
				{#each streams as stream}
					<article>
						<h4>{stream.name}</h4>
						<label>
							<input type="radio" bind:group={selectedStream} value={stream} />
							<span>Choose</span>
						</label>
					</article>
				{:else}
					<a href="https://livepeer.com/app/user" target="_blank">Set up a stream on Livepeer</a> first.
					<button on:click={loadLivepeerStreams}>Reload</button>
				{/each}
			{/if}
		</div>
	</label>
{/if}

{#if selectedStream}
	<div>
		<LivepeerStream livepeerStream={selectedStream} />
	</div>
{/if}
