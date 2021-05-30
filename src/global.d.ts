/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
	LIVEPEER_API_KEY: string

	LIVEPEER_STREAM_ID: string
	LIVEPEER_STREAM_KEY: string
	LIVEPEER_RTMP_INGEST_URL: string
	LIVEPEER_RTMP_PLAYBACK_URL: string
}