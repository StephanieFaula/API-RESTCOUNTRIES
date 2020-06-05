import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions/index';

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchCountries();
    }

    renderSelecteCountries() {
        
        return(
            <select className="form-control search_bar">
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
        return( 
            <form className="form-group">
                {this.renderSelecteCountries()}
            </form>
        )
    }
}

const mapDispatchToProps = {
    fetchCountries
};

const mapStateToProps = (store) => {
    return {
        countries: store.countriesReducer.countries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);