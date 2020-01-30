import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label } from 'reactstrap';

const CreateFriendModal = ({ buttonLabel, className, createFriend}) =>{
    const [friend, setFriend] = useState({
        id: '',
        name: '',
        age:  '',
        email: '',
        img_url: '',
    })
    console.log(friend);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    //handleSubmit
    const handleSubmit = e => {
        console.log('submitting friend..', friend)
        e.preventDefault();
        setFriend({
            ...friend,
            id: Date.now()
        })
        createFriend(friend);
        toggle();
    }
    //handleCHanges
    const handleChanges = e => {
        e.preventDefault();
        setFriend({
          ...friend,
          [e.target.name]: e.target.value,
        });
        console.log(`${e.target.name} is:`, e.target.value);
      };
    return(
        <>
        <Button color="danger" onClick={toggle}>{buttonLabel}Add New Friend</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Friend</ModalHeader>
        <ModalBody>
        <Form>
            <Label for="name">Name</Label>
            <Input 
                type="text"
                name="name"  
                id="name" 
                placeholder="Enter A Friend"
                onChange={handleChanges} 
                value={friend.name}
                />
            <Label for="age">Age</Label>
            <Input 
                type="text" 
                name="age"
                id="age" 
                placeholder="Enter an age"
                onChange={handleChanges}
                value={friend.age} 
                />
            <Label for="email">Email</Label>
            <Input 
                type="text"
                name="email" 
                email="email" 
                id="email" 
                placeholder="Enter an email"
                onChange={handleChanges}
                value={friend.email} 
                />
            <Label for="img_url">Img Url:</Label>
            <Input 
                type="text"
                name="img_url"  
                id="img_url" 
                placeholder="Enter an img URL"
                onChange={handleChanges}
                value={friend.img_url} 
                />
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="info" onClick={handleSubmit}>Add Friend</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
        </>
    )
}

export default CreateFriendModal;
