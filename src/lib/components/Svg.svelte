<script lang="ts">
	import svgSprite from '../../svg/sprite/svgSprite.svg';
	import type { Svg } from '$lib/_types/svg.ts';

	let { icon, width = 16, height = 16 }: Svg = $props();
</script>

<svg {width} {height} style={`--min-width: ${width}px; --min-height: ${height}px`}>
	<use href={`${svgSprite}#${icon.toLowerCase()}`} />
</svg>

<style>
	svg {
		fill: var(--fill, #000);
		min-width: var(--min-width);
		min-height: var(--min-height);
		transition: 0.2s ease all;
	}
</style>
