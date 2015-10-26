import React from 'react'
import ReactDOM from 'react-dom'
import Fluxxor from 'fluxxor'

import actions from './actions/counter'
import CounterStore from './stores/counter'

import CounterApp from './components/counter_app'

var stores = {CounterStore: new CounterStore()};

var flux = new Fluxxor.Flux(stores, actions);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<CounterApp flux={flux} />, document.getElementById('container'));
});



