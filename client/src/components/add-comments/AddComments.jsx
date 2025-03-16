import commentService from "../../services/commentService";

export default function AddComments({email, gameId}) {

    const commentAction = async (formData) =>{
        const comment = formData.get('comment')

        const createdComment = await commentService.createComment(email, gameId, comment);
        console.log(createdComment);

    }
  return (
   
    <article className="create-comment">
    <label>Add new comment:</label>
    <form action={commentAction} className="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input className="btn submit" type="submit" value="Add Comment"/>
    </form>
</article>
    );
}