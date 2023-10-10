import * as alertrootReducer from './root.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const middleWares=[logger,thunk];

const store=configureStore({reducer:alertrootReducer.rootReducer},composeWithDevTools(applyMiddleware(...middleWares)));
export default store;