export type Meeting = {
	name: string,
	startDate: number,
	endDate: number,
	roomSize?: number,

	livepeerStream?: {
		id: string,
		playbackId: string
	},

	unlockProtocolLock?: {
		chainID: number,
		contractAddress: string
	},

	poapToken?: {
		tokenID
	}
}