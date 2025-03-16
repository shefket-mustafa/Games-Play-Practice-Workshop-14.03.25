import { useEffect, useState } from "react";
import gameService from "../../services/gameService";
import GameCatalogItem from "./games-catalog-item/GameCatalogItem";

export default function Games() {
    const[games, setGames] = useState([]);

    useEffect(()=>{
        gameService.getAll()
        .then(result => {
                setGames(result);
        });
    },[])
    console.log(games);

  return (
    <section id="catalog-page">
    <h1>All Games</h1>
    {/* <!-- Display div: with information about every game (if any) --> */}
   
        {games.map(game => <GameCatalogItem key={game.id} {...game}/>)}
   

    {/* <!-- Display paragraph: If there is no games  --> */}
    <h3 className="no-articles">No articles yet</h3>
</section>
    );
}