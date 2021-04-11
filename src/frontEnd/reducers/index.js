/* eslint-disable consistent-return */
// combine all reducers
// import components
/**
 * title: index.js
 *
 * date: 4/10/2021
 *
 * author: javier olaya
 *
 * description: this files combines the reducers
 */

  const dataReducer = (state, action)=>{

    switch(action.type){
      case 'HYDRATE_RETAILERS':
        return action.retailers
      default: return state.retailers
    }
  }

  const storeReducer = (state, action)=>{
    switch(action.type){
      case 'GET_CURRENT_STORE':
        return state.selectedStore;
      case 'UPDATE_CURRENT_STORE':
        return  action.store;
      default:
        return state.store
    }
  }

const appReducers = (state, action)=>{
  return {
    retailers : dataReducer(state, action),
    selectedStore : storeReducer(state, action)
  }
}

export default appReducers;