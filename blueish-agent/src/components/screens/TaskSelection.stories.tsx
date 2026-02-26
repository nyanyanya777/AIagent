import type { Meta, StoryObj } from '@storybook/react';
import TaskSelection from './TaskSelection';

const meta: Meta<typeof TaskSelection> = {
  title: 'Screens/TaskSelection',
  component: TaskSelection,
};
export default meta;
type Story = StoryObj<typeof TaskSelection>;
export const Default: Story = {};
