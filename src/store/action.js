const getWord = (result, text, option, option2) => ({
    type: 'ADDED_TRANSLATE',
    payload: {
        languageFrom: option,
        languageTo: option2,
        from: text,
        to: result
    }
});

export default getWord