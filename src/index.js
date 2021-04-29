import React from 'react';
import ReactDOM from 'react-dom';
import makeInspectable from "mobx-devtools-mst"

import store from "./TodoStore";
import './index.css';
import TodoList from './TodoList';

makeInspectable(store);
ReactDOM.render(<TodoList store={store}/>, document.getElementById('root'));
