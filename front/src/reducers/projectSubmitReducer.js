export const projectInitialState = {
    isProjectSubmiting : false, // submit 시도
    isProjectSubmit : false // submit 여부
}

export const PROJECT_SUBMIT_REQUEST = 'PROJECT_SUBMIT_REQUEST';
export const PROJECT_SUBMIT_SUCCESS = 'PROJECT_SUBMIT_SUCCESS';
export const PROJECT_SUBMIT_FAILURE = 'PROJECT_SUBMIT_FAILURE';

export const projectSubmitReducer = (state = projectInitialState, action) =>
{
    switch (action.type) {
        case PROJECT_SUBMIT_REQUEST : {
            return {
                ...state,
                isProjectSubmiting : true,
                isProjectSubmit : false,
            }
        }
        case PROJECT_SUBMIT_SUCCESS : {
            return {
                ...state,
                isProjectSubmiting : false,
                isProjectSubmit : true,
            }
        }
        case PROJECT_SUBMIT_FAILURE : {
            return {
                ...state,
                isProjectSubmiting : false,
                isProjectSubmit : false,
            }
        }

        default : {
            return {
              ...state,
            };
        }
    }
};