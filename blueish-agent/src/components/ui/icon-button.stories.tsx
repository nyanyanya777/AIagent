import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './icon-button';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '→',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '⚙',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: '✕',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '❎',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '?',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: '→',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '→',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: '→',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '→',
  },
};
