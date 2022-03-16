import ImageText from "../components/ImageText";

export default {
  title: "Components/ImageText",
  component: ImageText,
};

const Template = (args) => <ImageText {...args} />;

const slide = {
  id: "slide1-image-text",
  type: "image-text",
  duration: 5000,
  themeData: {
    css: "--bg-light: #eee; --text-dark: #000; --bg-dark: #111; --text-light: #fff;",
  },
  mediaData: {
    "/v1/media/00000000000000000000000001": {
      assets: {
        uri: "/fixtures/images/mountain1.jpeg",
      },
    },
  },
  content: {
    title: "Slide 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: ["/v1/media/00000000000000000000000001"],
    boxAlign: "right",
    boxMargin: false,
    shadow: true,
    separator: true,
    halfSize: true,
    reversed: false,
  },
};

export const example2 = Template.bind({}, { slide });

// example2.args = { slide };
