import { defineField, defineType } from 'sanity'
import { FaMusic } from 'react-icons/fa'

export default defineType({
	name: 'music',
	title: 'Music',
	icon: FaMusic,
	type: 'object',
	fields: [
		defineField({
			name: 'musicItems',
			title: 'Music Items',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'music' }] }],
			description: 'Select music items to display.',
		}),
	],
	preview: {
		select: {
			musicItems: 'musicItems',
		},
		prepare({ musicItems }) {
			return {
				title: 'Music',
				subtitle: `Selected items: ${musicItems.length}`,
			}
		},
	},
})
