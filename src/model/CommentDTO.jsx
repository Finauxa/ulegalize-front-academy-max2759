export default class CommentDTO {

 id;
 email;
 comment;
 gender;

    constructor( data ){
        if ( data ){
            this.id = data.id;
            this.email = data.email;
            this.gender = data.gender;
            this.comment = data.comment;
        }
    }
}