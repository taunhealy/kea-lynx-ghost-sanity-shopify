import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'recent-music',
	title: 'Recent Music',
	type: 'object',
	fields: [
		defineField({
			name: 'musicItems',
			title: 'Music Items',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'music' }] }],
			description: 'Select music items to display in the Recent Music section.',
		}),
	],
	preview: {
		select: {
			musicItems: 'musicItems',
		},
		prepare({ musicItems }) {
			return {
				title: 'Recent Music',
				subtitle: `Selected items: ${musicItems.length}`,
			}
		},
	},
})

