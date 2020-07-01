import React, { Component } from 'react'
import { parkData } from '../../parkData'
import Park from '../Park/Park'
import './parklist.css'

class ParkList extends Component {

    state = {
        parks: parkData
    }
    removePark = (id) => {
        const { parks } = this.state;
       const sortedparks = this.state.parks.filter((park) => park.id !== id )
       this.setState({
           parks: sortedparks
       })

        
    }
    render() {
        const { parks } = this.state;
        return (
            <section className="parklist">
              {parks.map(park => (
                  <Park key={park.id} park={park} removePark={this.removePark} />
              ))}
            </section>
        )
    }
}

export default ParkList
