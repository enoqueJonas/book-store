const BOOK_REMOVED = 'BOOK_REMOVED';
const BOOK_ADDED = 'BOOK_ADDED';

const book_reducer = (state = [], action) => {
    switch(action.type){
        case BOOK_REMOVED:
            return state.splice(action.payload, 1);
        case BOOK_ADDED:
            return state.push(action.payload);
        default: return state;
    }
}

export const book_removed = (bookID) => {
    return{
        type: BOOK_REMOVED,
        payload: bookID,
    }
}

export const book_added = (book = {}) => {
    return {
        type: BOOK_ADDED,
        payload: book,
    }
}

export default book_reducer;