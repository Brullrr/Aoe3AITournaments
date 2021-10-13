import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '../store/stateSlice';
import countryReducer from '../store/countrySlice';
import tournamentsReducer from '../store/tournamentsSlice';

    const store = configureStore({
        reducer: {
            stateSlice: stateReducer,
            countrySlice: countryReducer,
            tournamentsSlice: tournamentsReducer
        }
    });


export default store;