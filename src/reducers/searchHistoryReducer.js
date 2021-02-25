export const searchHistoryReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_History":
      return [
        ...state,
        {
          madde: action.searchHistory.madde,
        },
      ];

    default:
      return state;
  }
};
