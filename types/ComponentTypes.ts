import type { Component } from 'svelte';
export type ComponentLibItem = {
	title: string;
	component: Component<never>;
	parameters: ComponentLibParameters;
};

export type ComponentLibParameter = {
	name: string;
	type: string;
	default?: string | boolean | null;
	options?: string[];
	children?: ComponentLibItem[]
};

export type ComponentLibParameters = ComponentLibParameter[];
