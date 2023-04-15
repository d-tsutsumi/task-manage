import Table from "./table";
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Table> = {
  title: 'UI/table/table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const table: Story = {
  args: {
    title: 'test',
    routeDetail: () => {console.log("route")},
    body: [
      {
        dog: 'aaaa',
        beta: 'aaaaaa',
        cat: 'aaaaa',
        pog: 'aaaa',
      },
      {
        dog: 'aaaa',
        beta: 'aaaaaa',
        cat: 'aaaaa',
        pog: 'aaaa',
      },
      {
        dog: 'aaaa',
        beta: 'aaaaaa',
        cat: 'aaaaa',
        pog: 'aaaa',
      },
      {
        dog: 'aaaa',
        beta: 'aaaaaa',
        cat: 'aaaaa',
        pog: 'aaaa',
      },
      {
        dog: 'aaaa',
        beta: 'aaaaaa',
        cat: 'aaaaa',
        pog: 'aaaa',
      },
      {
        dog: 'aaaa',
        beta: 'aaaaaa',
        cat: 'aaaaa',
        pog: 'aaaa',
      },
      {
        dog: 'aaaa',
        beta: 'aaaaaa',
        cat: 'aaaaa',
        pog: 'aaaa',
      },
    ],
  },
};
