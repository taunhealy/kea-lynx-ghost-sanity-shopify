import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import {
	textAlign,
	alignItems,
	alignmentFieldset,
} from '../fragments/fields/alignment'
import { getBlockText } from '@sanity/src/utils'

export default defineType({
	name: 'hero',
	title: 'Hero',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [
		{ name: 'content', default: true },
		{ name: 'image' },
		{ name: 'options' },
	],
	fieldsets: [alignmentFieldset],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }, reputationBlock],
			group: 'content',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'content',
		}),
		defineField({
			name: 'bgImage',
			title: 'Background image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
				defineField({
					name: 'loading',
					type: 'string',
					options: {
						list: ['lazy', 'eager'],
						layout: 'radio',
					},
					initialValue: 'lazy',
				}),
			],
			group: 'image',
		}),
		defineField({
			name: 'bgImageMobile',
			title: 'Background image (mobile)',
			type: 'image',
			options: {
				hotspot: true,
			},
			group: 'image',
		}),
		defineField({
			...textAlign,
			fieldset: 'alignment',
		}),
		defineField({
			...alignItems,
			fieldset: 'alignment',
		}),
		// New Recent Music Field
		defineField({
			name: 'recentMusic',
			title: 'Recent Music',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'music' }] }],
			group: 'content',
			description: 'Select music items to display in the Recent Music section.',
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'bgImage',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero',
			media,
		}),
	},
})
