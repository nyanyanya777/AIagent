import type { Meta, StoryObj } from '@storybook/react';
import Works from './Works';

const meta: Meta<typeof Works> = {
  title: 'Screens/Works',
  component: Works,
};
export default meta;
type Story = StoryObj<typeof Works>;
export const Default: Story = {};
