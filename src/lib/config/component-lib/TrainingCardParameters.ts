import type { ComponentLibItems, ComponentLibParameters } from '$lib/_types/component.ts';

export type TrainingCardParameters = ComponentLibParameters & {
	items?: ComponentLibItems;
};

export const TrainingCardParameters: TrainingCardParameters[] = [
	{
		name: 'title',
		type: 'text',
		default: 'Card Title'
	},
	{
		name: 'link',
		type: 'text',
		default: '/'
	},
	{
		name: 'image',
		type: 'text',
		default: 'https://picsum.photos/200/300'
	},
	{
		name: 'tagListItems',
		type: 'array',
		default: null,
		items: [
			{
				title: 'Nieuws',
				active: false
			},
			{
				title: 'Nieuws',
				active: false
			},
			{
				title: 'Nieuws',
				active: false
			}
		]
	},
	{
		name: 'trainingProperties',
		type: 'array',
		default: null,
		items: [
			{
				title: '4-12 spelers',
				type: 'small',
				icon: 'icon-alert'
			},
			{
				title: '60 minuten',
				type: 'small',
				icon: 'icon-alert'
			},
			{
				title: 'Half veld / Heel veld',
				type: 'small',
				icon: 'icon-alert'
			}
		]
	}
];
