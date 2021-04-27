import React, {useState, useEffect} from 'react'
import AddComment from './AddComment'
import CommentDTO from '../model/CommentDTO';
import { v4 as uuidv4 } from 'uuid';
import { getComments } from '../../src/services/CommentService'
import { Alert, Card } from 'reactstrap';

import { map } from 'lodash';


const CommentPage = () => {


    const [comments, setComments] = useState( []);

    const [warning, setWarning] = useState(false)


    useEffect(() => {
        (async () => {

            let commentsResult = await getComments();

            let commentsArray = map(commentsResult.data, (comments) => {
                return new CommentDTO(comments);
            });

            if ( commentsArray.length > 0 ){
                setComments(commentsArray);
            }

        })();
    })

    const addNewComment = (newEmail, newComment, newGender) => {
        if(newComment !== '' && newEmail !=='' && newGender !==''){
            warning && setWarning(false);

            setComments([...comments, {
                id: uuidv4(),
                email: newEmail,
                gender: newGender,
                comment: newComment
            }])
        }else{
            setWarning(true)
        }
    }

    const warningMsg = warning && <Alert color="danger" className="m-3">Veuillez compléter les champs</Alert>


    return(
        <div>
            {warningMsg}

            <AddComment addNewComment = {addNewComment}></AddComment>

            {comments.map( (comment, index) => (
            <Card className="card mt-2 mb-2 p-2" key={index}>
              <div>
                  <p>{comment.id}</p>
                  <p>{comment.gender}</p>
              </div>
                <hr/>
              <div>
                <p>{comment.comment}</p>
              </div>
            </Card>
            ))}
        </div>
    )
}

export default CommentPage
