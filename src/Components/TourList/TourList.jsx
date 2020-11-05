import React, { Component } from 'react';
import './TourList.scss'

import Tour from '../Tour/Tour';
import { tourData } from '../jsonData';
class TourList extends Component {
    state = { 
        tours:tourData
     };

     removeTour = id =>{
         const { tours } = this.state;
         const sortedTours = tours.filter(tour => tour.id !== id);
         this.setState({
             tours:sortedTours
         });
     };
    render() { 
        // for simple using destructuring
       const { tours }=this.state
       console.log(tours)
        return ( 
            <section className="tourlist">
               {tours.map(tour =>{
                   return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
               })}
            </section>
         );
    }
}
 
export default TourList;