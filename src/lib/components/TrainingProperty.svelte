<script lang="ts">
	import Svg from '$lib/components/Svg.svelte';
	import type { TrainingProperty } from '$lib/_types/trainingProperty.js';

	let { title, icon, type }: TrainingProperty = $props();
</script>

<div class="property {type ? `property--${type}` : ''}">
	<Svg {icon} width={20} height={20} />
	<span>{title}</span>
</div>

<style>
	.property {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #00162b;
	}

	.property--small {
		font-size: 12px;
	}

	:global(.property--small svg) {
		--min-height: 16px !important;
		height: 16px !important;
		--min-width: 16px !important;
		width: 16px !important;
	}
</style>
