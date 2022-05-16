import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
);

export const Main = Template.bind({});
Main.args = {
  placeholder: "email",
};

export const WithError = Template.bind({});
Main.args = {
  value: "suresh",
  error: "Value is not valid",
};
