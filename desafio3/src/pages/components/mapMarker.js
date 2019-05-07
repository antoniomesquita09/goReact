import React, { Component } from 'react';
import { Marker } from 'react-map-gl';

// import { Container } from './styles';

class mapMarker extends Component {
  render() {
    return (
      <>
        <Marker latitude={-23.5439948} longitude={-46.6065452} captureClick>
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/44874857?v=4"
            alt="avatar"
          />
        </Marker>
      </>
    );
  }
}

export default mapMarker;
