import React from 'react';

import './scss/styles.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/layout'
import ItemResults from './components/views/ItemResults';
import ItemDetails from './components/views/ItemDetails'

import * as paths_routes from './constants/router/paths'

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={ paths_routes.HOME } element={<Layout />}>
            <Route index element={<ItemResults />}></Route>
            <Route path={ paths_routes.ITEM_RESULTS } element={<ItemResults />}></Route>
            <Route path={ paths_routes.ITEM_DETAILS } element={<ItemDetails />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App
