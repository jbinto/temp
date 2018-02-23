import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

export const ItemDetailsEdit = ({ item, goToView }) => {
  return (
    <Fragment>
      <Form
        onSubmit={values => {
          // XXX here we could call an apollo mutation with refetchQueries
          window.alert(`I would have submitted ${JSON.stringify(values)}`);
          goToView();
        }}
        initialValues={{
          name: item.name,
          location: item.location
        }}
        render={({ handleSubmit, pristine, reset, submitting, values }) => (
          <Fragment>
            <form onSubmit={handleSubmit}>
              <div>
                <strong>Name:</strong>
                <Field name="name" component="input" />
              </div>
              <div>
                <strong>Location:</strong>
                <Field name="location" component="input" />
              </div>
              <button type="submit" disabled={pristine || submitting}>
                Save
              </button>
              <button onClick={goToView}>Cancel</button>
            </form>
          </Fragment>
        )}
      />
    </Fragment>
  );
};
ItemDetailsEdit.propTypes = {
  item: PropTypes.object.isRequired,
  goToView: PropTypes.func.isRequired
};
