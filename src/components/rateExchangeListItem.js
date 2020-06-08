import React, { Component } from "react";
import ReactChartKick, { AreaChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartKick.addAdapter(Chart);
class RateExchangeListItem extends Component {
    render(props) {

        const { flag, name, rates, currencyCode } = this.props.rate
        console.log(rates)
        return(
            <tr>
                <td>
                    {name} <br/>
                    <img src={flag} height="60" width="100" alt="drapeau"/>
                </td>
                <td className="col-md-12"><AreaChart xtitle="Date" ytitle={currencyCode} data={formatData(rates, currencyCode)}/></td>
            </tr>
        )
    }
}

function formatData(rates, currencyCode) {
    return Object.keys(rates).map(date => ( 
        [date, rates[date][currencyCode]]
    ))
}

export default RateExchangeListItem;