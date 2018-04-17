import React, { Component } from 'react';
import Button from 'material-ui/Button';

class App extends Component {
  sendSerial() {
    const formData = new FormData();
    formData.append("serial", "b'l'");

    fetch('http://localhost:5000/', {
      method: 'POST',
      body: formData
    })
  }

  render() {
    return (
      <div>
        <Button size="small"
          color="secondary"
          onClick={this.sendSerial()}>
          Enviar
        </Button>
      </div>
    );
  }
}

export default App;
