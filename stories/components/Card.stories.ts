import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/card";
import { DataService } from "@/services";

const meta: Meta<typeof Card> = {
  title: "Home/Card",
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  component: Card,
};
export default meta;
type Story = StoryObj<typeof meta>;
const dataCards = DataService.getStubData();
const projectCard = DataService.getProjectStubData();

export const CardFirst: Story = {
  args: { ...dataCards[1] },
};

export const CardSecond: Story = {
  args: { ...dataCards[0] },
};

export const CardThird: Story = {
  args: { ...dataCards[2] },
};

export const ProjectCard: Story = {
  args: { ...projectCard },
};
