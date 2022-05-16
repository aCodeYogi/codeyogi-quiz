import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "email",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "prashant@codeyogi.io",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  value: "suresh",
  error: "Value is not valid",
};
