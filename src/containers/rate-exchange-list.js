import React, { Component } from 'react';
import { connect } from 'react-redux';
import RateExchangeListItem from '../components/rateExchangeListItem';

class RateExchangeList extends Component {
    render() {

        let countries = this.props.rateExchange;

        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Pays</th>
                        <th className="col-md-6">Valeur de la monaie par rapport au $</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map((rate, index) => ( 
                            <RateExchangeListItem key={rate.code + index} rate={rate} />
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        rateExchange : store.rateExchangeReducer.rateExchangeList
    }
}

export default connect(mapStateToProps, undefined)(RateExchangeList);
