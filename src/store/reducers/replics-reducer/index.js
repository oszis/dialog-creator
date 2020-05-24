import { actionTypes } from '../../actions/replics';

const initialState = [];

const replicsReducer = (state = initialState, action) => {
    const newArr = [...state];
    switch (action.type) {
        case actionTypes.ADD_REPLIC:
            newArr.push(action.payload);
            return newArr;
        case actionTypes.SET_REPLICS:
            return action.payload;
        case actionTypes.SET_REPLIC:
            newArr[action.payload.replicId] = action.payload.replic;
            return newArr;
        default:
            return state;
    }
};

export default replicsReducer;
