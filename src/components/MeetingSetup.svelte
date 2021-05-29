<script lang="ts">
	export let meeting = {
		roomSize: 2,
		videoStream: '',
		startDate: Date.now(),
		endDate: Date.now() + 24 * 60 * 60 * 1000,
		poapID: ''
	}


	import poapIcon from '../assets/poap.svg'
</script>


<form>
	<label>
		<span>Maximum Room Size</span>
		<input type="number" bind:value={meeting.roomSize} placeholder="Infinite" />
	</label>

	<label>
		<span>Video Stream</span>
		<input type="text" bind:value={meeting.videoStream} />
	</label>

	<label>
		<span>Start Date</span>
		<input type="date" bind:value={meeting.startDate} />
	</label>

	<label>
		<span>End Date</span>
		<input type="date" bind:value={meeting.endDate} />
	</label>

	<label>
		<span>POAP</span>
		<img src={poapIcon} alt="POAP Icon" height="35" />
		<input type="text" bind:value={meeting.poapID} />
	</label>
</form>