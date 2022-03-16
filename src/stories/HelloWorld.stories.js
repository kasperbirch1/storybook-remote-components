import HelloWorld from "../components/HelloWorld";

export default {
  title: "Components/HelloWorld",
  component: HelloWorld,
};

const Template = (args) => <HelloWorld {...args} />;

export const firstname = Template.bind({}, { name: "Kasper" });

export const lastname = Template.bind({});
lastname.args = {
  name: "Birch",
};

export const mads = Template.bind({});
mads.args = {
  name: "Mads",
};
