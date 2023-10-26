import {createStore} from 'redux'

const store=createStore(reducer)

function reducer(state={amount:1},action){

if(action.type==="increment")
return {amount:state.amount+1}

}

store.dispatch({type:'increment'})

console.log(store.getState())





const store2=createStore(reducer1)

function reducer1(state={amount:21},action){
  if(action.type==="decrement")
  return {amount:state.amount-1}

}

store2.dispatch({type:"decrement"})

console.log(store2.getState())






