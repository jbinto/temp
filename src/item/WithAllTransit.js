import PropTypes from "prop-types";

const WithAllTransit = ({ children }) => {
  // this would be an HTTP call
  const allTransit = [
    { id: "ttc-line1", name: "ttc-line1" },
    { id: "ttc-line2", name: "ttc-line2" },
    { id: "ttc-line3", name: "ttc-line3" },
    { id: "ttc-line4", name: "ttc-line4" },
    { id: "go-train", name: "go-train" },
    { id: "ttc-501", name: "ttc-501" },
    { id: "ttc-502", name: "ttc-502" },
    { id: "ttc-503", name: "ttc-503" },
    { id: "ttc-504", name: "ttc-504" },
    { id: "ttc-505", name: "ttc-505" },
    { id: "ttc-506", name: "ttc-506" },
    { id: "ttc-509", name: "ttc-509" },
    { id: "ttc-510", name: "ttc-510" },
    { id: "ttc-511", name: "ttc-511" },
    { id: "ttc-512", name: "ttc-512" },
    { id: "up-express", name: "up-express" },
    { id: "viva-blue", name: "viva-blue" },
    { id: "viva-green", name: "viva-green" },
    { id: "viva-pink", name: "viva-pink" },
    { id: "viva-orange", name: "viva-orange" }
  ];
  return children({ allTransit });
};
WithAllTransit.propTypes = {
  children: PropTypes.func.isRequired
};

export { WithAllTransit };
