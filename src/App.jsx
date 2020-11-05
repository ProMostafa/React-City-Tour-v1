import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.scss';
import TourList from './Components/TourList/TourList';



class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar />
                <TourList />
            </React.Fragment>
         );
    }
}
 
export default App;