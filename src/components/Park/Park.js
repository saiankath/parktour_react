import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './park.css'

class Park extends Component  {
    state = {
        showInfo : false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { img, id, info, name, city} = this.props.park
        console.log(this.props);
        const { removePark } = this.props
        
       return (
            <article className="park">
              <div className="container">
                <img src={img} alt="park tour"  />
                <span className="closeBtn" onClick={() => removePark(id)}>
                <i className="fas fa-window-close" />
                </span>
              </div>
              <div className="tour-info">
                  <h3>{city}</h3>
                  <h4>{name}</h4>
                  <h5>info {" "}
                  <span onClick={this.handleInfo}>
                  <i className="fas fa-caret-square-down" />
                  </span>
                  </h5>
                  {this.state.showInfo &&  <p>{info}</p>}
                 
              </div>
                
            </article>
        );
    }
    
}

export default Park