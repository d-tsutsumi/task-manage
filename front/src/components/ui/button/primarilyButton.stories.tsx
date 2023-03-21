import PrimarilyButton from './primarilyButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimarilyButton> = {
  title: 'UI/PrimarilyButton',
  component: PrimarilyButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrimarilyButton>;


export const Sm: Story = {
  args: {
    text: 'sign in',
    size: 'sm',
  },
};

export const Md: Story = {
  args: {
    text: 'sign in',
    size: 'md',
  },
};
export const Lg: Story = {
  args: {
    text: 'sign in',
    size: 'lg',
  },
};

export const Xl: Story = {
  args: {
    text: 'sign in',
    size: 'xl',
  },
};

export const oneXl: Story = {
  args: {
    text: 'sign in',
    size: '2xl',
  },
};
