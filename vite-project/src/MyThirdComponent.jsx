import PropTypes from "prop-types";

export const MyThirdComponent = (props) => {
  return (
    <div>
      <h1>Comunicacion entre componentes</h1>
      <ul>{props.name}</ul>,<ul>{props.last_name}</ul>,
    </div>
  );
};

MyThirdComponent.prototype = {
  name: PropTypes.string,
  last_name: PropTypes.string,
};
