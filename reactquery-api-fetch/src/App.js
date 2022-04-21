/* 

React-Query Tutorial

Src: https://www.youtube.com/watch?v=NQULKpW6hK4&t=223s
Github: https://github.com/harblaith7/React-Query/blob/main/src/

*/

import React from "react";
//import Game from "./Components/Game/Game";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
