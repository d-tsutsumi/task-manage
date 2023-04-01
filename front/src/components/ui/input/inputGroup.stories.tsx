import InputGroup from './inputGroup';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputGroup> = {
  title: 'UI/input/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const InputTextGroup: Story = {
  args: {
    value: 'test',
    type: 'text',
    id: 'text',
    placeholder: 'text',
    size: 'md',
    label: 'Text',
    margin: 6,
    direction: 'b',
  },
};

export const InputPasswordGroup: Story = {
  args: {
    value: 'test',
    type: 'password',
    id: 'pass',
    placeholder: 'password',
    size: 'md',
    label: 'Passowrd',
    margin: 4,
    direction: 'b',
  },
};
