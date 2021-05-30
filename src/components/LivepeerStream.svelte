<script lang="ts">
	import type { Stream } from 'src/data/livepeer'


	export let livepeerStream: Stream
</script>


{#if livepeerStream}
	<video controls autoplay src="https://cdn.livepeer.com/hls/{livepeerStream.playbackId}/index.m3u8" />
{/if}