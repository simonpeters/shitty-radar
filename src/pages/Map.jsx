import * as React from "react";

import ReactMapboxGl from 'react-mapbox-gl';
import {doc} from "../firestore";

const Map = ReactMapboxGl({
  accessToken:
      'pk.eyJ1Ijoic2ltb25zcGFjZWQiLCJhIjoiY2szcnA2ZjdqMDU1ODNtbnl1ZGZmeTlpZiJ9.IzebD1TV3Yk4XI8P34ou1g'
});

export default class MapPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.unsub = doc.onSnapshot((doc) => {
          this.setState(doc.data());
        }
    );
  }

  componentWillUnmount() {
    if (this.unsub) {
      this.unsub();
    }
  }

  render() {
    if (!this.state.lat || !this.state.lng) {
      return <div></div>;
    }

    const speed = parseInt(this.state.duration) * 1000 * 60;

    return <div className='Map'><Map
        style="mapbox://styles/mapbox/streets-v9"
        flyToOptions={{
          curve: 0.1,
          duration: speed,
        }}

        center={{
          lat: this.state.lat,
          lng: this.state.lng,
        }}

        containerStyle={{
          touchEvent: 'none',
          height: '100vh',
          width: '100vw'
        }}
    >
    </Map></div>
  }
}
