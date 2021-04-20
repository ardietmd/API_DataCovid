import { render } from '@testing-library/react'
import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://covid19.mathdro.id/api/countries/Indonesia')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  render() {

    const { isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading....</div>
    }
    else {
      return(
        <div className="App">
        <div className="Title"> 
          <h1>Data covid 19</h1>
          </div>

            <ul>
              <li> Confirmed : {items.confirmed.value}</li>
              <li> Cecovered : {items.recovered.value}</li>
              <li> Deaths : {items.deaths.value}</li>
          
              
            </ul>
            
        </div>
      );
    }
    
  }
}

export default App;