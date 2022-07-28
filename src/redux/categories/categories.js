const CHECKED_STATUS = 'CHECKED_STATUS';

const categorieReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under construction';

    default: return state;
  }
};

export const checkingStatus = () => ({
  type: CHECKED_STATUS,
});

export default categorieReducer;
