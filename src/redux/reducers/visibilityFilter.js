import { SET_FILTER } from '../actionTypes';
import { VISIBILITY_FILTERS } from "../../constants/constants";
const initialState = VISIBILITY_FILTERS.DATA;

const visibilityFilter = (state = initialState, action) => {

    switch(action.type){
        case SET_FILTER:{
            return action.payload.filter;
        }
        default:{
            return state;
        }
    }
}
export default visibilityFilter;
