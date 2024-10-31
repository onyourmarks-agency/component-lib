import type { ComponentLibParameters } from '$lib/_types/component.ts';

export type TrainingPropertyParameters = ComponentLibParameters & {
  options?: string[];
}[];


export const TrainingPropertyParameters: TrainingPropertyParameters = [
	{
		name: 'title',
		type: 'text',
		default: '4-12 spelers'
	},
	{
		name: 'type',
		type: 'select',
		options: ['default', 'small'],
		default: 'default'
	},
	{
		name: 'icon',
		type: 'select',
		options: ['icon-chevron-right', 'icon-alert'],
		default: 'icon-alert'
	}
];
