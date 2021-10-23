import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      legends: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json()
    ).then(
      users => this.setState({legends: users})
    )
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { legends, searchField } = this.state;
    const filteredLegends = legends.filter(legend => 
      legend.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters' 
          handleChange={this.handleChange}
        />
        <CardList legends={filteredLegends} />
      </div>
    );

  }
}

export default App;
