import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchFriends, createFriend} from '../../actions';
import Friend from '../Friend/friend';
import Loader from 'react-loader-spinner';
import CreateFriendModal from '../CreateFriendModal/CreateFriendModal';
import { Button } from 'reactstrap';

const FriendsList = (props) =>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    console.log('FriendList.js Props:', props)
    useEffect(()=> {
        props.fetchFriends();
    },[])

    if(props.friends && props.friends.length !== 0){
        return(
        <div>
            <div className='Title'>
                <img width='500px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1280px-Friends_logo.svg.png'/>
            </div>
            <div>
            < CreateFriendModal createFriend={props.createFriend} />
            </div>
            <div className='FriendBox'>
                {props.friends.map(friend => {
                    return (
                        <Friend key={friend.name} friend={friend}/>
                    )
                })}
            </div>
        </div>
    )
    }else{
        return(
            <div className='Loading'>
            <p>Loading...</p>
            <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            />
            </div>
            
        )
    }
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
    {fetchFriends, createFriend}
)(FriendsList);