import type { ButtonParameters } from '$lib/config/component-lib/ButtonParameters.ts';
import type { SvgParameters } from '$lib/config/component-lib/SvgParameters.ts';
import type { TagListParameters } from '$lib/config/component-lib/TagListParameters.ts';
import type { TagParameters } from '$lib/config/component-lib/TagParameters.ts';
import type { TrainingCardGridParameters } from '$lib/config/component-lib/TrainingCardGridParameters.ts';
import type { TrainingCardParameters } from '$lib/config/component-lib/TrainingCardParameters.ts';
import type { TrainingPropertyListParameters } from '$lib/config/component-lib/TrainingPropertyListParameters.ts';
import type { TrainingPropertyParameters } from '$lib/config/component-lib/TrainingPropertyParameters.ts';
import type { Tag } from '$lib/_types/tag.ts';
import type { TrainingProperty } from '$lib/_types/trainingProperty.ts';
import type { TrainingCard } from '$lib/_types/trainingCard.ts';
import type { Snippet } from "svelte";
import type { Svg } from "$lib/_types/svg.ts";
import type { Button } from "$lib/_types/button.ts";

export type ComponentLibOptions = string[];
export type ComponentLibItems = Tag[] | TrainingProperty[] | TrainingCard[];

export type ComponentLibParameters = {
	name: string;
	type: string;
	default: string | boolean | null;
};

export type ComponentLibItemProps = {
	componentName: SnippetType;
	parameters: Parameter[];
	children: Snippet<unknown[]>
};

export type Parameter =
	| ButtonParameters
	| SvgParameters
	| TagListParameters
	| TagParameters
	| TrainingCardGridParameters
	| TrainingCardParameters
	| TrainingPropertyListParameters
	| TrainingPropertyParameters;

export type SnippetType =
	| 'Svg'
	| 'Button';

export interface ISnipperProps<T extends SnippetType> {
}

export type SnippetProps<T> = T extends 'Svg'
	? Svg
	: T extends 'Button'
		? Button
		: never;
