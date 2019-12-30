import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import { findAllAsyncActionCreator } from '../../store/modules/post/actions';

/**
 * Home
 * componenete que muestra la info en la vista publica
 * 
 * @author José Flores <jose.alberto.flores.m@gmail.com>
 * @since 1.0.0
 * @version 1.0.0
 * @param {object} postModule - lista de post obtenidas desde el store
 */

const Home = (props) => {
    const dispatch = useDispatch();
    const postModule = useSelector(store => store.post.posts);

    useEffect(() => {
        dispatch(findAllAsyncActionCreator());
    }, []);

    return (
        <div className="home">
            <Card history={props.history} post={postModule.data} />
        </div>
    );
}
export default Home;