import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import gameService from "../../services/gameService";
import ShowComments from "../showComments/ShowComments";
import AddComments from "../add-comments/AddComments";
import commentService from "../../services/commentService";

export default function Details({email}) {
    const navigate = useNavigate();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();

    useEffect(()=>{
        gameService.getOne(gameId)
        .then(result => {
            setGame(result)
        })

        commentService.getAll(gameId)
            .then(setComments)
        
    },[gameId]);

    const gameDeleteHandler = async (e) => {
        e.preventDefault();
        const isConfirmed = confirm(`Are you sure you want to delete ${game.title} game?`);

        if(!isConfirmed){
            return;
        };
        await gameService.delete(gameId);

        navigate('/games');

    }

    const commentCreateHandler = (newComment) => {
        setComments(state => [...state, newComment])
    }

  return (
    <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">

        <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
        </div>

        <p className="text">
            {game.summary}
        </p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <ShowComments comments={comments}/>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
            <a onClick={(e)=>gameDeleteHandler(e)} href="#" className="button">Delete</a>
        </div>
    </div>

   <AddComments email={email} gameId = {gameId} onCreate={commentCreateHandler}/>

</section>
    );
}