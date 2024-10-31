<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import type { TagList } from '$lib/_types/tagList.js';

	let { tagListItems }: TagList = $props();
</script>

<div class="tags">
	{#each tagListItems as tag}
		<Tag title={tag.title} active={tag.active} />
	{/each}
</div>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
