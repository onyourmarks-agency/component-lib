import type { ComponentLibOptions, ComponentLibParameters } from '$lib/_types/component.ts';

export type SvgParameters = ComponentLibParameters & {
	options?: ComponentLibOptions;
};

export const SvgParameters: SvgParameters[] = [
	{
		name: 'icon',
		type: 'select',
		options: ['icon-chevron-right', 'icon-alert'],
		default: 'icon-chevron-right'
	},
	{
		name: 'width',
		type: 'text',
		default: '24'
	},
	{
		name: 'height',
		type: 'text',
		default: '24'
	}
];
