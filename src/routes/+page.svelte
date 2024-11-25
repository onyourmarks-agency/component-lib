<script>
  import 'normalize.css';
  import '$user-styles/basics.css';

	import ComponentLibItem from '../library/ComponentLibItem.svelte';
	import registry from '$user-config/registry.ts';

	let componentRegistry = $state(registry);
	let searchTerm = $state('');
</script>

<div class="header">
	<h1 class="title">Showcase</h1>

	<input class="search" type="text" bind:value={searchTerm} placeholder="Find component by Name" />
</div>

<div class="lib">
	{#each componentRegistry as componentRegistryItem}
		{#if componentRegistryItem.title.toLowerCase().includes(searchTerm.toLowerCase())}
			<ComponentLibItem
				title={componentRegistryItem.title}
				component={componentRegistryItem.component}
				parameters={componentRegistryItem.parameters}
			></ComponentLibItem>
		{/if}
	{/each}
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
