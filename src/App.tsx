import React from "react";
import { Provider } from "react-redux";
import { DogBreed } from "./component";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <DogBreed />
    </Provider>
  );
}

export default App;
