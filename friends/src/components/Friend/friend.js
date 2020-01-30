import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {connect} from 'react-redux';
import {editAFriend, deleteFriend} from '../../actions'
import EditFriendModal from '../EditFriendModal/EditFriendModal'
const Friend = (props) => {
    const handleDelete = e => {
        e.preventDefault();
        console.log('deleting friend..', props.friend.name)
        props.deleteFriend(props.friend.id)
    }
    return(
        <Card className='friend'>
        <CardBody>
        <CardImg top width="100%" src={props.friend.img_url} alt={props.friend.name} />
        <CardTitle><b>{props.friend.name}</b></CardTitle>
        <CardSubtitle><b>Age</b>: {props.friend.age}</CardSubtitle>
        <CardText><b>Email:</b> {props.friend.email}</CardText>
        <EditFriendModal friend={props.friend} editAFriend ={props.editAFriend} props={props}/><Button color='danger' onClick={(e) => handleDelete(e)} className='delete'>Delete</Button>
        </CardBody>
      </Card>
        
    )
}

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
    {deleteFriend, editAFriend}
)(Friend);