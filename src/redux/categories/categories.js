const STATUS_CHECKED = 'STATUS_CHECKED';


export default categories_reducer = (state = [], action) => {
    switch(action.type){
        case STATUS_CHECKED:
            return 'Under construction';
        default: return state;
    }
}

export const statusChecked = () => {
    return {
        type: STATUS_CHECKED,
    }
}