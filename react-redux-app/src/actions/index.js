import axios from 'axios';


export const FETCH_EPISODES = 'FETCH_EPISODES';
export const UPDATE_EPISODES = ' UPDATE_EPISODES';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_EPISODES });
  axios.get('https://api.jikan.moe/v3/anime/30/episodes')
        .then( res => {
          console.log(res.data);
          dispatch({ type: UPDATE_EPISODES, payload: res.data.episodes });
        })
        .catch( err => {
          console.error('error fetching data . . . err: ', err);
          dispatch({ type: SET_ERROR, payload: 'NOOOOOOO' });
        });
}
