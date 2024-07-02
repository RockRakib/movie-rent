import { useContext } from "react";
import { MovieContext, ThemeContext } from ".";

export function useMovies() {
  return useContext(MovieContext);
}

export function useTheme() {
  return useContext(ThemeContext);
}
