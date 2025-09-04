import type { Meta, StoryObj } from "@storybook/react";
import UserDetails from "./userDetails";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const meta: Meta<typeof UserDetails> = {
  title: "Components/UserDetails",
  component: UserDetails,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/users/1"]}>
        <Routes>
          <Route path="/users/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserDetails>;

export const Default: Story = {};