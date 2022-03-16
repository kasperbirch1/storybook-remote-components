import PropTypes from "prop-types";
import { RemoteComponent } from "../RemoteComponent";

const url =
  "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js";

const HelloWorld = ({ name = "label" }) => {
  return (
    <RemoteComponent
      url={url} // RemoteComponent url
      name={name}
    />
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string,
};

export default HelloWorld;
