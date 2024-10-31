<script>
	import ComponentLibItem from '$lib/components/component-lib/ComponentLibItem.svelte';
	import Svg from '$lib/components/Svg.svelte';
	import Button from '$lib/components/Button.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import TrainingProperty from '$lib/components/TrainingProperty.svelte';
	import TrainingPropertyList from '$lib/components/TrainingPropertyList.svelte';
	import TrainingCard from '$lib/components/TrainingCard.svelte';
	import TrainingCardGrid from '$lib/components/TrainingCardGrid.svelte';
	import { SvgParameters } from '$lib/config/component-lib/SvgParameters.ts';
	import { ButtonParameters } from '$lib/config/component-lib/ButtonParameters.ts';
	import { TagParameters } from '$lib/config/component-lib/TagParameters.ts';
	import { TagListParameters } from '$lib/config/component-lib/TagListParameters.ts';
	import { TrainingPropertyParameters } from '$lib/config/component-lib/TrainingPropertyParameters.ts';
	import { TrainingPropertyListParameters } from '$lib/config/component-lib/TrainingPropertyListParameters.ts';
	import { TrainingCardParameters } from '$lib/config/component-lib/TrainingCardParameters.ts';
	import { TrainingCardGridParameters } from '$lib/config/component-lib/TrainingCardGridParameters.ts';
	import type {SnippetProps} from "$lib/_types/component.js";
	import type {SnippetType} from "$lib/_types/component.js";

	let searchTerm = '';
</script>

<div class="header">
	<h1 class="title">Component Library</h1>

	<input class="search" type="text" bind:value={searchTerm} placeholder="Find component by Name" />
</div>

<div class="lib">
	{#if 'Svg'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem componentName="Svg" parameters={SvgParameters}>
			{#snippet children({ icon, height, width })}
				<Svg {icon} {height} {width} />
			{/snippet}
		</ComponentLibItem>
	{/if}

	{#if 'Button'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem componentName="Button" parameters={ButtonParameters}>
			{#snippet children({ title, type, icon, iconPosition })}
				<Button {title} {type} {icon} {iconPosition} />
			{/snippet}
		</ComponentLibItem>
	{/if}

	{#if 'Tag'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem componentName="Tag" parameters={TagParameters}>
			{#snippet children({ title, active })}
				<Tag {title} {active} />
			{/snippet}
		</ComponentLibItem>
	{/if}

	{#if 'TagList'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem componentName="TagList" parameters={TagListParameters}>
			{#snippet children({ tagListItems })}
				<TagList {tagListItems} />
			{/snippet}
		</ComponentLibItem>
	{/if}

	{#if 'TrainingProperty'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem componentName="TrainingProperty" parameters={TrainingPropertyParameters}>
			{#snippet children({ title, icon, type })}
				<TrainingProperty {title} {icon} {type} />
			{/snippet}
		</ComponentLibItem>
	{/if}

	{#if 'TrainingPropertyList'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem
			componentName="TrainingPropertyList"
			parameters={TrainingPropertyListParameters}
		>
			{#snippet children({ trainingProperties })}
				<TrainingPropertyList {trainingProperties} />
			{/snippet}
		</ComponentLibItem>
	{/if}

	{#if 'TrainingCard'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem componentName="TrainingCard" parameters={TrainingCardParameters}>
			{#snippet children({ title, link, image, trainingProperties, tagListItems })}
				<TrainingCard {title} {link} {image} {trainingProperties} {tagListItems} />
			{/snippet}
		</ComponentLibItem>
	{/if}

	{#if 'TrainingCardGrid'.toLowerCase().includes(searchTerm.toLowerCase())}
		<ComponentLibItem componentName="TrainingCardGrid" parameters={TrainingCardGridParameters}>
			{#snippet children({ trainingCards })}
				<TrainingCardGrid {trainingCards} />
			{/snippet}
		</ComponentLibItem>
	{/if}
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 24px;
		padding: 24px;
	}

	.title {
		margin: 0;
		font-size: 40px;
	}

	.search {
		padding: 8px 24px;
		font-size: 18px;
		border: 1px solid #ccc;
	}

	.lib {
		display: flex;
		flex-direction: column;
		gap: 64px;
		background-color: #eee;
		padding: 40px 0;
	}

	@media screen and (min-width: 1440px) {
		.lib {
			padding: 40px;
		}
	}
</style>
