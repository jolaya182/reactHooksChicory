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


const addNewRetailer =(list, retailer)=>{
  const newList = list.map((retail)=>retail);
  newList.push(retailer);
  return newList;
}

  const dataReducer = (state, action)=>{
    switch(action.type){
      case 'HYDRATE_RETAILERS':
        return action.retailers
      default: return state.retailers
    }
  }

  const retailerReducer = (state, action)=>{
    switch(action.type){
      case 'GET_CURRENT_STORE':
        return state.selectedRetailer;
      case 'UPDATE_CURRENT_STORE':
        return  action.selectedRetailer;
      default:
        return state.selectedRetailer
    }
  }

  const zipCodeReducer = (state, action )=>{
    switch(action.type){
      case "UPDATE_CURRENTZIPCODE" :
        return action.currentZipCode; 
      default:
      return state.currentZipCode; 
    }
  }

  const isBlackListOnReducer = (state, action)=>{
    switch(action.type){
      case "TOGGLE_BLACKLIST":
        return action.isOn;
      default:
        return state.isBlackListOn;}
  }

  const isWhiteListOnReducer = (state, action)=>{
    switch(action.type){
      case "TOGGLE_WHITELIST":
        return action.isOn;
      default:
        return state.isWhiteListOn;}
  }

  const blackListReducer = (state, action)=>{
    switch(action.type){
      case "GET_BLACKLIST":
        return state.blackList;
      case "UPDATE_BLACKLIST":
      return addNewRetailer(state.blackList, action.retailer);
      default:
        return state.blackList;}
  }

  const whiteListReducer = (state, action)=>{
    switch(action.type){
      case "GET_WHITELIST":
        return state.whiteList;
        case "UPDATE_WHITELIST":
      return   addNewRetailer(state.whiteList, action.retailer);
      default:
        return state.whiteList;}
  }

  const resetApplication = (state, action)=>{
    switch(action.type){
      case "REINITIALIZE":
        return action.initialState;
      default:
        return state
      }
  }

const appReducers = (state, action)=>{
  if(action.type === "REINITIALIZE"){ 
    return resetApplication(state, action);
  }
  return {
    retailers : dataReducer(state, action),
    selectedRetailer : retailerReducer(state, action),
    currentZipCode : zipCodeReducer(state, action),
    isBlackListOn : isBlackListOnReducer(state, action),
    isWhiteListOn : isWhiteListOnReducer(state, action),
    blackList : blackListReducer(state, action),
    whiteList: whiteListReducer(state, action)  
  }
}

export default appReducers;