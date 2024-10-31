<script lang="ts">
	import TrainingPropertyList from '$lib/components/TrainingPropertyList.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import type { TrainingCard } from '$lib/_types/trainingCard.js';

	let { title, link, image, trainingProperties, tagListItems }: TrainingCard = $props();
</script>

<a class="card" href={link}>
	<div class="card__image-wrapper">
		<img class="card__image" src={image} alt="" />
	</div>

	<div class="card__content-wrapper">
		<span class="card__title">{title}</span>
		<TrainingPropertyList {trainingProperties} />
		<TagList {tagListItems} />
	</div>
</a>

<style>
	.card {
		display: flex;
		gap: 24px;
		padding: 16px;
		border: 1px solid lightgrey;
		border-radius: 12px;
		text-decoration: none;
		color: var(--color-black);
	}

	.card:hover {
		background-color: var(--color-black-05);
	}

	.card__image-wrapper {
		width: 72px;
		height: 72px;
		border-radius: 8px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.card__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card__content-wrapper {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.card__title {
		font-size: 16px;
	}
</style>
