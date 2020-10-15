import React, { useEffect } from 'react';
import Airtable from 'airtable';
import './App.css';
import { Component } from 'react';


//https://api.airtable.com/v0/appk1k59lSJbYpMfh/goals?api_key=YOUR_API_KEY

class App extends Component {

  // const base = new Airtable({ apiKey: 'key4t45gKcR91QG30' }).base('appk1k59lSJbYpMfh');

  useEffect(() => {

    fetch('https://api.airtable.com/v0/appk1k59lSJbYpMfh/goals?api_key=key4t45gKcR91QG30')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data, 'data');
    }).catch(err => {
      // Error :(
    });

    // base("goals")
    //   .select({ view: 'Grid View' })
    //   .eachPage((records, fetchNextPage) => {
    //     console.log(records);
    //     fetchNextPage();
    //   })
  }, [])

  // componentDidMount() {
  //   fetch('https://api.airtable.com/v0/appk1k59lSJbYpMfh/goals?api_key=key4t45gKcR91QG30')
  //     .then((resp) => resp.json())
  //     .then(data => {
  //       console.log(data, 'data');
  //     }).catch(err => {
  //       // Error :(
  //     });
  // }

  render() {
    return (
      <div className="App">

      </div>
    );
  }

}

export default App;
