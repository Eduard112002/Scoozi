import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Header from "./components/header";

const App = () => {
  return <>
     <Header />
  </>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);


