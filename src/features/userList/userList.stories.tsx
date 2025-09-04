import type { Meta, StoryObj } from "@storybook/react";
import UserList from "./userList";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof UserList> = {
  title: "Components/UserList",
  component: UserList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserList>;

export const Default: Story = {};
