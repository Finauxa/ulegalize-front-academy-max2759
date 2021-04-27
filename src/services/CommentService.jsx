import axios from 'axios';

const COMMENT_API_URL = 'http://localhost:8080/v1/comments';


export async function getComments(){

    try{
        return await axios.get(COMMENT_API_URL)
        .catch(() => {
            return {data : []};
        });
    } catch ( e ){
        return { error: true, data: []};
    }
}

export async function createComment(comments){

    try {
        return axios.post(COMMENT_API_URL, comments)
        .catch(() => {
            return {error: true}
        });
    } catch ( e ){
        return {error: true};
    }
}
