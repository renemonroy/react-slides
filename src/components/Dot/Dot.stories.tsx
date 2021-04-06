import { Story } from "@storybook/react";
import Dot from "./Dot";
import { IDot } from "./Dot.types";

export default {
  title: "SubComponents/Dot",
  component: Dot,
  argTypes: {
    active: {
      control: {
        type: "boolean",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
};

const Template: Story<IDot> = (args) => <Dot {...args} />;

export const SimpleExample = Template.bind({});
SimpleExample.args = { active: true, color: "#000000" };
