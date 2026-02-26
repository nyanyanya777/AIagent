import type { Meta, StoryObj } from '@storybook/react';
import IntegrationSelection from './IntegrationSelection';

const meta: Meta<typeof IntegrationSelection> = {
  title: 'Screens/IntegrationSelection',
  component: IntegrationSelection,
};
export default meta;
type Story = StoryObj<typeof IntegrationSelection>;
export const Default: Story = {};
