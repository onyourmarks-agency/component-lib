<script lang="ts">
  import type { Switch } from "$lib/_types/switch.ts";

  let { switchItems } : Switch = $props();

  const setActive = (index : number) => {
    switchItems.forEach(item => {
      item.active = false;
    });

    switchItems[index].active = true;
  }
</script>

<div class="switch">
    {#each switchItems as item, index}
        <button class="switch__item" class:switch__item--active={item.active} onclick={() => setActive(index)}>
            {item.title}
        </button>
    {/each}
</div>

<style>
    .switch {
        display: flex;
        gap: 8px;
        padding: 8px;
        border-radius: 40px;
        border: 1px solid #eee;
    }

    .switch__item {
        flex: 1 0 auto;
        padding: 16px 24px;
        text-align: center;
        border-radius: 40px;
        font-weight: 700;
        color: grey;
        appearance: none;
        border: none;
        background-color: white;
        cursor: pointer;
    }

    .switch__item:hover {
        background-color: #f5f5f5;
    }

    .switch__item--active {
        background-color: #00162b;
        color: white;
    }

    .switch__item--active:hover {
        background-color: #002c50;
        color: white;
    }
</style>
