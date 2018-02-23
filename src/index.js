import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

import { ToggleView } from "./ToggleView";

import { WithItem } from "./item/WithItem";
import { ItemDetailsView } from "./item/ItemDetailsView";
import { ItemDetailsEdit } from "./item/ItemDetailsEdit";
import { NearbyTransitEdit } from "./item/NearbyTransitEdit";
import { NearbyTransitView } from "./item/NearbyTransitView";

const ItemScreen = () => (
  <Fragment>
    <h1>ITEM SCREEN</h1>
    <WithItem
      render={({ item }) => (
        <Fragment>
          <h2>Item: {item.name}</h2>
          <ToggleView
            legend="Details"
            item={item}
            editComponent={ItemDetailsEdit}
            viewComponent={ItemDetailsView}
          />
          <ToggleView
            legend="Nearby Transit"
            nearbyTransit={item.nearbyTransit}
            editComponent={NearbyTransitEdit}
            viewComponent={NearbyTransitView}
          />
        </Fragment>
      )}
    />
  </Fragment>
);

render(<ItemScreen />, document.getElementById("root"));
