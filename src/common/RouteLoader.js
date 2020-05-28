import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { loadRouteData } from '../utills';
import Routes from './Routes';

class PendingDataLoader extends Component {
  constructor(props) {
    super(props);
    const hasClientData = this.hasClientData();
    this.state = {
      previousLocation: null,
      currentLocation: this.props.location,
      showRoute: !hasClientData,
      showLoader: hasClientData
    };
  }

  static getDerivedStateFromProps(props, state) {
    const currentLocation = props.location;
    const previousLocation = state.currentLocation;

    const navigated = currentLocation !== previousLocation;
    if (navigated) {
      // save the location so we can render the old screen
      const routes = matchRoutes(Routes, props.location.pathname);
      const noLoader = routes[0] && routes[0].route.noLoader;

      return {
        previousLocation,
        currentLocation,
        showLoader: !noLoader
      };
    }

    return null;
  }

  componentDidMount() {
    const { showRoute, location: { pathname } } = this.props;
    if (!showRoute) {
      loadRouteData(pathname, {
        loadType: 'fetchInitialData'
      }).then(() => {
        this.setState({
          showRoute: true,
          showLoader: false
        });
      });
    }
  }

  componentDidUpdate({ location: prevLocation }) {
    const { location, location: { pathname } } = this.props;
    const navigated = prevLocation !== location;

    if (navigated) {
      // load data while the old screen remains
      loadRouteData(pathname).then(data => {
        console.log(data);
        // const { routeData } = data[data.length - 1];
        // clear previousLocation so the next screen renders
        window.scrollTo(0, 0);
        this.setState({
          previousLocation: null,
          showLoader: false
        });
      });
    }
  }

  hasClientData = () => {
    const { location: { pathname } } = this.props;
    const routes = matchRoutes(Routes, pathname);
    for (let i = 0; i < routes.length; i += 1) {
      if (routes[i].route.fetchInitialData) {
        return true;
      }
    }
    return false;
  }

  render() {
    const { children, location } = this.props;
    const { previousLocation, showLoader, showRoute } = this.state;

    return (
      <>
        {showRoute && (
          <Route
            location={previousLocation || location}
            render={() => children}
          />
        )}
        {showLoader ? (
          <div>loading...</div>
        ) : null}
      </>
    );
  }
}

export default withRouter(PendingDataLoader);
