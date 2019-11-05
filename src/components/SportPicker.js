import React, { Component } from 'react'
import Mlb from './mlb/Mlb'
import Nba from './nba/Nba'

export default class SportPicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mlb: true
        }
    }
    
    mlbSportView = () => {
        if (!this.state.mlb) {
            this.setState({
                mlb: !this.state.mlb
            })
        } else return 
    }

    nbaSportView = () => {
        if (this.state.mlb) {
            this.setState({
                mlb: !this.state.mlb
            })
        } else return 
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
            textAlign: "center",
            cursor: "pointer"
        }

        const title_u = {
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            textDecoration: "underline",
            cursor: "pointer"            
        }

        return (
            <div>
                <div style={sportChoice}>
                    <h2 onClick={() => this.mlbSportView()} style={this.state.mlb ? title_u : title}>MLB</h2>
                    <h2 onClick={() => this.nbaSportView()} style={!this.state.mlb ? title_u : title}>NBA</h2>
                </div>

                <div>
                    {this.state.mlb ? 
                        <Mlb />
                        :
                        <Nba />    
                }
                </div>
            </div>
        )
    }
}
