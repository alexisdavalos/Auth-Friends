import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchFriends} from '../../actions';

import Nav from '../Navbars/navbar'

const FriendsList = (props) =>{
  
    useEffect(()=> {
        props.fetchFriends();
    }, [])
    // props.fetchFriends();
    console.log('FriendList.js Props:', props)
    return(
        <div>
            <Nav/>
            <p>{props.title}</p>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        title: state.title,
        isLoading: state.isLoading,
        friends: state.friends,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    {fetchFriends}
)(FriendsList);