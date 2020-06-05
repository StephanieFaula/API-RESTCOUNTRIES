import { combineReducers } from 'redux';
import CountriesReducer from './reducer_countries';


const rootReducer = combineReducers({
    countriesReducer : CountriesReducer
})

export default rootReducer;