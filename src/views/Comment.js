import React, {useState, useEffect} from 'react'
import AddComment from './AddComment'
import CommentDTO from '../model/CommentDTO';
import { v4 as uuidv4 } from 'uuid';
import { getComments } from '../../src/services/CommentService'
import { Alert, Card } from 'reactstrap';

import { map } from 'lodash';


const CommentPage = () => {


    const [comments, setComments] = useState( []);


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



    return(
        <div>

            <AddComment></AddComment>

            {comments.map( (comment, index) => (
            <Card className="card mt-2 mb-2 p-2" key={index}>
              <div>
                  <p>{comment.email}</p>
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
