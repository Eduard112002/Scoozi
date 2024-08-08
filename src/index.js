import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Header from "./components/header";
import {Provider} from "react-redux";
import store from "./store";

const App = () => {
  return <Provider store={store}>
     <Header />
  </Provider>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);


