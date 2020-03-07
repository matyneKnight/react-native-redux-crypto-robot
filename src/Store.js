import Platform from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';

import RootReducer from './reducers';

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: '10.0.2.2',
            port: 8081
        })
    )
);

export default Store;