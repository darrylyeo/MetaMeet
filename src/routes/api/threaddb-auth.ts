// https://docs.textile.io/tutorials/hub/simple-credentials-endpoint/
// https://docs.textile.io/tutorials/hub/production-auth

import dotenv from 'dotenv'
dotenv.config()

import { createAPISig } from '@textile/security'

export async function get({ params }) {
	// Custom validation could be done here...
  
	/** Get API authorization for the user */
	const expiration = new Date(Date.now() + 60 * 1000)
	const auth = await createAPISig(process.env['VITE_TEXTILE_API_SECRET'], expiration)
  
	/** Include the API KEY in the auth payload */
	const credentials: {
		key: string // your user group api key,
		msg: string // your credentials expiration,
		sig: string // the api signature
	} = {
		...auth,
		key: process.env['VITE_TEXTILE_API_KEY'],
	}
  
	/** Return the credentials in a JSON object */
	return {
		body: credentials
	}
}