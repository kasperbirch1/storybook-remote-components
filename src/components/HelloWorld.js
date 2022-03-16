import PropTypes from "prop-types";
import { RemoteComponent } from "../RemoteComponent";

const url =
  "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js";

const RemoteComponentContainer = ({ name }) => (
  <RemoteComponent url={url} name={name} />
);

const HelloWorld = ({ name = "label" }) => {
  return <RemoteComponentContainer name={name} />;
};

HelloWorld.propTypes = {
  name: PropTypes.string,
};

export default HelloWorld;
