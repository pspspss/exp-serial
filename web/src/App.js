import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Lamp from 'material-ui-icons/LightbulbOutline';

class App extends Component {

  constructor() {
    super()

    this.state = {
      state: false
    }
  }

  componentWillMount() {
    fetch('http://localhost:5000/', {
      method: 'GET',
    })
    .then(resp => {
      resp.json()
        .then((resp) => {
          this.setState({ state: resp.state == 0 })
        })
    })
  }

  sendSerial() {
    const formData = new FormData();
    formData.append("serial", "b'l'");

    fetch('http://localhost:5000/', {
      method: 'POST',
      mode: 'cors',
      body: formData
    })
    .then(resp => {
      resp.json()
        .then((resp) => {
          this.setState({ state: resp.state == 0 })
        })
    })

    console.log(this.state)

  }

  render() {

    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              style={{ height: "600px" }}
              container
              spacing={16}
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Button variant="fab" 
                      color={this.state.state ? 'primary' : 'default'}
                      onClick={() => {this.sendSerial()}}>
                <Lamp/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
