import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import { InventoryStore as inventoryStore } from './stores/InventoryStore'

const InventoryStore = new inventoryStore()
InventoryStore.addItem("apple", 10, 10)
InventoryStore.addItem("orange", 7, 5)
const stores = {InventoryStore}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
