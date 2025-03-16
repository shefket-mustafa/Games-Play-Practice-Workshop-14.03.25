export default function ShowComments({comments}) {
    console.log('------'+comments);
  return (
    <div className="details-comments">
    <h2>Comments:</h2>
    <ul>
        {comments.length > 0
        ? comments.map(comment => (
        <li key={comment._id} className="comment">
            <p>{comment.email}: {comment.comment}</p>
        </li>))
         : <p className="no-comment">No comments.</p>}
    </ul>
    {/* <!-- Display paragraph: If there are no games in the database --> */}
    
</div>
    );
}