import "../index.css";
import React, { Component } from 'react'

class Allhero extends Component {
    render(){
        return (
            <div className="back-image">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
        }

    }
 

export default Allhero
