import LoginLayout from './loginLayout';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginLayout> = {
  title: 'UI/layout/LoginLayout',
  component: LoginLayout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginLayout>;

export const layout: Story = {};
