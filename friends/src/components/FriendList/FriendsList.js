import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchFriends} from '../../actions';
import Friend from '../Friend/friend';
import Loader from 'react-loader-spinner';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            <Button color="danger" onClick={toggle}>{props.buttonLabel}Add New Friend</Button>
            <Modal isOpen={modal} toggle={toggle} className={props.className}>
            <ModalHeader toggle={toggle}>Add New Friend</ModalHeader>
            <ModalBody>
            <form>
                <label for="exampleEmail">Email</label>
                <input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
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
    {fetchFriends}
)(FriendsList);