import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {connect} from 'react-redux';
const Friend = (props) => {
    return(
        <Card className='friend'>
        <CardBody>
        <CardTitle>{props.friend.name}</CardTitle>
        <CardSubtitle><b>Age</b>: {props.friend.age}</CardSubtitle>
        <CardText><b>Email:</b> {props.friend.email}</CardText>
        <Button classname='button'>Edit</Button><Button classname='button delete'>Delete</Button>
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
    mapStateToProps
)(Friend);