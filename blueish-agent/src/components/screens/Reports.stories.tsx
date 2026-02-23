import type { Meta, StoryObj } from '@storybook/react';
import Reports from './Reports';

const meta: Meta<typeof Reports> = {
  title: 'Screens/Reports',
  component: Reports,
};
export default meta;
type Story = StoryObj<typeof Reports>;
export const Default: Story = {};
