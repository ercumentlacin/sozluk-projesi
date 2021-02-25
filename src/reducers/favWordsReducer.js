export const favWordsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [
        ...state,
        {
          madde: action.favWords.madde,
        },
      ];
    case "REMOVE_FAV":
      return state.filter(({ madde }) => madde !== action.favWords.madde);

    default:
      return state;
  }
};
