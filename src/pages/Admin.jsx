import * as React from "react";

import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {doc} from "../firestore";

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',

      lat: 0,
      lng: 0,
      duration: 0,

      locations: {
        'onderstroom': [ 51.227707, 4.401118],
        'benidorm': [38.541058, -0.122494],
        'tokyo': [35.689487, 139.691711],
        'australia': [-25.274399, 133.775131],
      }
    };
  }

  handleSubmit() {
    doc.update( {
      location: this.state.location,
      lat: this.state.lat,
      lng: this.state.lng,
      duration: this.state.duration,
    })
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

  setLocation(location) {
    this.setState({
      location,
      lat: this.state.locations[location][0],
      lng: this.state.locations[location][1],
    });
  }

  handleDurationChange(duration) {
    this.setState({
      duration,
    });
  }

  render() {
    const { location, duration } = this.state;

    const handleDurationChange = event => {
      this.handleDurationChange(event.target.value);
    };

    const handleLocationChange = event => {
      this.setLocation(event.target.value);
    };

    const items = Object.keys(this.state.locations).map((value, index, array) => {
      return <MenuItem key={index} value={value}>{value}</MenuItem>;
    });

    return <Container maxWidth="sm">
      <FormControl style={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            onChange={handleLocationChange}>
          {items}
        </Select>
      </FormControl>

      <div style={{ marginTop: 20 }}/>

      <FormControl style={{ minWidth: 200 }}>
        <TextField
            id="travel-duration"
            label="Travel duration"
            type="number"
            value={duration}
            onChange={handleDurationChange}
            InputLabelProps={{
              shrink: true,
            }}
        />
      </FormControl>

      <div style={{ marginTop: 20 }}/>

      <Button variant="contained" color="primary" onClick={() => this.handleSubmit()}>
        submit
      </Button>
    </Container>;
  }
}
