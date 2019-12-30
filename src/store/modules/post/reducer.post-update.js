import {
    POST_UPDATE_START,
    POST_UPDATE_OK,
    POST_UPDATE_NOK,
    POST_UPDATE_VOID,
} from './const';

const initialState = {
    data: {},
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POST_UPDATE_START:
            return {
                ...prevState,
                loading: true,
                data: {},
            };
        case POST_UPDATE_VOID:
            return {
                ...prevState,
                data: {},
            };
        case POST_UPDATE_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
            };
        case POST_UPDATE_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
            };
        default:
            return prevState;
    }
};

export default reducer;