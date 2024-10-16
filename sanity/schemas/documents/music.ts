import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'music',
	title: 'Music',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required().min(1).max(100),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					validation: (Rule) => Rule.required(),
				}),
			],
		}),
		defineField({
			name: 'spotifyLink',
			title: 'Spotify Link',
			type: 'url',
			validation: (Rule) => 
				Rule.required()
					.uri({
						scheme: ['https'],
					})
					.error('Please enter a valid URL.'),
		}),
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
		prepare(selection) {
			const { title, media } = selection
			return {
				title,
				media,
			}
		},
	},
})
