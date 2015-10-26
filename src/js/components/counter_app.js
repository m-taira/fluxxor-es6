import React from 'react'
import Fluxxor from 'fluxxor'

import Counter from './counter'

export default React.createClass({
  mixins: [Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin('CounterStore')],

  getStateFromFlux(){
    return this.getFlux().store('CounterStore').getState();
  },

  render() {
    return <Counter value={this.state.counter} />
  }
});

