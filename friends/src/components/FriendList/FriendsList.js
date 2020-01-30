import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchFriends} from '../../actions';
import Friend from '../Friend/friend';
import Nav from '../Navbars/navbar'

const FriendsList = (props) =>{
    console.log('FriendList.js Props:', props)
    useEffect(()=> {
        props.fetchFriends();
    },[])
    return(
        <div>
            <Nav/>
            <div className='FriendBox'>
                {props.friends ? props.friends.map(friend => {
                    return (
                        <Friend friend={friend}/>
                    )
                }) : <div>Loading Friends...</div>}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        title: state.title,
        isLoading: state.isLoading,
        isLogged: state.isLogged,
        token: state.token,
        friends: state.friends,
        error: state.error
    }
}
export default connect(
    mapStateToProps,
    {fetchFriends}
)(FriendsList);