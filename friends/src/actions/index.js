import axios from 'axios';

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const CREATE_FRIEND_START = "CREATE_FRIEND_START";
export const CREATE_FRIEND_SUCCESS = "CREATE_FRIEND_SUCCESS";
export const CREATE_FRIEND_FAILURE = "CREATE_FRIEND_FAILURE";
export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";


export const fetchFriends = () => dispatch => {
	dispatch({ type: FETCH_FRIENDS_START });
	axios.get('http://localhost:3333/FRIENDs')
		.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
		.catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
};

export const createFriend = (FRIEND) => dispatch => {
    dispatch({ type: CREATE_FRIEND_START });
    axios.post(`http://localhost:3333/FRIENDs`, FRIEND)
    .then(res => dispatch({ type: CREATE_FRIEND_SUCCESS, payload: res.data })) 
    .catch(err => dispatch({ type: CREATE_FRIEND_FAILURE, payload: err }));
  };

  export const deleteFriend = (id) => dispatch => {
    dispatch({ type: CREATE_FRIEND_START });
    axios.delete(`http://localhost:3333/FRIENDs/${id}`)
    .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
  };
