<script lang="ts">
  import type {ComponentLibItem, ComponentLibParameter} from './../../types/ComponentTypes.ts';
  import ComponentLibItemParameters from './ComponentLibItemParameters.svelte';
  import ComponentLibItemComponent from './ComponentLibItemComponent.svelte';

  const getDefaultParameters = (parameters) => {
    const defaultParameters = {};

    parameters.forEach((param: ComponentLibParameter) => {
      if (typeof param.default !== 'undefined') {
        defaultParameters[param.name] = param.default;
        return;
      }

      if (['array'].includes(param.type) && 'options' in param) {
        defaultParameters[param.name] = param.options;
        return;
      }

      if (['component'].includes(param.type) && 'options' in param) {
        defaultParameters[param.name] = getDefaultParameters(param.options);
        return;
      }
    });

    return defaultParameters;
  };

  const onUpdateParameters = (parameters) => {
    currentParameters = parameters;
  };

  const {title, component, parameters = []}: ComponentLibItem = $props();
  let currentParametersNonState = getDefaultParameters(parameters);
  let currentParameters = $state(currentParametersNonState);

  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentParameters, null, 2));
  };
</script>

<div class="item">
  <h3 class="title">{title}</h3>

  <div class="content">
    <div class="component">
      <ComponentLibItemComponent component={component} parameters={parameters} currentParameters={currentParameters} />
    </div>
    <div class="parameters">
      <button class="copy" onclick={() => copy()}>copy params</button>

      <ComponentLibItemParameters parameters={parameters} currentParameters={currentParameters} onUpdateParameters={onUpdateParameters}/>
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
</style>
