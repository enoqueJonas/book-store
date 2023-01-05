const BOOK_REMOVED = 'BOOK_REMOVED';
const BOOK_ADDED = 'BOOK_ADDED';

export default book_reducer = (state = [], action) => {
    switch(action.type){

        default: return state;
    }
}

export const book_removed = () => {
    return{
        type: BOOK_REMOVED
    }
}

export const book_added = () => {
    return {
        type: BOOK_ADDED
    }
}