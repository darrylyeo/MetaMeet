import { Client, ThreadID, PrivateKey, UserAuth, DBInfo } from '@textile/hub'
import type { Meeting } from '../meeting'

type DBInfoKey = DBInfo['key']


const meetingSchema = {
	$schema: 'http://json-schema.org/draft-07/schema#',
	title: 'Meeting',
	type: 'object',
	properties: {
		_id: { type: 'string' },
		name: { type: 'string' },
		startDate: { type: 'number' },
		endDate: { type: 'number' },
		roomSize: {
			type: 'number',
			minimum: 1,
			maximum: 100,
		},

		livepeerStream: {
			type: 'object',
			properties: {
				id: { type: 'string' },
				playbackId: { type: 'string' },
			}
		},

		unlockProtocolLock: {
			type: 'object',
			properties: {
				chainID: { type: 'number' },
				contractAddress: { type: 'string' },
			}
		},

		poapToken: {
			type: 'object',
			properties: {
				tokenID: { type: 'string' },
			}
		},

		currentAttendees: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					displayName: { type: 'string' },
					address: { type: 'string' },
				}
			},
		},
		allAttendees: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					displayName: { type: 'string' },
					address: { type: 'string' },
				}
			},
		},
	},
}


const MEETINGS_COLLECTION = 'Meetings'



// let user: PrivateKey // globalThis.localStorage.user
// let auth: UserAuth // globalThis.localStorage.auth
let client: Client
let threadID: ThreadID
let dbInfo: DBInfo

async function getUser(){
	const user: PrivateKey = globalThis.localStorage.user ||= await PrivateKey.fromRandom()
	return user
}

async function getAuth(fetch = globalThis.fetch){
	return await fetch(`/api/threaddb-auth?${Date.now()}`).then(r => r.json())

	// const auth: UserAuth = (globalThis.localStorage.auth && JSON.parse(globalThis.localStorage.auth)) || (globalThis.localStorage.auth = JSON.stringify(
	// 	await (async () => {
	// 		// const user = await getUser()
	// 		return await fetch('/api/threaddb-auth').then(r => r.json())
	// 	})()
	// ))
	// return auth
}

async function getClient(auth: UserAuth) {
	return client ||= await (async () => {
		const client = await Client.withUserAuth(auth)
		return client
	})()
}

async function newToken(client: Client, user: PrivateKey) {
	const token = await client.getToken(user)
	return token
}

async function getOrCreateDB(client: Client) {
	return threadID ||= await (async () => {
		// Create new ThreadDB
		console.log('Creating new ThreadDB...')
		const threadID = await client.newDB() // await client.newDB(undefined, 'MeetingDB')
		console.log('threadID', threadID)

		// Initialize collections/schema
		await client.newCollection(threadID, {name: MEETINGS_COLLECTION, schema: meetingSchema})
		console.log('Created new collection Meetings')

		return threadID
	})()
}

async function getDBInfo(client: Client, threadID: ThreadID) {
	return dbInfo ||= await (async () => {
		return await client.getDBInfo(threadID)
	})()
}

async function getOrJoinFromDBInfo(client: Client, info: DBInfo) {
	return threadID ||= await (async () => {
		return await client.joinFromInfo(info)
	})()
}




let meetings


export async function createMeeting(meeting: Meeting){
	console.log('createMeeting')

	const auth = await getAuth()
	console.log('auth', auth)
	const client = await getClient(auth)
	console.log('client', client)
	const threadID = await getOrCreateDB(client)
	console.log('threadID', threadID)

	const createdMeetingInstance = await client.create(threadID, MEETINGS_COLLECTION, [meeting])
	console.log('createdMeetingInstance', createdMeetingInstance)

	const dbInfo = await getDBInfo(client, threadID)
	console.log('dbInfo', dbInfo)
	return dbInfo
}

export async function getMeeting(key: DBInfoKey){
	console.log('createMeeting')

	const auth = await getAuth()
	console.log('auth', auth)
	const client = await getClient(auth)
	console.log('client', client)
	const threadID = await getOrJoinFromDBInfo(client, {key, addrs: []})
	console.log('threadID', threadID)

	const meetingInstances: Meeting[] = await client.find(threadID, MEETINGS_COLLECTION, {limit: 100})
	console.log('meetingInstances', meetingInstances)

	const dbInfo = await getDBInfo(client, threadID)
	console.log('dbInfo', dbInfo)

	return {
		meeting: meetingInstances[0],
		dbInfo
	}
}

export async function getMeetings(meeting: Meeting){
	
}

export async function joinMeeting(meeting: Meeting){
	
}

export async function leaveMeeting(meeting: Meeting){
	
}
