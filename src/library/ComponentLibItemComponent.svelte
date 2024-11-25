<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import type {Component} from 'svelte';
  import type {ComponentLibParameter} from '../../types/ComponentTypes.ts';

  type Props = {
    component: Component;
    parameters: ComponentLibParameter[];
    currentParameters: object;
  }
  const {component, parameters, currentParameters}: Props = $props();

  let childValues = $state(undefined);
  let childIsHtml = $state(false);
  const TestComponent = component;
  let ChildComponent = $state(undefined);

  $effect(() => {
    Object.entries(currentParameters).forEach(([key, value]) => {
      const parameter = parameters.find((param) => param.name === key);
      if (parameter?.name === 'children') {
        ChildComponent = parameter.component?.instance;
        childValues = value;
      }

      if (parameter?.name === 'children' && parameter.type === 'html') {
        childIsHtml = true;
      }
    });
  })
</script>

<TestComponent {...currentParameters}>
  {#key childValues}
    {#if ChildComponent}
      <ChildComponent {...childValues}/>
    {:else if childValues}
      {#if childIsHtml}
        {@html childValues}
      {:else}
        {childValues}
      {/if}
    {/if}
  {/key}
</TestComponent>
