interface EnvConfig {
	projectId: string
	dataset: string
	sanityToken?: string
	// Add other environment variables as needed
}

const env: EnvConfig = {
	projectId: process.env.PROJECT_ID || 'defaultProjectId',
	dataset: process.env.DATASET || 'defaultDataset',
	sanityToken: process.env.SANITY_TOKEN, // Initialize other variables
}

export default env
