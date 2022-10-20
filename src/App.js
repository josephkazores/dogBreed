import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import { DogBreed } from './component';

import store from "./store"
import { dogBreedApi } from './api/api';

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={dogBreedApi}>
        <DogBreed />
      </ApiProvider>
    </Provider>
  );
}

export default App;
