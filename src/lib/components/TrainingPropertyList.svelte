<script lang="ts">
	import TrainingProperty from '$lib/components/TrainingProperty.svelte';
	import type { TrainingPropertyList } from '$lib/_types/trainingPropertyList.js';

	let { trainingProperties }: TrainingPropertyList = $props();
</script>

<div class="list">
	{#each trainingProperties as property}
		<TrainingProperty title={property.title} icon={property.icon} type={property.type} />
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 12px;
	}
</style>
