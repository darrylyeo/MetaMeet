<script lang="ts">
	export let meeting


	let meetingCode
</script>


<form>
	<label>
		<span>MetaMeet Code</span>
		<input type="text" bind:value={meetingCode} placeholder="" />
	</label>
</form>