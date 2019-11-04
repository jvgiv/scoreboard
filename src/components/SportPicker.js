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
            width: "60%",
            margin: "0 auto",

        }

        const title = {
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        }

        return (
            <div>
                <div style={sportChoice}>
                    <h2 style={title}>MLB</h2>
                    <h2 style={title}>NBA</h2>
                </div>
            </div>
        )
    }
}
