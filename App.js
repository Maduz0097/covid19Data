import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL : 'https://www.hpb.health.gov.lk/api/get-current-statistical'
});

class App extends Component{

  state = {
    covid: []
  }

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({covid:res.data})
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Daily corona report</h1>
        <ul>
          <li>{this.state.covid.map(person => <h2 key={person.update_date_time}>{person.global_deaths}</h2>)}</li>
        </ul>
      </div>
    )
  }
}

export default App;
