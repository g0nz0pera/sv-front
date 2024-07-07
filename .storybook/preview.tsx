import type { Preview } from "@storybook/react";
import { Sen, Syne } from "next/font/google";
const syneFont = Syne({ subsets: ["latin"], variable: "--font-syne" });
const senFont = Sen({ subsets: ["latin"], variable: "--font-sen" });

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${syneFont.variable} ${senFont.variable}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "bg",
      values: [
        {
          name: "bg",
          value: "#151515",
        },
      ],
    },
  },
};

export default preview;
