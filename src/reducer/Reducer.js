const reducer = (
    state , action) => {
        console.log('в reducer такой state и такой action', state, action)
    switch (action.type) {
        case 'FILTER_VOCABULARY':
            var newVocabulary = [...state.vocabulary];
            console.log('%cFILTER_VOCABULARY', 'background: pink; color: white; display: block;', newVocabulary, action.payload)
            return {
                ...state,
                vocabulary: newVocabulary
            };
        case 'ADD_TO_STUDY_WORDS':
            var newWordsToLearn = [...state.wordsToLearn, ...action.payload];
            console.log('%cADD_TO_STUDY_WORDS', 'background: blue; color: white; display: block;', newWordsToLearn, action.payload)
            return {
                ...state,
                wordsToLearn: newWordsToLearn
            };
        case 'SHOW_CARDS':
                console.log('%cSHOW_CARDS', 'background: red; color: white; display: block;')
            return {
              ...state,
              isShowingCards: !state.isShowingCards
            };
        case 'SAVE_IN_LOCAL_STORAGE':
            var newDataLocalStorage = [...state.favorites, ...action.payload];
            console.log('%cSAVE_IN_LOCAL_STORAGE', 'background: green; color: white; display: block;', newDataLocalStorage, action.payload)
            return {
                ...state,
                favorites: newDataLocalStorage,
            };
        default:
            return state;
    }
};

export default reducer;