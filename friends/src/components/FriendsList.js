import React from 'react'
import {connect} from 'react-redux';

const FriendList = (props) =>{
    console.log('FriendList.js Props:', props)
    return(
        <div>
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
    {}
)(FriendList);