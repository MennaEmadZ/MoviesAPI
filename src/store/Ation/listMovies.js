

import { axiosInstance } from "../../network"

export const getMovies = (lang)=> (dispatch)=>{
  return axiosInstance
  .get("movie/popular?api_key=4c03591ec60bf980ec7a1be78c875fa5"+lang)
  .then((res) => dispatch({
    type: 'SET_MOVIES',
    payload: res.data.results}))
  .catch((err) => console.log(err));
}