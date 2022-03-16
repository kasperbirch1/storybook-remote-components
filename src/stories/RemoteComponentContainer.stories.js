import RemoteComponentContainer from "../components/RemoteComponentContainer";

export default {
  title: "Components/RemoteComponentContainer",
  component: RemoteComponentContainer,
};

const Template = (args) => <RemoteComponentContainer {...args} />;

export const firstname = Template.bind({});
firstname.args = {
  name: "Kasper",
};

export const lastname = Template.bind({});
lastname.args = {
  name: "Birch",
};

export const mads = Template.bind({});
mads.args = {
  name: "Mads",
};
