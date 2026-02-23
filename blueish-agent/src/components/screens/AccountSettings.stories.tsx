import type { Meta, StoryObj } from '@storybook/react';
import AccountSettings from './AccountSettings';

const meta: Meta<typeof AccountSettings> = {
  title: 'Screens/AccountSettings',
  component: AccountSettings,
};
export default meta;
type Story = StoryObj<typeof AccountSettings>;
export const Default: Story = {};
