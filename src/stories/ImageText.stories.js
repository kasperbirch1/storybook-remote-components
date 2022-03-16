import ImageText from "../components/ImageText";

export default {
  title: "Components/ImageText",
  component: ImageText,
  argTypes: {
    boxAlign: {
      options: ["top", "button"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <ImageText {...args} />;

export const example1 = Template.bind({});
example1.args = {
  title: "kasper",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
  image:
    "https://images.pexels.com/photos/10164553/pexels-photo-10164553.jpeg?cs=srgb&dl=pexels-bruno-pires-10164553.jpg&fm=jpg",
  // styling: {
  // boxAlign: "top",
  boxMargin: true,
  shadow: true,
  separator: true,
  halfSize: false,
  reversed: false,
  // },

  css: "--bg-light: #eee; --text-dark: #000; --bg-dark: #111; --text-light: #fff;",
};
