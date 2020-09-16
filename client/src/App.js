import React,{ Component } from 'react';
import axios from 'axios'
import './App.css'
import Navbar from "./components/navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Stalls from './components/stalls'


class App extends Component{
  componentDidMount() {
    axios.get('http://localhost:5000/stalls').then(res=> console.log(res)).catch(err=> console.log(err))
  }


  render(){
      return (
          <Router>
              <Navbar/>
              <Stalls />
          </Router>

    )
  }
}

export default App;
