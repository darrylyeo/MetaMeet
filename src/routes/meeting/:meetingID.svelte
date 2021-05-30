<script lang="ts">
	export let meetingID


	import type { Meeting } from '../../data/meeting'
	let meeting: Meeting
	
	
	import LivepeerStream from '../components/LivepeerStream.svelte'
</script>

{#if meeting.livepeerStream}
	<LivepeerStream livepeerStream={meeting.livepeerStream} />
{/if}