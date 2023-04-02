import PrimarilyButton from './primarilyButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimarilyButton> = {
  title: 'UI/button/PrimarilyButton',
  component: PrimarilyButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrimarilyButton>;

export const Sm: Story = {
  args: {
    text: 'sign in',
    size: 'sm',
    type: 'button',
  },
};

export const Md: Story = {
  args: {
    text: 'sign in',
    size: 'md',
    type: 'button',
  },
};
export const Lg: Story = {
  args: {
    text: 'sign in',
    size: 'lg',
    type: 'button',
  },
};

export const Xl: Story = {
  args: {
    text: 'sign in',
    size: 'xl',
    type: 'button',
  },
};

export const oneXl: Story = {
  args: {
    text: 'sign in',
    size: '2xl',
    type: 'button',
  },
};
