import React from 'react'
import Fluxxor from 'fluxxor'
import ReactMixin from 'react-mixin'

var FluxMixin = Fluxxor.FluxMixin(React);

export default React.createClass ({
  mixins: [FluxMixin],
  onClickPlus() {
    return this.getFlux().actions.plusCounter();
  },

  onClickMinus() {
    return this.getFlux().actions.minusCounter();
  },

  render() {
    return (
      <div>
        <span>Count: {this.props.value}</span>

        <div>
          <button onClick={this.onClickPlus}>+1</button>
          <button onClick={this.onClickMinus}>-1</button>
        </div>
      </div>
    );
  }
});