<script lang="ts">
	import Svg from '$lib/components/Svg.svelte';
	import type { Button } from '$lib/_types/button.ts';

	let { title, type, icon, iconPosition = 'right' }: Button = $props();
</script>

<button class="btn {type ? `btn--${type}` : ''}">
	{#if icon && iconPosition === 'left'}
		<Svg {icon} width={24} height={24} --fill="var(--color-white)" />
	{/if}

	{#if title}
		{title}
	{/if}

	{#if icon && iconPosition === 'right'}
		<Svg {icon} width={24} height={24} --fill="var(--color-white)" />
	{/if}
</button>

<style>
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		appearance: none;
		border: none;
		padding: 12px 24px;
		background-color: var(--color-orange);
		font-weight: 600;
		color: white;
		border-radius: 4px;
		cursor: pointer;
	}

	.btn:hover {
		background-color: var(--color-orange-dark);
	}

	.btn--secondary {
		background-color: blue;
	}

	.btn--small {
		padding: 4px 12px;
		font-size: 12px;
	}

	.btn--square {
		padding: 0;
		height: 40px;
		width: 40px;
	}
</style>
