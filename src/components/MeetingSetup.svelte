<script lang="ts">
	import type { Meeting } from 'src/data/meeting'


	const HOUR = 60 * 60 * 1000
	export let meeting: Meeting = {
		name: '',
		roomSize: 2,
		livepeerStream: undefined,
		unlockProtocolLock: {
			chainID: 1,
			contractAddress: ''
		},
		poapToken: {
			tokenID: undefined
		},
		startDate: Date.now(),
		endDate: Date.now() + 1 * HOUR
	}
	$: console.log(meeting)


	import { createMeeting } from '../data/textile/meetings-threaddb'
	import { goto } from '$app/navigation'

	async function onSubmit(){
		const {key, addrs} = await createMeeting(meeting)

		const params = new URLSearchParams()
		params.append('dbInfo', JSON.stringify({key, addrs}))

		goto(`meeting?${params}`)
	}


	import textileIcon from '../assets/textile.svg'
	import livepeerIcon from '../assets/livepeer.svg'
	import unlockIcon from '../assets/unlock.svg'
	import poapIcon from '../assets/poap.svg'
	import InputDateTime from './InputDateTime.svelte'
	import LivepeerStreamPicker from './LivepeerStreamPicker.svelte'
</script>


<form on:submit|preventDefault={onSubmit}>
	<label>
		<span>Meeting Name</span>
		<input type="text" bind:value={meeting.name} required class="meeting-name" placeholder="Web3 Weekend" />
	</label>

	<label>
		<span>Start Time</span>
		<InputDateTime bind:value={meeting.startDate} required />
		<button type="button" class="medium" on:click={() => meeting.startDate = Date.now()}>Now</button>
		<button type="button" class="medium" on:click={() => meeting.startDate = (Math.floor(Date.now() / (1 * HOUR)) + 1) * (1 * HOUR)}>Next Hour</button>
		<button type="button" class="medium" on:click={() => meeting.startDate = (Math.floor(Date.now() / (0.5 * HOUR)) + 1) * (0.5 * HOUR)}>Next Half-Hour</button>
	</label>

	<label>
		<span>End Time</span>
		<InputDateTime bind:value={meeting.endDate} />
		<button type="button" class="medium" on:click={() => meeting.endDate = meeting.startDate + 0.5 * HOUR}>30 min</button>
		<button type="button" class="medium" on:click={() => meeting.endDate = meeting.startDate + 1 * HOUR}>1 hour</button>
		<button type="button" class="medium" on:click={() => meeting.endDate = meeting.startDate + 2 * HOUR}>2 hours</button>
		<button type="button" class="medium" on:click={() => meeting.endDate = meeting.startDate + 24 * HOUR}>1 day</button>
	</label>

	<label>
		<span>Maximum Room Size</span>
		<input type="number" bind:value={meeting.roomSize} placeholder="Infinite" />
	</label>


	<hr>


	<h3>Web 3.0 Integrations</h3>

	<div class="integrations">
		<section class="card">
			<h4><img src={textileIcon} alt="Textile Icon" width="20" /> Textile (Data/Synchronization/Chat)</h4>
			<p>Use MetaMeet's event management and chat features, powered by <a href="https://textile.io" target="_blank">Textile</a>'s decentralized infrastructure. Enabled by default.</p>
		</section>

		<section class="card">
			<h4><img src={livepeerIcon} alt="Livepeer Icon" width="20" /> Livepeer (Video Streaming)</h4>
			<p>Broadcast a decentralized live video stream to attendees via <a href="https://livepeer.com" target="_blank">Livepeer</a>.</p>

			<LivepeerStreamPicker bind:selectedStream={meeting.livepeerStream} />
		</section>

		<section class="card">
			<h4><img src={unlockIcon} alt="Unlock Icon" width="25" /> Unlock Protocol (Membership/Paywall)</h4>
			<p>Require attendees to have an <a href="https://unlock-protocol.com" target="_blank">Unlock Protocol</a> membership to join the meeting. (You'll have to distribute it before the meeting starts.)</p>

			<label>
				<span>Lock Contract Address <small>(<a href="https://app.unlock-protocol.com/dashboard" target="_blank">Create</a>)</small></span>

				<input type="text" bind:value={meeting.unlockProtocolLock.contractAddress} placeholder="0x1234567890abcdef..." />
			</label>

			<label>
				<span>Network</span>

				<select bind:value={meeting.unlockProtocolLock.chainID}>
					<option value={1}>Ethereum</option>
					<option value={100}>xDAI</option>
					<optgroup label="Testnets">
						<option value={4}>Rinkeby</option>
						<option value={42}>Kovan</option>
					</optgroup>
				</select>
			</label>
		</section>


		<section class="card">
			<h4><img src={poapIcon} alt="POAP Icon" width="28" /> Proof of Attendance and Participation (POAP)</h4>
			<p>Distribute a custom <a href="https://poap.xyz" target="_blank">POAP</a> NFT to all attendees with a connected Ethereum account when the meeting ends.</p>

			<label>
				<span>POAP Token ID <small>(<a href="https://app.poap.xyz/admin/events" target="_blank">Create</a>)</small></span>

				<input type="text" bind:value={meeting.poapToken.tokenID} placeholder="1" />
			</label>
		</section>
	</div>

	<hr>

	<button type="submit">Create</button>
</form>


<style>
	.meeting-name {
		font-size: 1.5em;
		font-weight: bold;
		width: 100%;
	}

	.integrations > * {
		display: block;
	}
	/* .integrations {
		display: grid;
		gap: var(--gap-horizontal);
		grid-template-columns: 1fr 1fr;
	} */
</style>




<!-- <script lang="ts">
	export let meeting = {
		roomSize: 2,
		videoStream: '',
		startDate: Date.now(),
		endDate: new Date(Date.now() + 24 * HOUR),
		poapID: ''
	}


	import { formula } from 'svelte-formula'

	const { form } = formula({
		defaultValues: meeting
	})
</script>


<form use:form>
	<label>
		<span>Maximum Room Size</span>
		<input type="number" name="roomSize" placeholder="Infinite" />
	</label>

	<label>
		<span>Video Stream</span>
		<input type="text" name="videoStream" />
	</label>

	<label>
		<span>Start Date</span>
		<input type="date" name="startDate" />
	</label>

	<label>
		<span>End Date</span>
		<input type="date" name="endDate" />
	</label>

	<label>
		<span>POAP</span>
		<input type="text" name="poapID" />
	</label>
</form> -->