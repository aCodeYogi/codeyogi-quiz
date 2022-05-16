import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Submit</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  theme: "primary"
};


export const secondary = Template.bind({});
Primary.args = {
  theme: "secondary",
};
