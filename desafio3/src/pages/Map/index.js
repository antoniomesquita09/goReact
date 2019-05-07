import React, { Component } from 'react';
import MapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import '../../config/ReactotronConfig';

import MapMarker from '../components/mapMarker';
import Modal from '../components/Modal';

class Main extends Component {
  state = {
    modal: false,
    lat: null,
    long: null,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [latitude, longitude] = e.lngLat;

    this.setState({ modal: true, lat: latitude, long: longitude });
  };

  render() {
    const {
      viewport, modal, lat, long,
    } = this.state;
    return (
      <MapGL
        {...viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiYW50b25pbmhvbSIsImEiOiJjanZjOTA1YmwwbmhhNDFwODlvN3ZsMXB3In0.9W7kg9i9P--KG7ZGAydo8A"
        onViewportChange={view => this.setState({ viewport: view })}
      >
        <MapMarker captureClick />
        {modal ? <Modal latitude={lat} longitude={long} /> : null}
      </MapGL>
    );
  }
}

export default Main;
