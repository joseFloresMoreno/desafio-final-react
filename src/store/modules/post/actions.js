import { findAll, findById, save, updatePost, deletePost } from '../../../client/post-client';

import {
    POST_SAVE_NOK,
    POST_SAVE_OK,
    POST_SAVE_START,
    POST_UPDATE_NOK,
    POST_UPDATE_OK,
    POST_UPDATE_START,
    POST_DELETE_NOK,
    POST_DELETE_OK,
    POST_DELETE_START,
    POST_FIND_ALL_NOK,
    POST_FIND_ALL_OK,
    POST_FIND_ALL_START,
    POST_FIND_BY_ID_START,
    POST_FIND_BY_ID_OK,
    POST_FIND_BY_ID_NOK,
    POST_DELETE_VOID,
} from './const';

const findAllStartActionCreator = () => ({
    type: POST_FIND_ALL_START,
    payload: null,
});

const findAllOkActionCreator = (data) => ({
    type: POST_FIND_ALL_OK,
    payload: data,
});

const findAllNokActionCreator = (errorMessage) => ({
    type: POST_FIND_ALL_NOK,
    payload: errorMessage,
});


const findAllDataMapper = data => data.map(e => ({ ...e, description: JSON.parse(e.description) }));

const findByIdDataMapper = (data) => {
    return {
        ...data,
        description: JSON.parse(data.description),
    }
}

export const findAllAsyncActionCreator = () => {
    return (dispatch, getStore) => {
        dispatch(findAllStartActionCreator());
        findAll()
            .catch(error => {
                dispatch(findAllNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(findAllNokActionCreator('Error: generico'))
                } else {
                    dispatch(findAllOkActionCreator(findAllDataMapper(response.data)))
                }
            });
    }
}

// find by id
const findByIdStartActionCreator = () => ({
    type: POST_FIND_BY_ID_START,
    payload: null,
});

const findByIdOkActionCreator = (data) => ({
    type: POST_FIND_BY_ID_OK,
    payload: data,
});

const findByIdNokActionCreator = (errorMessage) => ({
    type: POST_FIND_BY_ID_NOK,
    payload: errorMessage,
});

export const findByIdAsyncActionCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(findByIdStartActionCreator());
        findById(id)
            .catch(error => {
                dispatch(findByIdNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(findByIdNokActionCreator('Error: generico'))
                } else {
                    dispatch(findByIdOkActionCreator(findByIdDataMapper(response.data)))
                }
            });
    }
}

// save
const saveStartActionCreator = () => ({
    type: POST_SAVE_START,
    payload: null,
});

const saveOkActionCreator = (data) => ({
    type: POST_SAVE_OK,
    payload: data,
});

const saveNokActionCreator = (errorMessage) => ({
    type: POST_SAVE_NOK,
    payload: errorMessage,
});

export const saveAsyncActionCreator = (post) => {
    return (dispatch, getStore) => {
        dispatch(saveStartActionCreator());
        save(post)
            .catch(error => {
                dispatch(saveNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(saveNokActionCreator('Error: generico'))
                } else {
                    dispatch(saveOkActionCreator(response.data))
                }
            });
    }
}

// update
const updateStartActionCreator = () => ({
    type: POST_UPDATE_START,
    payload: null,
});

const updateOkActionCreator = (data) => ({
    type: POST_UPDATE_OK,
    payload: data,
});

const updateNokActionCreator = (errorMessage) => ({
    type: POST_UPDATE_NOK,
    payload: errorMessage,
});

export const updateAsyncActionCreator = (post, id) => {
    return (dispatch, getStore) => {
        dispatch(updateStartActionCreator());
        updatePost(post, id)
            .catch(error => {
                dispatch(updateNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'success') {
                    dispatch(updateNokActionCreator('Error: generico'))
                } else {
                    dispatch(updateOkActionCreator(response.data))
                }
            });
    }
}

// delete
const deleteStartActionCreator = () => ({
    type: POST_DELETE_START,
    payload: null,
});

const deleteOkActionCreator = (data) => ({
    type: POST_DELETE_OK,
    payload: data,
});

const deleteNokActionCreator = (errorMessage) => ({
    type: POST_DELETE_NOK,
    payload: errorMessage,
});

const deleteVoidActionCreator = (errorMessage) => ({
    type: POST_DELETE_VOID,
    payload: errorMessage,
});

export const deleteAsyncActionCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(deleteStartActionCreator());
        deletePost(id)
            .catch(error => {
                dispatch(deleteNokActionCreator('Error:', error))
            })
            .then(response => {
                if (response.message !== 'delete') {
                    dispatch(deleteNokActionCreator('Error: generico'))
                } else {
                    dispatch(deleteOkActionCreator(response.data))
                    dispatch(deleteVoidActionCreator())
                }
            });
    }
}