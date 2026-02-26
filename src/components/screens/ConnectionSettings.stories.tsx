import type { Meta, StoryObj } from '@storybook/react';
import ConnectionSettings from './ConnectionSettings';

const meta: Meta<typeof ConnectionSettings> = {
  title: 'Screens/ConnectionSettings',
  component: ConnectionSettings,
};
export default meta;
type Story = StoryObj<typeof ConnectionSettings>;
export const Default: Story = {};
