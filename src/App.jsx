import { MovieProvider } from "./context/MovieProvider";

import Page from "./Page";

function App() {
  return (
    <MovieProvider>
      <Page />
    </MovieProvider>
  );
}

export default App;
