function reducer(state, action) {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        value: action.value,
      };

    case "SET_DATA":
      return {
        ...state,
        data: [...state.data, { id: state.data.length, name: state.value }],
      };

    default:
      break;
  }
}

export default reducer;
