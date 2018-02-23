import PropTypes from "prop-types";

const WithItem = ({ render }) => {
  // this would be an HTTP call
  const fakeItem = {
    name: "Union Station",
    location: "1 Bay St",
    nearbyTransit: [
      { id: "ttc-line1", name: "ttc-line1" },
      { id: "go-train", name: "go-train" },
      { id: "ttc-509", name: "ttc-509" },
      { id: "ttc-510", name: "ttc-510" },
      { id: "up-express", name: "up-express" }
    ]
  };
  return render({ item: fakeItem });
};
WithItem.propTypes = {
  render: PropTypes.func.isRequired
};

export { WithItem };
