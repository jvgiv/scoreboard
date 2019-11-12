import React, { Component } from 'react'
import axios from 'axios'
import Scoreboard from './scoreboard/Scoreboard'

export default class Mlb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             gameStats: {}
        }
    }

    componentDidMount() {
        this.fetchGameStats()
    }

    fetchGameStats =() => {
        axios
            .get('https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json')
            .then(res => {
                this.setState({
                    gameStats: res.data
                })
            })
            .catch(err => console.log(err.message))
    }
    
    
    render() {
        console.log(this.state.gameStats)
        return (
            <div>
                <Scoreboard 
                    away_inning_scores={this.state.gameStats.away_period_scores} 
                    home_inning_scores={this.state.gameStats.home_period_scores}
                    
                />
            </div>
        )
    }
}
