import { combineReducers } from 'redux';

import stepReducer from './step-reducer';
import replicsReducer from './replics-reducer';

const reducers = combineReducers({
    step: stepReducer,
    replics: replicsReducer
});

export default reducers;
