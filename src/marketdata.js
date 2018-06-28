import React from 'react';
import axios from 'axios';

export default class TicketList extends React.Component {
        state = {
            data: []
        }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
            .then(res => {
                const tickerData = res.data;
                this.setState({ tickerData });
            })
    }

    render() {
        return (
            <ul>
                {this.state.tickerData.map(datas => <li>{person}</li>)}
            </ul>
        )
    }
}
