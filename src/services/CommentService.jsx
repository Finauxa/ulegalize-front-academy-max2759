import axios from 'axios';

const COMMENT_API_URL = 'http://localhost:8080';


export async function getComments(){

    try{
        return await axios.get(COMMENT_API_URL + "/v1/comments")
        .catch(() => {
            return {data : []};
        });
    } catch ( e ){
        return { error: true, data: []};
    }
}