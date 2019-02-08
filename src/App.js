import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { MenuAppBar } from './standards/navbar';
import { SwipeableTemporaryDrawer } from './content/drawer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle:true
    }
    this.switch=this.switch.bind(this)
  }
  switch(){
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    const stylesButton = {
      root: {
        flexGrow: 1,
        color: 'yellow'
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
    };
    const stylesDrawer = {
      list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
    };
    return (
      <div>
        <MenuAppBar classes={stylesButton} color="secondary"/>
        <Button variant="contained" color="primary" onClick={this.switch}>Welcome Material UI</Button>
        {this.state.toggle && <SwipeableTemporaryDrawer classes={stylesDrawer}/>}

      </div>
    );
  }
}

export default App;
