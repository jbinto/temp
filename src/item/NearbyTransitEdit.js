import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Select from "react-select";

import { WithAllTransit } from "./WithAllTransit";

export class NearbyTransitEdit extends React.Component {
  state = {};

  componentDidMount() {
    // XXX: what about CWRP? If we remount for some reason,
    // eg. apollo refetch queries, won't we need to update here?
    this.setState({
      selectedValues: this.originalValues()
    });
    this.select.focus();
  }

  originalValues = () => {
    return this.props.nearbyTransit;
  };

  selectedValues = () => {
    return this.state.selectedValues;
  };

  handleSelectChange = nextValues => {
    const values = this.selectedValues();

    console.log({ values, nextValues });

    const removals = _.difference(values, nextValues);
    const additions = _.difference(nextValues, values);

    if (removals.length > 0) {
      window.alert(`Would delete ${JSON.stringify(removals)}`);
    }

    if (additions.length > 0) {
      window.alert(`Would create ${JSON.stringify(additions)}`);
    }

    // NOTE: we are keeping our own state here. More realistic would be to let
    // apollo refetch queries just send us up-to-date props from the server
    // (via refetchQueries)
    this.setState({ selectedValues: nextValues });
  };

  render() {
    const { selectedValues } = this.state;
    return (
      // XXX: if this were apollo/relay, it makes sense to bind the "All transit"
      // dependency here. https://www.graphql.com/articles/best-practices-for-graphql-clients
      // (Rather than requiring it to be injected upstream.) Sophisticated graphql clients
      // can batch together requests if perf is an issue. Fragments are also a possibility.
      <Fragment>
        <WithAllTransit>
          {({ allTransit }) => {
            return (
              <Select
                options={allTransit}
                multi
                onChange={this.handleSelectChange}
                value={selectedValues}
                valueKey="id"
                labelKey="name"
                clearable={false}
                removeSelected={false}
                ref={ref => {
                  this.select = ref;
                }}
              />
            );
          }}
        </WithAllTransit>
        <button onClick={this.props.goToView}>Done</button>
      </Fragment>
    );
  }
}
NearbyTransitEdit.propTypes = {
  nearbyTransit: PropTypes.arrayOf(PropTypes.string).isRequired,
  goToView: PropTypes.func.isRequired
};
