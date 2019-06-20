const reducer = (
    state = {
        data: ['football', 'baseball', 'art', 'footer','angle','bag','bed','say','beautiful','through','against','cake'],
        dataRange: [],
        isShowingCards: false
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
        case 'SHOW_CARDS':
            return {
              ...state,
              isShowingCards: !state.isShowingCards
            };
        default:
            return state;
    }
};

export default reducer;