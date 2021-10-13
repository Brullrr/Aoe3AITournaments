import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '../store/stateSlice';
import countryReducer from '../store/countrySlice';
import tournamentsReducer from '../store/tournamentsSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';



        const reducers = combineReducers({
            stateSlice: stateReducer,
            countrySlice: countryReducer,
            tournamentsSlice: tournamentsReducer
        });

        const persistConfig = {
            key: 'root',
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, reducers);
   
    const store = configureStore({
        
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== 'production',
            middleware: [thunk],
        
    });

    




export default store;