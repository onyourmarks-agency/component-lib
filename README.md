# OYM - Component Lib

## Description

Component Lib is a frontend library that enables developers to test and develop components in isolation. It is built on top of Svelte kit, a framework for building web applications with Svelte.

## Features

- **Playground**: A playground for testing components in isolation.
- **Documentation**: A documentation site for components.
- **Component Library**: A library of components that can be used in projects.

## Getting Started

### Installation

To install the library, run the following command:

```bash
pnpm install @oym/component-lib
```

### Usage

```bash
pnpm component-lib
```

#### Registry

The registry is a list of components that are available in the playground. To add a new component to the registry, follow these steps:

 - Create a folder named `component-lib` in the root of your project.
 - Within this folder, create a file named `register.ts` with the following content:

```ts
import MyComponent from '../src/lib/components/MyComponent.svelte';
import { MyComponentParameters } from './parameters/MyComponentParameters.ts';

export default [
	{
		title: 'MyComponent',
		component: MyComponent,
		parameters: MyComponentParameters,
	},
];
```

#### Parameters

The parameters folder contains the parameters for each component. The parameters are used to configure the component in the playground.

- Create a folder named `parameters` within the `component-lib` folder.
- Within this folder, create a file named `MyComponentParameters.ts` with the following content:

```ts
import type { ComponentLibParameters } from 'component-lib/types/ComponentTypes';
import { ChildComponentParameters } from './SvgParameters';
import ChildComponent from '../../src/lib/components/ChildComponent.svelte';

export const MyComponentParameters: ComponentLibParameters = [
    {
        name: 'selectProp',
        type: 'select',
        default: 'foo',
        options: ['foo', 'bar']
    },
    {
        name: 'textProp',
        type: 'text',
        default: 'Hello world',
    },
	{
		name: 'children',
		type: 'component',
		component: {
			title: 'ChildComponent',
			instance: ChildComponent
		},
		options: ChildComponentParameters,
	},
];
```

### Config Reference

#### Regular types
Text type:

- Type: `text`
- Default: `string`

Select type:

- Type: `select`
- Default: `string`
- Options: `string[]`

Check type:

- Type: `check`
- Default: `boolean`

Array type:

- Type: `array`
- Options: `any[]`

#### Children types:

When a component has children, name should be set to children. 
Component type:

- Type: `component`
- Component: `{ title: string, instance: SvelteComponent }`
- Options: `ComponentLibParameters`

Text type:

- Type: `text`
- Default: `string`
- Options: `string`

HTML type:

- Type: `html`
- Default: `string`
- Options: `string`

Select type:

- Type: `select`
- Default: `string`
- Options: `string[]`
- Options: `string`
