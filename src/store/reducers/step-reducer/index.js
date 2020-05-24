import { actionTypes } from '../../actions/step';

const initialState = 3;

const stepReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STEP:
            return Number(action.payload);
        default:
            return state;
    }
};

export default stepReducer;
