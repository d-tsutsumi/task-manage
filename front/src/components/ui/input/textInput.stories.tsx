import  TextInput from './textInput';
import { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof TextInput> = {
  title: 'UI/input/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const InputText: Story = {
  args: {
    value: "test",
    type : "text",
    id: "text",
    placeholder: "text",
    size: "md",
    onChangeHandle: () => {}
  }
}

export const InputPassword: Story = {
  args: {
    value: "test",
    type : "password",
    id: "pass",
    placeholder: "text",
    size: "md",
    onChangeHandle: () => {}
  }
}