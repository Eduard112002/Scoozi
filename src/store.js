import { configureStore } from '@reduxjs/toolkit';
import formBookingReducer from "./reducer/form-booking";

const reducer = formBookingReducer;
const store = configureStore({reducer});

export default store;