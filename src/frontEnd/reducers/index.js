/* eslint-disable consistent-return */
// combine all reducers
// import components
/**
 * title: index.js
 *
 * date: 12/23/2019
 *
 * author: javier olaya
 *
 * description: this action file exports all the action and thunk functions
 */

const errorMessage = (msg, error) => {
  console.log(msg, error);
};

export const getWheatherAppData = () => {
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  return fetch('https://localhost:3000/all', options);
};

export const getSWheatherAppData = () => {
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  return fetch('https://localhost:3000/all', options);
};

export const getTodayWheatherData = passingData => ({
  type: 'GET_WHEATHER_DATA',
  passingData
});

export const getSevenDayWheatherData = passingData => ({
  type: 'GET_WHEATHER_DATA',
  passingData
});

export function getTodayWheatherAppData() {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    return getWheatherAppData()
      .then(
        response => {
          const json = response.json();
          return json;
        },
        error =>
          dispatch(
            errorMessage(
              'error from the getAllWheatherAppData function, check if the server is working',
              error
            )
          )
      )
      .then(
        json => {
          if (json.type === 'ERROR_MESSAGE') return;
          return dispatch(getTodayWheatherData(json));
        },
        error =>
          errorMessage(
            'error from the getWheatherAppData get json action',
            error
          )
      );
  };
}

export function getSevenWheatherAppData() {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    return getSWheatherAppData()
      .then(
        response => {
          const json = response.json();
          return json;
        },
        error =>
          dispatch(
            errorMessage(
              'error from the getAllWheatherAppData function, check if the server is working',
              error
            )
          )
      )
      .then(
        json => {
          if (json.type === 'ERROR_MESSAGE') return;
          return dispatch(getSevenDayWheatherData(json));
        },
        error =>
          errorMessage(
            'error from the getWheatherAppData get json action',
            error
          )
      );
  };
}

export const getGoogleMapData = () => {
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  return fetch('https://localhost:3000/all', options);
};

export const getMapData = passingData => ({
  type: 'GET_MAP_DATA',
  passingData
});

/*  export function getAllMapAppData() {
    return function(dispatch) {
      return getGoogleMapData()
        .then(
          response => {
            let json = response.json();
            return json;
          },
          error =>
            dispatch(
              errorMessage(
                'error from the getGoogleMapData function, check if the server is working',
                error
              )
            )
        )
        .then(json => {
            if(json.type === "ERROR_MESSAGE") return;
            return dispatch(getMapData(json));
        }, (error) =>errorMessage("error from the getGoogleMapData get action", error));
    };
  } */
