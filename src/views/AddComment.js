import React, {useState} from 'react'
import {createComment} from '../services/CommentService';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import CommentDTO from '../model/CommentDTO';

const AddComment= () => {


    const [comment, setComment] = useState( new CommentDTO());


    const saveComment = async () =>{

        let result = await createComment(comment);

        if(!result.error){
            setComment(result.data);
        }

    }

    return (

        <Form onSubmit={saveComment} className="m-5">
            <Card>
                <CardBody>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" value={comment.email} onChange={ e => setComment({ ...comment, email: e.target.value } )} placeholder="Votre email ici" />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label >Gender</Label>
                        <Input type="select" value={comment.gender} onChange={e => setComment({ ...comment, gender: e.target.value } )}>
                            <option value="">--Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label>Comments</Label>
                        <Input type="textarea" value={comment.comment} onChange={e => setComment({ ...comment, comment: e.target.value } )}/>
                    </FormGroup>

                    <Button color="primary">Submit</Button>
                </CardBody>
            </Card>
        </Form>
    )
}

export default AddComment