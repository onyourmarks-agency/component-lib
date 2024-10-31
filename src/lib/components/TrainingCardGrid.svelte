<script lang="ts">
	import TrainingCard from '$lib/components/TrainingCard.svelte';
	import type { TrainingCardGrid } from '$lib/_types/trainingCardGrid.ts';

	let { trainingCards }: TrainingCardGrid = $props();
</script>

<div class="grid">
	{#each trainingCards as card}
		<TrainingCard
			title={card.title}
			image={card.image}
			link={card.link}
			trainingProperties={card.trainingProperties}
			tagListItems={card.tagListItems}
		/>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
