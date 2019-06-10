const reducer = (
    state = {
        data: ['football', 'baseball', 'art', 'footer','angle','bag','bed','say','beautiful','through','against','cake'],
        dataRange: []
    },action) => {
    switch (action.type) {
        case 'SAVE_WORD':
            var newData = [...state.data];
            var newDataRange = [...state.dataRange];
            return {
                ...state,
                data: newData,
                dataRange: newDataRange
            };
        default:
            return state;
    }
};

export default reducer;