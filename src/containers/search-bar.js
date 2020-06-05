import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/index'

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchCountries();
    }

    renderSelecteCountries() {
        return(
            <select>
                <option/>
            </select>
        )
    }
    render(){
        return( 
            <form>
                {this.renderSelecteCountries()}
            </form>
        )
    }
}

const mapDispatchToProps = {
    fetchCountries
};

export default connect(undefined, mapDispatchToProps)(SearchBar);