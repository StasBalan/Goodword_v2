const reducer = (
    state = {
        vocabulary: ['football', 'baseball', 'art', 'footer','angle','bag','bed','say','beautiful','through','against','cake'],
        wordsToLearn: [],
        dataLocalStorage: [],
        isShowingCards: false
    },action) => {
    switch (action.type) {
        case 'FILTER_VOCABULARY':
            var newVocabulary = [...state.vocabulary, ...action.payload];
            return {
                ...state,
                vocabulary: newVocabulary
            };
        case 'ADD_TO_STUDY_WORDS':
            var newWordsToLearn = [...state.wordsToLearn, ...action.payload];
            return {
                wordsToLearn: newWordsToLearn
            };
        case 'SHOW_CARDS':
            return {
              ...state,
              isShowingCards: !state.isShowingCards
            };
        case 'SAVE_IN_LOCAL_STORAGE':
            return {
                ...state,
                dataLocalStorage: [...state.wordsToLearn, ...action.payload]
            };
        default:
            return state;
    }
};

export default reducer;