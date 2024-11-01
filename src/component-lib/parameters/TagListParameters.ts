import type { ComponentLibParameters } from '../component/ComponentTypes.ts';

export type TagListParameters = ComponentLibParameters &
	{
		items: {
			title: string;
			active: boolean;
		}[];
	}[];

export const TagListParameters: TagListParameters = [
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
	}
];
