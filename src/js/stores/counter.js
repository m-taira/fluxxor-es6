import Fluxxor from 'fluxxor';
import actions from '../actions/constants'

export default Fluxxor.createStore({
  initialize() {
    this.counter = 0;

    this.bindActions(
      actions.UPDATE_COUNTER, this.onUpdateCounter
    );
  },

  onUpdateCounter(payload) {
    this.counter = this.counter + payload.value;
    this.emit('change');
  },

  getState(){
    return {counter: this.counter};
  }
})

