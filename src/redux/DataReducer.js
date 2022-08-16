const initialState = [
  // {
  //   id: "",
  //   company: "",
  //   domains: "",
  // },
];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Domains":
      state = [...state, action.payload];
      return state;
    case "Delete_Domain":
      state = state.filter((item) => item.uniqueId !== action.payload);
      return state;
    default:
      return state;
  }
};
export default dataReducer;
