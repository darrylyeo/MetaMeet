<script lang="ts">
	export let value = new Date()


	function formatDateTime(date: Date){
		return new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000)).toISOString().slice(0, 16)
	}
</script>


<input type="datetime-local" value={formatDateTime(value)} on:change={e => value = new Date(e.target.value)} />


<!-- <script>
	export let value = new Date()

	let date = value.toDateString()
	let time = value.toTimeString()
	$: value = new Date(date + ' ' + time)
</script>


<input type="date" bind:value={date} pattern="\d{4}-\d{2}-\d{2}" />
<input type="time" bind:value={time} /> -->