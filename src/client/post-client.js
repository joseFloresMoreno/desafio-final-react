import { API_HOST } from './config';

export const findAll = () => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}

export const findById = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post/${id}`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};

/*
title,
description
image_url
*/
export const save = (post) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};

export const updatePost = (post, id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post/${id}`, {
        method: 'PATCH', // or 'PUT'
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};

export const deletePost = (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_HOST}/api/post/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
};