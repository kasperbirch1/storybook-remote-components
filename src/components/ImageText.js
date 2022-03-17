import PropTypes from "prop-types";
import { RemoteComponent } from "../RemoteComponent";

const url =
  "https://raw.githubusercontent.com/os2display/display-templates/develop/build/image-text.js";

const ImageText = ({
  title,
  text,
  image,
  boxAlign,
  boxMargin,
  shadow,
  separator,
  halfSize,
  reversed,
  css,
}) => {
  const slideTemplate = {
    id: "slide1-image-text",
    type: "image-text",
    duration: 5000,
    themeData: {
      css: css,
    },
    mediaData: {
      "/v1/media/00000000000000000000000001": {
        assets: {
          uri: image,
        },
      },
    },
    content: {
      title: title,
      text: text,
      image: ["/v1/media/00000000000000000000000001"],
      boxAlign: boxAlign,
      boxMargin: boxMargin,
      shadow: shadow,
      separator: separator,
      halfSize: halfSize,
      reversed: reversed,
    },
  };

  return (
    <RemoteComponent
      url={url}
      run={new Date().toISOString()}
      slide={slideTemplate}
      content={slideTemplate.content}
      slideDone={() => {}}
    />
  );
};

ImageText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  boxAlign: PropTypes.string,
  boxMargin: PropTypes.bool,
  shadow: PropTypes.bool,
  separator: PropTypes.bool,
  halfSize: PropTypes.bool,
  reversed: PropTypes.bool,
  css: PropTypes.string,
};

export default ImageText;
