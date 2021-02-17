export const scheduleInitialState = {
    scheduleList : [],
    isLoadingSchedules: false,
}

export const LOAD_SCHEDULES_REQUEST = 'LOAD_SCHEDULES_REQUEST';
export const LOAD_SCHEDULES_SUCCESS = 'LOAD_SCHEDULES_SUCCESS';
export const LOAD_SCHEDULES_FAILURE = 'LOAD_SCHEDULES_FAILURE';

export const loadScheduleRequestAction = () => {
    
}

export const scheduleReducer = (state = scheduleInitialState, action) =>
{
    switch (action.type) {
        case LOAD_SCHEDULES_REQUEST : {
            console.log(action.data);
            return {
                ...state,
                isLoadingSchedules : true
            }
        }
        case LOAD_SCHEDULES_SUCCESS : {
            return {
                ...state,
                isLoadingSchedules : false,
                scheduleList : action.data,
            }
        }
        case LOAD_SCHEDULES_FAILURE : {
            return {
                ...state,
                isLoadingSchedules : false,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}