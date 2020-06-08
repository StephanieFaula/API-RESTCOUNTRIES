import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, fetchRateExchange } from '../actions/index';
import lodash from 'lodash';

class SearchBar extends Component {

    

    componentWillMount() {
        this.props.fetchCountries();
    }


    handleSelectChange = e => {
        const countryCode = e.target.value;
        const country = lodash.find(this.props.countries, { code : countryCode });
        this.props.fetchRateExchange(country);
    }

    renderSelecteCountries() {
        
        return(
            <select 
            className="form-control search_bar" 
            onChange={e => this.handleSelectChange(e)}>
                {this.props.countries.map(country => ( 
                        <option value={country.code} key={country.code}>
                            {country.name}
                        </option>                
                    ))
                    
                }
            </select>
        )
    }

    render(){
        console.log(this.props)
        return( 
            <form className="form-group">
                {this.renderSelecteCountries()}
            </form>
        )
    }
}

const mapDispatchToProps = {
    fetchCountries,
    fetchRateExchange
};

const mapStateToProps = (store) => {
    return {
        countries: store.countriesReducer.countries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);