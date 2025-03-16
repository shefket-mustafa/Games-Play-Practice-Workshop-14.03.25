import request from "../components/utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    createComment(email, gameId, comment){
        return request.post(baseUrl, { email, gameId, comment });

    }
}