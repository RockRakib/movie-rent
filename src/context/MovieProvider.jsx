/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from ".";
import { CartReducer, initialState } from "../reducers/CartReducers";

export function MovieProvider({ children }) {
  //   const [addToCart, setAddToCart] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        {children}
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MovieProvider;
