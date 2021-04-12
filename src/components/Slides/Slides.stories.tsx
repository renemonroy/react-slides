import { Story } from "@storybook/react";
import Slides from "./Slides";
import { ISlides } from "./Slides.types";

export default {
  title: "Main Components/Slides",
  component: Slides,
  argTypes: {
    disableDots: {
      control: {
        type: "boolean",
      },
    },
    dotsColor: {
      control: {
        type: "color",
      },
    },
    friction: {
      control: {
        type: "number",
      },
    },
    items: {
      control: {
        type: "object",
      },
    },
    itemsGap: {
      control: {
        type: "number",
      },
    },
    mass: {
      control: {
        type: "number",
      },
    },
    tension: {
      control: {
        type: "number",
      },
    },
  },
};

const Template: Story<ISlides> = (args) => (
  <Slides
    {...args}
    style={{
      backgroundColor: "#D7D7D7",
      border: "1px solid #c1c1c1",
      boxSizing: "border-box",
      height: "400px",
      paddingTop: "5px",
    }}
  >
    {({ text }: any) => (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          color: "#6002EE",
          display: "flex",
          height: "calc(100% - 10px)",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {text}
      </div>
    )}
  </Slides>
);

export const WithGap = Template.bind({});
WithGap.args = {
  disableDots: true,
  dotsColor: "#0101010",
  items: [
    { text: "First" },
    { text: "Second" },
    { text: "Third" },
    { text: "Fourth" },
  ],
  itemsGap: 0.035,
  width: 300,
};
