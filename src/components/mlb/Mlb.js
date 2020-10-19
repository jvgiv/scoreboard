import React, { Component } from 'react'
import axios from 'axios'
import Scoreboard from './scoreboard/Scoreboard'

export default class Mlb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            gameStats: {},
            awayScores: [],
            homeScores: [],
            awayInfo: {},
            homeInfo: {}
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
                    gameStats: res.data,
                    awayScores: res.data.away_period_scores,
                    homeScores: res.data.home_period_scores,
                    awayInfo: res.data.away_team,
                    homeInfo: res.data.home_team
                })
            })
            .catch(err => console.log(err.message))
    }
    
    
    render() {
        console.log(this.state.homeInfo)
        return (
            <div>
                <Scoreboard 
                    info={this.state.gameStats} 
                    awayScores={this.state.awayScores}
                    homeScores={this.state.homeScores}
                    homeInfo={this.state.homeInfo}
                    awayInfo={this.state.awayInfo}    
                />
            </div>
        )
    }
}
