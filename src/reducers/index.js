import { combineReducers } from 'redux';
import CountriesReducer from './reducer_countries';
import RateExchangeReducer from './reducer_rate_exchange';


const rootReducer = combineReducers({
    countriesReducer : CountriesReducer,
    rateExchangeReducer : RateExchangeReducer
})

export default rootReducer;