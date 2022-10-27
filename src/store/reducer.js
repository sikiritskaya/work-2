
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDED_TRANSLATE':
            const newWord = action.payload;
            const newItem = {
                num: 0,
                languageFrom: newWord.languageFrom,
                languageTo: newWord.languageTo,
                from: newWord.from,
                to: newWord.word
            }
            return {
                ...state, ...newItem
            }
        default:
            return state
    }
}

export default reducer;