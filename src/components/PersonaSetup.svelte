<script lang="ts">
	export let persona = {
		displayName: '',
		username: '',
		ethereumAccount: {
			address: '',
			ens: ''
		},
		avatar: {
			type: 'nft',
			nftContractAddress: '',
			nftID: ''
		}
	}


	import AvatarPicker from './AvatarPicker.svelte'
</script>


<form>
	<label>
		<span>Name</span>
		<input type="text" bind:value={persona.displayName} placeholder="Satoshi Nakamoto" required />
	</label>
	<!-- <label>
		<span>Persona Name</span>
		<input type="text" bind:value={persona.displayName} placeholder="Satoshi Nakamoto" required />
	</label>

	<label>
		<span>Username</span>
		<input type="text" bind:value={persona.username} placeholder="@satoshi" />
	</label> -->

	<label>
		<span>Ethereum Account</span>
		<input type="hidden" bind:value={persona.ethereumAccount.address} />
	</label>

	<label>
		<span>Avatar</span>
		<AvatarPicker bind:avatar={persona.avatar} ethereumAccount={persona.ethereumAccount} />
	</label>
</form>