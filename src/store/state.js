const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: {},
  currentbookList: [],
};

export default initialState;
