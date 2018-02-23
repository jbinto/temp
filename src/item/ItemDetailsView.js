import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const ItemDetailsView = ({ item, goToEdit }) => {
  return (
    <Fragment>
      <div>
        <strong>Name:</strong> {item.name}
      </div>
      <div>
        <strong>Location:</strong> {item.location}
      </div>
      <button onClick={goToEdit}>Edit details</button>
    </Fragment>
  );
};
ItemDetailsView.propTypes = {
  item: PropTypes.object.isRequired,
  goToEdit: PropTypes.func.isRequired
};
