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
		<button class="medium">Connect Wallet</button>
	</label>

	<label>
		<span>Avatar</span>
		<AvatarPicker bind:avatar={persona.avatar} ethereumAccount={persona.ethereumAccount} />
	</label>
</form>


<!-- <script lang="ts">
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


	import { formula } from 'svelte-formula'

	const { form } = formula({
		defaultValues: persona
	})
</script>


<form use:form>
	<label>
		<span>Persona Name</span>
		<input type="text" name="displayName" placeholder="Satoshi Nakamoto" required />
	</label>

	<label>
		<span>Username</span>
		<input type="text" name="username" placeholder="@satoshi" />
	</label>

	<label>
		<span>Ethereum Account</span>
		<input type="hidden" name="ethereumAccount" />
	</label>

	<label>
		<span>Avatar</span>
		<select name="avatar">
		</select>
	</label>
</form> -->