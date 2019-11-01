import React, { Component } from 'react'

export default class SportPicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    


    render() {
        const sportChoice = {
            display: "flex",
            flexDirection: "row",
            width: "60%"
        }

        const title = {
            width: "50%",
            display: "flex",
            flexDirection: "row"
        }

        return (
            <div>
                <div style={sportChoice}>
                    <h2>MLB</h2>
                    <h2>NBA</h2>
                </div>
            </div>
        )
    }
}
