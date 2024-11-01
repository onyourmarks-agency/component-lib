import type { ComponentLibParameters } from '../component/ComponentTypes.ts';

export type TrainingPropertyListParameters = ComponentLibParameters &
	{
		items: {
			title: string;
			type: string;
			icon: string;
		}[];
	}[];

export const TrainingPropertyListParameters: TrainingPropertyListParameters = [
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
