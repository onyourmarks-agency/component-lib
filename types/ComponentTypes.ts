import type { Component } from 'svelte';

type ComponentLibType = 'select' | 'html' | 'text' | 'check' | 'array' | 'component';

export type ComponentLibItem = {
	title: string;
	component: Component<never>;
	parameters: ComponentLibParameters;
};

export type ComponentLibParameter = {
	name: string;
	type: ComponentLibType;
	default?: string | boolean | null;
	component?: {
    title: string;
    instance: Component<never>;
  };
	options?: string[] | object[] | ComponentLibParameter[] | ComponentLibParameter | string;
};

export type ComponentLibParameters = ComponentLibParameter[];
