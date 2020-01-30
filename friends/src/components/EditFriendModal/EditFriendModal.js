import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label } from 'reactstrap';

const CreateFriendModal = ({ buttonLabel, className, editAFriend, friend, props}) =>{
    const [editFriend, setEditFriend] = useState(friend)
    console.log('Edited Friend in EditFriendModal.js:', editFriend);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    //handleSubmit
    const handleSubmit = e => {
        toggle()
        const body = document.querySelector('body');
        body.classList.remove('modal-open');
        console.log('selected', body)
        console.log('submitting friend..', editFriend)
        e.preventDefault();
        setEditFriend({
            ...editFriend,
        })
        editAFriend(editFriend);
    }
    //handleCHanges
    const handleChanges = e => {
        e.preventDefault();
        setEditFriend({
          ...editFriend,
          [e.target.name]: e.target.value,
        });
        console.log(`${e.target.name} is:`, e.target.value);
      };
    return(
        <>
<Button color='info' onClick={toggle}>{buttonLabel}Edit</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit {editFriend.name}</ModalHeader>
        <ModalBody>
        <Form>
            <Label for="name">Name</Label>
            <Input 
                type="text"
                name="name"  
                id="name" 
                placeholder="Enter A Name"
                onChange={handleChanges} 
                value={editFriend.name}
                />
            <Label for="age">Age</Label>
            <Input 
                type="text" 
                name="age"
                id="age" 
                placeholder="Enter an Age"
                onChange={handleChanges}
                value={editFriend.age} 
                />
            <Label for="email">Email</Label>
            <Input 
                type="text"
                name="email" 
                email="email" 
                id="email" 
                placeholder="Enter an Email"
                onChange={handleChanges}
                value={editFriend.email} 
                />
            <Label for="img_url">Img Url:</Label>
            <Input 
                type="text"
                name="img_url"  
                id="img_url" 
                placeholder="Enter an img URL"
                onChange={handleChanges}
                value={editFriend.img_url} 
                />
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="info" onClick={handleSubmit}>Edit Friend</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
        </>
    )
}

export default CreateFriendModal;
