// import { JSON_RESPONSE_ERROR } from "../constants/errorConstants";


export default function ajax(url, reqObject) {
  const defaults = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const req = {
    ...defaults,
    ...reqObject
  }

  return fetch(url, req)
  .then((res) => {
    if(res.ok) {
      if(res.headers.get('content-type') === 'application/json') {
        return res.json();
      }
      return Promise.reject(res);
    }
    else {
      if(res.headers.get('content-type') === 'application/json') {
        return res.json().then((errRes) => {
          return Promise.reject({
            json: errRes,
            statusCode: res.status
          });
        });
      }

      return Promise.reject({
        statusCode: res.status
      });
    }

  }, (err) => {
    // console.log(err.message); 
    return Promise.reject(err);
  });
  
}