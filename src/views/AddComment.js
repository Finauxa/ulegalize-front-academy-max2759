import React, {useState} from 'react'
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

const AddComment= ({addNewComment}) => {


    const [addComment, setAddComment] = useState('')

    const [addEmail, setAddEmail] = useState('')

    const [addGender,setAddGender] = useState('')

    


    const handleForm = (e) => {
        e.preventDefault();
        addNewComment(addEmail, addComment,addGender);
        setAddComment('');
        setAddEmail('');
        setAddGender('');
    }

    return (

        <Form onSubmit={handleForm} className="m-5"> 
            <Card>
                <CardBody>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" value={addEmail} onChange={(e)=>{setAddEmail(e.target.value)}} placeholder="Votre email ici" />      
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label >Gender</Label>
                        <Input type="select" value={addGender} onChange={(e =>{setAddGender(e.target.value)})}>
                            <option value="">--Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label>Comments</Label>
                        <Input type="textarea" value={addComment} onChange={(e)=> {setAddComment(e.target.value)}}/>
                    </FormGroup>

                    <Button color="primary">Submit</Button>
                </CardBody>
            </Card>
        </Form>
    )
}

export default AddComment