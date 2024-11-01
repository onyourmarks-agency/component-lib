import type { ComponentLibParameters } from '../component/ComponentTypes.ts';
export type SwitchParameters = ComponentLibParameters &
  {
    options?: string[];
  }[];

export const SwitchParameters: SwitchParameters = [
  {
    name: 'switchItems',
    type: 'array',
    default: null,
    items: [
      {
        title: 'Trainingsplan',
        active: true
      },
      {
        title: 'Eigen training',
        active: false
      },
    ]
  }
];
