<script lang="ts">
	import type { Tag } from '$lib/_types/tag.js';

	let { title, active }: Tag = $props();
</script>

<span class="tag {active ? `tag--active` : ''}">
	{title}
</span>

<style>
	.tag {
		padding: 4px 12px;
		background-color: var(--color-orange-10);
		color: var(--color-orange-dark);
		border-radius: 4px;
		font-size: 14px;
	}

	.tag--active {
		background-color: var(--color-orange-dark);
		color: var(--color-white);
	}
</style>
