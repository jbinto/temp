import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Select from "react-select";

export const NearbyTransitView = ({ nearbyTransit, goToEdit }) => (
  <Fragment>
    <Select
      valueKey="id"
      labelKey="name"
      multi
      value={nearbyTransit}
      options={nearbyTransit}
      lol={console.log(nearbyTransit)}
      disabled
    />
    <button onClick={goToEdit}>Edit nearby transit</button>
  </Fragment>
);
NearbyTransitView.propTypes = {
  nearbyTransit: PropTypes.arrayOf(PropTypes.string).isRequired,
  goToEdit: PropTypes.func.isRequired
};
