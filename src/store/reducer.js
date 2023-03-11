import { actions } from "./actions";

const mainReducer = (state, action) => {
  let users = state.users || [];
  let currentUser = state.currentUser || {};
  let currentbookList = state.currentbookList || [];
  switch (action.type) {
    case actions.ADD_TODO_TO_LIST:
      if (
        currentUser &&
        !currentUser.bookList.find((book) => book.id === action.payload.id)
      ) {
        currentUser.bookList.push(action.payload);
        updateLocalStorage(currentUser);
      }
      return {
        ...state,
        currentUser: currentUser,
        currentbookList: currentUser.bookList,
      };

    case actions.SET_TODO_ITEM_DONE:
      currentbookList = currentbookList.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              status: !item.status,
            }
          : item
      );

      currentUser.bookList = currentUser.bookList.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              status: !item.status,
            }
          : item
      );

      updateLocalStorage(currentUser);
      return {
        ...state,
        currentUser: currentUser,
        currentbookList: currentbookList,
      };

    case actions.REMOVE_TODO_FROM_LIST:
      if (currentUser) {
        currentbookList = currentbookList.filter(
          (book) => book.id !== action.payload
        );
        currentUser.bookList = currentUser.bookList.filter(
          (book) => book.id !== action.payload
        );
        updateLocalStorage(currentUser);
      }
      return {
        ...state,
        currentUser: currentUser,
        currentbookList: currentbookList,
      };

    case actions.ON_SEARCH_BOOK:
      return {
        ...state,
        currentbookList: state.currentUser.bookList.filter((item) =>
          item.content.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case actions.SET_USERNAME:
      currentUser = users.find((user) => user.username === action.payload);

      if (!currentUser) {
        currentUser = { username: action.payload, bookList: [] };
        users.push(currentUser);
        updateLocalStorage(currentUser);
      }
      return {
        ...state,
        currentUser: currentUser,
        currentbookList: currentUser.bookList,
      };

    case actions.REMOVE_USERNAME:
      return {
        ...state,
        currentUser: {},
      };

    default:
      return state;
  }
};

const updateLocalStorage = (currentUser) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let index = users.findIndex((user) => user.id === currentUser.id);
  if (index === -1) {
    users.push(currentUser);
  } else {
    users[index] = currentUser;
  }
  localStorage.setItem("users", JSON.stringify(users));
};

export default mainReducer;
