const initialState = {
    words: [],
  };
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDED_TRANSLATE':
            const newWord = action.payload;
            const newItem = {
                languageFrom: newWord.languageFrom,
                languageTo: newWord.languageTo,
                from: newWord.from,
                to: newWord.word
            }
            console.log(newItem)
            return {
                ...state,     
                words:[ ...state.words, newItem]
            }
        default:
            return state
    }
}

export default reducer;