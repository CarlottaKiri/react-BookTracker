const initialState = {
  // bookList: [
  //   {
  //     id: 1,
  //     content: "Pride & Prejudice",
  //     status: false,
  //   },
  //   {
  //     id: 2,
  //     content: "Harry Potter",
  //     status: false,
  //   },
  //   {
  //     id: 3,
  //     content: "The Witcher",
  //     status: false,
  //   },
  // ],
  // initialBookList: [
  //   {
  //     id: 1,
  //     content: "Pride & Prejudice",
  //     status: false,
  //   },
  //   {
  //     id: 2,
  //     content: "Harry Potter",
  //     status: false,
  //   },
  //   {
  //     id: 3,
  //     content: "The Witcher",
  //     status: false,
  //   },
  // ],
  bookList: JSON.parse(localStorage.getItem("book-list")) || [],
  initialBookList: JSON.parse(localStorage.getItem("initial-book-list")) || [],
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: {},
};

export default initialState;
