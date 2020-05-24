export const setReplics = replic => ({
    type: 'SET_REPLICS',
    payload: replic
});

export const setReplic = ({replicId, replic}) => ({
    type: 'SET_REPLIC',
    payload: {
        replicId,
         replic
    }
});


export const addReplic = () => ({
    type: 'ADD_REPLIC',
    payload: {
        name: '',
        text: '',
        answers: []
    },
});


export const actionTypes = {
    ADD_REPLIC: 'ADD_REPLIC',
    SET_REPLICS: 'SET_REPLICS',
    SET_REPLIC: 'SET_REPLIC'
};
