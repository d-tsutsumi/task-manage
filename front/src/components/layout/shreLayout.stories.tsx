import { Meta, StoryObj } from '@storybook/react';
import ShareLayout from './shareLayout';

const meta: Meta<typeof ShareLayout> = {
  title: 'UI/layout/ShareLayout',
  component: ShareLayout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ShareLayout>;

export const layout: Story = {};
