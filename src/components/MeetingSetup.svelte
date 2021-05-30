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
		startDate: new Date(),
		endDate: new Date(Date.now() + 1 * HOUR),
		poapID: ''
	}
	$: console.log(meeting)


	import livepeerIcon from '../assets/livepeer.svg'
	import unlockIcon from '../assets/unlock.svg'
	import poapIcon from '../assets/poap.svg'
	import InputDateTime from './InputDateTime.svelte'
	import LivepeerStreamPicker from './LivepeerStreamPicker.svelte'
</script>


<form on:submit|preventDefault={() => {}}>
	<label>
		<span>Meeting Name</span>
		<input type="text" bind:value={meeting.name} placeholder="Web3 Weekend"/>
	</label>

	<label>
		<span>Start Date</span>
		<InputDateTime bind:value={meeting.startDate} />
		<button class="medium" on:click={() => meeting.startDate = new Date()}>Now</button>
		<button class="medium" on:click={() => meeting.startDate = new Date((Math.floor(Date.now() / (1 * HOUR)) + 1) * (1 * HOUR))}>Next Hour</button>
		<button class="medium" on:click={() => meeting.startDate = new Date((Math.floor(Date.now() / (0.5 * HOUR)) + 1) * (0.5 * HOUR))}>Next Half-Hour</button>
	</label>

	<label>
		<span>End Date</span>
		<InputDateTime bind:value={meeting.endDate} />
		<button class="medium" on:click={() => meeting.endDate = new Date(meeting.startDate.valueOf() + 0.5 * HOUR)}>30 min</button>
		<button class="medium" on:click={() => meeting.endDate = new Date(meeting.startDate.valueOf() + 1 * HOUR)}>1 hour</button>
		<button class="medium" on:click={() => meeting.endDate = new Date(meeting.startDate.valueOf() + 2 * HOUR)}>2 hours</button>
		<button class="medium" on:click={() => meeting.endDate = new Date(meeting.startDate.valueOf() + 24 * HOUR)}>1 day</button>
	</label>

	<label>
		<span>Maximum Room Size</span>
		<input type="number" bind:value={meeting.roomSize} placeholder="Infinite" />
	</label>


	<hr>


	<h3>Integrations</h3>

	<div class="integrations">
		<section class="card">
			<h4><img src={livepeerIcon} alt="Livepeer Icon" width="20" /> Livepeer.com Stream</h4>
			<p>Broadcast a live video stream via Livepeer to attendees.</p>

			<LivepeerStreamPicker bind:selectedStream={meeting.livepeerStream} />
		</section>


		<section class="card">
			<h4><img src={unlockIcon} alt="Unlock Icon" width="25" /> Unlock Protocol</h4>
			<p>Require attendees to have an Unlock Protocol membership to join the meeting. (You'll have to distribute it before the meeting starts.)</p>

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
			<p>Distribute a POAP token to all attendees with a connected Ethereum account when the meeting ends.</p>

			<label>
				<span>POAP Token ID <small>(<a href="https://app.poap.xyz/admin/events" target="_blank">Create</a>)</small></span>

				<input type="text" bind:value={meeting.poapToken.tokenID} placeholder="1" />
			</label>
		</section>
	</div>
</form>