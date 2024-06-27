import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO, EDIT_TODO } from "./action";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * 10000),
            task: action.payload,
            isCompleted: false,
            isEditing: false,
          },
        ],
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO: {
      const { id, newTask } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id
            ? { ...todo, task: newTask, isEditing: !todo.isEditing }
            : todo
        ),
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
