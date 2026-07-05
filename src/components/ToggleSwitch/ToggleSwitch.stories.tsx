import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'UI/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Off: Story = {
  args: {
    label: 'Notificaciones',
    defaultChecked: false,
  },
};

export const On: Story = {
  args: {
    label: 'Modo Oscuro',
    defaultChecked: true,
  },
};

export const SinLabel: Story = {
  args: {
    label: '',
    defaultChecked: true,
  },
};

export const ConTextoPersonalizado: Story = {
  args: {
    label: 'Acepto términos',
    defaultChecked: false,
  },
};
