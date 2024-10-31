<script lang="ts">
  import type {
    ComponentLibItem, ComponentLibParameter,
  } from '$lib/_types/component.ts';
  import {componentToSnippet} from '$lib/components/component-lib/ComponentManager.ts';

  let {
    title,
    component,
    parameters = [],
  }: ComponentLibItem = $props();

  const paramValues = $state({}) as ComponentLibParameter;
  const paramBooleanValue: Record<string, boolean> = $state({});

  parameters.forEach((param: ComponentLibParameter) => {
    if ('default' in param) {
      if (param.type === 'check') {
        paramBooleanValue[param.name] = Boolean(param.default);
        return;
      }

      paramValues[param.name] = param.default;
    }

    if (param.type === 'array' && 'items' in param) {
      paramValues[param.name] = param.items;
    }
  });

  $effect(() => {
    console.log(paramValues);
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
            <input type="text" bind:value={paramValues[param.name]}/>
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
              <input type="checkbox" bind:checked={paramBooleanValue[param.name]}/>
            </div>
          {:else if param.type === 'array' && 'items' in param}
            <span>{param.name}:</span>
            <pre>{JSON.stringify(param.items, null, 2)}</pre>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .item {
  }

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

  pre {
    height: 196px;
    margin: 0;
    overflow: scroll;
    padding: 8px;
    box-sizing: border-box;
    background: #f3f3f3;
    font-size: 12px;
    border-radius: 4px;
  }
</style>
