import PropTypes from "prop-types";
import { RemoteComponent } from "../RemoteComponent";

const url =
  "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js";

const HelloWorld = ({ name }) => <RemoteComponent url={url} name={name} />;

const RemoteComponentContainer = ({ name = "label" }) => {
  return <HelloWorld name={name} />;
};

RemoteComponentContainer.propTypes = {
  name: PropTypes.string,
};

export default RemoteComponentContainer;
