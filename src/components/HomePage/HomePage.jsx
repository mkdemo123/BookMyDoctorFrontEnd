import React, { Component } from 'react';
import Card1component from './Cards1/Card1Component';
import Card2Component from './Cards2/Card2Component';
import Card4Component from './Cards4/Card4Component';






export default class HomePage extends Component {
  render() {
    return <div>
      
      <Card1component/>
      <Card4Component/>
      <Card2Component/>    
      
    </div>;
  }
}
