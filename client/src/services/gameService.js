import  request  from "../components/utils/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
     getOne(gameId){
        return request.get(`${baseUrl}/${gameId}`);
    },
    async getAll(){
        const result = await request.get(baseUrl);

        const games = Object.values(result);
        return games;
    },
     create(gameData){
        return request.post(baseUrl, gameData)
    },
    delete(gameId){
        return request.delete(`${baseUrl}/${gameId}`);
    },
    edit(gameId,gameData){
        return request.put(`${baseUrl}/${gameId}`, {...gameData, _id: gameId});
    }

}