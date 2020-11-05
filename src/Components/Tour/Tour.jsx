import React, { Component } from 'react';
import './Tour.scss'
class Tour extends Component {
    
    state={
        showInfo:false
    }

    handleShowInfo = ()=>{
        this.setState({showInfo:!this.state.showInfo})
    }
    render() { 

        // destructuring for simple usage
        const { id ,city , img , name , info } = this.props.tour;
        const { removeTour } =this.props;
        return ( 
            <article className="tour">
                <div className="img-container">
                    <img src={img}
                    />
                     {/* <span className="close-btn" onClick={removeTour(id)}> this wrong way this make call function at once */}
                    <span className="close-btn" onClick={()=>{removeTour(id)}}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info
                        <span onClick={this.handleShowInfo}>
                          <i className="fas fa-caret-square-down"></i>
                       </span>
                    </h5>
                       { this.state.showInfo && <p>{info}</p> }
                </div>
            </article>
         );
    }
}
 
export default Tour;