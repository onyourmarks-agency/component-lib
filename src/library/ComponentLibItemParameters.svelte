<script lang="ts">
  import type {ComponentLibParameter} from '../../types/ComponentTypes.ts';
  import Self from './ComponentLibItemParameters.svelte';

  type ParametersProps = {
    parameters: ComponentLibParameter[];
    currentParameters: object;
    onUpdateParameters: (parameter: object) => void;
  };

  let { parameters = [], currentParameters, onUpdateParameters }: ParametersProps = $props();

  const onUpdateChildParameters = (parameter, parameters) => {
    const newParameters = { ...currentParameters };
    newParameters[parameter.name] = parameters;

    onUpdateParameters(newParameters);
  };

  const updateInput = (event) => {
    event.preventDefault();

    const parameter = parameters.find((param) => param.name === event.target.name);
    if (!parameter) {
      return;
    }

    const newParameters = { ...currentParameters };
    try {
      if (parameter.type === 'array') {
        newParameters[parameter.name] = JSON.parse(event.target.value);
      } else if (parameter.type === 'check') {
        newParameters[parameter.name] = event.target.checked;
      } else {
        newParameters[parameter.name] = event.target.value;
      }
    } catch (e) {
      console.error(e);
    }

    onUpdateParameters(newParameters);
  };
</script>

{#each parameters as param}
  <div class="param">
    {#if param.type === 'text'}
      <span>{param.name}:</span>
      <input name={param.name} type="text" value={currentParameters[param.name]} oninput={updateInput} />
    {:else if param.type === 'select' || (param.type === 'component' && typeof param.options !== 'undefined' && param.options instanceof Array && typeof param.options?.[0] === 'string')}
      <span>{param.name}:</span>
      <select name={param.name} onchange={updateInput}>
        {#if 'options' in param && param.options}
          {#each param.options as option}
            <option value={option} selected={currentParameters[param.name] === option}>{option}</option>
          {/each}
        {/if}
      </select>
    {:else if param.type === 'check'}
      <span>{param.name}:</span>
      <div>
        <input name={param.name} type="checkbox" onchange={updateInput} checked={currentParameters[param.name]} />
      </div>
    {:else if param.type === 'html'}
      <span>{param.name}:</span>
      <textarea name={param.name} oninput={updateInput} {updateInput}>{currentParameters[param.name]}</textarea>
    {:else if param.type === 'array'}
      <span>{param.name}:</span>
      <textarea name={param.name} onchange={updateInput} {updateInput}>{JSON.stringify(currentParameters[param.name], null, 4)}</textarea>
    {:else if param.type === 'component' && 'options' in param}
      <span>{param.name} ({param.component?.title}):</span>
      <div class="param-child">
        <Self parameters={param.options} currentParameters={currentParameters[param.name]} onUpdateParameters={(childParameters) => onUpdateChildParameters(param, childParameters)} />
      </div>
    {/if}
  </div>
{/each}

<style>
  .param {
    display: flex;
    flex-direction: column;
  }

  .param span {
    margin-bottom: 4px;
  }

  .param-child {
    margin-left: 16px;
    border-left: 1px solid grey;
    padding-left: 16px;
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
