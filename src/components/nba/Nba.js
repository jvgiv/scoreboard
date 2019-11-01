import React, { Component } from 'react'
import axios from 'axios'

export default class Nba extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             gameStats: {}
        }
    }

    componentDidMount() {
        this.fetchGameStats()
    }

    fetchGameStats = () => {
        axios
            .get('https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json')
            .then(res => {
                this.setState({
                    gameStats: res.data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
