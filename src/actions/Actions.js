export const filterVocabulary = (payload) => {
    return {type: 'FILTER_VOCABULARY', payload};
};

export const addToStudyWords = (payload) => {
    return {type: 'ADD_TO_STUDY_WORDS', payload};
};


export  const showingCards = (payload) => {
    return {type: 'SHOW_CARDS', payload}
};

export  const saveInLocalStorage = (payload) => {
    return {type: 'SAVE_IN_LOCAL_STORAGE', payload}
};