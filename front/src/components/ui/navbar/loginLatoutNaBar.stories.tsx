import LoginLayoutNavbar from "./loginLayoutNavbar"
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginLayoutNavbar> = {
  title: 'UI/navber/LoginLayoutNavbar',
  component: LoginLayoutNavbar,
  tags: ['autodocs'],
};


export default meta;
type Story = StoryObj<typeof LoginLayoutNavbar>;

export const navber: Story = {};

