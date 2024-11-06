import { type Component, createRawSnippet, hydrate } from 'svelte';
import type { ComponentLibParameter } from './../../types/ComponentTypes.ts';

export function componentToSnippet(Component: Component<never>) {
	return createRawSnippet((props: () => ComponentLibParameter) => ({
		render: () => `<div class="snippet"></div>`,
		setup(target) {
			hydrate(Component, { target, props: props?.() as unknown as never });
		}
	}));
}
