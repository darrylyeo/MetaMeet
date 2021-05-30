<script context="module">
	import { getMeeting } from '../../data/textile/meetings-threaddb'


	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		globalThis.fetch = fetch
		console.log(page)

		try {
			const {meeting, dbInfo} = await getMeeting(page.params.meetingKey)
			return {
				props: {
					meeting,
					dbInfo
				}
			}
		}catch(e){
			console.error(e)
			return {
				status: 500,
				error: e
			}
		}
	}
</script>


<script lang="ts">
	import type { Meeting } from '../../data/meeting'
	export let meeting: Meeting

	import type { DBInfo } from '@textile/hub'
	let dbInfo: DBInfo


// <script lang="ts">
// 	import { page } from '$app/stores'
	
// 	import type { Meeting } from '../../data/meeting'
// 	import type { DBInfo } from '@textile/hub'
// 	import { getMeeting } from '../../data/textile/meetings-threaddb'
// 	let meeting: Meeting
// 	let dbInfo: DBInfo
// 	getMeeting($page.params.meetingKey).then(_ => {({meeting, dbInfo} = _)})
	
	
	
	import LivepeerStream from '../../components/LivepeerStream.svelte'
</script>

{#if !meeting}
	<div class="card">
		Loading meeting details...
	</div>
{:else}
	{#if meeting?.livepeerStream}
		<LivepeerStream livepeerStream={meeting.livepeerStream} />
	{/if}
{/if}