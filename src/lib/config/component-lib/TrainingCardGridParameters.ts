import type { ComponentLibItems, ComponentLibParameters } from '$lib/_types/component.ts';

export type TrainingCardGridParameters = ComponentLibParameters & {
	items?: ComponentLibItems;
};

export const TrainingCardGridParameters: TrainingCardGridParameters[] = [
	{
		name: 'trainingCards',
		type: 'array',
		default: null,
		items: [
			{
				title: 'Card Title',
				link: '/',
				image: 'https://picsum.photos/200/300',
				tagListItems: [
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
				],
				trainingProperties: [
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
			},
			{
				title: 'Card Title',
				link: '/',
				image: 'https://picsum.photos/200/300',
				trainingProperties: [
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
				],
				tagListItems: [
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
				title: 'Card Title',
				link: '/',
				image: 'https://picsum.photos/200/300',
				trainingProperties: [
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
				],
				tagListItems: [
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
			}
		]
	}
];
