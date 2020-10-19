import React, { Component } from 'react'

export default class Scoreboard extends Component {
    

    renderTableData = () => {
        return this.props.info.map(item => {
            return (
                // <div>
                    <tr>
                        <td>{item.away_team.abbreviation}</td>
                        <td>{item.home_team.abbreviation}</td>
                    </tr>
                    
            )
        })
    }
    
    render() {
        // console.log(this.props.homeInfo)
        return (
            <div>
                <h1>hi</h1>
                <table>
                   <tr>
                       <td>{this.props.awayInfo.abbreviation}</td>
                       {this.props.awayScores.map(score => {
                           return (
                               <td>{score}</td>
                           )
                       })}
                   </tr>
                   <tr>
                    <td>{this.props.homeInfo.abbreviation}</td>
                       {this.props.homeScores.map(score => {
                           return(
                               <td>{score}</td>
                           )
                       })}
                   </tr>
                </table>
            </div>
        )
    }
}
