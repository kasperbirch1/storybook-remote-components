import PropTypes from "prop-types";
import { RemoteComponent } from "../RemoteComponent";

const url =
  "https://raw.githubusercontent.com/os2display/display-templates/develop/build/image-text.js";

const ImageText = ({ slide }) => {
  return (
    <RemoteComponent
      url={url}
      run={new Date().toISOString()}
      slide={slide}
      content={slide.content}
      slideDone={() => {}}
    />
  );
};

ImageText.propTypes = {
  slide: PropTypes.any,
};

export default ImageText;
