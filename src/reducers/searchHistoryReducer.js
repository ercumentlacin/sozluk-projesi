export const searchHistoryReducer = (state, action) => {
  switch (action.type) {
    case "ADD_History":
      return [
        ...state,
        {
          madde: action.searchHistory.madde,
        },
      ];

    case "RESET_History":
      return [];

    default:
      return state;
  }
};
