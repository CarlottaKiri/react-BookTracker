import { actions } from "./actions";

const mainReducer = (state, action) => {
  let currentUser = [];
  let users = {};
  switch (action.type) {
    case actions.ADD_TODO_TO_LIST:
      currentUser = state.user;

      if (
        currentUser &&
        !currentUser.bookList.find((book) => book.id === action.payload.id)
      ) {
        currentUser.bookList.push(action.payload);
        return {
          ...state,
          user: currentUser,
        };
      } else {
        return {
          ...state,
        };
      }
    case actions.SET_TODO_ITEM_DONE:
      return {
        ...state,
        bookList: state.bookList.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                status: !item.status,
              }
            : item
        ),
      };
    case actions.REMOVE_TODO_FROM_LIST:
      return {
        ...state,
        bookList: state.bookList.filter((item) => item.id !== action.payload),
      };
    case actions.ON_SEARCH_BOOK:
      return {
        ...state,
        bookList: state.initialBookList.filter((item) =>
          item.content.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case actions.SET_USERNAME:
      users = state.users;

      currentUser = users.find((user) => user.username === action.payload);

      if (!currentUser) {
        currentUser = { username: action.payload, bookList: [] };
        users.push(currentUser);
        localStorage.setItem("users", JSON.stringify(users));
      }
      return {
        ...state,
        user: currentUser,
      };

    case actions.REMOVE_USERNAME:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default mainReducer;
