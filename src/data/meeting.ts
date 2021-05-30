export type Meeting = {
	name: string,
	startDate: Date,
	endDate: Date,
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