import type { Meta, StoryObj } from '@storybook/react';
import Agents from './Agents';

const meta: Meta<typeof Agents> = {
  title: 'Screens/Agents',
  component: Agents,
};
export default meta;
type Story = StoryObj<typeof Agents>;
export const Default: Story = {};
