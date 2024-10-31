import type {ComponentLibParameters} from '$lib/_types/component.ts';
export type ButtonParameters = ComponentLibParameters & {
	options?: string[];
}[];

export const ButtonParameters: ButtonParameters = [
	{
		name: 'title',
		type: 'text',
		default: 'Button title',
	},
	{
		name: 'type',
		type: 'select',
		default: 'primary',
    options: ['primary', 'secondary', 'small', 'square'],
	},
	{
		name: 'icon',
		type: 'select',
		default: 'icon-chevron-right',
    options: ['icon-chevron-right', 'icon-alert'],
	},
	{
		name: 'iconPosition',
		type: 'select',
		default: 'right',
    options: ['left', 'right'],
	}
];
