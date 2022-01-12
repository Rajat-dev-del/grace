import {
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
} from '../types.js';
import React, { useReducer } from 'react';

import authContext from './authContext';

const Authstate = (props) => {
    const initialState = {
        isAuthenticated: null,
        loading:true,
        user:null,
        error:null,
    };



    return (
        <div>

        </div>
    );
}

export default Authstate;
