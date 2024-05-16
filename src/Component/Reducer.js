// import {CREATE_USER,UPDATE_USER,DELETE_USER,FETCH_USER,TABLE_USER} from "./Type";
// const initialState={
//     cruds:[],
//     crud:null,
// }
// const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_USER:
//       return {
//         ...state,
//         todos: [...state.cruds, action.payload],
//       };
//     case UPDATE_USER:
//       return {
//         ...state,
//         cruds: state.cruds.map((crud) => (crud.id === action.payload.id ? action.payload : crud)),
//       };
//     case DELETE_USER:
//       return {
//         ...state,
//         cruds: state.cruds.filter((crud) => crud.id !== action.payload),
//       };
//     case FETCH_USER:
//       return {
//         ...state,
//         cruds: action.payload,
//       };
//     case TABLE_USER:
//       return {
//         ...state,
//         crud: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default Reducer;



import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODOS, FETCH_TODO } from './Type';

const initialState = {
  todos: [],
  todo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case FETCH_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;