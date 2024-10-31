import type {ComponentLibParameters} from '$lib/_types/component.ts';

export type TagParameters = ComponentLibParameters;

export const TagParameters: TagParameters = [
	{
		name: 'title',
		type: 'text',
		default: 'Nieuws'
	},
	{
		name: 'active',
		type: 'check',
		default: false
	}
];
