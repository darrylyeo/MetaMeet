import type { Stream } from './livepeer'

export type Meeting = {
	name: string,
	roomSize?: number,
	livepeerStream?: Stream,
	unlockProtocolLock?: {
		chainID: number,
		contractAddress: string
	},
	poapToken?: {
		tokenID
	},
	startDate: Date,
	endDate: Date,
	poapID?: string
}