import actions from './constants'

export default {
  plusCounter(){
    this.dispatch(actions.UPDATE_COUNTER, {value: 1});
  },

  minusCounter(){
    this.dispatch(actions.UPDATE_COUNTER, {value: -1});
  },
}