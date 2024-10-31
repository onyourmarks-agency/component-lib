import type { ComponentLibOptions, ComponentLibParameters } from '$lib/_types/component.ts';

export type ButtonParameters = ComponentLibParameters & {
	options?: ComponentLibOptions;
};

export const ButtonParameters: ButtonParameters[] = [
	{
		name: 'title',
		type: 'text',
		default: 'Button title'
	},
	{
		name: 'type',
		type: 'select',
		options: ['primary', 'secondary', 'small', 'square'],
		default: 'primary'
	},
	{
		name: 'icon',
		type: 'select',
		options: ['icon-chevron-right', 'icon-alert'],
		default: 'icon-chevron-right'
	},
	{
		name: 'iconPosition',
		type: 'select',
		options: ['left', 'right'],
		default: 'right'
	}
];
