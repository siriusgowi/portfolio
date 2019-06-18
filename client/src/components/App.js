import React, { Component } from 'react';
import axios from 'axios';

// Components
import SidebarContainer from './sidebar/SidebarContainer';
import ContentContainer from './main/ContentContainer';

class App extends Component {

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios.get('http://localhost:3000/data/data.json')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
        <div className="website-container">
          <SidebarContainer />
          <ContentContainer />
        </div>
    );
  }
}

export default App;
