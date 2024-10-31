import type { ComponentLibItems, ComponentLibParameters } from '$lib/_types/component.ts';

export type TrainingPropertyListParameters = ComponentLibParameters & {
	items: ComponentLibItems;
};

export const TrainingPropertyListParameters: TrainingPropertyListParameters[] = [
	{
		name: 'trainingProperties',
		type: 'array',
		default: null,
		items: [
			{
				title: '4-12 spelers',
				type: 'default',
				icon: 'icon-alert'
			},
			{
				title: '60 minuten',
				type: 'default',
				icon: 'icon-alert'
			},
			{
				title: 'Half veld / Heel veld',
				type: 'default',
				icon: 'icon-alert'
			}
		]
	}
];
