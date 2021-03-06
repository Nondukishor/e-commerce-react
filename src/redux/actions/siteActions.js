import * as Types from './actionTypes';
import { URL } from '../../constants/config';
import axios from 'axios';
export const fetchCategoryList = () => dispatch => {
    axios.get(URL._CATEGORY)
        .then(res => {
            dispatch({
                type: Types.FETCH_ALL_CATEGORY,
                payload: res.data.data
            })
        })
};