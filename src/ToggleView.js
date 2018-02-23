import React from "react";
import PropTypes from "prop-types";

export class ToggleView extends React.Component {
  state = {
    tab: "view"
  };

  goToEdit = () => {
    this.setState({ tab: "edit" });
  };

  goToView = () => {
    this.setState({ tab: "view" });
  };

  goToSort = () => {
    this.setState({ tab: "sort" });
  };

  renderComponent = () => {
    const {
      editComponent: EditComponent,
      viewComponent: ViewComponent,
      sortComponent: SortComponent
    } = this.props;
    switch (this.state.tab) {
      case "edit":
        return <EditComponent goToView={this.goToView} {...this.props} />;
      case "view":
        return (
          <ViewComponent
            goToEdit={this.goToEdit}
            goToSort={this.goToSort}
            {...this.props}
          />
        );
      case "sort":
        return <p>TBD</p>;
      default:
        return "Should not happen";
    }
  };

  render() {
    return (
      <fieldset>
        <legend>{this.props.legend}</legend>
        {this.renderComponent()}
      </fieldset>
    );
  }
}
ToggleView.propTypes = {
  editComponent: PropTypes.func,
  viewComponent: PropTypes.func
};
