import {configureStore} from '@reduxjs/toolkit';
import honeymoonReducer from './slices/honeySlice.js';
import groupTourReducer from './slices/groupSlice.js';
import allPackagesReducer from './slices/AllPackage.js';
import bookingReducer from './slices/BookingSlice.js';
import spiritualReducer from './slices/spiritual.js';
import internationalReducer from './slices/InterNational.js';

 const store = configureStore({
  reducer: {
    honeymoon: honeymoonReducer,
    groupTours: groupTourReducer,
    allPackages: allPackagesReducer,
    booking: bookingReducer,
    spiritual: spiritualReducer,
    international: internationalReducer,
  },
});

export default store;