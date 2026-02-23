import type { Meta, StoryObj } from '@storybook/react';
import RoleSelection from './RoleSelection';

const meta: Meta<typeof RoleSelection> = {
  title: 'Screens/RoleSelection',
  component: RoleSelection,
};
export default meta;
type Story = StoryObj<typeof RoleSelection>;
export const Default: Story = {};
