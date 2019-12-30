import {
    POST_DELETE_START,
    POST_DELETE_OK,
    POST_DELETE_NOK,
    POST_DELETE_VOID,
} from './const';

const initialState = {
    data: {},
    loading: false,
    error: null,
    success: null,
    errorMessage: '',
    okAction: false,
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POST_DELETE_START:
            return {
                ...prevState,
                loading: true,
                data: {},
                okAction: false,
            };
        case POST_DELETE_VOID:
            return {
                ...prevState,
                okAction: false,
            };
        case POST_DELETE_OK:
            return {
                ...prevState,
                loading: false,
                success: true,
                error: false,
                data: action.payload,
                okAction: true,
            };
        case POST_DELETE_NOK:
            return {
                ...prevState,
                loading: false,
                success: false,
                error: true,
                errorMessage: action.payload,
                okAction: false,
            };
        default:
            return prevState;
    }
};

export default reducer;