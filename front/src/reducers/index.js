import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { scheduleReducer } from './scheduleReducer';
import { projectSubmitReducer } from './projectSubmitReducer';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
        console.log('HYDRATE', action);
        return action.payload;
        default: {
        const combinedReducer = combineReducers({
            scheduleReducer,
            projectSubmitReducer
        });
        return combinedReducer(state, action);
        }
    }
};

export default rootReducer;