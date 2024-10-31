import type { TrainingProperty } from '$lib/_types/trainingProperty.ts';
import type { Tag } from '$lib/_types/tag.ts';

export type TrainingCard = {
	title: string;
	link: string;
	image: string;
	tagListItems: Tag[];
	trainingProperties: TrainingProperty[];
};
