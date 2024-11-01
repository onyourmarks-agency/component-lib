<script lang="ts">
	import type { ComponentLibItem, ComponentLibParameter } from './ComponentTypes.ts';
	import { componentToSnippet } from './ComponentManager.ts';

	let { title, component, parameters = [] }: ComponentLibItem = $props();

	const paramValues = $state({}) as ComponentLibParameter;
	const paramTextValues: object = {};

	parameters.forEach((param: ComponentLibParameter) => {
		if ('default' in param) {
			if (param.type === 'check') {
				paramValues[param.name] = Boolean(param.default);
				return;
			}

			paramValues[param.name] = param.default;
		}

		if (param.type === 'array' && 'items' in param) {
			paramTextValues[param.name] = JSON.stringify(param.items, null, 4);
			paramValues[param.name] = param.items;
		}
	});

	const copy = () => {
		navigator.clipboard.writeText(JSON.stringify(paramValues, null, 2));
	};
</script>

<div class="item">
	<h3 class="title">{title}</h3>

	<div class="content">
		<div class="component">
			{@render componentToSnippet(component)(paramValues)}
		</div>
		<div class="parameters">
			<button class="copy" onclick={() => copy()}>copy params</button>

			{#each parameters as param}
				<div class="param">
					{#if param.type === 'text'}
						<span>{param.name}:</span>
						<input type="text" bind:value={paramValues[param.name]} />
					{:else if param.type === 'select'}
						<span>{param.name}:</span>
						<select bind:value={paramValues[param.name]}>
							{#if 'options' in param && param.options}
								{#each param.options as option}
									<option value={option}>{option}</option>
								{/each}
							{/if}
						</select>
					{:else if param.type === 'check'}
						<span>{param.name}:</span>
						<div>
							<input type="checkbox" bind:checked={paramValues[param.name]} />
						</div>
					{:else if param.type === 'array' && 'items' in param}
						<span>{param.name}:</span>
						<textarea
							bind:value={paramTextValues[param.name]}
							onchange={() => {
								try { paramValues[param.name] = JSON.parse(paramTextValues[param.name]) }
								catch (e) { console.log('not valid JSON') }
							}}></textarea>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.title {
		padding: 0 0 24px 16px;
	}

	@media screen and (min-width: 1440px) {
		.title {
			padding: 0 0 24px 0;
		}
	}

	.copy {
		position: absolute;
		top: -40px;
		right: 20px;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 24px;
	}

	@media screen and (min-width: 1440px) {
		.content {
			flex-direction: row;
		}
	}

	.component {
		width: 100%;
		min-height: 160px;
		padding: 16px;
		background-color: white;
		resize: horizontal;
		overflow: hidden;
		box-sizing: border-box;
	}

	@media screen and (min-width: 1440px) {
		.component {
			border-radius: 8px;
		}
	}

	.parameters {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex: 0 0 auto;
		width: 100%;
		padding: 16px;
		background-color: white;
		border-radius: 8px;
		box-sizing: border-box;
	}

	@media screen and (min-width: 1440px) {
		.parameters {
			max-width: 400px;
		}
	}

	.param {
		display: flex;
		flex-direction: column;
	}

	.param span {
		margin-bottom: 4px;
	}

	textarea {
		height: 196px;
		margin: 0;
		overflow: scroll;
		padding: 8px;
		box-sizing: border-box;
		background: white;
		border: 1px solid grey;
		font-size: 14px;
		border-radius: 0;
	}
</style>
