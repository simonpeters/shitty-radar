import * as React from "react";

import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
      'pk.eyJ1Ijoic2ltb25zcGFjZWQiLCJhIjoiY2szcnA2ZjdqMDU1ODNtbnl1ZGZmeTlpZiJ9.IzebD1TV3Yk4XI8P34ou1g'
});

export default class MapPage extends React.Component {
  render() {
    return <Map
        style="mapbox://styles/mapbox/streets-v9"
        flyToOptions={{
          speed: 100,
        }}
        containerStyle={{
          touchEvent: 'none',
          height: '100vh',
          width: '100vw'
        }}
    >
    </Map>
  }
}
