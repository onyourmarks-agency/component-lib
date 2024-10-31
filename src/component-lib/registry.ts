import Svg from '$lib/components/Svg.svelte';
import {SvgParameters} from './parameters/SvgParameters.ts';
import Button from '$lib/components/Button.svelte';
import {ButtonParameters} from './parameters/ButtonParameters.ts';
import Tag from '$lib/components/Tag.svelte';
import {TagParameters} from './parameters/TagParameters.ts';
import TagList from '$lib/components/TagList.svelte';
import {TagListParameters} from './parameters/TagListParameters.ts';
import TrainingProperty from '$lib/components/TrainingProperty.svelte';
import {TrainingPropertyParameters} from './parameters/TrainingPropertyParameters.ts';
import TrainingPropertyList from '$lib/components/TrainingPropertyList.svelte';
import {TrainingPropertyListParameters} from './parameters/TrainingPropertyListParameters.ts';
import TrainingCard from '$lib/components/TrainingCard.svelte';
import {TrainingCardParameters} from './parameters/TrainingCardParameters.ts';
import TrainingCardGrid from '$lib/components/TrainingCardGrid.svelte';
import {TrainingCardGridParameters} from './parameters/TrainingCardGridParameters.ts';

export default [
  {
    title: 'Svg',
    component: Svg,
    parameters: SvgParameters
  },
  {
    title: 'Button',
    component: Button,
    parameters: ButtonParameters
  },
  {
    title: 'Tag',
    component: Tag,
    parameters: TagParameters
  },
  {
    title: 'TagList',
    component: TagList,
    parameters: TagListParameters
  },
  {
    title: 'TrainingProperty',
    component: TrainingProperty,
    parameters: TrainingPropertyParameters
  },
  {
    title: 'TrainingPropertyList',
    component: TrainingPropertyList,
    parameters: TrainingPropertyListParameters
  },
  {
    title: 'TrainingCard',
    component: TrainingCard,
    parameters: TrainingCardParameters
  },
  {
    title: 'TrainingCardGrid',
    component: TrainingCardGrid,
    parameters: TrainingCardGridParameters
  }
];
