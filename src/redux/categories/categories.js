const STATUS_CHECKED = 'book-store/src/redux/categories/STATUS_CHECKED';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'Under construction';
    default: return state;
  }
};

export const statusChecked = () => ({
  type: STATUS_CHECKED,
});

export default categoriesReducer;