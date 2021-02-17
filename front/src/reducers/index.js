import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { scheduleReducer } from './scheduleReducer';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
        console.log('HYDRATE', action);
        return action.payload;
        default: {
        const combinedReducer = combineReducers({
            scheduleReducer
        });
        return combinedReducer(state, action);
        }
    }
};

export default rootReducer;