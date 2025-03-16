import request from "../components/utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    createComment(email, gameId, comment){
        return request.post(baseUrl, { email, gameId, comment });
    },
    async getAll(gameId){
        const comments = await request.get(baseUrl)
        //TODO filter when migrated to collections
        //Client filtering (we are doing this only because we are using a simpler part of the practice server )
        const gameComments = Object.values(comments).filter(comment => comment.gameId === gameId); 
        console.log(gameComments);

        return gameComments;
    }
};