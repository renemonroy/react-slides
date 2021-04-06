import { Story } from "@storybook/react";
import DotsList from "./DotsList";
import { IDotsList } from "./DotsList.types";

export default {
  title: "SubComponents/DotsList",
  component: DotsList,
  argTypes: {
    activeIndex: {
      control: {
        type: "number",
        min: 1,
        max: 5,
      },
    },
    items: {
      control: {
        type: "object",
      },
    },
    dotsColor: {
      control: {
        type: "color",
      },
    },
  },
};

const Template: Story<IDotsList> = (args) => <DotsList {...args} />;

export const SimpleExample = Template.bind({});
SimpleExample.args = {
  activeIndex: 1,
  items: [1, 2, 3, 4, 5],
  dotsColor: "#000000",
};
